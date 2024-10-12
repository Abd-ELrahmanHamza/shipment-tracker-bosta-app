import { useQuery } from "@tanstack/react-query";
import { baseAPI } from "./axios";

export function getShipment(shipmentNumber: string) {
  return baseAPI({
    method: "GET", // HTTP method to fetch data.
    url: `/shipments/track/${shipmentNumber}`, // API endpoint to get the list of countries.
    requestConfig: {
      headers: {
        "Content-Language": "en-US", // Set the language for the request.
      },
    },
  });
}
export const useGetShipment = (shipmentNumber: string) => {
  return useQuery({
    queryKey: ["parent category", shipmentNumber],
    queryFn: () => getShipment(shipmentNumber),
  });
};
