import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Upload } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import DashboardLayout from "@/components/DashboardLayout";

const claimHistory = [
  { id: "CLM-001", date: "2026-03-08", status: "Approved", amount: "₹2,500" },
  { id: "CLM-002", date: "2026-02-28", status: "Pending", amount: "₹1,800" },
  { id: "CLM-003", date: "2026-02-15", status: "Approved", amount: "₹3,200" },
  { id: "CLM-004", date: "2026-01-20", status: "Rejected", amount: "₹1,500" },
  { id: "CLM-005", date: "2026-01-10", status: "Approved", amount: "₹2,000" },
];

const statusVariant = (s: string) => {
  if (s === "Approved") return "default";
  if (s === "Rejected") return "destructive";
  return "secondary";
};

export default function Claims() {
  const [date, setDate] = useState<Date>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Claim Submitted!", description: "Your claim has been submitted for review." });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold font-display text-foreground">Claims</h1>
          <p className="text-muted-foreground">Submit and track your insurance claims</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-base font-display">Submit New Claim</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label>Policy ID</Label>
                  <Input placeholder="e.g. POL-012" />
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <Textarea placeholder="Describe the incident..." rows={3} />
                </div>
                <div className="space-y-2">
                  <Label>Incident Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}>
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={date} onSelect={setDate} className="p-3 pointer-events-auto" />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label>Upload Proof (optional)</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 transition-colors">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                  </div>
                </div>
                <Button type="submit" className="w-full">Submit Claim</Button>
              </form>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-base font-display">Claim History</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Claim ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {claimHistory.map((c) => (
                    <TableRow key={c.id}>
                      <TableCell className="font-mono text-sm">{c.id}</TableCell>
                      <TableCell>{c.date}</TableCell>
                      <TableCell>
                        <Badge variant={statusVariant(c.status)}>{c.status}</Badge>
                      </TableCell>
                      <TableCell>{c.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
