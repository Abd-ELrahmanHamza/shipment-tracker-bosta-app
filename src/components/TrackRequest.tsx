import Button from "@/components/ui/Button";
import { useLanguage } from "@/hooks/useLanguage";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function TrackRequest() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen);
  const ButtonClassName = isMenuOpen
    ? "text-primary-500 border-t border-x border-gray-200"
    : "!text-gray-700 hover:!text-primary-700";
  return (
    <div className="relative">
      <Button
        variant="text"
        className={`${ButtonClassName} rounded-t`}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {t("Track Your Shipment")}
      </Button>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute border-x border-b left-0 border-gray-200 rounded-b`}
      >
        <div className="relative p-4 bg-white rounded-lg w-80">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400 font-semibold">
              {t("Track Your Shipment")}
            </span>
          </div>

          <div className="flex border rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder={t("Tracking Number")}
              className="flex-1 px-4 py-2 text-gray-500 border-none focus:outline-none"
            />
            <button className="bg-red-600 p-2 flex items-center justify-center">
              <MagnifyingGlassIcon className="h-8 w-8 text-white bg-red-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
