"use client";

import { savePageSettings } from "@/actions/page/page-data";
import { ImageIcon, Palette, SaveIcon, UserCircle2Icon } from "lucide-react";
import RadioButtonTogglers from "../common/button/radio-btn-togglers";
import SubmitButton from "../common/button/submit-button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const PageSettingsForm = ({ page }) => {
  const { toast } = useToast();
  const [displayName, setDisplayName] = useState(page.displayName);
  const [location, setLocation] = useState(page.location);
  const [bio, setBio] = useState(page.bio);
  const [background, setBackground] = useState(page.background);

  const saveSettings = async () => {
    const formValues = {
      displayName: displayName,
      location: location,
      bio: bio,
      background: background,
    };
    await savePageSettings(page.uri, formValues).then((data) => {
      if (data.success) {
        toast({
          description: data.success,
        });
      }
      if (data.error) {
        toast({
          description: data.error,
        });
      }
    });
  };

  return (
    <div>
      <form action={saveSettings}>
        <div className="flex items-center justify-center bg-gray-200 py-16">
          <div>
            <RadioButtonTogglers
              background={background}
              setBackground={setBackground}
              options={[
                { value: "color", icon: Palette, label: "رنگ" },
                { value: "image", icon: ImageIcon, label: "تصویر" },
              ]}
              onChange={() => {}}
            />
          </div>
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
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="اسم شما..."
          />
          <label htmlFor="locationIn">مکان</label>
          <input
            id="locationIn"
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="اهل کجایی؟"
          />
          <label htmlFor="bioIn">بیو</label>
          <textarea
            id="bioIn"
            name="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
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
