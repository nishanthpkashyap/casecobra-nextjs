import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { z } from "zod";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({
    image: {
      /**
       * For full list of options and defaults, see the File Route API reference
       * @see https://docs.uploadthing.com/file-routes#route-config
       */
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
  .input(z.object({configId: z.string().optional()}))
    // Set permissions and file types for this FileRoute
    .middleware(async ({ input }) => {
      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { input };
    })
    .onUploadComplete(async ({ metadata, file }) => {
        const { configId } = metadata.input;
      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { configId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
