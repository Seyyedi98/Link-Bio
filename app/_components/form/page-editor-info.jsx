"use client";

import { savePageSettings } from "@/actions/page/page-data";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import EditorHeader from "../section/editor-header";
import EditorProfileImg from "../section/editor-profile-img";
import EditorUserInfo from "../section/editor-user-info";
import { notFound } from "next/navigation";

const PageEditorInfo = ({ page }) => {
  const [displayName, setDisplayName] = useState(page?.displayName || "");
  const [location, setLocation] = useState(page?.location || "");
  const [bio, setBio] = useState(page?.bio || "");
  const [background, setBackground] = useState(page?.background);
  const [bgColor, setBgColor] = useState(page?.bgColor);
  const [bgImage, setBgImage] = useState(page?.bgImage || "");
  const [profileImg, setProfileImg] = useState(page?.profileImg || "");

  if (!page) return notFound();

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
    <div className="bg-primary-foreground shadow-md">
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

export default PageEditorInfo;
