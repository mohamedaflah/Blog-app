/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { IBlogPost } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { ArrowUpDown, Edit3, Eye, Trash2Icon } from "lucide-react";
import Link from "next/link";
// import { cn } from "@/lib/utils";

export const blogColumn: ColumnDef<IBlogPost>[] = [
  {
    accessorKey: "title",
    // header: "Name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className=""
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="px-4 line-clamp-1">{row.getValue("title")}</div>;
    },
  },
  {
    accessorKey: "thumbnailImage",
    // header: "Email",
    header: ({}) => {
      return (
        <Button
          variant="ghost"
          // onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className=""
        >
          Image
          {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="px-4">
          <img
            src={row.getValue("thumbnailImage")}
            className="size-8 rounded-[3px] object-cover"
            alt=""
          />
        </div>
      );
    },
  },
  {
    accessorKey: "category",
    // header: "Designation",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category
          {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="px-4">{row.getValue("category")}</div>;
    },
  },
  {
    accessorKey: "userDetail",
    // header: "Designation",
    header: ({}) => {
      return (
        <Button
          variant="ghost"
          // onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Author
          {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="px-4 flex line-clamp-1">
          {row.original.userDetail?.fullname}
        </div>
      );
    },
  },
  {
    accessorKey: "_id",
    // header: "Designation",
    header: ({}) => {
      return (
        <Button
          variant="ghost"
          // onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Actions
          {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="px-4 flex gap-2">
          <Link
            href={`/blog/${row.original._id}`}
            className="size-8 flex-center rounded-[3px] bg-green-500"
          >
            <Eye className="w-4" />
          </Link>
          <Link
            href={`/edit-blog/${row.original._id}`}
            className="size-8 flex-center rounded-[3px] bg-blue-500"
          >
            <Edit3 className="w-4" />
          </Link>
          <button className="size-8 flex-center rounded-[3px] bg-red-500">
            <Trash2Icon className="w-4" />
          </button>
        </div>
      );
    },
  },
];
