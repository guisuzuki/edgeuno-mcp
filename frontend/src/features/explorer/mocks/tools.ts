export const tools = [
  {
    id: "login",
    name: "login",
    method: "POST",
    endpoint: "/auth/login",
    description: "Authenticate using API Key.",
    parameters: [
      {
        name: "apiKey",
        type: "string",
        required: true,
      },
    ],
  },
  {
    id: "products",
    name: "listProducts",
    method: "GET",
    endpoint: "/products",
    description: "Returns all available products.",
    parameters: [],
  },
  {
    id: "resources",
    name: "createResource",
    method: "POST",
    endpoint: "/resources",
    description: "Provision a new resource.",
    parameters: [
      {
        name: "productName",
        type: "string",
      },
      {
        name: "region",
        type: "string",
      },
      {
        name: "hostname",
        type: "string",
      },
    ],
  },
];
