import { Link } from "react-router-dom";
import { Shield, Users, FileText, AlertTriangle, ShieldAlert, LayoutDashboard } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { SidebarProvider, SidebarTrigger, Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, useSidebar } from "@/components/ui/sidebar";
import { NavLink } from "@/components/NavLink";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area } from "recharts";

const stats = [
  { title: "Total Workers", value: "2,847", icon: Users, color: "text-primary" },
  { title: "Active Policies", value: "1,923", icon: FileText, color: "text-success" },
  { title: "Total Claims", value: "342", icon: AlertTriangle, color: "text-warning" },
  { title: "Fraud Alerts", value: "12", icon: ShieldAlert, color: "text-destructive" },
];

const riskData = [
  { month: "Jan", high: 12, medium: 25, low: 63 },
  { month: "Feb", high: 8, medium: 30, low: 62 },
  { month: "Mar", high: 15, medium: 22, low: 63 },
  { month: "Apr", high: 10, medium: 28, low: 62 },
  { month: "May", high: 18, medium: 20, low: 62 },
  { month: "Jun", high: 14, medium: 26, low: 60 },
];

const claimsOverview = [
  { month: "Jan", approved: 45, rejected: 8, pending: 12 },
  { month: "Feb", approved: 52, rejected: 5, pending: 15 },
  { month: "Mar", approved: 38, rejected: 10, pending: 8 },
  { month: "Apr", approved: 60, rejected: 7, pending: 20 },
  { month: "May", approved: 48, rejected: 12, pending: 10 },
  { month: "Jun", approved: 55, rejected: 6, pending: 14 },
];

const envTrends = [
  { month: "Jan", aqi: 120, rainfall: 5, temperature: 28 },
  { month: "Feb", aqi: 140, rainfall: 8, temperature: 30 },
  { month: "Mar", aqi: 100, rainfall: 45, temperature: 34 },
  { month: "Apr", aqi: 90, rainfall: 60, temperature: 36 },
  { month: "May", aqi: 110, rainfall: 80, temperature: 38 },
  { month: "Jun", aqi: 85, rainfall: 200, temperature: 32 },
];

const recentClaims = [
  { id: "CLM-342", worker: "Rahul S.", policy: "Standard", date: "2026-03-08", amount: "₹2,500", status: "Approved", risk: "Low" },
  { id: "CLM-341", worker: "Priya M.", policy: "Premium", date: "2026-03-07", amount: "₹4,200", status: "Pending", risk: "Medium" },
  { id: "CLM-340", worker: "Amit K.", policy: "Basic", date: "2026-03-06", amount: "₹1,500", status: "Rejected", risk: "High" },
  { id: "CLM-339", worker: "Sneha P.", policy: "Standard", date: "2026-03-05", amount: "₹3,000", status: "Approved", risk: "Low" },
  { id: "CLM-338", worker: "Vikram R.", policy: "Premium", date: "2026-03-04", amount: "₹5,000", status: "Pending", risk: "Medium" },
];

function AdminSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <div className="p-4 flex items-center gap-2">
          <Shield className="h-6 w-6 text-sidebar-primary flex-shrink-0" />
          {!collapsed && <span className="font-bold font-display text-sidebar-foreground text-lg">Admin</span>}
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Admin</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/admin" end className="hover:bg-sidebar-accent/50" activeClassName="bg-sidebar-accent text-sidebar-primary font-medium">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    {!collapsed && <span>Dashboard</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default function Admin() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AdminSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-14 flex items-center border-b border-border px-4 bg-card">
            <SidebarTrigger className="mr-4" />
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">← Back to Home</Link>
          </header>
          <main className="flex-1 p-6 bg-muted/20">
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold font-display text-foreground">Admin Dashboard</h1>
                <p className="text-muted-foreground">Platform overview and analytics</p>
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

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="border-border/50">
                  <CardHeader><CardTitle className="text-base font-display">Risk Analytics</CardTitle></CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={220}>
                      <BarChart data={riskData}>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                        <XAxis dataKey="month" className="text-xs" />
                        <YAxis className="text-xs" />
                        <Tooltip />
                        <Bar dataKey="high" fill="hsl(0, 84%, 60%)" stackId="a" name="High" />
                        <Bar dataKey="medium" fill="hsl(38, 92%, 50%)" stackId="a" name="Medium" />
                        <Bar dataKey="low" fill="hsl(142, 76%, 36%)" stackId="a" radius={[4, 4, 0, 0]} name="Low" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardHeader><CardTitle className="text-base font-display">Claims Overview</CardTitle></CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={220}>
                      <LineChart data={claimsOverview}>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                        <XAxis dataKey="month" className="text-xs" />
                        <YAxis className="text-xs" />
                        <Tooltip />
                        <Line type="monotone" dataKey="approved" stroke="hsl(142, 76%, 36%)" strokeWidth={2} name="Approved" />
                        <Line type="monotone" dataKey="rejected" stroke="hsl(0, 84%, 60%)" strokeWidth={2} name="Rejected" />
                        <Line type="monotone" dataKey="pending" stroke="hsl(38, 92%, 50%)" strokeWidth={2} name="Pending" />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardHeader><CardTitle className="text-base font-display">Environmental Trends</CardTitle></CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={220}>
                      <AreaChart data={envTrends}>
                        <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                        <XAxis dataKey="month" className="text-xs" />
                        <YAxis className="text-xs" />
                        <Tooltip />
                        <Area type="monotone" dataKey="aqi" fill="hsl(221, 83%, 53%)" fillOpacity={0.2} stroke="hsl(221, 83%, 53%)" name="AQI" />
                        <Area type="monotone" dataKey="rainfall" fill="hsl(199, 89%, 48%)" fillOpacity={0.2} stroke="hsl(199, 89%, 48%)" name="Rainfall (mm)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-border/50">
                <CardHeader><CardTitle className="text-base font-display">Recent Claims Monitoring</CardTitle></CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Claim ID</TableHead>
                        <TableHead>Worker</TableHead>
                        <TableHead>Policy</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Risk</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentClaims.map((c) => (
                        <TableRow key={c.id}>
                          <TableCell className="font-mono text-sm">{c.id}</TableCell>
                          <TableCell>{c.worker}</TableCell>
                          <TableCell>{c.policy}</TableCell>
                          <TableCell>{c.date}</TableCell>
                          <TableCell>{c.amount}</TableCell>
                          <TableCell>
                            <Badge variant={c.risk === "High" ? "destructive" : c.risk === "Medium" ? "secondary" : "default"}>
                              {c.risk}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant={c.status === "Approved" ? "default" : c.status === "Rejected" ? "destructive" : "secondary"}>
                              {c.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
