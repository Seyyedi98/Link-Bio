import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import SubmitButton from "../common/button/submit-button";
import { SaveIcon } from "lucide-react";

const EditorUserInfo = ({
  displayName,
  setDisplayName,
  location,
  setLocation,
  bio,
  setBio,
}) => {
  return (
    <div className="flex flex-col p-4">
      <label htmlFor="nameIn">نام</label>
      <Input
        id="nameIn"
        type="text"
        name="displayName"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        placeholder="اسم شما..."
        className="shadow"
      />
      <label htmlFor="locationIn">مکان</label>
      <Input
        id="locationIn"
        type="text"
        name="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="اهل کجایی؟"
        className="shadow"
      />
      <label htmlFor="bioIn">بیو</label>
      <Textarea
        id="bioIn"
        name="bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        placeholder="یکم از خودت بگو..."
        className="shadow"
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
  );
};

export default EditorUserInfo;
