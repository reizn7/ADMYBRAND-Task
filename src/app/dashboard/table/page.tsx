import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function TablePage() {
  const users = [
    { name: "Alice Johnson", email: "alice@example.com", status: "Active" },
    { name: "Bob Smith", email: "bob@example.com", status: "Inactive" },
    { name: "Charlie Ray", email: "charlie@example.com", status: "Active" },
    { name: "Daisy Patel", email: "daisy@example.com", status: "Pending" },
    { name: "Ethan Wong", email: "ethan@example.com", status: "Active" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Data Table</h2>

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
