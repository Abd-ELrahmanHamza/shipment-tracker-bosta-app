interface TransitEvent {
  state: string;
  timestamp: string;
  hub?: string; // Optional because not all transit events have a hub
}

interface WorkingDay {
  dayDate: string;
  dayName: string;
}

interface Shipment {
  provider: string;
  CurrentStatus: {
    state: string;
    timestamp: string;
  };
  PromisedDate: string;
  TrackingNumber: string;
  TrackingURL: string;
  SupportPhoneNumbers: string[];
  TransitEvents: TransitEvent[];
  CreateDate: string;
  isEditableShipment: boolean;
  nextWorkingDay: WorkingDay[];
}

export type { Shipment, TransitEvent, WorkingDay };
