---
slug: "/ETM_TAXONOMY_v1.0.0"
sidebar_position: 1
---

# ETM_TAXONOMY_v1.0.0
### ETM Taxonomy Extension

| <!-- -->    | <!-- -->    |
|-------------|-------------|
| Authors   | Zack Pantely, Spencer Obsitnik |
| Contributors| | 
| Discussions To | 	https://github.com/ETM-Standard/etm-standard.github.io/discussions/6 |
| Type | ETM Extension |
| Extension Name | ETM_TAXONOMY_v1.0.0 |
| Created | 2022-09-06 |

## Table of contents
- [Summary](#summary)
- [Abstract](#abstract)
- [Motivation](#motivation)
- [Specification](#specification)
    - [Top-Level Metadata](#top-level-metadata)
    - [Extended Top-Level Data Types](#extended-top-level-data-types)
    - [Standard `AssetType` Definitions](#standard-assettype-definitions)
- [Metadata Examples](#metadata-examples)
    - [Single Asset](#single-asset)
    - [Multiple Assets](#multiple-assets)
- [Backwards Compatibility](#backwards-compatibility)
- [Considerations](#considerations)
- [Security Considerations](#security-considerations)
- [Copyright](#copyright)

## Summary
With the expansion in use cases for Non-Fungible Tokens (NFTs), there has arisen a need to standardize the taxonomical categories of assets to be ingested in to a game.  Here, we define a standard by which an NFT can assume use-cases in a game through a standard taxonomy.

## Abstract
This standard is an extension of [ETM](ETM_v1.0.0) and provides a decentralized approach to describe the taxonomy of a digital asset represented as an NFT.

The goal is to provide a streamlined approach to the following:
 - Assigning a taxonomy category to an NFT such that custom or centralized tooling is not required to use the item in game
 - Bridging NFTs across multiple games with use and function
 - Providing a clear definition of the general purpose of this item in a game world

## Motivation
As more games incorporate NFTs in to their gameplay, the need for an interoperable taxonomy standard is clear.  Currently, games assign taxonomy and use to their native assets, with little ability for the user to bring in custom models with identical behaviour.  By defining general usability within token metadata, players are able to bring their NFTs between game worlds while still retaining the expected function of the item.

Here's an example of the current method by which a user might bring an NFT representing a game asset into a game:

**Existing Ingestion Path Example**
1. User purchases an NFT
2. User enters game and sees static NFT
3. User adds function to the static NFT
4. Game saves state of NFT to centralized servers

This procedure necessitates a lot of manual interaction by the user, because there is no standard way by which an automated system can assign function to this NFT.

For NFTs which adhere to our proposed metadata standard, the path to ingesting an asset into a game world looks like:

**Proposed Ingestion Path Example**
1. User purchases an NFT
2. Game verifies that the user owns the NFT
3. Game parses NFT's metadata, finds taxonomy, and assigns scripts based on expected behaviour

The clear benefit of this approach is that with no custom project-level support from the game developer and no manual action from the NFT owner, the user is able to *use* their assets in-game.

## Specification

The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

#### Top-Level Metadata:
This specification, when used for a single asset, adds the `asset_type` key to the top level of [ETM](ETM_v1.0.0) metadata JSON.

```
{
  "metadataStandard": "ETM_v1.0.0",
  "extensions": [ "ETM_TAXONOMY_v1.0.0" ],
  "asset_type": ""
}
```

This specification MAY be used with the ETM_MULTIASSET extension, adding the `asset_type` key to the individual file.

```
{
  "metadataStandard": "ETM_v1.0.0",
  "extensions": [ "ETM_MULTIASSET_v1.0.0", "ETM_TAXONOMY_v1.0.0" ],
  "assets": [
    {
      "files": [
        {
          "url": "",
          "file_type": "",
          "asset_type": ""
        }
      ]
    },
    ...
  ]
}
```

In the above metadata, the `asset_type` key is left empty in order to show the minimum valid implementation of this extension. For a non-trivial example, refer to the [Metadata Examples](#metadata-examples) section.

#### Extended Top-Level Data Types:

The below table defines the fields that are added to the top-level metadata JSON.

| Field Name | Data Type | Inclusion |
| -------- | -------- | -------- |
| asset_type| string     | REQUIRED   |

#### Standard `AssetType` Definitions
This standard defines a set of standardized `AssetType` values in order to provide a known interpretation for common types of assets. The `AssetType` MUST be a value from this list. These definitions and their requirements are defined below.

##### Wearables
| Name    | Description | Expected in game use    |
|-------------|-------------|-------------|
| wearable/top| shirt, jacket, robe, etc | Placeable on upper torso/arms of avatar |
| wearable/bottom| pants, skirt, etc | Placeable on lower torso/legs of avatar |
| wearable/head| hat, helmet, etc | Placeable on the head of an avatar |
| wearable/feet| shoes, socks, etc | Placeable on the feet of a biped avatar |
| wearable/generic| | |

##### Holdables
| Name    | Description | Expected in game use    |
|-------------|-------------|-------------|
| holdable/gun|  | |
| holdable/sword| | |
| holdable/consumable| | |
| holdable/generic| An item that is holdable | The item can be placed in the equipable slot of an avatar |

##### Audio
| Name    | Description | Expected in game use    |
|-------------|-------------|-------------|
| audio/sfx|  | |
| audio/ambient| | |
| audio/generic| | |

##### Furniture
| Name    | Description | Expected in game use    |
|-------------|-------------|-------------|
| furniture/table|  | |
| furniture/chair| | |
| furniture/bed| | |
| furniture/couch|  | |
| furniture/light| | |
| furniture/curtain| | |
| furniture/fireplace|  | |
| furniture/chest| | |
| furniture/fountain| | |
| furniture/table|  | |
| furniture/statue| | |
| furniture/sign| | |
| furniture/generic|  | |

##### Nature
| Name    | Description | Expected in game use    |
|-------------|-------------|-------------|
| nature/bush|  | |
| nature/tree| | |
| nature/flower| | |
| nature/mushroom|  | |
| nature/rock| | |
| nature/generic| | |

##### Building
| Name    | Description | Expected in game use    |
|-------------|-------------|-------------|
| building/wall|  | |
| building/door| | |
| building/window| | |
| building/roof|  | |
| building/floor| | |
| building/generic| | |

## Metadata Examples

#### Single Asset
The following is an example of this extension when used for a single NFT asset.

#### Multiple Assets
The following is an example of this extension when used in conjunction with the [ETM MULTIASSET Standard](ETM_MULTIASSET_v1.0.0).

## Backwards Compatibility
This extension to the metadata standard is backwards compatible with existing metadata suggestions proposed in ERC-721 and ERC-1155, as well as [ETM](ETM_v1.0.0).

## Considerations
This standard requires games to support this taxonomy.  As a result, not all funcionaslity between games will be consistent, nor necessarily supported

Future Standard Considerations:
- Pets (B33)
- Vehicles
- NPCs
- Stacking behaviours?

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).