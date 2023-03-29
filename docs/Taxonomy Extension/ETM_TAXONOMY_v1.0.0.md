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
- [ETM\_TAXONOMY\_v1.0.0](#etm_taxonomy_v100)
    - [ETM Taxonomy Extension](#etm-taxonomy-extension)
  - [Table of contents](#table-of-contents)
  - [Summary](#summary)
  - [Abstract](#abstract)
  - [Motivation](#motivation)
  - [Specification](#specification)
      - [Top-Level Metadata:](#top-level-metadata)
      - [Extended Top-Level Data Types:](#extended-top-level-data-types)
      - [Standard `AssetType` Definitions](#standard-assettype-definitions)
        - [Categories and Items](#categories-and-items)
        - [Clothing](#clothing)
        - [Weapons](#weapons)
        - [Avatar](#avatar)
        - [Audio](#audio)
        - [Furniture](#furniture)
        - [Nature](#nature)
        - [Structure (vs Building)](#structure-vs-building)
  - [Metadata Examples](#metadata-examples)
      - [Single Asset](#single-asset)
      - [Multiple Assets](#multiple-assets)
  - [Backwards Compatibility](#backwards-compatibility)
  - [Considerations](#considerations)
  - [Copyright](#copyright)

## Summary
With the expansion in use cases for Non-Fungible Tokens (NFTs), there has arisen a need to standardize the taxonomical categorization of assets to be ingested into a game.  Here, we define a standard by which an NFT can assume use-cases in a game through a standard taxonomy.

## Abstract
This standard is an extension of [ETM](ETM_v1.0.0) and provides a decentralized approach to describe the taxonomy of a digital asset represented as an NFT.

The goal is to provide a streamlined approach to the following:
 - Assigning a taxonomy category to an NFT such that custom or centralized tooling is not needed to understand what an asset is and how it can be applied in game
 - Bridging NFTs across multiple games with use and function
 - Providing a clear definition of the general purpose of an asset in a game world

## Motivation
As more games incorporate NFTs in to their gameplay, the need for an interoperable taxonomy standard is clear. Currently, games assign taxonomy and use to their native assets, with little ability for the user to bring in custom models with identical behaviour. By defining general usability within token metadata, players are able to bring their NFTs and its metadata between game worlds while still retaining the information that defines what the asset is.

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
Inclusion of the ETM_MULTIASSET extension is REQUIRED to use the ETM_TAXONOMY extension. The ETM_TAXONOMY extension allows inclusion of an OPTIONAL `asset_type` key under each asset in the `assets` array.
```
{
  "metadataStandard": "ETM_v1.0.0",
  "extensions": [ "ETM_MULTIASSET_v1.0.0", "ETM_TAXONOMY_v1.0.0" ],
  "assets": [
    {
      "media_type": "",
      "asset_type": "",
      "files": [
        {
          "url": "",
          "file_type": ""
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
| asset_type| string     | OPTIONAL   |

#### Standard `AssetType` Definitions
This standard defines a set of standardized `AssetType` values in order to provide a known interpretation for common types of assets.  `AssetTypes` are in the format of `category/item`.  These definitions and their requirements are defined below.  The `AssetType` is RECOMMENDED to be a value from this list, but users are free to impose functionality on both sides of this standard as they see fit. 

##### Categories and Items
This taxonomy standard uses a high level categorical identifier, followed by a variable number of sub-type identifiers.  High level categories define general taxonomy, while following optional item descriptors provide more granular information.

##### Clothing
| Name    | Description | Expected in game use    |
|-------------|-------------|-------------|
| clothing/shirt| Shirt | Placeable on upper torso/arms of avatar |
| clothing/jacket| Goes over shirt, can be open in front | Placeable on upper torso/arms of avatar |
| clothing/pants| Long pants, shorts, skirts | Placeable on the lower torso/legs of avatar |
| clothing/shoes| shoes, socks, etc | Placeable on the feet of a biped avatar |
| clothing/gloves| Any hand item | Placeable on the hands of a biped, 5 finger avatar |
| jewelry/earring| Earrings | Placeable on the ears of an avatar |
| jewelry/necklace| Necklace | Placeable around the neck of an avatar |
| jewelry/bracelet| Bracelet | Placeable around the wrists of an avatar |

##### Weapons
| Name    | Description | Expected in game use    |
|-------------|-------------|-------------|
| weapon/gun/pistol| A single handed weapon | Held in the hand of an avatar, fireable |
| weapon/gun/rifle| A two handed weapon | Held in the hands of an avatar, fireable |
| weapon/sword| | |
| weapon/grenade| | |
| weapon/generic| An item that does damage | The item can be placed in the equipable slot of an avatar |

##### Avatar
| Name    | Description | Expected in game use    |
|-------------|-------------|-------------|
| avatar/humanoid | A biped avatar with a humanoid rig | Player controls character |

##### Audio
| Name    | Description | Expected in game use    |
|-------------|-------------|-------------|
| audio/sfx/movement/jump|  | |
| audio/sfx/movement/footstep|  | |
| audio/sfx/movement/footstep/grass|  | |
| audio/ambient/environment/waves|  | |
| audio/ambient/environment/birds|  | |
| audio/music| | |
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

##### Structure
| Name    | Description | Expected in game use    |
|-------------|-------------|-------------|
| structure/wall|  | |
| Structure/door| | |
| Structure/window| | |
| Structure/roof|  | |
| Structure/floor| | |
| Structure/generic| | |

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
      ],
      "definition": {
        "standard": ".metaversefile",
        "url": "https://ipfs.io/bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi"
      }
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
      ],
      "definition": {
        "standard": "ETM_ASSETDEF_v1.0.0",
        "taxonomy": "weapon/gun/pistol/desert_eagle",
        "behaviors": [
          {
            "type": "shootable",
            "properties": {
              "damage": 10,
              "range": 100
            }
          },
          {
            "type": "holdable",
            "properties": {
              "grip1": [0, 0, 0],
              "grip2": [0, 1, 0]
            }
          }
        ]
      }
    }
  ]
}
```