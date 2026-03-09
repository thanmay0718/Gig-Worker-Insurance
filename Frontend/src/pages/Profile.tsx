import { useState } from "react";
import { User, Mail, MapPin, Briefcase, IndianRupee, Clock, Edit } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import DashboardLayout from "@/components/DashboardLayout";

const profileData = {
  name: "Rahul Sharma",
  email: "rahul.sharma@email.com",
  city: "Mumbai",
  platform: "Swiggy",
  avgIncome: "₹850",
  workingHours: "10 AM – 10 PM",
};

const fields = [
  { icon: Mail, label: "Email", value: profileData.email },
  { icon: MapPin, label: "City", value: profileData.city },
  { icon: Briefcase, label: "Platform", value: profileData.platform },
  { icon: IndianRupee, label: "Avg Daily Income", value: profileData.avgIncome },
  { icon: Clock, label: "Working Hours", value: profileData.workingHours },
];

export default function Profile() {
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    setOpen(false);
    toast({ title: "Profile Updated!", description: "Your profile has been saved." });
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-2xl">
        <div>
          <h1 className="text-2xl font-bold font-display text-foreground">Profile</h1>
          <p className="text-muted-foreground">Manage your worker profile</p>
        </div>

        <Card className="border-border/50">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">RS</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="font-display">{profileData.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{profileData.platform} Delivery Partner</p>
              </div>
            </div>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <Edit className="h-4 w-4" /> Edit Profile
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="font-display">Edit Profile</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 pt-2">
                  <div className="space-y-2">
                    <Label>Name</Label>
                    <Input defaultValue={profileData.name} />
                  </div>
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input defaultValue={profileData.email} />
                  </div>
                  <div className="space-y-2">
                    <Label>City</Label>
                    <Input defaultValue={profileData.city} />
                  </div>
                  <div className="space-y-2">
                    <Label>Platform</Label>
                    <Select defaultValue={profileData.platform}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Swiggy">Swiggy</SelectItem>
                        <SelectItem value="Zomato">Zomato</SelectItem>
                        <SelectItem value="Uber">Uber</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Avg Daily Income (₹)</Label>
                    <Input defaultValue="850" type="number" />
                  </div>
                  <div className="space-y-2">
                    <Label>Working Hours</Label>
                    <Input defaultValue={profileData.workingHours} />
                  </div>
                  <Button className="w-full" onClick={handleSave}>Save Changes</Button>
                </div>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {fields.map((f, i) => (
                <div key={i} className="flex items-center gap-3 py-2 border-b border-border/50 last:border-0">
                  <f.icon className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-sm text-muted-foreground w-36">{f.label}</span>
                  <span className="text-sm font-medium text-foreground">{f.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
