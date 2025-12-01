import * as React from "react"
import { cn } from "@/lib/utils"

const FunkyTable = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
))
FunkyTable.displayName = "FunkyTable"

const FunkyTableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b-4 [&_tr]:border-black", className)} {...props} />
))
FunkyTableHeader.displayName = "FunkyTableHeader"

const FunkyTableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
))
FunkyTableBody.displayName = "FunkyTableBody"

const FunkyTableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b-2 border-black transition-colors hover:bg-yellow-100/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
))
FunkyTableRow.displayName = "FunkyTableRow"

const FunkyTableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-display text-lg tracking-wide text-black font-bold [&:has([role=checkbox])]:pr-0 bg-[#6EDCD9]",
      className
    )}
    {...props}
  />
))
FunkyTableHead.displayName = "FunkyTableHead"

const FunkyTableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "p-4 align-middle font-body text-base font-medium text-black [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
))
FunkyTableCell.displayName = "FunkyTableCell"

export {
  FunkyTable,
  FunkyTableHeader,
  FunkyTableBody,
  FunkyTableHead,
  FunkyTableRow,
  FunkyTableCell,
}

