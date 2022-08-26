---
slug: "/ETM_ATTRIBUTES_v1.0.0"
sidebar_position: 1
---

# ETM_ATTRIBUTES_v1.0.0
### ETM Attributes Extension

| <!-- -->    | <!-- -->    |
|-------------|-------------|
| Authors   | Zack Pantely, Kavan Sikand |
| Contributors| | 
| Discussions To | https://github.com/Nifty-Island/etm-standard/discussions/6 |
| Type | ETM Extension |
| Extension Name | ETM_ATTRIBUTES_v1.0.0 |
| Created | 2022-06-06 |

## Table of contents
- [Summary](#summary)
- [Abstract](#abstract)
- [Motivation](#motivation)
- [Specification](#specification)
    - [Top-Level Metadata](#top-level-metadata)
    - [Extended Top-Level Data Types](#extended-top-level-data-types)
- [Metadata Examples](#metadata-examples)
    - [Supporting OpenSea's Standard](#supporting-openseas-standard)
- [Backwards Compatibility](#backwards-compatibility)
- [Security Considerations](#security-considerations)
- [Copyright](#copyright)

## Summary
This extension is a formalization of a de-facto standard in the Non-Fungible Token (NFT) community. It draws heavy inspiration from [OpenSea's Attributes Standard](https://docs.opensea.io/docs/metadata-standards#attributes), and allows it to be used in conjunction with other extensions to [ETM](ETM_v1.0.0).

## Abstract
This extension exists only to formalize, name, and freeze the attributes standard provided by OpenSea. In formalizing this standard, we seek to remove all ambiguity about the form and intended interpretation of items in the attributes array. In naming this standard, we seek to allow its form to be identified by a metadata consumer or possibly replaced with a future standard. In freezing this standard, we seek to let consumers be sure about how to interpret the attributes array for all time, even if OpenSea were to later update their standard.

## Motivation
In the future, it is likely that more functionality and flexibility will be desired when assigning attributes to an NFT. Adopting this standard now means that all metadata creators and consumers will have the ability to migrate seamlessly to a new standard at a later time while still supporting NFTs that were made following an older standard. If such adoption does not take place, the longer-term solution may be to add a new top-level key such as "attributes2" in order to make breaking changes to the standard -- a fate which should make us cringe in disgust and dismay.

## Specification
The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

#### Top-Level Metadata:
This specification adds the `attributes` key to the top level of [ETM](ETM_v1.0.0) metadata JSON.

```
{
  "metadataStandard": "ETM_v1.0.0",
  "extensions": [ "ETM_ATTRIBUTES_v1.0.0" ],
  "attributes": []
}
```
In the above metadata, the `attributes` array is left empty in order to show the minimum valid implementation of this extension. For a non-trivial example, refer to the [Metadata Examples](#metadata-examples) section.

#### Extended Top-Level Data Types:

The top-level keys of the metadata MUST include all required fields in the below table in addition to fields required by the metadata standard to which this extension is applied.

| Field Name | Data Type | Inclusion |
| -------- | -------- | -------- |
| attributes | Attribute[]     | REQUIRED   |

The `attributes` key provides an array of `Attribute` data types, defined below.

#### `Attribute` Data Type:
The `Attribute` data type is a JSON object which defines all attribute data. The fields for this data type are defined in the table below.

| Field Name | Data Type | Inclusion |
| -------- | -------- | -------- |
| display_type    | string     | OPTIONAL    |
| trait_type     | string     | RECOMMENDED     |
| value     | string \| number \| boolean | REQUIRED     |

The optional `display_type` key allows creators to define how an attribute should be displayed. This extension does not specify a set of valid entries for the `display_type` and instead leaves that definition to a subsequent extension.

The `trait_type` key allows creators to set the name of the trait this attribute represents.

The `value` key allows creators to set the value of an attribute. The value of this field can be any valid JSON value type and must be handled appropriately by metadata consumers.

## Metadata Examples

#### Supporting OpenSea's Standard
The following is an example of this extension being used as a wrapper for OpenSea's standard.
```
{
  "metadataStandard": "ETM_v1.0.0",
  "extensions": [ "ETM_ATTRIBUTES_v1.0.0" ],
  "attributes": [
    {
      "trait_type": "Base", 
      "value": "Starfish"
    }, 
    {
      "trait_type": "Eyes", 
      "value": "Big"
    }, 
    {
      "trait_type": "Mouth", 
      "value": "Surprised"
    }, 
    {
      "trait_type": "Level", 
      "value": 5
    }, 
    {
      "trait_type": "Stamina", 
      "value": 1.4
    }, 
    {
      "trait_type": "Personality", 
      "value": "Sad"
    }, 
    {
      "display_type": "boost_number", 
      "trait_type": "Aqua Power", 
      "value": 40
    }, 
    {
      "display_type": "boost_percentage", 
      "trait_type": "Stamina Increase", 
      "value": 10
    }, 
    {
      "display_type": "number", 
      "trait_type": "Generation", 
      "value": 2
    }
  ]
}
```

## Backwards Compatibility
This extension to the metadata standard is backwards compatible with existing metadata suggestions proposed in ERC-721 and ERC-1155, as well as [ETM](ETM_v1.0.0).

## Security Considerations
Because this standard is merely a metadata extension and does not interface with the underlying contract, there are no additional security considerations.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).