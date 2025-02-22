import Header from '../components/Header/index';
import Sidebar from '../components/Sidebar';
import React, { ReactNode, useState } from 'react';

interface DefaultLayoutProps {
  children: ReactNode;
  pathname: string;
  hiddenOnRoutes: string[];
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children, pathname, hiddenOnRoutes }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Determine if the sidebar and header should be hidden
  const hideSidebarAndHeader = hiddenOnRoutes.includes(pathname);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark ">
      <div className="flex h-screen overflow-hidden">
        {!hideSidebarAndHeader && (
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        )}

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {!hideSidebarAndHeader && (
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          )}

          <main>
            <div className="mx-auto max-w-screen-2xl ">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
