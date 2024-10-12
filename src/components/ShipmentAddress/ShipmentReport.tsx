// @ts-expect-error - This import is not working
import EnglishLogo from "@/assets/images/english-logo.svg?react";
// @ts-expect-error - This import is not working
import ArabicLogo from "@/assets/images/arabic-logo.svg?react";
import Card from "@/components/ui/Card";
import Button from "../ui/Button";
import { useLanguage } from "@/hooks/useLanguage";
import Language from "@/models/language.enum";
export default function ShipmentReport() {
  const { t, currentLanguage } = useLanguage();
  return (
    <Card className="flex items-center">
      {currentLanguage === Language.Arabic ? <ArabicLogo /> : <EnglishLogo />}
      <div className="flex flex-col grow px-5">
        <h2 className="text-sm font-semibold text-center">
          {t("Do you have a problem with your shipment?!")}
        </h2>
        <Button className="mt-4 rounded-xl text-sm" variant="primary">
          {t("Report an issue")}
        </Button>
      </div>
    </Card>
  );
}
