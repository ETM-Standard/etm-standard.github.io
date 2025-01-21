"use strict";(self.webpackChunketm_standard_github_io=self.webpackChunketm_standard_github_io||[]).push([[664],{2932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var i=n(5893),a=n(1151);const s={slug:"/ETM_ATTRIBUTES_v1.0.0",sidebar_position:1},r="ETM_ATTRIBUTES_v1.0.0",d={id:"Attributes Extension/ETM_ATTRIBUTES_v1.0.0",title:"ETM_ATTRIBUTES_v1.0.0",description:"ETM Attributes Extension",source:"@site/docs/Attributes Extension/ETM_ATTRIBUTES_v1.0.0.md",sourceDirName:"Attributes Extension",slug:"/ETM_ATTRIBUTES_v1.0.0",permalink:"/ETM_ATTRIBUTES_v1.0.0",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/ETM_ATTRIBUTES_v1.0.0",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"ETM_MULTIASSET_v1.0.0",permalink:"/ETM_MULTIASSET_v1.0.0"}},l={},o=[{value:"ETM Attributes Extension",id:"etm-attributes-extension",level:3},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Summary",id:"summary",level:2},{value:"Abstract",id:"abstract",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Specification",id:"specification",level:2},{value:"Top-Level Metadata:",id:"top-level-metadata",level:4},{value:"Extended Top-Level Data Types:",id:"extended-top-level-data-types",level:4},{value:"<code>Attribute</code> Data Type:",id:"attribute-data-type",level:4},{value:"Metadata Examples",id:"metadata-examples",level:2},{value:"Supporting OpenSea&#39;s Standard",id:"supporting-openseas-standard",level:4},{value:"Backwards Compatibility",id:"backwards-compatibility",level:2},{value:"Security Considerations",id:"security-considerations",level:2},{value:"Copyright",id:"copyright",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"etm_attributes_v100",children:"ETM_ATTRIBUTES_v1.0.0"}),"\n",(0,i.jsx)(t.h3,{id:"etm-attributes-extension",children:"ETM Attributes Extension"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Authors"}),(0,i.jsx)(t.td,{children:"Zack Pantely, Kavan Sikand"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Contributors"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Discussions To"}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://github.com/ETM-Standard/etm-standard.github.io/discussions/4",children:"https://github.com/ETM-Standard/etm-standard.github.io/discussions/4"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsx)(t.td,{children:"ETM Extension"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Extension Name"}),(0,i.jsx)(t.td,{children:"ETM_ATTRIBUTES_v1.0.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Created"}),(0,i.jsx)(t.td,{children:"2022-06-06"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#summary",children:"Summary"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#abstract",children:"Abstract"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#motivation",children:"Motivation"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#specification",children:"Specification"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#top-level-metadata",children:"Top-Level Metadata"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#extended-top-level-data-types",children:"Extended Top-Level Data Types"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#metadata-examples",children:"Metadata Examples"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#supporting-openseas-standard",children:"Supporting OpenSea's Standard"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#backwards-compatibility",children:"Backwards Compatibility"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#security-considerations",children:"Security Considerations"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#copyright",children:"Copyright"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsxs)(t.p,{children:["This extension is a formalization of a de-facto standard in the Non-Fungible Token (NFT) community. It draws heavy inspiration from ",(0,i.jsx)(t.a,{href:"https://docs.opensea.io/docs/metadata-standards#attributes",children:"OpenSea's Attributes Standard"}),", and allows it to be used in conjunction with other extensions to ",(0,i.jsx)(t.a,{href:"ETM_v1.0.0",children:"ETM"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"abstract",children:"Abstract"}),"\n",(0,i.jsx)(t.p,{children:"This extension exists only to formalize, name, and freeze the attributes standard provided by OpenSea. In formalizing this standard, we seek to remove all ambiguity about the form and intended interpretation of items in the attributes array. In naming this standard, we seek to allow its form to be identified by a metadata consumer or possibly replaced with a future standard. In freezing this standard, we seek to let consumers be sure about how to interpret the attributes array for all time, even if OpenSea were to later update their standard."}),"\n",(0,i.jsx)(t.h2,{id:"motivation",children:"Motivation"}),"\n",(0,i.jsx)(t.p,{children:'In the future, it is likely that more functionality and flexibility will be desired when assigning attributes to an NFT. Adopting this standard now means that all metadata creators and consumers will have the ability to migrate seamlessly to a new standard at a later time while still supporting NFTs that were made following an older standard. If such adoption does not take place, the longer-term solution may be to add a new top-level key such as "attributes2" in order to make breaking changes to the standard -- a fate which should make us cringe in disgust and dismay.'}),"\n",(0,i.jsx)(t.h2,{id:"specification",children:"Specification"}),"\n",(0,i.jsxs)(t.p,{children:["The key words \u201cMUST\u201d, \u201cMUST NOT\u201d, \u201cREQUIRED\u201d, \u201cSHALL\u201d, \u201cSHALL NOT\u201d, \u201cSHOULD\u201d, \u201cSHOULD NOT\u201d, \u201cRECOMMENDED\u201d, \u201cMAY\u201d, and \u201cOPTIONAL\u201d in this document are to be interpreted as described in ",(0,i.jsx)(t.a,{href:"https://www.ietf.org/rfc/rfc2119.txt",children:"RFC 2119"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"top-level-metadata",children:"Top-Level Metadata:"}),"\n",(0,i.jsxs)(t.p,{children:["This specification adds the ",(0,i.jsx)(t.code,{children:"attributes"})," key to the top level of ",(0,i.jsx)(t.a,{href:"ETM_v1.0.0",children:"ETM"})," metadata JSON."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'{\n  "metadata_standard": "ETM_v1.0.0",\n  "extensions": [ "ETM_ATTRIBUTES_v1.0.0" ],\n  "attributes": []\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["In the above metadata, the ",(0,i.jsx)(t.code,{children:"attributes"})," array is left empty in order to show the minimum valid implementation of this extension. For a non-trivial example, refer to the ",(0,i.jsx)(t.a,{href:"#metadata-examples",children:"Metadata Examples"})," section."]}),"\n",(0,i.jsx)(t.h4,{id:"extended-top-level-data-types",children:"Extended Top-Level Data Types:"}),"\n",(0,i.jsx)(t.p,{children:"The top-level keys of the metadata MUST include all required fields in the below table in addition to fields required by the metadata standard to which this extension is applied."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field Name"}),(0,i.jsx)(t.th,{children:"Data Type"}),(0,i.jsx)(t.th,{children:"Inclusion"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"attributes"}),(0,i.jsx)(t.td,{children:"Attribute[]"}),(0,i.jsx)(t.td,{children:"REQUIRED"})]})})]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"attributes"})," key provides an array of ",(0,i.jsx)(t.code,{children:"Attribute"})," data types, defined below."]}),"\n",(0,i.jsxs)(t.h4,{id:"attribute-data-type",children:[(0,i.jsx)(t.code,{children:"Attribute"})," Data Type:"]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"Attribute"})," data type is a JSON object which defines all attribute data. The fields for this data type are defined in the table below."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field Name"}),(0,i.jsx)(t.th,{children:"Data Type"}),(0,i.jsx)(t.th,{children:"Inclusion"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"display_type"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"OPTIONAL"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"trait_type"}),(0,i.jsx)(t.td,{children:"string"}),(0,i.jsx)(t.td,{children:"RECOMMENDED"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"value"}),(0,i.jsx)(t.td,{children:"string | number | boolean"}),(0,i.jsx)(t.td,{children:"REQUIRED"})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["The optional ",(0,i.jsx)(t.code,{children:"display_type"})," key allows creators to define how an attribute should be displayed. This extension does not specify a set of valid entries for the ",(0,i.jsx)(t.code,{children:"display_type"})," and instead leaves that definition to a subsequent extension."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"trait_type"})," key allows creators to set the name of the trait this attribute represents."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"value"})," key allows creators to set the value of an attribute. The value of this field can be any valid JSON value type and must be handled appropriately by metadata consumers."]}),"\n",(0,i.jsx)(t.h2,{id:"metadata-examples",children:"Metadata Examples"}),"\n",(0,i.jsx)(t.h4,{id:"supporting-openseas-standard",children:"Supporting OpenSea's Standard"}),"\n",(0,i.jsx)(t.p,{children:"The following is an example of this extension being used as a wrapper for OpenSea's standard."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'{\n  "metadata_standard": "ETM_v1.0.0",\n  "extensions": [ "ETM_ATTRIBUTES_v1.0.0" ],\n  "attributes": [\n    {\n      "trait_type": "Base", \n      "value": "Starfish"\n    }, \n    {\n      "trait_type": "Eyes", \n      "value": "Big"\n    }, \n    {\n      "trait_type": "Mouth", \n      "value": "Surprised"\n    }, \n    {\n      "trait_type": "Level", \n      "value": 5\n    }, \n    {\n      "trait_type": "Stamina", \n      "value": 1.4\n    }, \n    {\n      "trait_type": "Personality", \n      "value": "Sad"\n    }, \n    {\n      "display_type": "boost_number", \n      "trait_type": "Aqua Power", \n      "value": 40\n    }, \n    {\n      "display_type": "boost_percentage", \n      "trait_type": "Stamina Increase", \n      "value": 10\n    }, \n    {\n      "display_type": "number", \n      "trait_type": "Generation", \n      "value": 2\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"backwards-compatibility",children:"Backwards Compatibility"}),"\n",(0,i.jsxs)(t.p,{children:["This extension to the metadata standard is backwards compatible with existing metadata suggestions proposed in ERC-721 and ERC-1155, as well as ",(0,i.jsx)(t.a,{href:"ETM_v1.0.0",children:"ETM"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"security-considerations",children:"Security Considerations"}),"\n",(0,i.jsx)(t.p,{children:"Because this standard is merely a metadata extension and does not interface with the underlying contract, there are no additional security considerations."}),"\n",(0,i.jsx)(t.h2,{id:"copyright",children:"Copyright"}),"\n",(0,i.jsxs)(t.p,{children:["Copyright and related rights waived via ",(0,i.jsx)(t.a,{href:"https://creativecommons.org/publicdomain/zero/1.0/",children:"CC0"}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>r});var i=n(7294);const a={},s=i.createContext(a);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);