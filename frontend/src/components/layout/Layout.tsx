import { Outlet } from "react-router-dom";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function Layout() {
  return (
    <div className="flex min-h-0 flex-1 bg-background text-foreground">
      <Sidebar />

      <main className="flex flex-1 flex-col overflow-hidden">
        <Header />

        <section className="flex-1 overflow-auto bg-zinc-900 p-8">
          <div className="mx-auto w-full max-w-7xl">
            <Outlet />
          </div>
        </section>
      </main>
    </div>
  );
}
