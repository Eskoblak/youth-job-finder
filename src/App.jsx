// src/App.jsx
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-5xl mx-auto px-4">
        <HeroSection />
        {/* We'll add SearchBar + JobList here in the next step */}
      </main>
    </div>
  );
}
