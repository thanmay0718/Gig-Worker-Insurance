import { CreditCard, IndianRupee } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import DashboardLayout from "@/components/DashboardLayout";

const payments = [
  { id: "PAY-045", date: "2026-03-03", type: "Payout", amount: "₹2,500", status: "Completed" },
  { id: "PAY-044", date: "2026-02-24", type: "Premium", amount: "₹40", status: "Completed" },
  { id: "PAY-043", date: "2026-02-17", type: "Premium", amount: "₹40", status: "Completed" },
  { id: "PAY-042", date: "2026-02-10", type: "Payout", amount: "₹3,200", status: "Completed" },
  { id: "PAY-041", date: "2026-02-03", type: "Premium", amount: "₹40", status: "Completed" },
];

export default function Payments() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold font-display text-foreground">Payments</h1>
          <p className="text-muted-foreground">View your payment and payout history</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
          <Card className="border-border/50">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Total Paid</span>
                <CreditCard className="h-5 w-5 text-primary" />
              </div>
              <p className="text-xl font-bold font-display text-foreground">₹680</p>
            </CardContent>
          </Card>
          <Card className="border-border/50">
            <CardContent className="p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Total Received</span>
                <IndianRupee className="h-5 w-5 text-success" />
              </div>
              <p className="text-xl font-bold font-display text-foreground">₹8,200</p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-base font-display">Transaction History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell className="font-mono text-sm">{p.id}</TableCell>
                    <TableCell>{p.date}</TableCell>
                    <TableCell>{p.type}</TableCell>
                    <TableCell>{p.amount}</TableCell>
                    <TableCell><Badge variant="default">{p.status}</Badge></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
