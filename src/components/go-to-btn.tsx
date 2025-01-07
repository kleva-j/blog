import { Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export interface GoBackProps {
  link?: string;
  text?: string;
}

export const GoToBtn = ({ link = "/", text = "back" }: GoBackProps) => {
  return (
    <Button
      asChild
      variant="link"
      className="w-min p-0 text-muted-foreground text-sm"
    >
      <a href={link}>
        <ChevronLeft className="text-xs" />
        <Text as="span" variant="span">
          {text}
        </Text>
      </a>
    </Button>
  );
};
