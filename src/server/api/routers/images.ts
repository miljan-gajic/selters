import { env } from "@/env.mjs";
import { allImagesDTO } from "@/features/imageHandling/utils/utils";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import {
  listOfFiles,
  UploadcareSimpleAuthSchema,
} from "@uploadcare/rest-client";

const uploadcareSimpleAuthSchema = new UploadcareSimpleAuthSchema({
  publicKey: env.UPLOAD_CARE_PUBLIC_KEY,
  secretKey: env.UPLOAD_CARE_SECRET_KEY,
});

export const imageRouter = createTRPCRouter({
  getAllImages: protectedProcedure.query(async () => {
    const allImages = await listOfFiles(
      {},
      { authSchema: uploadcareSimpleAuthSchema }
    );
    return allImagesDTO(allImages);
  }),
});
