'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { saveAs } from 'file-saver';
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';

interface User {
  name: string;
  email: string;
  status: string;
}

export default function TablePage() {
  const [users, setUsers] = useState<User[]>([
    { name: "Alice Johnson", email: "alice@example.com", status: "Active" },
    { name: "Bob Smith", email: "bob@example.com", status: "Inactive" },
    { name: "Charlie Ray", email: "charlie@example.com", status: "Active" },
    { name: "Daisy Patel", email: "daisy@example.com", status: "Pending" },
    { name: "Ethan Wong", email: "ethan@example.com", status: "Active" },
  ]);

  // Real-time update simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setUsers(prev =>
        prev.map(user =>
          Math.random() > 0.5 ? { ...user, status: "Active" } : user
        )
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Export as CSV
  const exportCSV = () => {
    const headers = "Name,Email,Status\n";
    const rows = users.map(user => `${user.name},${user.email},${user.status}`).join("\n");
    const blob = new Blob([headers + rows], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "user_data.csv");
  };

  // Export as PDF
  const exportPDF = () => {
  const doc = new jsPDF();
  doc.text("User Data Table", 14, 16);

  const tableColumn = ["Name", "Email", "Status"];
  const tableRows = users.map(user => [user.name, user.email, user.status]);

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

      <div className="flex gap-2">
        <Button onClick={exportCSV}>Export as CSV</Button>
        <Button onClick={exportPDF} variant="outline">Export as PDF</Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
