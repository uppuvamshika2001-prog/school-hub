import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import Dashboard from "@/pages/Dashboard";
import StudentList from "@/pages/students/StudentList";
import AddStudent from "@/pages/students/AddStudent";
import StudentProfile from "@/pages/students/StudentProfile";
import PlaceholderPage from "@/pages/PlaceholderPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            
            {/* Student Routes */}
            <Route path="/students" element={<StudentList />} />
            <Route path="/students/add" element={<AddStudent />} />
            <Route path="/students/admissions" element={<PlaceholderPage />} />
            <Route path="/students/:id" element={<StudentProfile />} />
            <Route path="/students/:id/edit" element={<AddStudent />} />
            
            {/* Teacher Routes */}
            <Route path="/teachers" element={<PlaceholderPage />} />
            <Route path="/teachers/add" element={<PlaceholderPage />} />
            
            {/* Class Routes */}
            <Route path="/classes" element={<PlaceholderPage />} />
            <Route path="/classes/timetable" element={<PlaceholderPage />} />
            
            {/* Other Routes */}
            <Route path="/attendance" element={<PlaceholderPage />} />
            <Route path="/exams" element={<PlaceholderPage />} />
            <Route path="/exams/results" element={<PlaceholderPage />} />
            <Route path="/fees" element={<PlaceholderPage />} />
            <Route path="/fees/structure" element={<PlaceholderPage />} />
            <Route path="/calendar" element={<PlaceholderPage />} />
            <Route path="/transport" element={<PlaceholderPage />} />
            <Route path="/library" element={<PlaceholderPage />} />
            <Route path="/notices" element={<PlaceholderPage />} />
            <Route path="/settings" element={<PlaceholderPage />} />
            
            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
