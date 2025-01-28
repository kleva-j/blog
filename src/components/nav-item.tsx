import type { LucideIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface NavItemProps {
  href: string;
  label: string;
  icon: LucideIcon;
}

export const NavItem = ({ href, icon: Icon, label }: NavItemProps) => {
  return (
    <a
      href={href}
      className={cn(
        buttonVariants({
          className: "bg-transparent hover:bg-transparent text-xs h-7",
          variant: "primary",
          size: "sm",
        }),
      )}
    >
      <Icon />
      {label}
    </a>
  );
};
