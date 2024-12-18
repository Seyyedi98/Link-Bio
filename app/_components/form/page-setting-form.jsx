"use client";

import { ImageIcon, Palette, SaveIcon, UserCircle2Icon } from "lucide-react";
import RadioButtonTogglers from "../common/button/radio-btn-togglers";
import SubmitButton from "../common/button/submit-button";

const PageSettingsForm = ({ page }) => {
  const saveSettings = async (formData) => {
    console.log(formData.get("displayName"));
  };
  return (
    <div>
      <form action={saveSettings}>
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
        <div className="flex flex-col p-4">
          <label htmlFor="nameIn">نام</label>
          <input
            id="nameIn"
            type="text"
            name="displayName"
            defaultValue={page.displayName}
            placeholder="اسم شما..."
          />
          <label htmlFor="locationIn">مکان</label>
          <input
            id="locationIn"
            type="text"
            name="lpcation"
            defaultValue={page.location}
            placeholder="اهل کجایی؟"
          />
          <label htmlFor="bioIn">بیو</label>
          <textarea
            id="bioIn"
            name="bio"
            defaultValue={page.bio}
            placeholder="یکم از خودت بگو..."
          />

          <SubmitButton
            pendingLabel="در حال ذخیره سازی..."
            className=""
            onClick={(e) => e.preventDefault()}
          >
            <SaveIcon />
            ذخیره
          </SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default PageSettingsForm;
