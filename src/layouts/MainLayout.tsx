import { ReactNode } from 'react';

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="main-div">
      <header>
        <h1>Task Manager</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
