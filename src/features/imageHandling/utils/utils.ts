import { ListOfFilesResponse } from "@uploadcare/rest-client";

export const allImagesDTO = (images: ListOfFilesResponse) => {
  return images.results.map((file) => ({
    dateTimeStored: file.datetimeStored,
    isReady: file.isReady,
    name: file.originalFilename,
    url: file.originalFileUrl,
  }));
};
