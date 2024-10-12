import { useShipment } from "@/contexts/Shipments";
import { useTranslation } from "react-i18next";
import LoadingSpinner from "../ui/LoadingSpinner";
import ErrorMessage from "../ui/ErrorMessage";

export default function ShipmentDetails() {
  const { t } = useTranslation();
  const { shipment, isLoading, error } = useShipment();
  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && error && <ErrorMessage message={error.message} />}

      {!isLoading && !error && (
        <div className="overflow-x-auto border rounded-md w-full">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-400 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  {t("Branch")}
                </th>
                <th scope="col" className="px-6 py-3">
                  {t("Date")}
                </th>
                <th scope="col" className="px-6 py-3">
                  {t("Time")}
                </th>
                <th scope="col" className="px-6 py-3">
                  {t("Details")}
                </th>
              </tr>
            </thead>
            <tbody>
              {shipment.TransitEvents?.map((event) => (
                <tr key={event.timestamp} className="bg-white border-b">
                  <td className="px-6 py-4">{event.hub || "-"}</td>
                  <td>
                    {new Date(event.timestamp).toLocaleDateString("en-GB")}
                  </td>
                  <td>
                    {new Date(event.timestamp).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </td>
                  <td className="px-6 py-4">{t(event.state)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
