import { notices, events } from "@/data/sampleData";
import { Bell, Calendar, AlertCircle, Info, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const priorityStyles = {
  High: "bg-destructive/10 text-destructive",
  Medium: "bg-warning/10 text-warning",
  Low: "bg-success/10 text-success",
};

const eventTypeStyles = {
  Exam: "bg-destructive/10 text-destructive",
  Holiday: "bg-success/10 text-success",
  Event: "bg-primary/10 text-primary",
  Meeting: "bg-secondary/10 text-secondary",
};

export function RecentNotices() {
  return (
    <div className="rounded-2xl bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-card-foreground">Recent Notices</h3>
        <Bell className="h-5 w-5 text-muted-foreground" />
      </div>
      <div className="space-y-4">
        {notices.slice(0, 4).map((notice) => (
          <div
            key={notice.id}
            className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
          >
            <div
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
                priorityStyles[notice.priority]
              )}
            >
              {notice.priority === "High" ? (
                <AlertCircle className="h-4 w-4" />
              ) : notice.priority === "Medium" ? (
                <Info className="h-4 w-4" />
              ) : (
                <CheckCircle className="h-4 w-4" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-card-foreground truncate">
                {notice.title}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                {notice.content}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span
                  className={cn(
                    "text-xs font-medium px-2 py-0.5 rounded-full",
                    priorityStyles[notice.priority]
                  )}
                >
                  {notice.priority}
                </span>
                <span className="text-xs text-muted-foreground">
                  {notice.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function UpcomingEvents() {
  return (
    <div className="rounded-2xl bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-card-foreground">Upcoming Events</h3>
        <Calendar className="h-5 w-5 text-muted-foreground" />
      </div>
      <div className="space-y-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-center gap-4 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
          >
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">
                {new Date(event.date).getDate()}
              </p>
              <p className="text-xs text-muted-foreground uppercase">
                {new Date(event.date).toLocaleString("default", { month: "short" })}
              </p>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-card-foreground truncate">
                {event.title}
              </p>
              <p className="text-xs text-muted-foreground">{event.time}</p>
            </div>
            <span
              className={cn(
                "text-xs font-medium px-2 py-1 rounded-full shrink-0",
                eventTypeStyles[event.type]
              )}
            >
              {event.type}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
