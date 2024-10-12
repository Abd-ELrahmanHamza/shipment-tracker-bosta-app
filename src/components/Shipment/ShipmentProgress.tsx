import { useShipment } from "@/contexts/Shipments";
import Card from "../ui/Card";
import ShipmentSteps from "./ShipmentSteps";
import ShipmentTable from "./ShipmentTable";
import LoadingSpinner from "../ui/LoadingSpinner";

export default function ShipmentProgress() {
  const { shipment, isLoading, error } = useShipment();
  return (
    <Card>
      {isLoading && <LoadingSpinner />}
      {
        !isLoading && error && (
          <div className="text-center text-red-500">
            {error.message}
          </div>
        )
      }
      {
        !isLoading && !error && (
          <>
            <ShipmentTable shipment={shipment} />
            <hr className="my-4" />
            <ShipmentSteps shipment={shipment} />
          </>
        )
      }
    </Card>
  );
}
