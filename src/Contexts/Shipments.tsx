import { useGetShipment } from "@/api/useGetShipment";
import { Shipment } from "@/models/Shipment";
import { createContext, useContext, ReactNode, useState } from "react";

interface ShipmentContextProps {
  shipmentID?: number;
  setShipmentID?: (shipmentID: number) => void;
  shipment: Shipment;
  changeShipmentID?: (shipmentID: number) => void;
}

const ShipmentContext = createContext<ShipmentContextProps | undefined>(
  undefined
);

interface ShipmentProviderProps {
  children: ReactNode;
}

const ShipmentProvider = ({ children }: ShipmentProviderProps) => {
  const [shipmentID, setShipmentID] = useState<number>(84043113);
  const { data: shipment } = useGetShipment(shipmentID);
  const changeShipmentID = (shipmentID: number) => {
    setShipmentID(shipmentID);
  };

  const contextValue: ShipmentContextProps = {
    shipmentID,
    setShipmentID,
    shipment,
    changeShipmentID,
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
