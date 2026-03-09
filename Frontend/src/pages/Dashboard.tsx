import { Shield, DollarSign, TrendingUp, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import DashboardLayout from "@/components/DashboardLayout";

const stats = [
  { title: "Active Policy", value: "Standard Plan", icon: Shield, color: "text-primary" },
  { title: "Weekly Premium", value: "₹40", icon: DollarSign, color: "text-success" },
  { title: "Protected Earnings", value: "₹12,500", icon: TrendingUp, color: "text-info" },
  { title: "Recent Claim", value: "Approved", icon: CheckCircle, color: "text-success" },
];

const earningsData = [
  { month: "Jan", protected: 10000, earned: 12000 },
  { month: "Feb", protected: 11000, earned: 11500 },
  { month: "Mar", protected: 12500, earned: 13000 },
  { month: "Apr", protected: 9500, earned: 14000 },
  { month: "May", protected: 13000, earned: 12000 },
  { month: "Jun", protected: 11500, earned: 15000 },
];

const claimData = [
  { month: "Jan", claims: 1 },
  { month: "Feb", claims: 0 },
  { month: "Mar", claims: 2 },
  { month: "Apr", claims: 1 },
  { month: "May", claims: 0 },
  { month: "Jun", claims: 1 },
];

const recentActivity = [
  { id: "CLM-001", event: "Claim Approved", date: "2026-03-08", amount: "₹2,500", status: "Approved" },
  { id: "POL-012", event: "Policy Renewed", date: "2026-03-05", amount: "₹40", status: "Active" },
  { id: "PAY-045", event: "Payout Received", date: "2026-03-03", amount: "₹2,500", status: "Completed" },
  { id: "CLM-002", event: "Claim Submitted", date: "2026-02-28", amount: "₹1,800", status: "Pending" },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold font-display text-foreground">Worker Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Rahul! Here's your protection overview.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <Card key={i} className="border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">{s.title}</span>
                  <s.icon className={`h-5 w-5 ${s.color}`} />
                </div>
                <p className="text-xl font-bold font-display text-foreground">{s.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-base font-display">Monthly Earnings Protection</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={earningsData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="month" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip />
                  <Bar dataKey="earned" fill="hsl(221, 83%, 53%)" radius={[4, 4, 0, 0]} name="Earned" />
                  <Bar dataKey="protected" fill="hsl(199, 89%, 48%)" radius={[4, 4, 0, 0]} name="Protected" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-base font-display">Claim History</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={claimData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="month" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip />
                  <Line type="monotone" dataKey="claims" stroke="hsl(221, 83%, 53%)" strokeWidth={2} dot={{ fill: "hsl(221, 83%, 53%)" }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-base font-display">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Event</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentActivity.map((a) => (
                  <TableRow key={a.id}>
                    <TableCell className="font-mono text-sm">{a.id}</TableCell>
                    <TableCell>{a.event}</TableCell>
                    <TableCell>{a.date}</TableCell>
                    <TableCell>{a.amount}</TableCell>
                    <TableCell>
                      <Badge variant={a.status === "Approved" || a.status === "Active" || a.status === "Completed" ? "default" : "secondary"}>
                        {a.status}
                      </Badge>
                    </TableCell>
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
