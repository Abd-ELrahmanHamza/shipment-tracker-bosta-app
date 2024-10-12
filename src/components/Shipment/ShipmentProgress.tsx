import { useShipment } from "@/Contexts/Shipments";
import Card from "../ui/Card";
import ShipmentSteps from "./ShipmentSteps";
import ShipmentTable from "./ShipmentTable";

export default function ShipmentProgress() {
  const { shipment, isLoading, error } = useShipment();
  return (
    <Card>
      {!isLoading && !error && <ShipmentTable shipment={shipment} />}
      <hr className="my-4" />

      {!isLoading && !error && <ShipmentSteps shipment={shipment} />}
    </Card>
  );
}
