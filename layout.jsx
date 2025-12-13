
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { createPageUrl } from './utils.js'
import { Compass, Calendar, MapPin, Trees, Menu, X, Globe } from 'lucide-react'

const navigationItems = [
  {
    title: "Discover",
    url: createPageUrl("Home"),
    icon: Compass,
    description: "Find your perfect off-season destination"
  },
  {
    title: "Parks", 
    url: createPageUrl("ByLocation"),
    icon: MapPin,
    description: "Browse all 62 National Parks"
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
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/20">
      {/* Top Header Navigation */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center">
                <img 
                  src="/OST_Logo.PNG" 
                  alt="Off-Season Travelers Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h1 className="font-bold text-slate-900 text-lg">Off-Season Travelers</h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link 
                  key={item.title}
                  to={item.url} 
                  className={`group flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 ${
                    location.pathname === item.url 
                      ? 'bg-gradient-to-r from-blue-100 to-teal-100 text-blue-900 shadow-sm' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <item.icon className={`w-4 h-4 transition-colors ${
                    location.pathname === item.url ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'
                  }`} />
                  <span className="font-medium text-sm">{item.title}</span>
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden hover:bg-slate-100 p-2 rounded-lg transition-colors duration-200"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Navigation Dropdown */}
          {sidebarOpen && (
            <div className="md:hidden border-t border-slate-200/60 py-4">
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <Link 
                    key={item.title}
                    to={item.url} 
                    onClick={() => setSidebarOpen(false)}
                    className={`group flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 ${
                      location.pathname === item.url 
                        ? 'bg-gradient-to-r from-blue-100 to-teal-100 text-blue-900 shadow-sm' 
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <item.icon className={`w-5 h-5 transition-colors ${
                      location.pathname === item.url ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'
                    }`} />
                    <span className="font-medium text-sm">{item.title}</span>
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
