/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { IUser } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { ArrowUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Switch } from "../ui/switch";
import { InvalidateQueryFilters, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "@/api/api.config";
import { toast } from "sonner";
import { extractErrorMessage } from "@/lib/extractError";

export const userTablColumn: ColumnDef<IUser>[] = [
  {
    accessorKey: "fullname",
    // header: "Name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className=""
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Full name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="px-4">{row.getValue("fullname")}</div>;
    },
  },
  {
    accessorKey: "email",
    // header: "Email",
    header: ({}) => {
      return (
        <Button
          variant="ghost"
          // onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className=""
        >
          Email address
          {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="px-4">{row.getValue("email")}</div>;
    },
  },
  {
    accessorKey: "designation",
    // header: "Designation",
    header: ({}) => {
      return (
        <Button
          variant="ghost"
          // onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Designtation
          {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className="px-4">{row.getValue("fullname")}</div>;
    },
  },
  {
    accessorKey: "status",
    // header: "Designation",
    header: ({}) => {
      return (
        <Button
          variant="ghost"
          // onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <div className="px-4 flex">
          <div
            className={cn("h-7 px-2 rounded-[10px]  flex-center text-sm", {
              "bg-green-500/50": row.getValue("status"),
              "bg-red-500/50": !row.getValue("status"),
            })}
          >
            {row.getValue("status") ? "Active" : "Blocked"}
          </div>
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
          Update status
          {/* <ArrowUpDown className="ml-2 h-4 w-4" /> */}
        </Button>
      );
    },
    cell: ({ row }) => {
      const queryClient = useQueryClient();
      const handleBlockUnblock = async (value: boolean) => {
        try {
          await axiosInstance.patch(`/user/`, {
            userId: row.original?._id,
            status: value,
          });
          queryClient.invalidateQueries([
            "users-admin",
          ] as InvalidateQueryFilters);
          toast.success("User status updated successfully");
          location.reload();
        } catch (error) {
          toast.error(extractErrorMessage(error));
        }
      };
      return (
        <div className="px-4 flex">
          <Switch
            defaultChecked={Boolean(row.getValue("status"))}
            onCheckedChange={handleBlockUnblock}
          />
        </div>
      );
    },
  },
];
