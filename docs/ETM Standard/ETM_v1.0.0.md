---
slug: "/ETM_v1.0.0"
sidebar_position: 1
---

# ETM_v1.0.0
### Extensible Token Metadata (ETM) Standard

| <!-- -->    | <!-- -->    |
|-------------|-------------|
| Authors   | Zack Pantely, Kavan Sikand |
| Contributors| Florian Uhde |
| Discussions To | https://github.com/Nifty-Island/etm-standard/discussions/4 |
| Type | Metadata Standard |
| Standard Name | ETM_v1.0.0 |
| Created | 2022-06-06 |


## Table of contents
- [Summary](#summary)
- [Abstract](#abstract)
- [Motivation](#motivation)
- [Specification](#specification)
    - [JSON Schema](#json-schema)
    - [Top Level Data Types](#top-level-data-types)
    - [`ExtensionName` Format](#extensionname-format)
- [Metadata Examples](#metadata-examples)
    - [ERC-721 Compatibility](#erc-721-compatibility)
    - [Adding an Extension](#adding-an-extension)
- [Backwards Compatibility](#backwards-compatibility)
- [Copyright](#copyright)

## Summary
Non-Fungible Tokens (NFTs) have grown in popularity and complexity, but there currently exists no standard set of rules for understanding their associated metadata. Here, we propose a standard which allows NFT authors to define their metadata in a way which tells consumers what to expect, and provide a framework for extending the simple metadata specified in the ERC-721 and ERC-1155 standards with well-defined specifications. This enables content creators to use and contribute to a set of "extensions" which specify the structure of a token's metadata.

## Abstract
This standard seeks to enforce well-defined, yet flexible, constraints upon NFT metadata in order to allow reliable and deterministic interpretation.

This is achieved by solidifying and expanding upon the ERC-721 metadata guidelines to do the following:
 - Decouple token standards (such as ERC-721) from the standard of their associated metadata (such as this standard)
 - Set requirements for top-level metadata JSON keys
 - Clearly state which standard the metadata adheres to
 - Define a procedure for extending the base metadata functionality

## Motivation
As the popularity of NFTs has grown, they have outgrown the simple and loose metadata suggestions specified in ERC-721 and ERC-1155. Authors have added arbitrary sets of extra fields into the metadata associated with their tokens, but there has been no standardization of this process.

Some de-facto standards have arisen, but they are not formalized in any way, and authors often diverge from these standards in an ad-hoc manner, making it difficult for consumers to understand the assets. An example of such a de-facto standard is the concept of adding `attributes` to an NFT's metadata, which often takes the form of an array of objects which look like `[{ trait_type: string, value: string } ]`. However, not all NFT metadata has these fields, and there also exist assets which have an `attributes` field with a different form factor. For this example, we propose formalizing this standard as an [Attributes Extension](ETM_ATTRIBUTES_v1.0.0) to this Extensible Metadata Standard to ensure consumers know exactly when to expect this attribute field and what form it will take.

As NFTs grow in popularity, additional use cases have arisen for which there are *no* widely-used standards, such as NFTs which represent 3D models, or groups of assets all governed by a single token (such as a skin pack). The extensibility of this standard will allow adaptation of metadata standards in step with the needs of the NFT community.

## Specification

The key words “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, and “OPTIONAL” in this document are to be interpreted as described in [RFC 2119](https://www.ietf.org/rfc/rfc2119.txt).

#### JSON Schema:
This specification adds the `metadata_standard` and `extensions` keys to the top level of the metadata JSON. It is important to note that adding other top-level fields are still permitted (see [ERC-721 Compatibility](#erc-721-compatibility)).

```
{
  "metadata_standard": "ETM_v1.0.0",
  "extensions": []
}
```
In the above metadata, the `extensions` array is left empty in order to show the minimum valid implementation of this extension. For a non-trivial example, refer to the [Metadata Examples](#metadata-examples) section.

#### Top-Level Data Types:

| Field Name | Data Type | Inclusion |
| -------- | -------- | -------- |
| metadata_standard    | string    | REQUIRED     |
| extensions | string[] (ExtensionName) | REQUIRED   |

The `metadata_standard` key allows a consumer to understand which metadata standard this JSON adheres to. The value is the technical name of the metadata standard, but no naming guidelines are specified here. If using version 1.0.0 of this standard, the value of this field would be "ETM_v1.0.0".

The `extensions` array specifies which metadata extensions this metadata adheres to. Extensions can specify additional keys to the top-level metadata JSON or add constraints and definitions to another extension. Metadata extensions are intentionally distinct from [EIPs](https://eips.ethereum.org/) because they are relevant only to NFT metadata and should be constructed and interpreted in a chain-agnostic manner (i.e. they are not bound to the Ethereum network).

#### `ExtensionName` Format:

The format of an `ExtensionName` is defined as:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ETM_[*extension name*]_v[*version*]

With each piece defined as:
- **Extension name:** a unique name (which MUST NOT contain spaces or underscores)
- **Version:** the version of the standard (which MUST follow [Semantic Versioning 2.0.0](https://semver.org/))

For example, extending with the initial release of the [Multi-Asset Extension](ETM_MULTIASSET_v1.0.0#top-level-metadata) would have "ETM_MULTIASSET_v1.0.0" as a value in the `extensions` array.

In alignment with semantic versioning, an increment to the MAJOR version indicates breaking changes. This means that metadata interpreters must check at least the MAJOR version to determine compatibility with an extension standard. The MINOR version can be optionally checked to detect the presence of additional functionality.

## Metadata Examples

#### ERC-721 Compatibility
The following is an example of this standard employed alongside some of the top-level JSON fields suggested in ERC-721.
```
{
  "name": "My Cool NFT",
  "description": "A very cool NFT.",
  "image": "https://coolnfts.com/preview.mp4",
  "metadata_standard": "ETM_v1.0.0",
  "extensions": []
}
```

#### Adding an Extension
In this example, the metadata is extended by [ETM_MULTIASSET_v1.0.0](ETM_MULTIASSET_v1.0.0#top-level-metadata) which adds the `assets` key and defines its usage.
```
{
  "metadata_standard": "ETM_v1.0.0",
  "extensions": [ "ETM_MULTIASSET_v1.0.0" ],
  "assets": []
}
```

## Backwards Compatibility
This change to the metadata standard is backwards compatible with existing metadata suggestions proposed in ERC-721 and ERC-1155.

## Copyright
Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).