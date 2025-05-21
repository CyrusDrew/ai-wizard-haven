
import * as React from "react";
import { Link } from "react-router-dom";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const tagVariants = cva(
  "inline-flex items-center justify-center rounded-full text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        "ai-blue": "bg-ai-blue/10 text-ai-blue hover:bg-ai-blue/20",
        "ai-purple": "bg-ai-purple/10 text-ai-purple hover:bg-ai-purple/20",
        "ai-pink": "bg-ai-pink/10 text-ai-pink hover:bg-ai-pink/20",
        "ai-orange": "bg-ai-orange/10 text-ai-orange hover:bg-ai-orange/20",
        "ai-green": "bg-ai-green/10 text-ai-green hover:bg-ai-green/20",
      },
      size: {
        default: "h-6 px-2.5 py-0.5",
        sm: "h-5 px-2 py-0",
        lg: "h-7 px-3 py-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tagVariants> {
  to?: string;
}

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ className, variant, size, to, ...props }, ref) => {
    if (to) {
      return (
        <Link
          to={to}
          className={cn(tagVariants({ variant, size }), className)}
          {...props as any} // Using type assertion to resolve the incompatible type error
        />
      );
    }
    
    return (
      <div
        className={cn(tagVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Tag.displayName = "Tag";

export { Tag, tagVariants };
