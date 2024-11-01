import { z } from "zod";

export const blogSchema = z.object({
  title: z.string().nonempty("Title is required"),
  subTitle: z.string().nonempty("Subtitle is required"),
  subImages: z.array(z.any()).nonempty("At least one sub-image is required"),
  searchKeyword: z.string().nonempty("Search keyword is required"),
  thumbnailImage: z.any().refine((val) => val !== null && val !== undefined, {
    message: "Thumbnail image is required",
  }),
  // .nullable()
  contents: z
    .array(
      z.object({
        title: z.string().nonempty("Content title is required"),
        description: z.string().nonempty("Content description is required"),
      })
    )
    .nonempty("At least one content entry is required"),
  description: z.string().nonempty("Description is required"),
  category: z.string().nonempty("Category is required"),
  publishStatus: z.string().nonempty("Publish status is required"),
});
