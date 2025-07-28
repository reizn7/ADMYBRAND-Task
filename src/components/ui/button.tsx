import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const buttonVariants = {
  default: "bg-black text-white hover:bg-gray-800",
  destructive: "bg-red-600 text-white hover:bg-red-700",
  outline: "border border-gray-300 text-black hover:bg-gray-100",
  secondary: "bg-gray-100 text-black hover:bg-gray-200",
  ghost: "bg-transparent hover:bg-gray-100 text-black",
  link: "underline text-blue-600 hover:text-blue-800",
}

const buttonSizes = {
  default: "px-4 py-2 text-sm",
  sm: "px-3 py-1 text-xs",
  lg: "px-6 py-3 text-base",
  icon: "p-2",
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-black/30 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
