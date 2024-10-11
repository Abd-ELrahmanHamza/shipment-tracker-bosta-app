import Card from "../ui/Card";
import ShipmentSteps from "./ShipmentSteps";
import ShipmentTable from "./ShipmentTable";

export default function ShipmentProgress() {
  return (
    <Card>
      <ShipmentTable />
      <hr className="my-4" />

      <ShipmentSteps />
    </Card>
  );
}
