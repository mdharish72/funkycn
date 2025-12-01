"use client";

import {
  Calendar,
  DatePicker,
  DateRangePicker,
  RangeCalendar,
  TimeInput,
} from "@heroui/react";
import { parseDate, parseZonedDateTime } from "@internationalized/date";

export default function HeroCalendar() {
  return (
    <div className="min-h-screen bg-background p-8 space-y-12 max-w-4xl mx-auto">
      <div className="space-y-4">
        <h1 className="text-4xl font-display font-bold">HeroUI Date & Time</h1>
        <p className="text-lg text-muted-foreground font-body">
          Components for selecting dates and times, now with{" "}
          <span className="text-[#87CEEB] font-bold">extra pop</span>.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">
          Calendar
        </h2>
        <div className="flex flex-wrap gap-4">
          <div className="p-4 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl">
            <Calendar
              aria-label="Date (Default)"
              classNames={{ title: "font-bold font-display" }}
            />
          </div>
          <div className="p-4 bg-[#87CEEB]/20 border-2 border-[#87CEEB] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl">
            <Calendar
              aria-label="Date (Sky)"
              classNames={{
                cellButton:
                  "data-[selected=true]:bg-[#87CEEB] data-[selected=true]:text-black",
                headerWrapper: "bg-[#87CEEB]/30 rounded-t-lg",
                title: "font-bold font-display",
              }}
            />
          </div>
          <div className="p-4 bg-[#fb923c]/20 border-2 border-[#fb923c] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl">
            <Calendar
              aria-label="Date (Orange)"
              classNames={{
                cellButton:
                  "data-[selected=true]:bg-[#fb923c] data-[selected=true]:text-black",
                headerWrapper: "bg-[#fb923c]/30 rounded-t-lg",
                title: "font-bold font-display",
              }}
            />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">
          Range Calendar
        </h2>
        <div className="p-4 bg-[#f2d5a3]/20 border-2 border-[#f2d5a3] rounded-xl inline-block shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <RangeCalendar
            aria-label="Date (No Selection)"
            visibleMonths={2}
            classNames={{
              cellButton:
                "data-[selected=true]:bg-[#f2d5a3] data-[selected=true]:text-black data-[range-selection=true]:bg-[#f2d5a3]/30",
              headerWrapper: "bg-[#f2d5a3]/30 rounded-t-lg",
              title: "font-bold font-display",
            }}
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">
          Date Picker
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DatePicker
            label="Birth date"
            className="max-w-[284px]"
            labelPlacement="outside"
            classNames={{
              inputWrapper:
                "border-2 border-[#81F499] bg-[#81F499]/10 group-data-[focus=true]:border-[#81F499] rounded-xl",
              label: "text-black font-bold font-body text-base pb-2",
            }}
          />
          <DatePicker
            label="Birth date"
            className="max-w-[284px]"
            variant="bordered"
            labelPlacement="outside"
            classNames={{
              inputWrapper:
                "border-2 border-[#E7E5FF] group-data-[focus=true]:border-[#E7E5FF] rounded-xl",
              label: "text-black font-bold font-body text-base pb-2",
              selectorButton: "text-[#E7E5FF]",
            }}
          />
          <DatePicker
            label="Birth date"
            className="max-w-[284px]"
            variant="underlined"
            labelPlacement="outside"
            classNames={{
              inputWrapper:
                "border-b-4 border-[#fb923c] group-data-[focus=true]:border-[#fb923c]",
              label: "text-[#fb923c] font-bold font-body text-base pb-2",
            }}
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">
          Date Range Picker
        </h2>
        <DateRangePicker
          label="Stay duration"
          className="max-w-xs"
          labelPlacement="outside"
          defaultValue={{
            start: parseDate("2024-04-01"),
            end: parseDate("2024-04-08"),
          }}
          classNames={{
            inputWrapper:
              "border-2 border-[#f2d5a3] bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-data-[focus=true]:border-[#f2d5a3] rounded-xl",
            label: "text-black font-bold font-body text-base pb-2",
          }}
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">
          Time Input
        </h2>
        <div className="flex flex-wrap gap-4">
          <TimeInput
            label="Event Time"
            labelPlacement="outside"
            defaultValue={parseZonedDateTime(
              "2022-11-07T00:45[America/Los_Angeles]"
            )}
            classNames={{
              inputWrapper:
                "bg-[#87CEEB]/10 border-2 border-[#87CEEB] rounded-xl",
              label: "text-black font-bold font-body text-base pb-2",
            }}
          />
          <TimeInput
            label="Event Time"
            variant="bordered"
            labelPlacement="outside"
            defaultValue={parseZonedDateTime(
              "2022-11-07T00:45[America/Los_Angeles]"
            )}
            classNames={{
              inputWrapper:
                "border-2 border-[#6EDCD9] bg-[#6EDCD9]/10 rounded-xl",
              label: "text-black font-bold font-body text-base pb-2",
            }}
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">
          Funky Colors Demo
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="h-20 w-full rounded-xl bg-[#6EDCD9] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center font-black font-display">
            Mint
          </div>
          <div className="h-20 w-full rounded-xl bg-[#E7E5FF] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center font-black font-display">
            Lavender
          </div>
          <div className="h-20 w-full rounded-xl bg-[#fb923c] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center font-black font-display text-black">
            Orange
          </div>
          <div className="h-20 w-full rounded-xl bg-[#87CEEB] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center font-black font-display">
            Sky
          </div>
          <div className="h-20 w-full rounded-xl bg-[#f2d5a3] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center font-black font-display">
            Yellow
          </div>
          <div className="h-20 w-full rounded-xl bg-[#81F499] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center font-black font-display">
            Lime
          </div>
        </div>
      </section>
    </div>
  );
}
