import { Link } from "react-router-dom";
import {
  UserPlus,
  ClipboardCheck,
  Receipt,
  FileText,
  Calendar,
  Bell,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface QuickAction {
  title: string;
  icon: React.ElementType;
  path: string;
  color: string;
}

const quickActions: QuickAction[] = [
  {
    title: "Add Student",
    icon: UserPlus,
    path: "/students/add",
    color: "bg-primary/10 text-primary hover:bg-primary/20",
  },
  {
    title: "Mark Attendance",
    icon: ClipboardCheck,
    path: "/attendance",
    color: "bg-success/10 text-success hover:bg-success/20",
  },
  {
    title: "Collect Fee",
    icon: Receipt,
    path: "/fees",
    color: "bg-warning/10 text-warning hover:bg-warning/20",
  },
  {
    title: "Add Exam",
    icon: FileText,
    path: "/exams",
    color: "bg-secondary/10 text-secondary hover:bg-secondary/20",
  },
  {
    title: "Schedule Event",
    icon: Calendar,
    path: "/calendar",
    color: "bg-accent/10 text-accent hover:bg-accent/20",
  },
  {
    title: "Send Notice",
    icon: Bell,
    path: "/notices",
    color: "bg-destructive/10 text-destructive hover:bg-destructive/20",
  },
];

export function QuickActions() {
  return (
    <div className="rounded-2xl bg-card p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-card-foreground mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {quickActions.map((action) => (
          <Link
            key={action.title}
            to={action.path}
            className={cn(
              "flex flex-col items-center gap-2 rounded-xl p-4 transition-all duration-200",
              action.color
            )}
          >
            <action.icon className="h-6 w-6" />
            <span className="text-sm font-medium text-center">{action.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
