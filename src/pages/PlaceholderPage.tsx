import { useLocation } from "react-router-dom";
import { Construction } from "lucide-react";

export default function PlaceholderPage() {
  const location = useLocation();
  const pageName = location.pathname
    .split("/")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" > ");

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] animate-fade-in">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl gradient-primary mb-6">
        <Construction className="h-10 w-10 text-primary-foreground" />
      </div>
      <h1 className="text-2xl font-bold text-foreground md:text-3xl">
        {pageName || "Page"}
      </h1>
      <p className="text-muted-foreground mt-2 text-center max-w-md">
        This module is coming soon! We're working hard to bring you this feature.
      </p>
    </div>
  );
}
