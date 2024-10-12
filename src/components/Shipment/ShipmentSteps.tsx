import { useLanguage } from "@/hooks/useLanguage";
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
  let bgColor = "";
  if (status === "DELIVERED_TO_SENDER") {
    bgColor = "bg-primary-500";
  } else if (status === "CANCELLED") {
    bgColor = "bg-primary-500";
  } else if (status === "DELIVERED") {
    bgColor = "bg-green-500";
  } else {
    bgColor = "bg-blue-500";
  }

  return (
    <li className={`flex ${!isLast && "w-full"} items-center`}>
      <span
        className={`flex items-center justify-center rounded-full ${
          step <= active ? bgColor : "bg-gray-200"
        }
        ${step < active ? "w-5 h-5" : "w-10 h-10 lg:h-12 lg:w-12"}
        `}
      >
        {children}
      </span>
      {!isLast && (
        <div
          className={`flex-1 h-1 ${step < active ? bgColor : "bg-gray-200"}`}
        ></div>
      )}
    </li>
  );
};

const StepsTitles = ({
  active,
  step,
  children,
  isLast,
}: {
  active: number;
  step: number;
  children: React.ReactNode;
  isLast: boolean;
}) => {
  return (
    <li className={`flex ${!isLast && "w-full"} items-center`}>
      <span
        className={`flex items-center justify-center rounded-full max-w-40 text-xs ${
          step <= active ? `text-gray-900` : "text-gray-400"
        } ${step === 0 && "!text-right"} ${isLast && "!text-left"} ${
          !isLast && step !== 1 && "rtl:translate-x-1/3 -translate-x-1/4"
        }
        `}
      >
        {children}
      </span>
      {!isLast && <div className={`flex-1 h-1`}></div>}
    </li>
  );
};

export default function ShipmentSteps({ shipment }: { shipment: Shipment }) {
  const activeStep = shipment.CurrentStatus.state === "DELIVERED" ? 5 : 3;
  const { t } = useLanguage();
  const steps = [
    "Shipment created",
    "Shipment is received at the hub",
    "Shipment is out for delivery",
    "Shipment is delivered",
  ];
  return (
    <div className="overflow-x-auto overflow-y-hidden">
      <div className="min-w-[600px] ">
        <ol className="flex items-center w-full">
          {steps.map((event, index) => (
            <Step
              key={event}
              active={activeStep}
              step={index + 1}
              isLast={index === steps.length - 1}
              status={shipment.CurrentStatus?.state}
            >
              {index < activeStep - 1 ? (
                <CheckIcon className="w-6 h-6 text-white" />
              ) : (
                <TruckIcon className="w-8 h-8 text-white" />
              )}
            </Step>
          ))}
        </ol>
        <ol className="flex items-center w-full mt-2">
          {steps.map((event, index) => (
            <StepsTitles
              key={event}
              active={activeStep}
              step={index + 1}
              isLast={index === steps.length - 1}
            >
              {t(event)}
            </StepsTitles>
          ))}
        </ol>
      </div>
    </div>
  );
}
