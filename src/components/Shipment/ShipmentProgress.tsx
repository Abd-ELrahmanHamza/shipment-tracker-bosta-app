import { useShipment } from "@/contexts/Shipments";
import Card from "../ui/Card";
import ShipmentSteps from "./ShipmentSteps";
import ShipmentTable from "./ShipmentTable";
import LoadingSpinner from "../ui/LoadingSpinner";
import ErrorMessage from "../ui/ErrorMessage";

export default function ShipmentProgress() {
  const { shipment, isLoading, error } = useShipment();
  return (
    <Card>
      {isLoading && <LoadingSpinner />}
      {!isLoading && error && <ErrorMessage message={error.message} />}
      {!isLoading && !error && (
        <>
          <ShipmentTable shipment={shipment} />
          <hr className="my-4" />
          <ShipmentSteps shipment={shipment} />
        </>
      )}
    </Card>
  );
}
