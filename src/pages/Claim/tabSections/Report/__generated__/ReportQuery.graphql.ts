/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ReportStatus = "REPORTED" | "REPORTING" | "%future added value";
export type ReportQueryVariables = {
    claimId: string;
};
export type ReportQueryResponse = {
    readonly claimJob: {
        readonly reportFormId: string | null;
        readonly reportForm: {
            readonly cards: ReadonlyArray<{
                readonly id: string;
                readonly order: number | null;
                readonly grid: unknown | null;
                readonly " $fragmentRefs": FragmentRefs<"ReportCard_cart">;
            }> | null;
        } | null;
        readonly reportData: {
            readonly data: unknown | null;
            readonly status: ReportStatus;
        } | null;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"ReportActions_data">;
};
export type ReportQuery = {
    readonly response: ReportQueryResponse;
    readonly variables: ReportQueryVariables;
};



/*
query ReportQuery(
  $claimId: ID!
) {
  claimJob(where: {id: $claimId}) {
    reportFormId
    reportForm {
      cards {
        id
        order
        grid
        ...ReportCard_cart
      }
      id
    }
    reportData {
      data
      status
      id
    }
    id
  }
}

fragment ArrayField_data on GroupField {
  label
  name
  fields {
    __typename
    label
    grid
    ...ReportInfoField_field
    ...ReportTextField_field
    ...ReportTextAreaField_field
    ...ReportSelectField_field
    ...ReportDateTimeField_field
    ...ReportFileField_field
    id
  }
}

fragment ReportCardField_field on Field {
  __typename
  label
  ...ReportInfoField_field
  ...ReportTextField_field
  ...ReportTextAreaField_field
  ...ReportSelectField_field
  ...ReportDateTimeField_field
  ...ReportGroupField_field
  ...ReportFileField_field
}

fragment ReportCard_cart on Card {
  id
  title
  fields {
    __typename
    id
    grid
    order
    ...ReportCardField_field
  }
}

fragment ReportDateTimeField_field on DateTimeField {
  label
  name
}

fragment ReportFileField_field on FileField {
  label
  name
}

fragment ReportGroupField_field on GroupField {
  label
  name
  ...ArrayField_data
}

fragment ReportInfoField_field on InfoField {
  label
  value
}

fragment ReportSelectField_field on SelectField {
  name
  label
  options {
    id
    label
    value
  }
}

fragment ReportTextAreaField_field on TextAreaField {
  label
  name
  rows
  rowsMax
}

fragment ReportTextField_field on TextField {
  label
  name
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "claimId",
    "type": "ID!"
  }
],
v1 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "claimId"
      }
    ],
    "kind": "ObjectValue",
    "name": "where"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "reportFormId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "order",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "grid",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "data",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "status",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v11 = {
  "kind": "InlineFragment",
  "selections": [
    (v10/*: any*/)
  ],
  "type": "InfoField"
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v13 = [
  (v12/*: any*/)
],
v14 = {
  "kind": "InlineFragment",
  "selections": (v13/*: any*/),
  "type": "TextField"
},
v15 = {
  "kind": "InlineFragment",
  "selections": [
    (v12/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "rows",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "rowsMax",
      "storageKey": null
    }
  ],
  "type": "TextAreaField"
},
v16 = {
  "kind": "InlineFragment",
  "selections": [
    (v12/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "SelectFieldOption",
      "kind": "LinkedField",
      "name": "options",
      "plural": true,
      "selections": [
        (v3/*: any*/),
        (v9/*: any*/),
        (v10/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "SelectField"
},
v17 = {
  "kind": "InlineFragment",
  "selections": (v13/*: any*/),
  "type": "DateTimeField"
},
v18 = {
  "kind": "InlineFragment",
  "selections": (v13/*: any*/),
  "type": "FileField"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ReportQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ClaimJob",
        "kind": "LinkedField",
        "name": "claimJob",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Form",
            "kind": "LinkedField",
            "name": "reportForm",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Card",
                "kind": "LinkedField",
                "name": "cards",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "ReportCard_cart"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Report",
            "kind": "LinkedField",
            "name": "reportData",
            "plural": false,
            "selections": [
              (v6/*: any*/),
              (v7/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ReportActions_data"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ReportQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ClaimJob",
        "kind": "LinkedField",
        "name": "claimJob",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Form",
            "kind": "LinkedField",
            "name": "reportForm",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Card",
                "kind": "LinkedField",
                "name": "cards",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "fields",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/),
                      (v5/*: any*/),
                      (v4/*: any*/),
                      (v8/*: any*/),
                      (v9/*: any*/),
                      (v11/*: any*/),
                      (v14/*: any*/),
                      (v15/*: any*/),
                      (v16/*: any*/),
                      (v17/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": [
                          (v12/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": null,
                            "kind": "LinkedField",
                            "name": "fields",
                            "plural": true,
                            "selections": [
                              (v8/*: any*/),
                              (v9/*: any*/),
                              (v5/*: any*/),
                              (v3/*: any*/),
                              (v11/*: any*/),
                              (v14/*: any*/),
                              (v15/*: any*/),
                              (v16/*: any*/),
                              (v17/*: any*/),
                              (v18/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "type": "GroupField"
                      },
                      (v18/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Report",
            "kind": "LinkedField",
            "name": "reportData",
            "plural": false,
            "selections": [
              (v6/*: any*/),
              (v7/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ReportQuery",
    "operationKind": "query",
    "text": "query ReportQuery(\n  $claimId: ID!\n) {\n  claimJob(where: {id: $claimId}) {\n    reportFormId\n    reportForm {\n      cards {\n        id\n        order\n        grid\n        ...ReportCard_cart\n      }\n      id\n    }\n    reportData {\n      data\n      status\n      id\n    }\n    id\n  }\n}\n\nfragment ArrayField_data on GroupField {\n  label\n  name\n  fields {\n    __typename\n    label\n    grid\n    ...ReportInfoField_field\n    ...ReportTextField_field\n    ...ReportTextAreaField_field\n    ...ReportSelectField_field\n    ...ReportDateTimeField_field\n    ...ReportFileField_field\n    id\n  }\n}\n\nfragment ReportCardField_field on Field {\n  __typename\n  label\n  ...ReportInfoField_field\n  ...ReportTextField_field\n  ...ReportTextAreaField_field\n  ...ReportSelectField_field\n  ...ReportDateTimeField_field\n  ...ReportGroupField_field\n  ...ReportFileField_field\n}\n\nfragment ReportCard_cart on Card {\n  id\n  title\n  fields {\n    __typename\n    id\n    grid\n    order\n    ...ReportCardField_field\n  }\n}\n\nfragment ReportDateTimeField_field on DateTimeField {\n  label\n  name\n}\n\nfragment ReportFileField_field on FileField {\n  label\n  name\n}\n\nfragment ReportGroupField_field on GroupField {\n  label\n  name\n  ...ArrayField_data\n}\n\nfragment ReportInfoField_field on InfoField {\n  label\n  value\n}\n\nfragment ReportSelectField_field on SelectField {\n  name\n  label\n  options {\n    id\n    label\n    value\n  }\n}\n\nfragment ReportTextAreaField_field on TextAreaField {\n  label\n  name\n  rows\n  rowsMax\n}\n\nfragment ReportTextField_field on TextField {\n  label\n  name\n}\n"
  }
};
})();
(node as any).hash = '39b59e50b8b10dfcbe3c7ea95fd22d0f';
export default node;
