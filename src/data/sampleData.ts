// Sample data for School ERP

export interface Student {
  id: string;
  rollNo: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: "Male" | "Female" | "Other";
  class: string;
  section: string;
  admissionDate: string;
  address: string;
  guardianName: string;
  guardianPhone: string;
  guardianEmail: string;
  bloodGroup: string;
  status: "Active" | "Inactive" | "Graduated";
  avatar?: string;
}

export interface Teacher {
  id: string;
  name: string;
  email: string;
  subject: string;
  phone: string;
  joinDate: string;
  status: "Active" | "On Leave" | "Inactive";
}

export interface ClassInfo {
  id: string;
  name: string;
  section: string;
  classTeacher: string;
  totalStudents: number;
  room: string;
}

export interface Notice {
  id: string;
  title: string;
  content: string;
  date: string;
  priority: "High" | "Medium" | "Low";
  author: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  type: "Exam" | "Holiday" | "Event" | "Meeting";
}

// Sample Students
export const students: Student[] = [
  {
    id: "STU001",
    rollNo: "2024001",
    firstName: "Aarav",
    lastName: "Sharma",
    email: "aarav.sharma@school.edu",
    phone: "9876543210",
    dateOfBirth: "2010-05-15",
    gender: "Male",
    class: "10",
    section: "A",
    admissionDate: "2020-04-01",
    address: "123 Green Park, New Delhi",
    guardianName: "Rajesh Sharma",
    guardianPhone: "9876543211",
    guardianEmail: "rajesh.sharma@email.com",
    bloodGroup: "O+",
    status: "Active",
  },
  {
    id: "STU002",
    rollNo: "2024002",
    firstName: "Ananya",
    lastName: "Patel",
    email: "ananya.patel@school.edu",
    phone: "9876543212",
    dateOfBirth: "2010-08-22",
    gender: "Female",
    class: "10",
    section: "A",
    admissionDate: "2020-04-01",
    address: "456 Lake View, Mumbai",
    guardianName: "Vikram Patel",
    guardianPhone: "9876543213",
    guardianEmail: "vikram.patel@email.com",
    bloodGroup: "A+",
    status: "Active",
  },
  {
    id: "STU003",
    rollNo: "2024003",
    firstName: "Arjun",
    lastName: "Singh",
    email: "arjun.singh@school.edu",
    phone: "9876543214",
    dateOfBirth: "2011-01-10",
    gender: "Male",
    class: "9",
    section: "B",
    admissionDate: "2021-04-01",
    address: "789 Civil Lines, Jaipur",
    guardianName: "Harpreet Singh",
    guardianPhone: "9876543215",
    guardianEmail: "harpreet.singh@email.com",
    bloodGroup: "B+",
    status: "Active",
  },
  {
    id: "STU004",
    rollNo: "2024004",
    firstName: "Diya",
    lastName: "Gupta",
    email: "diya.gupta@school.edu",
    phone: "9876543216",
    dateOfBirth: "2010-12-05",
    gender: "Female",
    class: "10",
    section: "B",
    admissionDate: "2020-04-01",
    address: "321 Model Town, Lucknow",
    guardianName: "Suresh Gupta",
    guardianPhone: "9876543217",
    guardianEmail: "suresh.gupta@email.com",
    bloodGroup: "AB+",
    status: "Active",
  },
  {
    id: "STU005",
    rollNo: "2024005",
    firstName: "Ishaan",
    lastName: "Reddy",
    email: "ishaan.reddy@school.edu",
    phone: "9876543218",
    dateOfBirth: "2011-03-18",
    gender: "Male",
    class: "9",
    section: "A",
    admissionDate: "2021-04-01",
    address: "567 Banjara Hills, Hyderabad",
    guardianName: "Venkat Reddy",
    guardianPhone: "9876543219",
    guardianEmail: "venkat.reddy@email.com",
    bloodGroup: "O-",
    status: "Active",
  },
  {
    id: "STU006",
    rollNo: "2024006",
    firstName: "Kavya",
    lastName: "Nair",
    email: "kavya.nair@school.edu",
    phone: "9876543220",
    dateOfBirth: "2012-07-25",
    gender: "Female",
    class: "8",
    section: "A",
    admissionDate: "2022-04-01",
    address: "890 Marine Drive, Kochi",
    guardianName: "Pradeep Nair",
    guardianPhone: "9876543221",
    guardianEmail: "pradeep.nair@email.com",
    bloodGroup: "A-",
    status: "Active",
  },
  {
    id: "STU007",
    rollNo: "2024007",
    firstName: "Rohan",
    lastName: "Joshi",
    email: "rohan.joshi@school.edu",
    phone: "9876543222",
    dateOfBirth: "2012-11-30",
    gender: "Male",
    class: "8",
    section: "B",
    admissionDate: "2022-04-01",
    address: "234 MG Road, Pune",
    guardianName: "Anil Joshi",
    guardianPhone: "9876543223",
    guardianEmail: "anil.joshi@email.com",
    bloodGroup: "B-",
    status: "Active",
  },
  {
    id: "STU008",
    rollNo: "2024008",
    firstName: "Priya",
    lastName: "Mehta",
    email: "priya.mehta@school.edu",
    phone: "9876543224",
    dateOfBirth: "2010-09-12",
    gender: "Female",
    class: "10",
    section: "A",
    admissionDate: "2020-04-01",
    address: "456 CG Road, Ahmedabad",
    guardianName: "Dinesh Mehta",
    guardianPhone: "9876543225",
    guardianEmail: "dinesh.mehta@email.com",
    bloodGroup: "O+",
    status: "Active",
  },
];

// Sample Teachers
export const teachers: Teacher[] = [
  {
    id: "TCH001",
    name: "Dr. Ramesh Kumar",
    email: "ramesh.kumar@school.edu",
    subject: "Mathematics",
    phone: "9876543300",
    joinDate: "2015-06-01",
    status: "Active",
  },
  {
    id: "TCH002",
    name: "Mrs. Sunita Verma",
    email: "sunita.verma@school.edu",
    subject: "English",
    phone: "9876543301",
    joinDate: "2016-07-15",
    status: "Active",
  },
  {
    id: "TCH003",
    name: "Mr. Ajay Deshmukh",
    email: "ajay.deshmukh@school.edu",
    subject: "Science",
    phone: "9876543302",
    joinDate: "2018-04-01",
    status: "Active",
  },
  {
    id: "TCH004",
    name: "Ms. Neha Kapoor",
    email: "neha.kapoor@school.edu",
    subject: "Hindi",
    phone: "9876543303",
    joinDate: "2019-08-01",
    status: "On Leave",
  },
  {
    id: "TCH005",
    name: "Mr. Sanjay Rao",
    email: "sanjay.rao@school.edu",
    subject: "Social Studies",
    phone: "9876543304",
    joinDate: "2017-01-15",
    status: "Active",
  },
];

// Sample Classes
export const classes: ClassInfo[] = [
  { id: "CLS001", name: "Class 10", section: "A", classTeacher: "Dr. Ramesh Kumar", totalStudents: 35, room: "101" },
  { id: "CLS002", name: "Class 10", section: "B", classTeacher: "Mrs. Sunita Verma", totalStudents: 32, room: "102" },
  { id: "CLS003", name: "Class 9", section: "A", classTeacher: "Mr. Ajay Deshmukh", totalStudents: 38, room: "103" },
  { id: "CLS004", name: "Class 9", section: "B", classTeacher: "Ms. Neha Kapoor", totalStudents: 36, room: "104" },
  { id: "CLS005", name: "Class 8", section: "A", classTeacher: "Mr. Sanjay Rao", totalStudents: 40, room: "105" },
  { id: "CLS006", name: "Class 8", section: "B", classTeacher: "Dr. Ramesh Kumar", totalStudents: 38, room: "106" },
];

// Sample Notices
export const notices: Notice[] = [
  {
    id: "NOT001",
    title: "Annual Sports Day",
    content: "The annual sports day will be held on January 15th. All students are expected to participate.",
    date: "2025-01-10",
    priority: "High",
    author: "Principal",
  },
  {
    id: "NOT002",
    title: "Parent-Teacher Meeting",
    content: "PTM scheduled for Class 10 on January 20th from 10 AM to 2 PM.",
    date: "2025-01-12",
    priority: "Medium",
    author: "Academic Coordinator",
  },
  {
    id: "NOT003",
    title: "Winter Vacation",
    content: "School will remain closed from December 25th to January 1st for winter break.",
    date: "2025-12-20",
    priority: "High",
    author: "Principal",
  },
  {
    id: "NOT004",
    title: "Science Exhibition",
    content: "Annual science exhibition on February 5th. Project submissions due by January 30th.",
    date: "2025-01-15",
    priority: "Medium",
    author: "Science Department",
  },
];

// Sample Events
export const events: Event[] = [
  { id: "EVT001", title: "Annual Sports Day", date: "2025-01-15", time: "09:00 AM", type: "Event" },
  { id: "EVT002", title: "Class 10 PTM", date: "2025-01-20", time: "10:00 AM", type: "Meeting" },
  { id: "EVT003", title: "Republic Day", date: "2025-01-26", time: "08:00 AM", type: "Holiday" },
  { id: "EVT004", title: "Mid-Term Exams Begin", date: "2025-02-01", time: "09:00 AM", type: "Exam" },
  { id: "EVT005", title: "Science Exhibition", date: "2025-02-05", time: "10:00 AM", type: "Event" },
];

// Dashboard Stats
export const dashboardStats = {
  totalStudents: 1250,
  totalTeachers: 85,
  totalClasses: 42,
  totalRevenue: 2850000,
  attendanceRate: 94.5,
  feeCollectionRate: 87.2,
  newAdmissions: 45,
  pendingFees: 156,
};

// Monthly attendance data for charts
export const monthlyAttendance = [
  { month: "Jan", attendance: 95 },
  { month: "Feb", attendance: 92 },
  { month: "Mar", attendance: 94 },
  { month: "Apr", attendance: 91 },
  { month: "May", attendance: 88 },
  { month: "Jun", attendance: 0 }, // Summer break
  { month: "Jul", attendance: 93 },
  { month: "Aug", attendance: 96 },
  { month: "Sep", attendance: 94 },
  { month: "Oct", attendance: 92 },
  { month: "Nov", attendance: 95 },
  { month: "Dec", attendance: 93 },
];

// Fee collection data
export const feeCollection = [
  { month: "Jan", collected: 450000, pending: 50000 },
  { month: "Feb", collected: 420000, pending: 80000 },
  { month: "Mar", collected: 480000, pending: 20000 },
  { month: "Apr", collected: 500000, pending: 0 },
  { month: "May", collected: 380000, pending: 120000 },
  { month: "Jun", collected: 200000, pending: 300000 },
  { month: "Jul", collected: 460000, pending: 40000 },
  { month: "Aug", collected: 490000, pending: 10000 },
  { month: "Sep", collected: 470000, pending: 30000 },
  { month: "Oct", collected: 440000, pending: 60000 },
  { month: "Nov", collected: 485000, pending: 15000 },
  { month: "Dec", collected: 460000, pending: 40000 },
];

// Student distribution by class
export const studentDistribution = [
  { class: "Class 8", students: 156 },
  { class: "Class 9", students: 148 },
  { class: "Class 10", students: 142 },
  { class: "Class 11", students: 135 },
  { class: "Class 12", students: 128 },
];
