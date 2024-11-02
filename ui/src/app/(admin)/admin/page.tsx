"use client";
import { DataTable } from "@/components/data-table";
import { userTablColumn } from "@/components/table-columns/user-column";
import { useGetAllUsersForAdmin } from "@/hooks/useGetAllusers";

export default function AdminPage() {
  const { data: users } = useGetAllUsersForAdmin();

  return (
    <main className="w-full h-full overflow-auto py-10">
      <button></button>
      <section className="container-width">
        <DataTable columns={userTablColumn} data={users ? users : []} />
      </section>
    </main>
  );
}
