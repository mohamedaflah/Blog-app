import InputWithLabel from "@/components/custom/inputwith-lable";
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
import { Trash2 } from "lucide-react";
import Image from "next/image";

export default function CreateBlogPost() {
  return (
    <main className="w-full py-8">
      <form action="" className="container-width ">
        <section className="h-full w-full ">
          <div className="w-full">
            <h3 className="font-kubsans-medium text-2xl">
              Create new Blog post
            </h3>
          </div>
          <section className="w-full mt-4 p-5 border border-borderColor rounded-[3px] bg-cardBackground space-y-5">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputWithLabel
                type="text"
                placeHolder="Enter your blog title"
                className="h-10"
              >
                Title
              </InputWithLabel>
              <InputWithLabel
                type="text"
                placeHolder="Enter your blog sub title"
                className="h-10"
              >
                Sub title
              </InputWithLabel>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <label className="w-full h-96 rounded-[3px] p-3 bg-background flex-center">
                <div className="flex-center flex-col gap-2 f">
                  <h2 className="text-center">Click and Upload Main image</h2>
                  <Image alt="" width={106} height={106} src={UploadTo} />
                </div>
              </label>
              <div className="w-full p-3 h-96 rounded-[3px] bg-background grid grid-cols-2  md:grid-cols-3 overflow-y-auto ">
                <div className="w-full h-56 bg-cardBackground flex-center gap-2 flex-col">
                  <Image alt="" width={65} height={65} src={UploadTo} />
                  <span className="text-sm">Upload Sub images</span>
                </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <div className="flex flex-col gap-4">
                <InputWithLabel
                  type="text"
                  placeHolder="Enter search keyword "
                  className="h-10"
                >
                  Search Keyword
                </InputWithLabel>
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="" className="text-sm">
                    Choose category
                  </label>
                  <Select>
                    <SelectTrigger className="w-full bg-background rounded-[5px]">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {["Medical"].map((cat, I) => (
                        <SelectItem key={cat + I} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="" className="text-sm">
                    Select Publish status
                  </label>
                  <Select>
                    <SelectTrigger className="w-full bg-background rounded-[5px]">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {["Publish", "Unpublish"].map((cat, I) => (
                        <SelectItem key={cat + I} value={cat}>
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="bg-background rounded-[5px] border border-borderColor p-4 flex flex-col gap-2">
                  <div className="w-full my-1">
                    <h5 className="font-kubsans-medium">
                      Add Table of contents
                    </h5>
                  </div>
                  <Input
                    className="w-full bg-cardBackground rounded-[5px]"
                    placeholder="Enter Content title"
                  />
                  <Textarea
                    className="w-full rounded-[5px] bg-cardBackground"
                    placeholder="Enter content description "
                  />
                  <div className="w-full flex justify-end">
                    <Button
                      className="bg-primaryYellow rounded-[5px] mt-1"
                      type="button"
                    >
                      Add content
                    </Button>
                  </div>
                </div>
                <Textarea
                  className="w-full bg-background rounded-[5px]"
                  placeholder="Add description for blog"
                />
              </div>
              <div className="bg-background w-full overflow-y-auto max-h-[560px] p-4 space-y-2">
                <div className="flex flex-col gap-2 py-4 px-4 border-2 rounded-[5px] border-borderColor relative">
                  <button
                    type="button"
                    className=" absolute right-2 top-2 bg-red-600 rounded-[5px] flex-center size-7"
                  >
                    <Trash2 className="w-4" />
                  </button>
                  <h3 className="font-kubsans-medium">Medical someting</h3>
                  <div>
                    <p className="font-kubsans-thin text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nulla accusamus ex inventore mollitia eligendi suscipit
                      harum libero, non dolores error.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </form>
    </main>
  );
}
