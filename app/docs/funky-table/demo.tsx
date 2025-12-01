"use client"

import {
  FunkyTable,
  FunkyTableBody,
  FunkyTableCell,
  FunkyTableHead,
  FunkyTableHeader,
  FunkyTableRow,
} from "@/components/ui/funky-table"
import { Zap } from "lucide-react"

const data = [
  {
    item: "Sensor Module",
    spec: "24MP, CMOS",
    units: "12,000",
    q3: "$1.25M",
    q4: "$1.18M",
    delta: "-5.6%",
    notes: "New vendor",
  },
  {
    item: "Display Panel",
    spec: "6.1\" OLED, 1080p",
    units: "12,000",
    q3: "$2.40M",
    q4: "$2.28M",
    delta: "-5.0%",
    notes: "Bulk discount",
  },
  {
    item: "Battery Pack",
    spec: "4200 mAh",
    units: "12,000",
    q3: "$1.08M",
    q4: "$1.12M",
    delta: "+3.7%",
    notes: "Lithium cost up",
  },
  {
    item: "Mainboard",
    spec: "8-core, 6GB RAM",
    units: "12,000",
    q3: "$3.60M",
    q4: "$3.45M",
    delta: "-4.2%",
    notes: "Yield improved",
  },
  {
    item: "Casing",
    spec: "Aluminum, anodized",
    units: "12,000",
    q3: "$0.72M",
    q4: "$0.69M",
    delta: "-4.2%",
    notes: "Tooling rework",
  },
  {
    item: "Packaging",
    spec: "Eco, recycled",
    units: "12,000",
    q3: "$0.24M",
    q4: "$0.22M",
    delta: "-8.3%",
    notes: "Lighter materials",
  },
  {
    item: "Logistics",
    spec: "Air + sea mix",
    units: "12,000",
    q3: "$0.90M",
    q4: "$0.95M",
    delta: "+5.6%",
    notes: "Holiday surcharges",
  },
]

export function FunkyTableDemo() {
  return (
    <div className="w-full max-w-5xl mx-auto p-8 relative bg-[#fafafa] min-h-screen flex flex-col justify-center">
      <div className="flex items-start justify-between mb-8">
        <h2 className="text-6xl font-display font-black italic tracking-tighter transform -rotate-2 text-black drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">
          SPECS & FINANCIALS
        </h2>
        <div className="relative">
           <Zap className="w-32 h-32 text-[#FFD700] fill-[#FFD700] stroke-black stroke-[3] drop-shadow-[5px_5px_0px_rgba(0,0,0,1)] transform rotate-12 animate-pulse" />
           {/* Decorative dots */}
           <div className="absolute -top-4 -right-8 space-y-2 opacity-50">
             <div className="w-2 h-2 bg-black rounded-full" />
             <div className="w-2 h-2 bg-black rounded-full ml-4" />
             <div className="w-2 h-2 bg-black rounded-full" />
           </div>
        </div>
      </div>
      
      <FunkyTable>
        <FunkyTableHeader>
          <FunkyTableRow className="border-b-4 border-black hover:bg-transparent">
            <FunkyTableHead className="w-[180px]">Item</FunkyTableHead>
            <FunkyTableHead>Spec</FunkyTableHead>
            <FunkyTableHead>Units</FunkyTableHead>
            <FunkyTableHead className="text-right">Q3 Cost</FunkyTableHead>
            <FunkyTableHead className="text-right">Q4 Cost</FunkyTableHead>
            <FunkyTableHead className="text-right">Δ QoQ</FunkyTableHead>
            <FunkyTableHead>Notes</FunkyTableHead>
          </FunkyTableRow>
        </FunkyTableHeader>
        <FunkyTableBody>
          {data.map((row) => (
            <FunkyTableRow key={row.item}>
              <FunkyTableCell className="font-bold">{row.item}</FunkyTableCell>
              <FunkyTableCell>{row.spec}</FunkyTableCell>
              <FunkyTableCell>{row.units}</FunkyTableCell>
              <FunkyTableCell className="text-right">{row.q3}</FunkyTableCell>
              <FunkyTableCell className="text-right">{row.q4}</FunkyTableCell>
              <FunkyTableCell className="text-right">{row.delta}</FunkyTableCell>
              <FunkyTableCell>{row.notes}</FunkyTableCell>
            </FunkyTableRow>
          ))}
        </FunkyTableBody>
      </FunkyTable>

      <div className="mt-12 flex justify-between items-end">
        <div className="font-body text-xl text-black relative">
            <h3 className="font-display text-3xl mb-4 -rotate-2 inline-block">NOTES</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-black rounded-full" />
                Total Q4 BOM cost: $10.89M (-3.2% QoQ)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-black rounded-full" />
                Biggest saver: Display Panel (-$0.12M)
              </li>
              <li className="flex items-center gap-2">
                 <span className="w-1.5 h-1.5 bg-black rounded-full" />
                 Watchlist: Logistics surcharges through holidays
              </li>
            </ul>
        </div>
        
        {/* Decorative lines */}
        <div className="flex flex-col gap-2 w-32 mb-4">
            <div className="h-1 w-full bg-[#a6a6fc] transform -rotate-2 rounded-full" />
            <div className="h-1 w-[90%] bg-[#a6a6fc] transform -rotate-1 ml-auto rounded-full" />
            <div className="h-1 w-[95%] bg-[#a6a6fc] transform -rotate-3 rounded-full" />
        </div>
      </div>
    </div>
  )
}

