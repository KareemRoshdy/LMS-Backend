import cloudinary from "cloudinary";
import { IUser } from "../models/user.model";

export const deletePicture = async (publicId: string) => {
  await cloudinary.v2.uploader.destroy(publicId);
};

export const uploadPicture = async (avatar: string, user: IUser) => {
  const myCloud = await cloudinary.v2.uploader.upload(avatar, {
    folder: "avatars",
    width: 150,
  });
  user.avatar = {
    public_id: myCloud.public_id,
    url: myCloud.secure_url,
  };
};
