import React, { createContext, useState } from 'react';

const SidebarContext = createContext(false); // Default inactive

const SidebarProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => setIsActive(!isActive);

  return (
    <SidebarContext.Provider value={{ isActive, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };