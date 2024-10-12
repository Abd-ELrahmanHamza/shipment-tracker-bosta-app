import { useShipment } from "@/contexts/Shipments";
import Card from "../ui/Card";
import LoadingSpinner from "../ui/LoadingSpinner";
import { useTranslation } from "react-i18next";
import ErrorMessage from "../ui/ErrorMessage";

export default function ShipmentAddress() {
  const { t } = useTranslation();
  const { isLoading, error } = useShipment();
  return (
    <Card className="bg-gray-50">
      {isLoading && <LoadingSpinner />}
      {!isLoading && error && <ErrorMessage message={error.message} />}
      {!isLoading && !error && (
        <p className="text-sm text-gray-500 font-semibold">
          {t("1234 Elm Street, Springfield, IL 62704")}
        </p>
      )}
    </Card>
  );
}
