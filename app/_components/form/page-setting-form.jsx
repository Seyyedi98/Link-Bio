"use client";

import { savePageSettings } from "@/actions/page/page-data";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { ImageIcon, Palette, SaveIcon, UserCircle2Icon } from "lucide-react";
import { useState } from "react";
import RadioButtonTogglers from "../common/button/radio-btn-togglers";
import SubmitButton from "../common/button/submit-button";
import UploadCoverImage from "../common/input/upload-cover-image";

const PageSettingsForm = ({ page }) => {
  const [displayName, setDisplayName] = useState(page.displayName);
  const [location, setLocation] = useState(page.location);
  const [bio, setBio] = useState(page.bio);
  const [background, setBackground] = useState(page.background);
  const [bgColor, setBgColor] = useState(page.bgColor);
  const [bgImage, setBgImage] = useState(page.bgImage);

  const saveSettings = async () => {
    const formValues = {
      displayName: displayName,
      location: location,
      bio: bio,
      background: background,
      bgColor: bgColor,
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
        <div
          className="flex items-center justify-center bg-cover py-16"
          style={
            background === "color"
              ? { backgroundColor: bgColor }
              : { backgroundImage: "url(" + bgImage + ")" }
          }
        >
          <div className="text-center">
            <RadioButtonTogglers
              background={background}
              setBackground={setBackground}
              options={[
                { value: "color", icon: Palette, label: "رنگ" },
                { value: "image", icon: ImageIcon, label: "تصویر" },
              ]}
              onChange={(value) => {
                setBackground(value);
              }}
            />
            {background === "color" && (
              <div className="shadw-md mt-2 bg-gray-200 text-foreground">
                <div className="flex justify-center gap-2">
                  <span>رنگ پس زمینه</span>
                  <input
                    value={bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    type="color"
                    name="bgColor"
                  />
                </div>
              </div>
            )}
            {background === "image" && (
              <UploadCoverImage uri={page.uri} setBgImage={setBgImage} />
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <UserCircle2Icon className="relative -top-8 h-32 w-32 rounded-full border-4 border-white text-slate-500 shadow-black/50" />
        </div>
        <div className="flex flex-col p-4">
          <label htmlFor="nameIn">نام</label>
          <Input
            id="nameIn"
            type="text"
            name="displayName"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="اسم شما..."
            className="border-transparent focus:border-transparent focus:ring-0"
          />
          <label htmlFor="locationIn">مکان</label>
          <Input
            id="locationIn"
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="اهل کجایی؟"
          />
          <label htmlFor="bioIn">بیو</label>
          <Textarea
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
