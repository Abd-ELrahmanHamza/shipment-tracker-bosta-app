import Header from "@/components/Header";
import ShipmentProgress from "@/components/Shipment/ShipmentProgress";
import { useShipment } from "@/Contexts/Shipments";

export default function Home() {
  const { shipment } = useShipment();
  console.log("shipment", shipment);
  return (
    <>
      <Header />
      <div className="px-4 md:px-6 py-10">
        <div className="mx-auto max-w-screen-xl">
          <ShipmentProgress />
        </div>
      </div>
    </>
  );
}
