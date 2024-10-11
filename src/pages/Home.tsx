import Header from "@/components/Header";
import ShipmentProgress from "@/components/Shipment/ShipmentProgress";

export default function Home() {
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
