import { ImageIcon, Palette, UserCircle2Icon } from "lucide-react";
import RadioButtonTogglers from "../common/button/radio-btn-togglers";

const PageSettingsForm = ({ page }) => {
  return (
    <div>
      <form>
        <div className="flex items-center justify-center bg-gray-200 py-16">
          <RadioButtonTogglers
            options={[
              { value: "color", icon: Palette, label: "رنگ" },
              { value: "image", icon: ImageIcon, label: "تصویر" },
            ]}
            onChange={() => {}}
          />
        </div>
        <div className="flex justify-center">
          <UserCircle2Icon className="relative -top-8 h-32 w-32 rounded-full border-4 border-white text-slate-500 shadow-black/50" />
        </div>
      </form>
    </div>
  );
};

export default PageSettingsForm;
