import { Shipment } from "@/models/Shipment";
import { useTranslation } from "react-i18next";

export default function ShipmentTable({ shipment }: { shipment: Shipment }) {
  const { t } = useTranslation();
  let textColor = "";
  if (shipment.CurrentStatus?.state === "DELIVERED_TO_SENDER") {
    textColor = "text-primary-500";
  } else if (shipment.CurrentStatus?.state === "CANCELLED") {
    textColor = "text-primary-500";
  } else if (shipment.CurrentStatus?.state === "DELIVERED") {
    textColor = "text-green-500";
  } else {
    textColor = "text-blue-500";
  }
  return (
    <div className="overflow-auto overflow-y-hidden">
      <table className="table-auto w-full min-w-[600px]">
        <thead>
          <tr>
            <th className="text-sm text-gray-400 text-start">
              {t("Tracking Number")} {shipment.TrackingNumber}
            </th>
            <th className="text-sm text-gray-400 text-start">
              {t("Last Update")}
            </th>
            <th className="text-sm text-gray-400 text-start">
              {t("Provider Name")}
            </th>
            <th className="text-sm text-gray-400 text-start">
              {t("Promise Date")}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={`font-semibold ${textColor}`}>
              {t(shipment.CurrentStatus?.state)}
            </td>
            <td className="font-semibold">
              {new Date(shipment.CurrentStatus?.timestamp).toLocaleString(
                "en-US",
                {
                  weekday: "long",
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                }
              )}
            </td>
            <td className="font-semibold">{shipment.provider}</td>
            <td className="font-semibold">
              {new Date(shipment.PromisedDate).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
