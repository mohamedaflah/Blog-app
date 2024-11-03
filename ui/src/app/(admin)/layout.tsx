import { LogoImage } from "@/constants/assets";
import { BookUser, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default function AdminLayout({children}:PropsWithChildren) {
  return (
    <main className="h-screen w-full relative">
      <div className="w-full h-full flex ">
        <aside className="max-h-screen overflow-y-auto min-w-56 border-r border-borderColor ">
          <div className="px-4 py-5 border-b-2 border-borderColor flex justify-between items-center">
            <Image alt="" src={LogoImage} width={100} height={10} />
          </div>
          <div className="px-4 py-5 space-y-2">
            <Link
              href={"/admin/"}
              className="w-full h-10 text-sm flex items-center gap-2  rounded-[3px] px-3 bg-grayBackground"
            >
              <Users className="w-5" /> <span>Users</span>
            </Link>
            {/* <Link
              href={"/admin/blogs"}
              className="w-full h-10 text-sm flex items-center gap-2  rounded-[3px] px-3 bg-grayBackground"
            >
              <BookUser className="w-5" /> <span>Blogs</span>
            </Link> */}
          </div>
        </aside>
        <main className="w-full h-full">{children}</main>
      </div>
    </main>
  );
}
