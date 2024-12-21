import React from "react";
import RadioButtonTogglers from "../common/button/radio-btn-togglers";
import UploadCoverImage from "../common/input/upload-cover-image";
import { ImageIcon, Palette } from "lucide-react";

const EditorHeader = ({
  background,
  setBackground,
  bgColor,
  setBgColor,
  bgImage,
  setBgImage,
  uri,
}) => {
  return (
    <div
      className="flex h-64 items-center justify-center bg-cover"
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
            <div className="flex justify-center gap-2 py-2">
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
          <UploadCoverImage uri={uri} setBgImage={setBgImage} />
        )}
      </div>
    </div>
  );
};

export default EditorHeader;
