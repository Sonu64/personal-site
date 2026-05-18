// src/App.jsx
import { lazy, Suspense } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";

const HeroSection          = lazy(() => import("./components/HeroSection"));
const AboutSection         = lazy(() => import("./components/AboutSection"));
const WorkSection          = lazy(() => import("./components/WorkSection"));
const CertificationsSection = lazy(() => import("./components/CertificationsSection"));
const MyStorySection       = lazy(() => import("./components/MyStorySection"));
const Footer               = lazy(() => import("./components/Footer"));

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-32">
      <div className="flex items-center gap-3 font-mono text-xs text-[#444]">
        <span className="animate-spin text-[#FF7A3D]">◌</span>
        Loading section...
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen transition-colors duration-400 overflow-x-hidden">
        <Navbar />
        <main>
          <Suspense fallback={<SectionLoader />}>
            <HeroSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <AboutSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <WorkSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <CertificationsSection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <MyStorySection />
          </Suspense>
          <Suspense fallback={<SectionLoader />}>
            <Footer />
          </Suspense>
        </main>
      </div>
    </ThemeProvider>
  );
}
