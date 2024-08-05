import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export const PlanTypes={
  CURRENT_PLAN:"Current Plan",
  UPGRATE_PLAN:"Upgrade",
  DEFAULT:"Select Plan",
  FREE_PLAN:"Sandbox"
}