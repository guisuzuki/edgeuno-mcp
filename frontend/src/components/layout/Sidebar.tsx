import { NavLink } from "react-router-dom";

import { cn } from "@/lib/utils";

import { menu } from "./menu";

export function Sidebar() {
  return (
    <aside className="flex w-72 flex-col border-r border-zinc-800 bg-zinc-950">
      <span className="px-2.5 font-heading text-sm font-medium tracking-tight text-foreground">
        EdgeUno
      </span>

      <nav className="flex flex-col gap-1">
        {menu.map(({ title, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/"}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                isActive && "bg-secondary font-medium text-foreground",
              )
            }
          >
            <Icon className="size-4" />
            {title}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
