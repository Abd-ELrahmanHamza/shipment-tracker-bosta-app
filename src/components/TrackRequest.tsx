import Button from "@/components/ui/Button";
import { useLanguage } from "@/hooks/useLanguage";
import Language from "@/models/language.enum";
import {
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/16/solid";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TrackRequest() {
  const { t, currentLanguage } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const [shipmentNumber, setShipmentNumber] = useState("");
  const navigate = useNavigate();
  const handleMouseEnter = () => {
    setIsHovered(true);
    navigate(`/${shipmentNumber}`);
  };
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button
        variant="text"
        className={`${
          isHovered ? "text-primary-700 border-x border-t" : "!text-gray-700"
        } hover:!text-primary-700 rounded-t-md flex items-center`}
      >
        {t("Track Your Shipment")}
        {isHovered && (
          <span>
            <ChevronRightIcon
              className={`h-4 w-4 ${
                currentLanguage === Language.Arabic
                  ? "transform rotate-180"
                  : ""
              }
            }`}
            />
          </span>
        )}
      </Button>
      <div
        className={`${
          isHovered ? "block" : "hidden"
        } absolute border left-0 border-gray-200 rounded-md`}
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
              value={shipmentNumber}
              onChange={(e) => setShipmentNumber(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleMouseEnter()}
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
