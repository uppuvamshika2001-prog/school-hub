import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Plus,
  Filter,
  Download,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { students, type Student } from "@/data/sampleData";
import { cn } from "@/lib/utils";

const statusStyles = {
  Active: "bg-success/10 text-success border-success/20",
  Inactive: "bg-destructive/10 text-destructive border-destructive/20",
  Graduated: "bg-secondary/10 text-secondary border-secondary/20",
};

export default function StudentList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [classFilter, setClassFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.rollNo.includes(searchQuery) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesClass =
      classFilter === "all" || student.class === classFilter;

    const matchesStatus =
      statusFilter === "all" || student.status === statusFilter;

    return matchesSearch && matchesClass && matchesStatus;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground md:text-3xl">
            Students
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage and view all student records
          </p>
        </div>
        <Button asChild className="gradient-primary text-primary-foreground shadow-lg">
          <Link to="/students/add">
            <Plus className="mr-2 h-4 w-4" />
            Add Student
          </Link>
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 rounded-xl bg-card p-4 shadow-sm sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by name, roll no, or email..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex gap-3">
          <Select value={classFilter} onValueChange={setClassFilter}>
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Classes</SelectItem>
              <SelectItem value="8">Class 8</SelectItem>
              <SelectItem value="9">Class 9</SelectItem>
              <SelectItem value="10">Class 10</SelectItem>
            </SelectContent>
          </Select>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[130px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Inactive">Inactive</SelectItem>
              <SelectItem value="Graduated">Graduated</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-xl bg-card shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-semibold">Student</TableHead>
              <TableHead className="font-semibold">Roll No</TableHead>
              <TableHead className="font-semibold">Class</TableHead>
              <TableHead className="font-semibold hidden md:table-cell">Contact</TableHead>
              <TableHead className="font-semibold hidden lg:table-cell">Guardian</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStudents.map((student, index) => (
              <TableRow
                key={student.id}
                className="hover:bg-muted/30 transition-colors"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full gradient-primary text-primary-foreground font-medium">
                      {student.firstName[0]}
                      {student.lastName[0]}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {student.firstName} {student.lastName}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {student.email}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-mono text-sm">
                  {student.rollNo}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">Class {student.class}</span>
                    <span className="text-muted-foreground">-</span>
                    <span>{student.section}</span>
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Phone className="h-3 w-3" />
                      {student.phone}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  <p className="text-sm">{student.guardianName}</p>
                  <p className="text-xs text-muted-foreground">
                    {student.guardianPhone}
                  </p>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={cn(statusStyles[student.status])}
                  >
                    {student.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link to={`/students/${student.id}`}>
                          <Eye className="mr-2 h-4 w-4" />
                          View Profile
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to={`/students/${student.id}/edit`}>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Mail className="mr-2 h-4 w-4" />
                        Send Email
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {filteredStudents.length === 0 && (
          <div className="p-8 text-center">
            <p className="text-muted-foreground">No students found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Pagination Info */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <p>
          Showing {filteredStudents.length} of {students.length} students
        </p>
      </div>
    </div>
  );
}
