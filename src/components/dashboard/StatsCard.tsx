import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: "primary" | "secondary" | "success" | "warning" | "accent";
  className?: string;
}

const variantStyles = {
  primary: "gradient-primary",
  secondary: "gradient-secondary",
  success: "gradient-success",
  warning: "gradient-warning",
  accent: "gradient-accent",
};

export function StatsCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  variant = "primary",
  className,
}: StatsCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl p-6 text-white shadow-lg card-hover",
        variantStyles[variant],
        className
      )}
    >
      {/* Background decoration */}
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/10" />
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/5" />

      <div className="relative">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-white/80">{title}</p>
            <p className="mt-2 text-3xl font-bold">{value}</p>
            {subtitle && (
              <p className="mt-1 text-sm text-white/70">{subtitle}</p>
            )}
            {trend && (
              <div className="mt-2 flex items-center gap-1">
                <span
                  className={cn(
                    "text-sm font-medium",
                    trend.isPositive ? "text-green-200" : "text-red-200"
                  )}
                >
                  {trend.isPositive ? "+" : "-"}
                  {Math.abs(trend.value)}%
                </span>
                <span className="text-xs text-white/60">vs last month</span>
              </div>
            )}
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
            <Icon className="h-6 w-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
