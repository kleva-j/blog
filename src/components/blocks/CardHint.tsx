import type { PropsWithChildren } from "react";
import type { LucideIcon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InfoIcon, OctagonAlertIcon, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";

const AlertHints = {
  warning: "warning",
  error: "error",
  info: "info",
} as const;

type AlertHintTypes = keyof typeof AlertHints;
type AlertHintGroupType = { type: AlertHintTypes };

const defaultStyles = {
  container: "bg-blue-100/40 border-blue-200/50 dark:bg-blue-700/30 dark:border-blue-800/40",
  button: "bg-blue-400 hover:bg-blue-400",
};

const AlertHintContent = ({ type }: AlertHintGroupType) => {
  return {
    [AlertHints.warning]: {
      icon: OctagonAlertIcon,
      styles: {
        container: "bg-yellow-100/50 border-yellow-200/50 dark:bg-yellow-700/30 dark:border-yellow-800/40",
        button: "bg-amber-400 hover:bg-amber-400",
      },
    },
    [AlertHints.error]: {
      icon: TriangleAlert,
      styles: {
        container: "bg-red-200/40 border-red-300/50 dark:bg-red-700/30 dark:border-red-800/40",
        button: "bg-red-500 hover:bg-red-500",
      },
    },
    [AlertHints.info]: {
      icon: InfoIcon,
      styles: defaultStyles,
    },
  }[type];
};

type AlertCalloutProps = PropsWithChildren<{
  type: AlertHintTypes | string;
  icon: LucideIcon;
  calloutText?: string;
  styles: {
    container: string;
    button: string;
  };
}>;

const AlertCallout = (props: AlertCalloutProps) => {
  const { icon: Icon, children, styles } = props;
  return (
    <div
      className={cn(
        "absolute right-0 top-0 translate-x-1/3 -translate-y-1/3 rounded-full p-2",
        children && "translate-x-5",
      )}
    >
      <div
        className={cn(
          styles.button,
          "text-white font-inter",
          children
            ? "rounded py-1 px-2 relative -top-2 no-wrap"
            : "rounded-full p-2 size-min",
        )}
      >
        {children || <Icon className="size-6 stroke-1.5 stroke-white/70" />}
      </div>
    </div>
  );
};

type CardHintProps = PropsWithChildren<{
  title: string;
  type: AlertHintTypes;
  calloutText?: string;
}>;

export const CardHint = ({
  type,
  title,
  children,
  calloutText,
}: CardHintProps) => {
  const { icon: Icon, styles } = AlertHintContent({ type: type });

  return (
    <Card className={cn("relative", styles.container)}>
      <AlertCallout type={type} icon={Icon} styles={styles}>
        {calloutText}
      </AlertCallout>
      {title && (
        <CardHeader className="">
          <CardTitle className="font-inter text-xl font-medium">
            {title}
          </CardTitle>
        </CardHeader>
      )}
      <CardContent className={cn({ "p-6": !title })}>{children}</CardContent>
    </Card>
  );
};
