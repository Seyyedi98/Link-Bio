"use client";

import { savePageSettings } from "@/actions/page/page-data";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import EditorHeader from "../section/editor-header";
import EditorProfileImg from "../section/editor-profile-img";
import EditorUserInfo from "../section/editor-user-info";

const PageSettingsForm = ({ page }) => {
  const [displayName, setDisplayName] = useState(page.displayName);
  const [location, setLocation] = useState(page.location);
  const [bio, setBio] = useState(page.bio);
  const [background, setBackground] = useState(page.background);
  const [bgColor, setBgColor] = useState(page.bgColor);
  const [bgImage, setBgImage] = useState(page.bgImage);
  const [profileImg, setProfileImg] = useState(page.profileImg);

  const saveSettings = async () => {
    const formValues = {
      displayName: displayName,
      location: location,
      bio: bio,
      background: background,
      bgColor: bgColor,
      profileImg: profileImg,
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
        <EditorHeader
          background={background}
          setBackground={setBackground}
          bgColor={bgColor}
          setBgColor={setBgColor}
          bgImage={bgImage}
          setBgImage={setBgImage}
          uri={page.uri}
        />
        <EditorProfileImg
          profileImg={profileImg}
          setProfileImg={setProfileImg}
          page={page}
        />
        <EditorUserInfo
          displayName={displayName}
          setDisplayName={setDisplayName}
          location={location}
          setLocation={setLocation}
          bio={bio}
          setBio={setBio}
        />
      </form>
    </div>
  );
};

export default PageSettingsForm;
