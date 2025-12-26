import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Edit,
  Mail,
  Phone,
  MapPin,
  Calendar,
  User,
  GraduationCap,
  Heart,
  FileText,
  CreditCard,
  ClipboardList,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { students } from "@/data/sampleData";
import { cn } from "@/lib/utils";

const statusStyles = {
  Active: "bg-success/10 text-success border-success/20",
  Inactive: "bg-destructive/10 text-destructive border-destructive/20",
  Graduated: "bg-secondary/10 text-secondary border-secondary/20",
};

export default function StudentProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const student = students.find((s) => s.id === id);

  if (!student) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh]">
        <h2 className="text-xl font-semibold text-foreground">Student Not Found</h2>
        <p className="text-muted-foreground mt-2">
          The student you're looking for doesn't exist.
        </p>
        <Button className="mt-4" onClick={() => navigate("/students")}>
          Back to Students
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate("/students")}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-foreground md:text-3xl">
            Student Profile
          </h1>
          <p className="text-muted-foreground mt-1">
            View and manage student information
          </p>
        </div>
        <Button variant="outline" onClick={() => navigate(`/students/${id}/edit`)}>
          <Edit className="mr-2 h-4 w-4" />
          Edit
        </Button>
      </div>

      {/* Profile Card */}
      <div className="rounded-xl bg-card shadow-sm overflow-hidden">
        {/* Banner */}
        <div className="h-32 gradient-primary relative">
          <div className="absolute inset-0 bg-white/10 opacity-20" />
        </div>

        {/* Profile Info */}
        <div className="px-6 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-12">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-card border-4 border-card shadow-lg text-2xl font-bold gradient-primary text-primary-foreground">
              {student.firstName[0]}
              {student.lastName[0]}
            </div>
            <div className="flex-1 pt-2">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl font-bold text-foreground">
                  {student.firstName} {student.lastName}
                </h2>
                <Badge
                  variant="outline"
                  className={cn(statusStyles[student.status])}
                >
                  {student.status}
                </Badge>
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <GraduationCap className="h-4 w-4" />
                  Class {student.class} - {student.section}
                </span>
                <span className="flex items-center gap-1">
                  <CreditCard className="h-4 w-4" />
                  Roll: {student.rollNo}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="flex flex-wrap gap-3 mt-6">
            <Button variant="outline" size="sm">
              <Mail className="mr-2 h-4 w-4" />
              {student.email}
            </Button>
            <Button variant="outline" size="sm">
              <Phone className="mr-2 h-4 w-4" />
              {student.phone}
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="details" className="space-y-6">
        <TabsList className="bg-card">
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="grades">Grades</TabsTrigger>
          <TabsTrigger value="fees">Fees</TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Personal Details */}
            <div className="rounded-xl bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary">
                  <User className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">Personal Details</h3>
              </div>
              <dl className="space-y-4">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Date of Birth</dt>
                  <dd className="font-medium">
                    {new Date(student.dateOfBirth).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Gender</dt>
                  <dd className="font-medium">{student.gender}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Blood Group</dt>
                  <dd className="font-medium">{student.bloodGroup}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Admission Date</dt>
                  <dd className="font-medium">
                    {new Date(student.admissionDate).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Guardian Details */}
            <div className="rounded-xl bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-warning">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold">Guardian Details</h3>
              </div>
              <dl className="space-y-4">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Name</dt>
                  <dd className="font-medium">{student.guardianName}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Phone</dt>
                  <dd className="font-medium">{student.guardianPhone}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Email</dt>
                  <dd className="font-medium">{student.guardianEmail}</dd>
                </div>
              </dl>
            </div>

            {/* Address */}
            <div className="rounded-xl bg-card p-6 shadow-sm md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-success">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold">Address</h3>
              </div>
              <p className="text-foreground">{student.address}</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="attendance">
          <div className="rounded-xl bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-secondary">
                <ClipboardList className="h-5 w-5 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-semibold">Attendance Record</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-success/10 p-4 text-center">
                <p className="text-3xl font-bold text-success">92%</p>
                <p className="text-sm text-muted-foreground mt-1">Overall Attendance</p>
              </div>
              <div className="rounded-lg bg-primary/10 p-4 text-center">
                <p className="text-3xl font-bold text-primary">156</p>
                <p className="text-sm text-muted-foreground mt-1">Days Present</p>
              </div>
              <div className="rounded-lg bg-destructive/10 p-4 text-center">
                <p className="text-3xl font-bold text-destructive">14</p>
                <p className="text-sm text-muted-foreground mt-1">Days Absent</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Detailed attendance calendar coming soon...
            </p>
          </div>
        </TabsContent>

        <TabsContent value="grades">
          <div className="rounded-xl bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-accent">
                <FileText className="h-5 w-5 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold">Academic Performance</h3>
            </div>
            <p className="text-sm text-muted-foreground text-center py-8">
              Grades and report cards will be displayed here...
            </p>
          </div>
        </TabsContent>

        <TabsContent value="fees">
          <div className="rounded-xl bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-warning">
                <CreditCard className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Fee Records</h3>
            </div>
            <p className="text-sm text-muted-foreground text-center py-8">
              Fee payment history and pending dues will be displayed here...
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
