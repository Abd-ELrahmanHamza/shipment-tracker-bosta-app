import statusColor from "@/constants/statusColor";
import { Shipment } from "@/models/Shipment";
import { CheckIcon, TruckIcon } from "@heroicons/react/16/solid";

const Step = ({
  active,
  step,
  children,
  isLast,
  status,
}: {
  active: number;
  step: number;
  children: React.ReactNode;
  isLast: boolean;
  status: string;
}) => {
  return (
    <li className={`flex ${!isLast && "w-full"} items-center`}>
      <span
        className={`flex items-center justify-center rounded-full ${
          step <= active ? `bg-${statusColor(status)}` : "bg-gray-200"
        }
        ${step < active ? "w-5 h-5" : "w-10 h-10 lg:h-12 lg:w-12"}
        `}
      >
        {children}
      </span>
      {!isLast && (
        <div
          className={`flex-1 h-1 ${
            step < active ? `bg-${statusColor(status)}` : "bg-gray-200"
          }`}
        ></div>
      )}
    </li>
  );
};

export default function ShipmentSteps({ shipment }: { shipment: Shipment }) {
  const activeStep = 2;
  const steps = {
    1: "Shipment Picked Up",
    2: "In Transit",
    3: "Out for Delivery",
    4: "Delivered",
  };
  console.log(shipment);
  return (
    <div>
      <ol className="flex items-center w-full">
        {Object.keys(steps).map((step, index) => (
          <Step
            key={step}
            active={activeStep}
            step={parseInt(step)}
            isLast={index === Object.keys(steps).length - 1}
            status={shipment.CurrentStatus.state}
          >
            {parseInt(step) < activeStep ? (
              <CheckIcon className="w-6 h-6 text-white" />
            ) : (
              <TruckIcon className="w-8 h-8 text-white" />
            )}
          </Step>
        ))}
      </ol>
    </div>
  );
}
