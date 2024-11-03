/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { axiosInstance } from "@/api/api.config";
import FormErrorBorder from "@/components/custom/form-error-border";
import InputWithLabel from "@/components/custom/inputwith-lable";
import LoaderButton from "@/components/custom/loader-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { UploadTo } from "@/constants/assets";
import { blogCategories } from "@/constants/categories";
import { extractErrorMessage } from "@/lib/extractError";
import { blogSchema } from "@/lib/schemas/blog.schema";
import { uploadImageToCloudinary } from "@/lib/uploadImag";
import useUserStore from "@/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {  z } from "zod";

export default function CreateBlogPost() {
  const [loading, setLoading] = useState(false);
  type blogSchema = z.infer<typeof blogSchema>;
  const {
    register,
    formState: { errors },
    ...rest
  } = useForm<blogSchema>({
    resolver: zodResolver(blogSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const [content, setContent] = useState<{
    title: string;
    description: string;
  }>({ title: "", description: "" });
  const handleContentChange = (key: "title" | "description", value: string) => {
    setContent({ ...content, [key]: value });
  };
  const router = useRouter();
  const handleContentAdd = () => {
    if (!content.description || !content.title) {
      return toast.error("Please provide required description and title");
    }
    if (!rest.getValues("contents")) {
      rest.setValue("contents", [content]);
    } else {
      rest.setValue("contents", [...rest.getValues("contents"), content]);
    }
    rest.trigger("contents");
    setContent({ description: "", title: "" });
  };
  const { user } = useUserStore();
  const handleBlogAdd = async (values: blogSchema) => {
    try {
      setLoading(true);
      if (values.thumbnailImage && typeof values.thumbnailImage !== "string") {
        values.thumbnailImage = await uploadImageToCloudinary(
          values.thumbnailImage
        );
      }
      const subImages = [];
      for (const file of values.subImages) {
        if (typeof file !== "string") {
          const url = await uploadImageToCloudinary(file);
          if (url) {
            subImages.push(url);
          }
        } else {
          subImages.push(file);
        }
      }
      values.subImages = subImages as any;
      await axiosInstance.post(`/blogs/`, { ...values, user: user?._id + "" });
      toast.success("Blog post created successfully");
      router.push("/");
    } catch (error) {
      return toast.error(extractErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };
  console.log(errors);

  return (
    <main className="w-full py-8 relative">
      {/* <div className="size-16 flex-center fixed bottom-8 right-8 bg-primaryYellow p-4 rounded-full">
        <span>Save</span>
      </div> */}
      <form
        action=""
        className="container-width "
        onSubmit={rest.handleSubmit(handleBlogAdd)}
      >
        <section className="h-full w-full ">
          <div className="w-full">
            <h3 className="font-kubsans-medium text-2xl">
              Create new Blog post
            </h3>
          </div>
          <section className="w-full mt-4 p-5 border border-borderColor rounded-[3px] bg-cardBackground space-y-5">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormErrorBorder error={errors?.title?.message || ""}>
                <InputWithLabel
                  type="text"
                  placeHolder="Enter your blog title"
                  className="h-10"
                  {...register("title")}
                >
                  Title
                </InputWithLabel>
              </FormErrorBorder>
              <FormErrorBorder error={errors?.subTitle?.message || ""}>
                <InputWithLabel
                  type="text"
                  placeHolder="Enter your blog sub title"
                  className="h-10"
                  {...register("subTitle")}
                >
                  Sub title
                </InputWithLabel>
              </FormErrorBorder>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <input
                type="file"
                className="hidden"
                id="thumbnailImage"
                accept="image/*"
                name="thumbnailImage"
                onChange={(e) => {
                  register("thumbnailImage", {
                    value: e?.target?.files?.[0],
                  });
                  rest.trigger("thumbnailImage");
                }}
              />
              <FormErrorBorder
                error={errors?.thumbnailImage?.message || ("" as any)}
              >
                <label
                  htmlFor="thumbnailImage"
                  className="w-full h-96 rounded-[3px] p-3 bg-background flex-center cursor-pointer relative"
                >
                  {rest.watch("thumbnailImage") ? (
                    <div className="w-full h-full relative">
                      <button
                        type="button"
                        onClick={() =>
                          rest.setValue("thumbnailImage", undefined)
                        }
                        className=" absolute right-2 top-2 bg-red-600 rounded-[5px] flex-center size-7"
                      >
                        <Trash2 className="w-4" />
                      </button>
                      <img
                        alt=""
                        className="w-full h-full object-cover"
                        src={
                          typeof rest.watch("thumbnailImage") == "string"
                            ? rest.watch("thumbnailImage")
                            : URL.createObjectURL(rest.watch("thumbnailImage"))
                        }
                      />
                    </div>
                  ) : (
                    <>
                      <div className="flex-center flex-col gap-2 f">
                        <h2 className="text-center">
                          Click and Upload Main image
                        </h2>
                        <Image alt="" width={106} height={106} src={UploadTo} />
                      </div>
                    </>
                  )}
                </label>
              </FormErrorBorder>
              <FormErrorBorder error={errors?.subImages?.message || ""}>
                <div className="w-full p-3 h-96 rounded-[3px] bg-background grid grid-cols-2 gap-4  md:grid-cols-3 overflow-y-auto ">
                  <input
                    type="file"
                    className="hidden"
                    id="subImages"
                    name="subImages"
                    accept="image/*"
                    multiple
                    onChange={(e) => {
                      if (!rest.getValues("subImages")) {
                        rest.setValue("subImages", [
                          ...(e?.target?.files as unknown as File[]),
                        ] as any);
                      } else {
                        rest.setValue("subImages", [
                          ...rest.getValues("subImages"),
                          ...(e?.target?.files as unknown as File[]),
                        ]);
                      }
                    }}
                  />
                  {rest.watch("subImages")?.map((imge, I) => (
                    <div
                      key={I}
                      className="w-full cursor-pointer h-56 bg-cardBackground flex-center gap-2 flex-col relative"
                    >
                      <button
                        type="button"
                        onClick={() =>
                          rest.setValue(
                            "subImages",
                            rest
                              .getValues("subImages")
                              ?.filter((_, Id) => Id !== I) as [any, ...any[]]
                          )
                        }
                        className=" absolute right-2 top-2 bg-red-600 rounded-[5px] flex-center size-7"
                      >
                        <Trash2 className="w-4" />
                      </button>
                      <img
                        alt=""
                        className="w-full h-full object-cover"
                        src={
                          typeof imge == "string"
                            ? imge
                            : URL.createObjectURL(imge)
                        }
                      />
                    </div>
                  ))}
                  <label
                    htmlFor="subImages"
                    className="w-full cursor-pointer h-56 bg-cardBackground flex-center gap-2 flex-col"
                  >
                    <Image alt="" width={65} height={65} src={UploadTo} />
                    <span className="text-sm">Upload Sub images</span>
                  </label>
                </div>
              </FormErrorBorder>
            </div>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <div className="flex flex-col gap-4">
                <FormErrorBorder error={errors?.searchKeyword?.message || ""}>
                  <InputWithLabel
                    type="text"
                    placeHolder="Enter search keyword "
                    className="h-10"
                    {...register("searchKeyword")}
                  >
                    Search Keyword
                  </InputWithLabel>
                </FormErrorBorder>
                <FormErrorBorder error={errors?.category?.message || ""}>
                  <div className="w-full flex flex-col gap-2">
                    <label htmlFor="" className="text-sm">
                      Choose category
                    </label>
                    <Select
                      onValueChange={(value) => {
                        rest.setValue("category", value);
                        rest.trigger("category");
                      }}
                    >
                      <SelectTrigger className="w-full bg-background rounded-[5px]">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {blogCategories.map((cat, I) => (
                          <SelectItem key={cat + I} value={cat}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </FormErrorBorder>
                <FormErrorBorder error={errors?.publishStatus?.message || ""}>
                  <div className="w-full flex flex-col gap-2">
                    <label htmlFor="" className="text-sm">
                      Select Publish status
                    </label>
                    <Select
                      onValueChange={(value) => {
                        rest.setValue("publishStatus", value);
                        rest.trigger("publishStatus");
                      }}
                    >
                      <SelectTrigger className="w-full bg-background rounded-[5px]">
                        <SelectValue placeholder="Select publish status" />
                      </SelectTrigger>
                      <SelectContent>
                        {["published", "unpublished"].map((cat, I) => (
                          <SelectItem
                            key={cat + I}
                            className="capitalize"
                            value={cat}
                          >
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </FormErrorBorder>
                <FormErrorBorder error={errors?.contents?.message || ""}>
                  <div className="bg-background rounded-[5px] border border-borderColor p-4 flex flex-col gap-2">
                    <div className="w-full my-1">
                      <h5 className="font-kubsans-medium">
                        Add Table of contents
                      </h5>
                    </div>
                    <Input
                      onChange={(e) =>
                        handleContentChange("title", e.target.value)
                      }
                      value={content.title}
                      className="w-full bg-cardBackground rounded-[5px]"
                      placeholder="Enter Content title"
                    />
                    <Textarea
                      onChange={(e) =>
                        handleContentChange("description", e.target.value)
                      }
                      value={content.description}
                      className="w-full rounded-[5px] bg-cardBackground"
                      placeholder="Enter content description "
                    />
                    <div className="w-full flex justify-end">
                      <Button
                        onClick={handleContentAdd}
                        className="bg-primaryYellow rounded-[5px] mt-1"
                        type="button"
                      >
                        Add content
                      </Button>
                    </div>
                  </div>
                </FormErrorBorder>
                <FormErrorBorder error={errors?.description?.message || ""}>
                  <Textarea
                    {...register("description")}
                    className="w-full bg-background rounded-[5px]"
                    placeholder="Add description for blog"
                  />
                </FormErrorBorder>
              </div>

              <div className="bg-background w-full overflow-y-auto max-h-[560px] p-4 space-y-2">
                {rest.watch("contents")?.map((content, I) => (
                  <div
                    key={I}
                    className="flex flex-col gap-2 py-4 px-4 border-2 rounded-[5px] border-borderColor relative"
                  >
                    <button
                      type="button"
                      onClick={() => {
                        rest.setValue(
                          "contents",
                          rest
                            .getValues("contents")
                            ?.filter((_, Id) => Id !== I) as any
                        );
                        rest.trigger("contents");
                      }}
                      className=" absolute right-2 top-2 bg-red-600 rounded-[5px] flex-center size-7"
                    >
                      <Trash2 className="w-4" />
                    </button>
                    <h3 className="font-kubsans-medium">{content.title}</h3>
                    <div>
                      <p className="font-kubsans-thin text-sm">
                        {content.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full flex justify-end">
              <LoaderButton isLoading={loading}>Submit Blog post</LoaderButton>
            </div>
          </section>
        </section>
      </form>
    </main>
  );
}
