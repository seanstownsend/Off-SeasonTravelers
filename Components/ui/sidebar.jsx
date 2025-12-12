import React, { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children, ...props }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      <div className="sidebar-provider" {...props}>
        {children}
      </div>
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`sidebar flex h-full w-64 flex-col ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const SidebarHeader = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`sidebar-header ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const SidebarContent = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`sidebar-content flex-1 overflow-auto ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const SidebarGroup = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`sidebar-group ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const SidebarGroupLabel = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`sidebar-group-label ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const SidebarGroupContent = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`sidebar-group-content ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const SidebarMenu = ({ className = "", children, ...props }) => {
  return (
    <nav
      className={`sidebar-menu ${className}`}
      {...props}
    >
      {children}
    </nav>
  );
};

export const SidebarMenuItem = ({ className = "", children, ...props }) => {
  return (
    <div
      className={`sidebar-menu-item ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const SidebarMenuButton = React.forwardRef(({ 
  className = "", 
  asChild = false, 
  children, 
  ...props 
}, ref) => {
  if (asChild) {
    return children;
  }
  
  return (
    <button
      ref={ref}
      className={`sidebar-menu-button ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});

SidebarMenuButton.displayName = "SidebarMenuButton";

export const SidebarTrigger = ({ className = "", ...props }) => {
  const { open, setOpen } = useContext(SidebarContext);
  
  return (
    <button
      className={`sidebar-trigger ${className}`}
      onClick={() => setOpen(!open)}
      {...props}
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};