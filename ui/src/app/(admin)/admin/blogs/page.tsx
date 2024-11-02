"use client";
import { DataTable } from "@/components/data-table";
import { blogColumn } from "@/components/table-columns/blog-columns";
import { useGetAllBLogsAdmin } from "@/hooks/useGetAllBlogsForAdmin";

export default function BlogsPage() {
  const { data: blogs } = useGetAllBLogsAdmin();
  return (
    <main className="w-full h-full overflow-auto py-10">
      <section className="container-width">
        <DataTable columns={blogColumn} data={blogs?blogs:[]} />
      </section>
    </main>
  );
}
