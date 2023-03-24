import { api } from "@/utils/api";
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
