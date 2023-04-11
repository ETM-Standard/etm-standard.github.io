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
| Dependencies | ETM_MULTIASSET |
| Created | 2022-09-06 |

## Table of contents
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
With the expansion in use cases for Non-Fungible Tokens (NFTs), there has arisen a need to standardize the taxonomical categorization of assets to be ingested into a game.  Here, we define a standard by which a metadata consumer can understand the type of asset an NFT is intended to represent through a standardized hierarchical taxonomy.

## Abstract
This standard is an extension of [ETM](ETM_v1.0.0) and provides a decentralized approach to describe the taxonomy of a digital asset represented as an NFT. The goal is to allow a metadata consumer to understand what a particular asset is meant to represent so that there can be a clear context about how it is intended to be used.

This is achieved flexibly by providing a hierarchical taxonomy which allows metadata creators to inject definition at various levels of specificity. This is to say, an asset could be defined as a model, or more specifically a weapon, or more specifically a sword, for example. In addition, while this specification provides a list of supported types, it also allows the inclusion of taxonomy not listed here; while excluded taxonomy is not guaranteed recognition by metadata consumers, it may lead to de facto support or official support in subsequent versions of this standard.

This standard is specifically NOT intended to describe the behavior of an asset, but rather to identify how it should be taxonomically categorized. Behavior is left to be defined in a separate standard.

## Motivation
As more games incorporate NFTs in to their gameplay, the need for an interoperable taxonomy standard is clear. Currently, games may internally assign taxonomy and behavior to their native assets, but there exists no standard way of defining assets such that they could be used interoperably between platforms. By defining this taxonomy within token metadata, players are able to bring their assets between platforms in a way that retains their definition.

On the game side, the need for this utility surfaces most frequently in categorization of assets. For example: I want to place a flower in my garden - how can the game show me all of the flowers available to place? With taxonomical categorization, this is quite simple. Without it, this is impossible.

## Specification

The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

#### Extended `Asset` Data Type:
Inclusion of the ETM_MULTIASSET extension is REQUIRED to apply the ETM_TAXONOMY extension. Employing the ETM_TAXONOMY extension allows inclusion of a `taxonomy` key under each asset in the `assets` array.

The below table defines the field that is added to the `Asset` data type.

| Field Name | Data Type | Inclusion |
| -------- | -------- | -------- |
| taxonomy | string     | OPTIONAL   |

The taxonomy value is a string provided in a hierarchical format divided by `/` characters with no limitation set to the levels of categorization. Example values include `"model/weapon"`, `"model/weapon/sword"`, and `"model/weapon/sword/broadsword"`.

This `taxonomy` key is OPTIONAL for each asset, but SHOULD be included for at least one asset or there is no purpose in using this extension.

For example metadata usage, refer to the [Metadata Examples](#metadata-examples) section.

#### Hierarchical Taxonomy Definitions
This is the hierarchical list of taxonomy that is currently defined by this standard.

- model
  - character
    - avatar
    - pet
  - weapon
    - sword
    - axe
    - knuckle
    - gun
      - pistol
      - smg
      - rifle
      - rocket launcher
    - club
    - knife
    - spear
    - staff
    - bow
    - torch
  - ammo
    - grenade
    - bullet
    - rocket
    - arrow
  - vehicle
    - car
    - plane
    - helicopter
    - boat
    - jetski
    - skateboard
  - object ??
    - book
    - radio
    - frame
    - displayCase
    - tv
    - flower pot
    - sign
    - figurine
  - furniture
    - table
    - chair
    - couch
    - bed
    - lamp
      - table
      - standing
      - wall
      - ceiling
    - chest
    - fountain
    - statue
  - nature
    - plant
      - bush
      - tree
      - flower
      - fern
    - fungus
      - mushroom
    - rock
  - structure
    - wall
    - door
    - window
    - roof
    - floor
  - building
  - accessory
    - onesie
    - hair ?
    - facial hair ?
    - hat
    - glasses
    - helmet
    - shirt
    - coat
    - back accessory
    - pants
    - shorts
    - skirt
    - shoe
    - boot
    - sock
    - glove
    - earring
    - necklace
    - bracelet
- world
  - skybox
  - spawner ?
  - portal ?
- 2D
  - pfp
- audio
  - music
  - sfx
    - jump
    - footstep
      - grass
      - stone
      - wood
  - ambient
    - ocean
    - forest
    - cave

## Metadata Examples

#### Single Asset
The following is an example of this extension when used for ???????.

```
{
  "metadataStandard": "ETM_v1.0.0",
  "extensions": [ "ETM_MULTIASSET_v1.0.0", "ETM_TAXONOMY_v1.0.0" ],
  "assets": [
    {
      "media_type": "model",
      "taxonomy": "model/weapon/sword",
      "files": [
        {
          "url": "https://ipfs.io/bafybeigdyrzt5sfp7udm7hu76uh7y26nf3efuylqabf3oclgtqy55fbzdi",
          "file_type": "model/fbx"
        }
      ]
    },
    ...
  ]
}
```

#### Multiple Assets
The following is an example of this extension when used ???????

## Backwards Compatibility
This extension to the metadata standard is backwards compatible with existing metadata suggestions proposed in ERC-721 and ERC-1155, as well as [ETM](ETM_v1.0.0).

## Considerations
This standard requires games to support this taxonomy.  As a result, not all funcionaslity between games will be consistent, nor necessarily supported

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