import { successResponse } from "../../utils/apiResponse";

const products = [
  {
    id: 1,
    name: "VPS Starter",
    category: "Compute",
    region: "Miami",
    cpu: 2,
    ram: "4 GB",
    storage: "80 GB SSD",
    price: 12,
  },
  {
    id: 2,
    name: "VPS Pro",
    category: "Compute",
    region: "São Paulo",
    cpu: 4,
    ram: "8 GB",
    storage: "160 GB SSD",
    price: 24,
  },
  {
    id: 3,
    name: "Bare Metal X",
    category: "Bare Metal",
    region: "Dallas",
    cpu: 16,
    ram: "64 GB",
    storage: "2 TB NVMe",
    price: 199,
  },
];

export async function listProducts() {
  return successResponse(products, 18);
}
