import { currentUser } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
//import { UploadThingError } from "uploadthing/server";
 
const f = createUploadthing();
 
const getUser = async () => await currentUser(); 
export const ourFileRouter = {
  media: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(async ({ req }) => {
      const user = await getUser();
 
      if (!user) throw new Error("Unauthorized");
 
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      
      console.log("Upload complete for userId:", metadata.userId);
 
      console.log("file url", file.url);
 
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;