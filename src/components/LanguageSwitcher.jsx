import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div>
      <button onClick={() => i18n.changeLanguage("en")} style={{ marginRight: "10px" }}>English</button>
      <button onClick={() => i18n.changeLanguage("hi")}>Hindi</button>
    </div>
  );
}

export default LanguageSwitcher;