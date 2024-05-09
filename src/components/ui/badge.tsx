import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-7 py-1.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#301F5D] text-primary-foreground shadow hover:bg-[#574487] hover:border-[#8776B2]",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

type BadgePropsTitle = {
  title: string
}

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, title,  ...props }: BadgeProps & BadgePropsTitle) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} style={{ userSelect: 'none' }}{...props}>
      {title}
    </div>
    
  )
}

export { Badge, badgeVariants }
