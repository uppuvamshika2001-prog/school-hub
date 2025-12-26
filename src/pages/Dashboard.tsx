import { Users, GraduationCap, BookOpen, IndianRupee } from "lucide-react";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { RecentNotices, UpcomingEvents } from "@/components/dashboard/RecentActivity";
import {
  AttendanceChart,
  FeeCollectionChart,
  StudentDistributionChart,
} from "@/components/dashboard/Charts";
import { dashboardStats } from "@/data/sampleData";

export default function Dashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground md:text-3xl">
          Welcome back, Admin! 👋
        </h1>
        <p className="text-muted-foreground mt-1">
          Here's what's happening at your school today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Students"
          value={dashboardStats.totalStudents.toLocaleString()}
          subtitle={`${dashboardStats.newAdmissions} new this month`}
          icon={Users}
          trend={{ value: 12, isPositive: true }}
          variant="primary"
        />
        <StatsCard
          title="Total Teachers"
          value={dashboardStats.totalTeachers}
          subtitle="85 active staff"
          icon={GraduationCap}
          trend={{ value: 5, isPositive: true }}
          variant="secondary"
        />
        <StatsCard
          title="Total Classes"
          value={dashboardStats.totalClasses}
          subtitle="Across all grades"
          icon={BookOpen}
          variant="success"
        />
        <StatsCard
          title="Fee Collection"
          value={`₹${(dashboardStats.totalRevenue / 100000).toFixed(1)}L`}
          subtitle={`${dashboardStats.pendingFees} pending`}
          icon={IndianRupee}
          trend={{ value: 8, isPositive: true }}
          variant="warning"
        />
      </div>

      {/* Quick Actions */}
      <QuickActions />

      {/* Charts Row */}
      <div className="grid gap-6 lg:grid-cols-2">
        <AttendanceChart />
        <FeeCollectionChart />
      </div>

      {/* Bottom Section */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <StudentDistributionChart />
        </div>
        <div className="lg:col-span-1">
          <RecentNotices />
        </div>
        <div className="lg:col-span-1">
          <UpcomingEvents />
        </div>
      </div>
    </div>
  );
}
