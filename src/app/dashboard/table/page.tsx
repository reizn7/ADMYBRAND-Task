"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { saveAs } from "file-saver";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface User {
  name: string;
  email: string;
  status: string;
}

const PAGE_SIZE = 3;
const STATUSES = ["Active", "Inactive", "Pending"];

export default function TablePage() {
  const [users, setUsers] = useState<User[]>([
    { name: "Alice Johnson", email: "alice@example.com", status: "Active" },
    { name: "Bob Smith", email: "bob@example.com", status: "Inactive" },
    { name: "Charlie Ray", email: "charlie@example.com", status: "Active" },
    { name: "Daisy Patel", email: "daisy@example.com", status: "Pending" },
    { name: "Ethan Wong", email: "ethan@example.com", status: "Active" },
    { name: "Fiona Lee", email: "fiona@example.com", status: "Inactive" },
    { name: "George King", email: "george@example.com", status: "Pending" },
  ]);
  const [sortKey, setSortKey] = useState<keyof User>("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [filter, setFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [page, setPage] = useState(1);

  // Simulate real-time status updates
  useEffect(() => {
    const interval = setInterval(() => {
      setUsers(prev =>
        prev.map(user =>
          Math.random() > 0.5
            ? { ...user, status: STATUSES[Math.floor(Math.random() * STATUSES.length)] }
            : user
        )
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSort = (key: keyof User) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
    setPage(1); // reset to first page
  };

  const filteredUsers = users.filter(user =>
    (user.name.toLowerCase().includes(filter.toLowerCase()) ||
      user.email.toLowerCase().includes(filter.toLowerCase())) &&
    (statusFilter ? user.status === statusFilter : true)
  );

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if (a[sortKey] < b[sortKey]) return sortOrder === "asc" ? -1 : 1;
    if (a[sortKey] > b[sortKey]) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(sortedUsers.length / PAGE_SIZE);
  const paginatedUsers = sortedUsers.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handlePrev = () => setPage(page > 1 ? page - 1 : 1);
  const handleNext = () => setPage(page < totalPages ? page + 1 : totalPages);
  const handlePageClick = (pageNumber: number) => setPage(pageNumber);

  const exportCSV = () => {
    const headers = "Name,Email,Status\n";
    const rows = sortedUsers.map(user => `${user.name},${user.email},${user.status}`).join("\n");
    const blob = new Blob([headers + rows], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "user_data.csv");
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("User Data Table", 14, 16);

    const tableColumn = ["Name", "Email", "Status"];
    const tableRows = sortedUsers.map(user => [user.name, user.email, user.status]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save("user_data.pdf");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Data Table</h2>

      <div className="flex flex-wrap items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Search name or email..."
          value={filter}
          onChange={e => { setFilter(e.target.value); setPage(1); }}
          className="border px-3 py-1.5 rounded-md text-sm"
        />
        <select
          value={statusFilter}
          onChange={e => { setStatusFilter(e.target.value); setPage(1); }}
          className="border px-3 py-1.5 rounded-md text-sm"
        >
          <option value="">All Status</option>
          {STATUSES.map(status => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>
        <Button onClick={exportCSV}>Export CSV</Button>
        <Button onClick={exportPDF} variant="outline">Export PDF</Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead onClick={() => handleSort("name")} className="cursor-pointer">
                    Name {sortKey === "name" && (sortOrder === "asc" ? "▲" : "▼")}
                  </TableHead>
                  <TableHead onClick={() => handleSort("email")} className="cursor-pointer">
                    Email {sortKey === "email" && (sortOrder === "asc" ? "▲" : "▼")}
                  </TableHead>
                  <TableHead onClick={() => handleSort("status")} className="cursor-pointer">
                    Status {sortKey === "status" && (sortOrder === "asc" ? "▲" : "▼")}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedUsers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center py-6 text-gray-500">
                      No data found.
                    </TableCell>
                  </TableRow>
                ) : (
                  paginatedUsers.map((user, index) => (
                    <TableRow key={index}>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.status}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Pagination Controls */}
      <div className="flex items-center justify-between mt-4 flex-wrap gap-2">
        <Button onClick={handlePrev} disabled={page === 1} variant="outline">
          Prev
        </Button>

        <div className="flex flex-wrap gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
            <Button
              key={p}
              onClick={() => handlePageClick(p)}
              variant={p === page ? "default" : "outline"}
              className="w-10 p-0"
            >
              {p}
            </Button>
          ))}
        </div>

        <Button onClick={handleNext} disabled={page === totalPages} variant="outline">
          Next
        </Button>
      </div>
    </div>
  );
}
