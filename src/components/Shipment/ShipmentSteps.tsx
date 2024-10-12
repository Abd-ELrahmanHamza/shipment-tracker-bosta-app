import statusColor from "@/constants/statusColor";
import { Shipment } from "@/models/Shipment";
import { CheckIcon, TruckIcon } from "@heroicons/react/16/solid";
import { useTranslation } from "react-i18next";

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
          !isLast && step !== 0 && "rtl:translate-x-1/3 -translate-x-1/4"
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
  const activeStep = 2;
  console.log(shipment);
  const { t } = useTranslation();
  return (
    <div>
      <ol className="flex items-center w-full">
        {shipment.TransitEvents.map((event, index) => (
          <Step
            key={event.timestamp}
            active={activeStep}
            step={index + 1}
            isLast={index === shipment.TransitEvents.length - 1}
            status={shipment.CurrentStatus.state}
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
        {shipment.TransitEvents.map((event, index) => (
          <StepsTitles
            key={event.timestamp}
            active={activeStep}
            step={index + 1}
            isLast={index === shipment.TransitEvents.length - 1}
          >
            {t(event.state)}
          </StepsTitles>
        ))}
      </ol>
    </div>
  );
}
