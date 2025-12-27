import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  monthlyAttendance,
  feeCollection,
  studentDistribution,
} from "@/data/sampleData";

const COLORS = ["hsl(252, 85%, 60%)", "hsl(199, 89%, 48%)", "hsl(280, 67%, 60%)", "hsl(152, 76%, 40%)", "hsl(38, 92%, 50%)"];

export function AttendanceChart() {
  return (
    <div className="rounded-2xl bg-card p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-card-foreground mb-4">
        Attendance Overview
      </h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={monthlyAttendance}>
            <defs>
              <linearGradient id="attendanceGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(252, 85%, 60%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(252, 85%, 60%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12, fill: "hsl(220, 9%, 46%)" }}
              axisLine={{ stroke: "hsl(220, 13%, 91%)" }}
            />
            <YAxis
              domain={[0, 100]}
              tick={{ fontSize: 12, fill: "hsl(220, 9%, 46%)" }}
              axisLine={{ stroke: "hsl(220, 13%, 91%)" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(0, 0%, 100%)",
                border: "1px solid hsl(220, 13%, 91%)",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Area
              type="monotone"
              dataKey="attendance"
              stroke="hsl(252, 85%, 60%)"
              strokeWidth={2}
              fill="url(#attendanceGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function FeeCollectionChart() {
  return (
    <div className="rounded-2xl bg-card p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-card-foreground mb-4">
        Fee Collection
      </h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={feeCollection.slice(0, 6)}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12, fill: "hsl(220, 9%, 46%)" }}
              axisLine={{ stroke: "hsl(220, 13%, 91%)" }}
            />
            <YAxis
              tick={{ fontSize: 12, fill: "hsl(220, 9%, 46%)" }}
              axisLine={{ stroke: "hsl(220, 13%, 91%)" }}
              tickFormatter={(value) => `₹${value / 1000}k`}
            />
            <Tooltip
              formatter={(value: number) => [`₹${value.toLocaleString()}`, ""]}
              contentStyle={{
                backgroundColor: "hsl(0, 0%, 100%)",
                border: "1px solid hsl(220, 13%, 91%)",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Bar
              dataKey="collected"
              name="Collected"
              fill="hsl(152, 76%, 40%)"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="pending"
              name="Pending"
              fill="hsl(38, 92%, 50%)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function StudentDistributionChart() {
  return (
    <div className="rounded-2xl bg-card p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-card-foreground mb-4">
        Students by Class
      </h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={studentDistribution}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="students"
              nameKey="class"
              label={({ class: className, percent }) =>
                `${className}: ${(percent * 100).toFixed(0)}%`
              }
              labelLine={false}
            >
              {studentDistribution.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: number) => [value, "Students"]}
              contentStyle={{
                backgroundColor: "hsl(0, 0%, 100%)",
                border: "1px solid hsl(220, 13%, 91%)",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-wrap justify-center gap-3 mt-4">
        {studentDistribution.map((item, index) => (
          <div key={item.class} className="flex items-center gap-2">
            <div
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <span className="text-sm text-muted-foreground">{item.class}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
