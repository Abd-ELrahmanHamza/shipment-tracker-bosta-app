import { useGetShipment } from "@/api/useGetShipment";
import { Shipment } from "@/models/Shipment";
import { createContext, useContext, ReactNode } from "react";
import { useParams } from "react-router-dom";

interface ShipmentContextProps {
  shipmentID?: string;
  shipment: Shipment;
  isLoading?: boolean;
  error: Error | null;
}

const ShipmentContext = createContext<ShipmentContextProps>(
  {} as ShipmentContextProps
);

interface ShipmentProviderProps {
  children: ReactNode;
}

const ShipmentProvider = ({ children }: ShipmentProviderProps) => {
  const { id: shipmentID } = useParams();
  console.log(shipmentID, "shipmentID");
  const {
    data: shipment,
    isLoading,
    error,
  } = useGetShipment(shipmentID || "84043113");

  const contextValue: ShipmentContextProps = {
    shipmentID,
    shipment,
    isLoading,
    error,
  };
  return (
    <ShipmentContext.Provider value={contextValue}>
      {children}
    </ShipmentContext.Provider>
  );
};

const useShipment = (): ShipmentContextProps => {
  const context = useContext(ShipmentContext);
  if (context === undefined) {
    throw new Error("useShipment must be used within an ShipmentProvider");
  }
  return context;
};

export { useShipment, ShipmentProvider };
