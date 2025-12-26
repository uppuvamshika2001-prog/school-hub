import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  Calendar,
  ClipboardList,
  DollarSign,
  Bell,
  BookOpen,
  Bus,
  Building,
  Settings,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  UserCheck,
  FileText,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MenuItem {
  title: string;
  icon: React.ElementType;
  path?: string;
  children?: { title: string; path: string; icon: React.ElementType }[];
}

const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    title: "Students",
    icon: Users,
    children: [
      { title: "All Students", path: "/students", icon: Users },
      { title: "Add Student", path: "/students/add", icon: UserCheck },
      { title: "Admissions", path: "/students/admissions", icon: FileText },
    ],
  },
  {
    title: "Teachers",
    icon: GraduationCap,
    children: [
      { title: "All Teachers", path: "/teachers", icon: GraduationCap },
      { title: "Add Teacher", path: "/teachers/add", icon: UserCheck },
    ],
  },
  {
    title: "Classes",
    icon: BookOpen,
    children: [
      { title: "All Classes", path: "/classes", icon: BookOpen },
      { title: "Timetable", path: "/classes/timetable", icon: Clock },
    ],
  },
  {
    title: "Attendance",
    icon: ClipboardList,
    path: "/attendance",
  },
  {
    title: "Examinations",
    icon: FileText,
    children: [
      { title: "Exams", path: "/exams", icon: FileText },
      { title: "Results", path: "/exams/results", icon: ClipboardList },
    ],
  },
  {
    title: "Fees",
    icon: DollarSign,
    children: [
      { title: "Fee Collection", path: "/fees", icon: DollarSign },
      { title: "Fee Structure", path: "/fees/structure", icon: FileText },
    ],
  },
  {
    title: "Calendar",
    icon: Calendar,
    path: "/calendar",
  },
  {
    title: "Transport",
    icon: Bus,
    path: "/transport",
  },
  {
    title: "Library",
    icon: Building,
    path: "/library",
  },
  {
    title: "Notices",
    icon: Bell,
    path: "/notices",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

interface AppSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function AppSidebar({ isOpen, onToggle }: AppSidebarProps) {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>(["Students"]);

  const toggleExpand = (title: string) => {
    setExpandedItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const isActive = (path: string) => location.pathname === path;
  const isChildActive = (children?: MenuItem["children"]) =>
    children?.some((child) => location.pathname === child.path);

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-full w-64 bg-sidebar text-sidebar-foreground transition-transform duration-300 ease-in-out lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex h-16 items-center justify-between px-4 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-primary">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-sidebar-foreground">SchoolERP</h1>
              <p className="text-xs text-sidebar-foreground/60">Management System</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-sidebar-foreground hover:bg-sidebar-accent"
            onClick={onToggle}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Navigation */}
        <ScrollArea className="h-[calc(100vh-4rem)] px-3 py-4">
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <div key={item.title}>
                {item.path ? (
                  <NavLink
                    to={item.path}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                      isActive(item.path)
                        ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-lg"
                        : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </NavLink>
                ) : (
                  <div>
                    <button
                      onClick={() => toggleExpand(item.title)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                        isChildActive(item.children)
                          ? "bg-sidebar-accent text-sidebar-foreground"
                          : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </div>
                      {expandedItems.includes(item.title) ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </button>

                    {/* Children */}
                    {expandedItems.includes(item.title) && item.children && (
                      <div className="ml-4 mt-1 space-y-1 border-l border-sidebar-border pl-4">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            className={cn(
                              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all duration-200",
                              isActive(child.path)
                                ? "bg-sidebar-primary text-sidebar-primary-foreground"
                                : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                            )}
                          >
                            <child.icon className="h-4 w-4" />
                            <span>{child.title}</span>
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </ScrollArea>
      </aside>
    </>
  );
}

// Header component with menu toggle
export function AppHeader({ onMenuToggle }: { onMenuToggle: () => void }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-card px-4 lg:px-6">
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={onMenuToggle}
      >
        <Menu className="h-5 w-5" />
      </Button>
      <div className="flex-1" />
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-xs text-destructive-foreground">
            3
          </span>
        </Button>
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full gradient-primary flex items-center justify-center">
            <span className="text-sm font-medium text-primary-foreground">AD</span>
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs text-muted-foreground">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}
