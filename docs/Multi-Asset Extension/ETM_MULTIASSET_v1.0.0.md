---
slug: "/ETM_MULTIASSET_v1.0.0"
sidebar_position: 1
---

# ETM_MULTIASSET_v1.0.0
### ETM Multi-Asset Extension

| <!-- -->    | <!-- -->    |
|-------------|-------------|
| Authors   | Zack Pantely, Kavan Sikand |
| Contributors|Justin Bloomer, David Ceballos, Thomas Lisankie, Madrone, Spencer Obstinik, Eric Struhl, Tasheme Thomas, Florian Uhde, Andy Watson | 
| Discussions To | https://github.com/Nifty-Island/etm-standard/discussions/5 |
| Type | ETM Extension |
| Extension Name | ETM_MULTIASSET_v1.0.0 |
| Created | 2022-06-06 |

## Table of contents
- [Summary](#summary)
- [Abstract](#abstract)
- [Motivation](#motivation)
- [Specification](#specification)
    - [Top-Level Metadata](#top-level-metadata)
    - [Extended Top-Level Data Types](#extended-top-level-data-types)
    - [`Asset` Data Type](#asset-data-type)
    - [`File` Data Type](#file-data-type)
    - [Assets and Files](#assets-and-files)
    - [Standard `MediaType` Definitions](#standard-mediatype-definitions)
- [Metadata Examples](#metadata-examples)
    - [Multiple Assets](#multiple-assets)
    - [Multiple Files](#multiple-files)
- [Backwards Compatibility](#backwards-compatibility)
- [Security Considerations](#security-considerations)
- [Copyright](#copyright)

## Summary
With the expansion in use cases for Non-Fungible Tokens (NFTs), there has arisen a need to standardize the organization of assets represented by an NFT. Here, we define a standard by which an NFT can represent multiple assets of varying media types.

## Abstract
This standard is an extension of [ETM](ETM_v1.0.0) and provides a decentralized approach to representing multiple digital assets with a single NFT in a scalable and maintainable way.

The goal is to provide a streamlined approach to the following:
 - Associating multiple assets with an NFT such that custom or centralized tooling is not required
 - Supporting NFTs with heterogeneous media types (e.g. 3D models, animations, etc.)
 - Providing a clear definition of the file type for files associated with an NFT

## Motivation
As the use cases for NFTs have expanded, the need for an NFT to represent multiple files has grown and been addressed in several ways. However, the inconsistency in these varied approaches has rendered assets beyond images and videos unable to be ingested by NFT consumers in a streamlined way. This has forced consumers to create custom centralized tooling to access specific assets - a path that is not scalable or maintainable in the long-term.

Here's an example of the current method by which a user might bring an NFT representing multiple assets, including a 3D model, into a game:

**Existing Ingestion Path Example**
1. User purchases an NFT
2. User navigates to NFT creator's website
3. User downloads the associated assets for the NFT
4. User interacts with game-specific tooling to upload these assets to the game

This procedure necessitates a lot of manual interaction by the user, because there is no standard way by which an automated system can access all of the assets associated with this NFT. This approach also requires trust that the user actually owns the NFT that they uploaded.

For NFTs which adhere to our proposed metadata standard, the path to ingesting assets into a game world looks like:

**Proposed Ingestion Path Example**
1. User purchases an NFT
2. Game verifies that the user owns the NFT
3. Game parses NFT's metadata to ingest appropriate assets into the game world

The clear benefit of this approach is that with no custom project-level support from the game developer and no manual action from the NFT owner, the user is able to use their assets in-game.

## Specification

The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

#### Top-Level Metadata:
This specification adds the `assets` key to the top level of [ETM](ETM_v1.0.0) metadata JSON.

```
{
  "metadataStandard": "ETM_v1.0.0",
  "extensions": [ "ETM_MULTIASSET_v1.0.0" ],
  "assets": []
}
```
In the above metadata, the `assets` array is left empty in order to show the minimum valid implementation of this extension. For a non-trivial example, refer to the [Metadata Examples](#metadata-examples) section.

#### Extended Top-Level Data Types:

The below table defines the fields that are added to the top-level metadata JSON.

| Field Name | Data Type | Inclusion |
| -------- | -------- | -------- |
| assets| Asset[]     | REQUIRED   |

The `assets` key provides an array of `Asset` data types, defined below.

#### `Asset` Data Type:
The `Asset` data type is a JSON object which defines all media representing a specific asset. The fields for this data type are defined in the table below.

| Field Name | Data Type | Inclusion |
| -------- | -------- | -------- |
| name    | string     | OPTIONAL    |
| description     | string     | OPTIONAL     |
| media_type     | string (MediaType enum)| REQUIRED     |
| asset_type     | string | OPTIONAL     |
| files | File[]     | REQUIRED     |

The `name` and `description` fields MAY be omitted (likely if there is only one `Asset` in the array), in which case the metadata interpreter might choose to fall back to the metadata's top-level `name` and `description` fields.

The `media_type` key provides a `MediaType` enum which is used to convey how the asset should be interpreted. Example values include "image", "video", or "model". Valid `MediaType` values are detailed in the [Standard `MediaType` Definitions](#standard-mediatype-definitions) section.

The `asset_type` key allows creators to more-specifically define the usage of the asset. Example values include "preview", "avatar", "pistol", or "shirt". This extension does not specify a set of valid entries for the `asset_type` and instead leaves that definition to a subsequent extension. If omitted, the asset can only be interpreted as a generic asset of the defined `MediaType`.

The `file` key provides an array of `File` data types, defined below.

#### `File` Data Type:
The `File` data type is a JSON object which represents a single file. The fields for this data type are defined in the table below.

| Field Name | Data Type | Inclusion |
| -------- | -------- | -------- |
| name    | string     | OPTIONAL    |
| description     | string     | OPTIONAL     |
| url     | string (URL)     | REQUIRED     |
| file_type     | string (MIME type)    | REQUIRED     |

The `name` and `description` fields MAY be omitted (likely if there is only one `File` in the array), in which case the metadata interpreter might choose to fall back to the `name` and `description` fields of the `Asset` (or, if that is omitted, the metadata's top-level `name` and `description` fields).

The `url` key provides a URL to the file to be downloaded. This URL is NOT REQUIRED to contain a file extension since that is provided by the `file_type` value.

The `file_type` key provides media type and a file extension in a [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) format. This is helpful during interpretation because some URLs, such as many InterPlanetary File System (IPFS) URLs, do not contain a file extension. For convenience in interpreting this standard, we note here that the nomenclature of MIME types is [*type*]/[*subtype*] where the *type* is a media type and the *subtype* is a file extension.

#### Assets and Files:

It should be understood that an `Asset` represents some *thing* and a `File` gives a representation of that *thing* (of which there may be one or more). 

Each `Asset` REQUIRES that at least one `File` in the `files` array is of a `file_type` with a MIME *type* that matches the asset's `MediaType` (e.g. a "model" `MediaType` requires at least one file with a `file_type` of "model/[*any subtype*]").

Multiple files with the same MIME *type* as the `Asset`'s `MediaType` MAY be included if they have different MIME *subtypes* and represent the same asset (in the example of a model, a "model/fbx" and a "model/obj" could both be included in the same `files` array if they represent the same asset with different file types, but two "model/fbx" files are not allowed in the same `files` array because this would cause ambiguity; in this case, a different `Asset` should be used to host each `File`). This restriction allows the metadata interpreter to assume that any `File` with the same MIME *type* as the `Asset`'s `MediaType` can equally be used to represent the asset and offers the choice of which file to use.

For files with MIME *types* that are not the same as the `Asset`'s `MediaType`, there are no restrictions on the number that can be included. These can be considered previews or supporting materials of the asset that refers to them. In the example of a model, such supporting materials may be animations that are relevant to that model asset.

This standard makes no restrictions to the MIME *subtypes* that can be used. The compatibility and handling of file types is dependent on the services that ingest NFT assets.

#### Standard `MediaType` Definitions
This standard defines a set of standardized `MediaType` values in order to provide a known interpretation for common types of assets. The `MediaType` MUST be a value from this list. These definitions and their requirements are defined below.

- **model:** The "model" `MediaType` describes a single model, any previews of that model, and any supporting files (such as animations). This `MediaType` REQUIRES at least one file in the `files` array with a `file_type` that has a a model MIME *type* (e.g. model/fbx).

- **image:** The "image" `MediaType` describes an image asset. This `MediaType` REQUIRES at least one file in the `files` array with a `file_type` that has an image MIME *type* (e.g. image/png). In some cases, an image will be provided by the top-level `image` key, so the use-case for this `MediaType` may be to provide a higher-resolution version of the asset provided by the top-level `image` key.

- **video:** The "video" `MediaType` describes a video asset. This `MediaType` REQUIRES at least one file in the `files` array with a `file_type` that has a video MIME *type* (e.g. video/mp4). In some cases, a video will be provided by the top-level `image` key, so the use-case for this `MediaType` may be to provide a higher-resolution version of the asset provided by the top-level `image` key.

- **animation:** The "animation" `MediaType` describes a single animation and any previews of that animation. This `MediaType` REQUIRES at least one file in the `files` array with a `file_type` that has an animation MIME *type* (e.g. animation/fbx).

- **audio:** The "audio" `MediaType` describes a single audio track and any previews of that track. This `MediaType` REQUIRES at least one file in the `files` array with a `file_type` that has an audio MIME *type* (e.g. audio/wav).

- **text:** The "text" `MediaType` describes a single body of text and any previews of that text. This `MediaType` REQUIRES at least one file in the `files` array with a `file_type` that has a text MIME *type* (e.g. text/txt).

- **font:** The "font" `MediaType` describes a single font and any previews of that font. This `MediaType` REQUIRES at least one file in the `files` array with a `file_type` that has a font MIME *type* (e.g. font/ttf).

- **application:** The "application" `MediaType` describes a single application and any previews of that application. This `MediaType` REQUIRES at least one file in the `files` array with a `file_type` that has an application MIME *type* (e.g. application/exe).

## Metadata Examples

#### Multiple Assets
The following is an example of this extension including data for an NFT that consists of two assets: a 3D model of glasses and a 3D model of a hat. Each asset includes a single 3D model file.
```
{
  "name": "Clever Disguise",
  "description": "Glasses and a hat.",
  "image": "https://coolnfts.com/clever-disguse-preview.png",
  "metadataStandard": "ETM_v1.0.0",
  "extensions": [ "ETM_MULTIASSET_v1.0.0" ],
  "assets": [
    {
      "name": "Glasses",
      "description": "An unassuming pair of glasses.",
      "media_type": "model",
      "files": [
        {
          "url": "https://ipfs.io/bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi",
          "file_type": "model/fbx"
        }
      ]
    },
    {
      "name": "Hat",
      "description": "A suspicious-looking hat.",
      "media_type": "model",
      "files": [
        {
          "url": "https://ipfs.io/idzbf55yqtglco3fbaqlyufe3fn62y7hu67uh7mdu7pfs5tzrydgiebyfab",
          "file_type": "model/fbx"
        }
      ]
    }
  ]
}
```

#### Multiple Files
The following is an example of this extension including data for an NFT that consists of one asset with three files: an image, a video, and a 3D model of a shirt. Here, the top-level `image` field is omitted.
```
{
  "name": "Snazzy Shirt",
  "description": "A shirt to wear to the jazz club.",
  "metadataStandard": "ETM_v1.0.0",
  "extensions": [ "ETM_MULTIASSET_v1.0.0" ],
  "assets": [
    {
      "media_type": "model",
      "files": [
        {
          "name": "Shirt Image",
          "description": "A high-res render of a snazzy shirt.",
          "url": "https://ipfs.io/idzbf55yqtglco3fbaqlyufe3fn62y7hu67uh7mdu7pfs5tzrydgiebyfab",
          "file_type": "image/png"
        },
        {
          "name": "Shirt Video",
          "description": "A rendered video of a snazzy shirt.",
          "url": "https://ipfs.io/beyzbafgdiryt5sfp7udm7hu76uh7y26nf3eblfyaquf3otqlgcy55fbdzi",
          "file_type": "video/mp4"
        },
        {
          "name": "Shirt Model",
          "description": "A rigged model of a snazzy shirt.",
          "url": "https://ipfs.io/bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi",
          "file_type": "model/fbx"
        }
      ]
    }
  ]
}
```
This also serves as an example of where the `media_type` field may be necessary to interpret the asset. Because the asset consists of an image, a video, and a model, some assumptions about the intention of the asset would otherwise have to be made. Since the `media_type` is defined as a `model`, the included image and video can be considered previews or ignored at the discretion of the metadata interpreter.

#### Complete Example: Multiple Files Per Asset
The following is an example of the metadata for an NFT representing an entire outfit. Each asset in the outfit is a 3D model, but also includes a supplementary image file. In addition, the top-level `image` field is used here to provide a preview of the entire outfit.

```
{
  "name": "Snazzy Outfit",
  "description": "A whole outfit to wear to the jazz club!",
  "image": "https://coolnfts.com/entire-outfit-preview.png",
  "metadataStandard": "ETM_v1.0.0",
  "extensions": [ "ETM_MULTIASSET_v1.0.0" ],
  "assets": [
    {
      "media_type": "model",
      "files": [
        {
          "name": "Shirt Image",
          "description": "A high-res render of a snazzy shirt.",
          "url": "https://ipfs.io/idzbf55yqtglco3fbaqlyufe3fn62y7hu67uh7mdu7pfs5tzrydgiebyfab",
          "file_type": "image/png"
        },
        {
          "name": "Shirt Model",
          "description": "A rigged model of a snazzy shirt.",
          "url": "https://ipfs.io/bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi",
          "file_type": "model/fbx"
        }
      ]
    },
    {
      "media_type": "model",
      "files": [
        {
          "name": "Pants Image",
          "description": "A high-res render of sweet pants.",
          "url": "https://ipfs.io/idzbf55yqtglco3fbaqlyufe3fn62y7hu67uh7mdu7pfs5tzrydgiebyfab",
          "file_type": "image/png"
        },
        {
          "name": "Pants Model",
          "description": "A rigged model of sweet pants.",
          "url": "https://ipfs.io/bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi",
          "file_type": "model/fbx"
        }
      ]
    }
  ]
}
```

## Backwards Compatibility
This extension to the metadata standard is backwards compatible with existing metadata suggestions proposed in ERC-721 and ERC-1155, as well as [ETM](ETM_v1.0.0).

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).