// @ts-expect-error - This import is not working
import EnglishLogo from "@/assets/images/english-logo.svg?react";

export default function Home() {
  return (
    <div>
      <EnglishLogo />
    </div>
  );
}
