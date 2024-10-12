import Header from "@/components/Header";
import ShipmentProgress from "@/components/Shipment/ShipmentProgress";
import ShipmentAddress from "@/components/ShipmentAddress/ShipmentAddress";
import ShipmentReport from "@/components/ShipmentAddress/ShipmentReport";
import ShipmentDetails from "@/components/ShipmentDetails/ShipmentDetails";
import { ShipmentProvider } from "@/contexts/Shipments";
import { Navigate, useParams } from "react-router-dom";

export default function Home() {
  const { id } = useParams();
  if (!id) return <Navigate to="/84043113" />;
  return (
    <ShipmentProvider>
      <Header />
      <div className="px-4 md:px-6 py-10">
        <div className="mx-auto max-w-screen-xl">
          <ShipmentProgress />
          <div className="flex flex-col mt-10 gap-x-4 justify-between lg:flex-row">
            <div className="grow-[2]">
              <ShipmentDetails />
            </div>
            <div className="grow-[1] flex flex-col md:flex-row lg:flex-col gap-4 mt-4 lg:mt-0">
              <ShipmentAddress />
              <ShipmentReport />
            </div>
          </div>
        </div>
      </div>
    </ShipmentProvider>
  );
}
