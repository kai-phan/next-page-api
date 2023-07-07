import React from 'react';

import { useConfig } from 'src/components/application/ThemeConfig';

export type Props = {
  className?: string;
  children?: React.ReactNode;
};

const Sider: React.FC<Props> = ({ children }) => {
  return (
    <aside className="fixed left-0 bottom-0 top-[var(--header-height)] w-[var(--sider-width)] border-r border-grey-100 dark:border-grey-800 bg-white dark:bg-grey-900">
      {children}
    </aside>
  );
};

const Content: React.FC<Props> = ({ children }) => {
  return (
    <div className="mt-[var(--header-height)] ml-[var(--sider-width)] p-6 dark:bg-grey-950 dark:text-white">
      {children}
    </div>
  );
};

const Header: React.FC<Props> = ({ children }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 h-[var(--header-height)] border-b border-grey-100 dark:border-grey-800 bg-white dark:bg-grey-900 flex">
      {children}
    </header>
  );
};

const SiderAndHeader: React.FC<Props> = ({ children }) => {
  const { handleSwitchMode, mode } = useConfig();

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
      <Header>
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
      </Header>
      <Sider />
      <Content>{children}</Content>
    </main>
  );
};

export default SiderAndHeader;
