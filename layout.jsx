
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
    <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/20">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:relative z-40 w-64 h-full bg-white/80 backdrop-blur-md border-r border-slate-200/60 transition-transform duration-300`}>
        {/* Header */}
        <div className="border-b border-slate-200/60 p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center">
              <img 
                src="/OST_Logo.PNG" 
                alt="Off-Season Travelers Logo" 
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <h2 className="font-bold text-slate-900 text-lg">Off-Season Travelers</h2>
              <p className="text-xs text-slate-500 font-medium">Discover Hidden Gems</p>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="p-4">
          <div className="mb-8">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 py-3 mb-2">
              Explore
            </h3>
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <Link 
                  key={item.title}
                  to={item.url} 
                  className={`group flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 hover:shadow-sm ${
                    location.pathname === item.url 
                      ? 'bg-gradient-to-r from-blue-100 to-teal-100 text-blue-900 shadow-sm border border-blue-200/50' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <item.icon className={`w-5 h-5 transition-colors ${
                    location.pathname === item.url ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'
                  }`} />
                  <span className="font-semibold text-sm">{item.title}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Benefits section */}
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 py-3 mb-3">
              Benefits
            </h3>
            <div className="px-4 py-3 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-slate-700">Save 30-60%</p>
                  <p className="text-xs text-slate-500">On flights & hotels</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-slate-700">Fewer Crowds</p>
                  <p className="text-xs text-slate-500">More authentic experiences</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-slate-700">Local Culture</p>
                  <p className="text-xs text-slate-500">Connect with locals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
