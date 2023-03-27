import { api } from "@/utils/api";
import { useCallback } from "react";
import { Image } from "../components/ImageUploader/ImageUploader";
import { allImagesDTO } from "../utils/utils";

export interface GetAllImages {
  isLoading: boolean;
  isError: boolean;
  images: ReturnType<typeof allImagesDTO>;
}

export const useGetAllImages = (): GetAllImages => {
  const {
    data: images,
    isError,
    isLoading,
  } = api.images.getAllImages.useQuery();

  return {
    isError,
    isLoading,
    images: images || [],
  };
};

export const useUploadImage = () => {
  const mutation = api.images.uploadAnImage.useMutation();

  return useCallback(
    (image: Image) => {
      if (!image) {
        throw new Error("The Image is missing, please provide a valid Image");
      }
      mutation.mutate({ profileImage: image });
    },
    [mutation]
  );
};
