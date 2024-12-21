import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CameraIcon, UploadCloud, UserCircle2Icon } from "lucide-react";
import UploadProfileImage from "../common/input/upload-profile-image";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";

const EditorProfileImg = ({ profileImg, setProfileImg, page }) => {
  return (
    <div className="relative flex justify-center">
      {profileImg ? (
        <Image
          src={profileImg}
          className="relative -top-10 h-32 w-32 rounded-full object-cover"
          width={100}
          height={100}
          alt="profile-image"
        />
      ) : (
        <UserCircle2Icon className="relative -top-10 h-32 w-32 rounded-full border-4 border-white text-slate-500 shadow-black/50" />
      )}
      <Dialog>
        <DialogTrigger className="absolute -top-10">
          <div className="flex h-32 w-32 cursor-pointer items-center justify-center rounded-full bg-zinc-300/80 opacity-0 transition-all duration-200 hover:opacity-100">
            <UploadCloud className="h-8 w-8 text-zinc-500/80" />{" "}
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>تصویر پروفایل</DialogTitle>
          <DialogDescription className="flex flex-col items-center justify-center gap-4">
            {profileImg ? (
              <Image
                src={profileImg}
                className="h-24 w-24 rounded-full object-cover"
                width={100}
                height={100}
                alt="profile-image"
              />
            ) : (
              <span className="flex h-24 w-24 items-center justify-center rounded-full bg-zinc-200">
                <CameraIcon className="h-10 w-10" />
              </span>
            )}

            <UploadProfileImage setProfileImg={setProfileImg} uri={page.uri} />
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditorProfileImg;
