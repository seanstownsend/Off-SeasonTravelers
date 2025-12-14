
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { createPageUrl } from './utils.js'
import { Compass, Calendar, MapPin, Trees, Menu, X, Globe, Pencil } from 'lucide-react'

const navigationItems = [
  {
    title: "Discover",
    url: createPageUrl("Home"),
    icon: Compass,
    description: "Find your perfect off-season destination"
  },
  {
    title: "Planning Tools", 
    url: createPageUrl("ByLocation"),
    icon: Pencil,
    description: "Find your perfect Off-Season"
  },
  {
    title: "By Month",
    url: createPageUrl("ByMonth"), 
    icon: Calendar,
    description: "Browse destinations by travel month"
  },
  {
    title: "National Parks",
    url: createPageUrl("NationalParks"),
    icon: Trees,
    description: "Off-season park adventures"
  }
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/20">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:relative z-40 transition-transform duration-300`}>
        <div className="sidebar-header">
          Off-Season Travelers
        </div>

        <nav className="sidebar-nav">
          <Link to={createPageUrl("PlanningTools")} className="sidebar-btn primary">Planning Tools</Link>
          <Link to={createPageUrl("Home")} className="sidebar-btn">Explore by Map</Link>
          <Link to={createPageUrl("NationalParks")} className="sidebar-btn">Plan by Park</Link>
          <Link to={createPageUrl("ByMonth")} className="sidebar-btn">Plan by Month</Link>
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <main className="flex-1 flex flex-col">
        {/* Mobile header */}
        <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 px-6 py-4 md:hidden">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hover:bg-slate-100 p-2 rounded-lg transition-colors duration-200"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div className="flex items-center gap-2">
              <Compass className="w-6 h-6 text-blue-600" />
              <h1 className="text-lg font-bold text-slate-900">OffSeason</h1>
            </div>
          </div>
        </header>

        {/* Main content */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
