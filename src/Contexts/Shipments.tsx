import { useGetShipment } from "@/api/useGetShipment";
import { Shipment } from "@/models/Shipment";
import { createContext, useContext, ReactNode, useState } from "react";

interface ShipmentContextProps {
  shipmentID?: string;
  setShipmentID?: (shipmentID: string) => void;
  shipment: Shipment;
  changeShipmentID: (shipmentID: string) => void;
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
  const [shipmentID, setShipmentID] = useState<string>("84043113");
  const { data: shipment, isLoading, error } = useGetShipment(shipmentID);
  const changeShipmentID = (shipmentID: string) => {
    setShipmentID(shipmentID);
  };

  const contextValue: ShipmentContextProps = {
    shipmentID,
    setShipmentID,
    shipment,
    changeShipmentID,
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
