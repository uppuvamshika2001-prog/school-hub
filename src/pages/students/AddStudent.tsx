import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Save, User, Phone, MapPin, Heart, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  bloodGroup: string;
  class: string;
  section: string;
  address: string;
  guardianName: string;
  guardianPhone: string;
  guardianEmail: string;
  guardianRelation: string;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  gender: "",
  bloodGroup: "",
  class: "",
  section: "",
  address: "",
  guardianName: "",
  guardianPhone: "",
  guardianEmail: "",
  guardianRelation: "",
};

export default function AddStudent() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to a database
    toast({
      title: "Student Added Successfully!",
      description: `${formData.firstName} ${formData.lastName} has been enrolled.`,
    });
    navigate("/students");
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/students")}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-foreground md:text-3xl">
            Add New Student
          </h1>
          <p className="text-muted-foreground mt-1">
            Enter the student's information below
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="rounded-xl bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary">
              <User className="h-5 w-5 text-primary-foreground" />
            </div>
            <h2 className="text-lg font-semibold">Personal Information</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter first name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter last name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="student@school.edu"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="9876543210"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth *</Label>
              <Input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label>Gender *</Label>
              <Select
                value={formData.gender}
                onValueChange={(value) => handleSelectChange("gender", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Academic Information */}
        <div className="rounded-xl bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-secondary">
              <GraduationCap className="h-5 w-5 text-secondary-foreground" />
            </div>
            <h2 className="text-lg font-semibold">Academic Information</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <Label>Class *</Label>
              <Select
                value={formData.class}
                onValueChange={(value) => handleSelectChange("class", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select class" />
                </SelectTrigger>
                <SelectContent>
                  {[...Array(5)].map((_, i) => (
                    <SelectItem key={i} value={String(8 + i)}>
                      Class {8 + i}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Section *</Label>
              <Select
                value={formData.section}
                onValueChange={(value) => handleSelectChange("section", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select section" />
                </SelectTrigger>
                <SelectContent>
                  {["A", "B", "C", "D"].map((section) => (
                    <SelectItem key={section} value={section}>
                      Section {section}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Blood Group</Label>
              <Select
                value={formData.bloodGroup}
                onValueChange={(value) => handleSelectChange("bloodGroup", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select blood group" />
                </SelectTrigger>
                <SelectContent>
                  {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((bg) => (
                    <SelectItem key={bg} value={bg}>
                      {bg}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="rounded-xl bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-success">
              <MapPin className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-lg font-semibold">Address</h2>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Full Address</Label>
            <Textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter complete address"
              rows={3}
            />
          </div>
        </div>

        {/* Guardian Information */}
        <div className="rounded-xl bg-card p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-warning">
              <Heart className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-lg font-semibold">Guardian Information</h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="guardianName">Guardian Name *</Label>
              <Input
                id="guardianName"
                name="guardianName"
                value={formData.guardianName}
                onChange={handleInputChange}
                placeholder="Enter guardian's name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label>Relation</Label>
              <Select
                value={formData.guardianRelation}
                onValueChange={(value) =>
                  handleSelectChange("guardianRelation", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select relation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Father">Father</SelectItem>
                  <SelectItem value="Mother">Mother</SelectItem>
                  <SelectItem value="Guardian">Guardian</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="guardianPhone">Guardian Phone *</Label>
              <Input
                id="guardianPhone"
                name="guardianPhone"
                type="tel"
                value={formData.guardianPhone}
                onChange={handleInputChange}
                placeholder="9876543210"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="guardianEmail">Guardian Email</Label>
              <Input
                id="guardianEmail"
                name="guardianEmail"
                type="email"
                value={formData.guardianEmail}
                onChange={handleInputChange}
                placeholder="guardian@email.com"
              />
            </div>
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/students")}
          >
            Cancel
          </Button>
          <Button type="submit" className="gradient-primary text-primary-foreground">
            <Save className="mr-2 h-4 w-4" />
            Save Student
          </Button>
        </div>
      </form>
    </div>
  );
}
