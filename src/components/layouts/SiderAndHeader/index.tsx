import React from 'react';

import { useConfigContext } from 'src/components/application/ThemeConfig';

export type Props = {
  className?: string;
  children?: React.ReactNode;
};

const SiderAndHeader: React.FC<Props> = ({ children }) => {
  const { handleSwitchMode, mode } = useConfigContext();

  return (
    <main
      className=""
      style={
        {
          '--sider-width': `${250}px`,
          '--header-height': `${60}px`,
        } as React.CSSProperties
      }
    >
      <header className="fixed top-0 left-0 right-0 z-10 h-[var(--header-height)] border-b border-grey-200 dark:border-grey-700 bg-white dark:bg-grey-800 flex">
        <div className="w-[var(--sider-width)] h-full"></div>
        <div className="flex items-end p-6">
          <button
            onClick={() => {
              handleSwitchMode(mode === 'dark' ? 'light' : 'dark');
            }}
          >
            {mode}
          </button>
        </div>
      </header>
      <aside className="fixed left-0 bottom-0 top-[var(--header-height)] w-[var(--sider-width)] border-r border-grey-200 dark:border-grey-700 bg-white dark:bg-grey-800"></aside>
      <div className="mt-[var(--header-height)] ml-[var(--sider-width)] p-6 dark:bg-grey-900 dark:text-white">
        {children}
      </div>
    </main>
  );
};

export default SiderAndHeader;
