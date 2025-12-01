"use client";

import {
  Autocomplete,
  AutocompleteItem,
  InputOtp,
  NumberInput,
} from "@heroui/react";

const animals = [
  {
    label: "Cat",
    value: "cat",
    description: "The second most popular pet in the world",
  },
  {
    label: "Dog",
    value: "dog",
    description: "The most popular pet in the world",
  },
  {
    label: "Elephant",
    value: "elephant",
    description: "The largest land animal",
  },
  { label: "Lion", value: "lion", description: "The king of the jungle" },
  { label: "Tiger", value: "tiger", description: "The largest cat species" },
  {
    label: "Giraffe",
    value: "giraffe",
    description: "The tallest living terrestrial animal",
  },
];

export default function HeroAdvancedForm() {
  return (
    <div className="min-h-screen bg-background p-8 space-y-12 max-w-4xl mx-auto">
      <div className="space-y-4">
        <h1 className="text-4xl font-display font-bold">
          HeroUI Advanced Forms
        </h1>
        <p className="text-lg text-muted-foreground font-body">
          Advanced input components with{" "}
          <span className="text-[#fb923c] font-bold">funky styling</span>.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">
          Autocomplete
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Autocomplete
            label="Favorite Animal"
            placeholder="Search an animal"
            className="max-w-xs"
            labelPlacement="outside"
            inputProps={{
              classNames: {
                inputWrapper:
                  "border-[#fb923c] data-[hover=true]:border-[#fb923c]/80 group-data-[focus=true]:border-[#fb923c] group-data-[focus=true]:border-2 rounded-xl",
                label: "text-[#fb923c] font-bold font-body text-base pb-2",
                input: "font-body",
              },
            }}
            listboxProps={{
              itemClasses: {
                base: [
                  "data-[hover=true]:bg-[#fb923c]/20",
                  "data-[selectable=true]:focus:bg-[#fb923c]/20",
                  "font-body",
                ],
              },
            }}
            popoverProps={{
              classNames: {
                content: "border-[#fb923c] border-2 bg-white rounded-xl",
              },
            }}
          >
            {animals.map((animal) => (
              <AutocompleteItem
                key={animal.value}
                className="font-medium font-body"
              >
                {animal.label}
              </AutocompleteItem>
            ))}
          </Autocomplete>

          <Autocomplete
            label="Favorite Animal"
            placeholder="Search an animal"
            className="max-w-xs"
            variant="bordered"
            labelPlacement="outside"
            inputProps={{
              classNames: {
                inputWrapper:
                  "border-[#f2d5a3] data-[hover=true]:border-[#f2d5a3]/80 group-data-[focus=true]:border-[#f2d5a3] bg-[#f2d5a3]/10 rounded-xl",
                label: "text-black font-bold font-body text-base pb-2",
                input: "font-body",
              },
            }}
            listboxProps={{
              itemClasses: {
                base: [
                  "data-[hover=true]:bg-[#f2d5a3]/20",
                  "data-[selectable=true]:focus:bg-[#f2d5a3]/20",
                  "font-body",
                ],
              },
            }}
            popoverProps={{
              classNames: {
                content: "border-[#f2d5a3] border-2 bg-white rounded-xl",
              },
            }}
          >
            {animals.map((animal) => (
              <AutocompleteItem
                key={animal.value}
                className="font-medium font-body"
              >
                {animal.label}
              </AutocompleteItem>
            ))}
          </Autocomplete>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">
          Input OTP
        </h2>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-small text-default-500 font-bold font-body">
              Default (Lime)
            </p>
            <InputOtp
              length={4}
              classNames={{
                segmentWrapper: "gap-x-2",
                segment:
                  "border-[#81F499] data-[active=true]:border-[#81F499] data-[active=true]:bg-[#81F499]/20 font-bold font-body rounded-lg",
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-small text-default-500 font-bold font-body">
              Underlined (Sky)
            </p>
            <InputOtp
              length={4}
              variant="underlined"
              classNames={{
                segmentWrapper: "gap-x-2",
                segment:
                  "border-[#87CEEB] data-[active=true]:border-[#87CEEB] data-[active=true]:text-[#87CEEB] font-black border-b-4 font-body",
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-small text-default-500 font-bold font-body">
              Faded (Orange)
            </p>
            <InputOtp
              length={6}
              variant="faded"
              classNames={{
                segmentWrapper: "gap-x-2",
                segment:
                  "border-[#fb923c] bg-[#fb923c]/10 data-[active=true]:border-[#fb923c] data-[active=true]:bg-[#fb923c]/30 font-bold font-body rounded-lg",
              }}
            />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">
          Number Input
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <NumberInput
            label="Price"
            placeholder="0.00"
            labelPlacement="outside"
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-[#f2d5a3] font-bold text-small">$</span>
              </div>
            }
            classNames={{
              inputWrapper:
                "border-[#f2d5a3] group-data-[focus=true]:border-[#f2d5a3] border-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl",
              label: "text-black font-bold font-body text-base pb-2",
              input: "font-body",
            }}
          />
          <NumberInput
            label="Quantity"
            placeholder="0"
            defaultValue={1}
            min={0}
            variant="bordered"
            labelPlacement="outside"
            classNames={{
              inputWrapper:
                "border-[#E7E5FF] group-data-[focus=true]:border-[#E7E5FF] bg-[#E7E5FF]/10 rounded-xl",
              label: "text-black font-bold font-body text-base pb-2",
              input: "font-body",
            }}
          />
          <NumberInput
            label="Percentage"
            placeholder="0"
            labelPlacement="outside"
            endContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-[#6EDCD9] font-bold text-small">%</span>
              </div>
            }
            classNames={{
              inputWrapper:
                "bg-[#6EDCD9]/20 group-data-[focus=true]:bg-[#6EDCD9]/30 border-2 border-[#6EDCD9] rounded-xl",
              label: "text-black font-bold font-body text-base pb-2",
              input: "font-body",
            }}
          />
        </div>
      </section>
    </div>
  );
}
