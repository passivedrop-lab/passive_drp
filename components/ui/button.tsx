import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 uppercase tracking-widest",
    {
        variants: {
            variant: {
                default:
                    "bg-foreground text-background hover:bg-neutral-200",
                destructive:
                    "bg-red-900/50 text-red-100 hover:bg-red-900/70 border border-red-900",
                outline:
                    "border border-border bg-transparent hover:bg-surface text-foreground",
                secondary:
                    "bg-surface text-foreground hover:bg-surface-hover border border-border",
                ghost: "hover:bg-surface hover:text-foreground",
                link: "text-foreground underline-offset-4 hover:underline",
            },
            size: {
                default: "h-9 px-6 py-2",
                sm: "h-8 px-3",
                lg: "h-11 px-8 text-sm",
                icon: "h-9 w-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }
