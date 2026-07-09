import { successResponse } from "../../utils/apiResponse";

const orders = [
  {
    id: 501,
    status: "Provisioning",
    progress: 62,
  },
];

export async function getOrderStatus() {
  return successResponse(orders, 20);
}
