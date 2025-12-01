"use client";

import React from "react";
import {
  Input,
  Textarea,
  Checkbox,
  CheckboxGroup,
  RadioGroup,
  Radio,
  Switch,
  Select,
  SelectItem,
  Slider,
  Button
} from "@heroui/react";

export default function HeroForms() {
  return (
    <div className="min-h-screen bg-background p-8 space-y-12 max-w-4xl mx-auto">
      <div className="space-y-4">
        <h1 className="text-4xl font-display font-bold">HeroUI Forms</h1>
        <p className="text-lg text-muted-foreground font-body">Beautiful, accessible, and fully customizable form components with <span className="text-[#fb923c] font-bold">funky colors</span>.</p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">Inputs & Textareas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input 
            type="email" 
            label="Email" 
            placeholder="Enter your email" 
            variant="bordered"
            labelPlacement="outside"
            classNames={{
                inputWrapper: "border-black border-2 bg-white data-[hover=true]:border-black/80 group-data-[focus=true]:border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl",
                label: "text-black font-bold font-body text-base pb-2",
                input: "font-body"
            }}
          />
          <Input 
            type="email" 
            label="Email" 
            placeholder="Enter your email" 
            variant="flat"
            labelPlacement="outside"
            className="text-foreground"
            classNames={{
                inputWrapper: "bg-[#E7E5FF] data-[hover=true]:bg-[#E7E5FF]/80 group-data-[focus=true]:bg-[#E7E5FF]/60 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl",
                label: "text-black font-bold font-body text-base pb-2",
                input: "font-body"
            }}
          />
          <Input 
            type="password" 
            label="Password" 
            placeholder="Enter your password" 
            variant="faded"
            labelPlacement="outside"
            description="We'll never share your password with anyone else."
            classNames={{
                inputWrapper: "bg-[#f2d5a3]/30 border-black group-data-[focus=true]:border-black border-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl",
                description: "text-black font-medium font-body pt-1",
                label: "text-black font-bold font-body text-base pb-2",
                input: "font-body"
            }}
          />
           <Input
            isClearable
            type="text"
            label="Username"
            variant="bordered"
            labelPlacement="outside"
            placeholder="Enter your username"
            defaultValue="junior@heroui.com"
            onClear={() => console.log("input cleared")}
             classNames={{
                inputWrapper: "border-black border-2 bg-white data-[hover=true]:border-black/80 group-data-[focus=true]:border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl",
                label: "text-black font-bold font-body text-base pb-2",
                input: "font-body"
            }}
          />
        </div>
        <Textarea
          label="Description"
          labelPlacement="outside"
          placeholder="Enter your description"
          className="max-w-xs"
          classNames={{
              inputWrapper: "bg-[#81F499]/30 border-2 border-black group-data-[focus=true]:border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl",
              label: "text-black font-bold font-body text-base pb-2",
              input: "font-body"
          }}
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">Select</h2>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Select 
            label="Favorite Animal" 
            placeholder="Select an animal" 
            labelPlacement="outside"
            className="max-w-xs" 
            classNames={{
                trigger: "bg-white text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] data-[hover=true]:bg-gray-100 rounded-xl",
                popoverContent: "bg-white border-2 border-black rounded-xl",
                value: "font-bold text-black font-body",
                label: "text-black font-bold font-body text-base pb-2"
            }}
          >
            <SelectItem key="cat" className="data-[hover=true]:bg-[#fb923c] data-[hover=true]:text-black font-bold data-[hover=true]:border-2 data-[hover=true]:border-black rounded-md mb-1">Cat</SelectItem>
            <SelectItem key="dog" className="data-[hover=true]:bg-[#fb923c] data-[hover=true]:text-black font-bold data-[hover=true]:border-2 data-[hover=true]:border-black rounded-md mb-1">Dog</SelectItem>
            <SelectItem key="elephant" className="data-[hover=true]:bg-[#fb923c] data-[hover=true]:text-black font-bold data-[hover=true]:border-2 data-[hover=true]:border-black rounded-md mb-1">Elephant</SelectItem>
            <SelectItem key="lion" className="data-[hover=true]:bg-[#fb923c] data-[hover=true]:text-black font-bold data-[hover=true]:border-2 data-[hover=true]:border-black rounded-md mb-1">Lion</SelectItem>
          </Select>
           <Select 
            label="Favorite Animal" 
            placeholder="Select an animal" 
            labelPlacement="outside"
            className="max-w-xs"
            variant="bordered"
             classNames={{
                trigger: "border-2 border-black data-[hover=true]:border-black bg-[#f2d5a3]/30 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl",
                popoverContent: "bg-white border-2 border-black rounded-xl",
                value: "font-bold text-black font-body",
                label: "text-black font-bold font-body text-base pb-2"
            }}
          >
            <SelectItem key="cat" className="data-[hover=true]:bg-[#f2d5a3] data-[hover=true]:text-black font-bold data-[hover=true]:border-2 data-[hover=true]:border-black rounded-md mb-1">Cat</SelectItem>
            <SelectItem key="dog" className="data-[hover=true]:bg-[#f2d5a3] data-[hover=true]:text-black font-bold data-[hover=true]:border-2 data-[hover=true]:border-black rounded-md mb-1">Dog</SelectItem>
            <SelectItem key="elephant" className="data-[hover=true]:bg-[#f2d5a3] data-[hover=true]:text-black font-bold data-[hover=true]:border-2 data-[hover=true]:border-black rounded-md mb-1">Elephant</SelectItem>
            <SelectItem key="lion" className="data-[hover=true]:bg-[#f2d5a3] data-[hover=true]:text-black font-bold data-[hover=true]:border-2 data-[hover=true]:border-black rounded-md mb-1">Lion</SelectItem>
          </Select>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">Selection Controls</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 font-body">Checkbox</h3>
            <div className="flex flex-col gap-4">
              <Checkbox defaultSelected classNames={{ wrapper: "after:bg-[#6EDCD9] bg-white border-2 border-black rounded-md", label: "text-black font-bold font-body" }}>Mint Option</Checkbox>
              <Checkbox defaultSelected classNames={{ wrapper: "after:bg-[#E7E5FF] bg-white border-2 border-black rounded-md", label: "text-black font-bold font-body" }}>Lavender Option</Checkbox>
              <Checkbox defaultSelected classNames={{ wrapper: "after:bg-[#fb923c] bg-white border-2 border-black rounded-md", label: "text-black font-bold font-body" }}>Orange Option</Checkbox>
              <Checkbox defaultSelected classNames={{ wrapper: "after:bg-[#87CEEB] bg-white border-2 border-black rounded-md", label: "text-black font-bold font-body" }}>Sky Option</Checkbox>
              <Checkbox defaultSelected classNames={{ wrapper: "after:bg-[#f2d5a3] bg-white border-2 border-black rounded-md", label: "text-black font-bold font-body" }}>Yellow Option</Checkbox>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 font-body">Radio Group</h3>
            <RadioGroup label="Select your favorite city" classNames={{ label: "text-black font-bold font-display text-lg" }}>
              <Radio value="buenos-aires" classNames={{ control: "bg-[#6EDCD9] border-2 border-black", wrapper: "group-data-[selected=true]:border-[#6EDCD9]", label: "font-body text-black font-medium" }}>Buenos Aires (Mint)</Radio>
              <Radio value="sydney" classNames={{ control: "bg-[#E7E5FF] border-2 border-black", wrapper: "group-data-[selected=true]:border-[#E7E5FF]", label: "font-body text-black font-medium" }}>Sydney (Lavender)</Radio>
              <Radio value="san-francisco" classNames={{ control: "bg-[#fb923c] border-2 border-black", wrapper: "group-data-[selected=true]:border-[#fb923c]", label: "font-body text-black font-medium" }}>San Francisco (Orange)</Radio>
              <Radio value="london" classNames={{ control: "bg-[#87CEEB] border-2 border-black", wrapper: "group-data-[selected=true]:border-[#87CEEB]", label: "font-body text-black font-medium" }}>London (Sky)</Radio>
              <Radio value="tokyo" classNames={{ control: "bg-[#f2d5a3] border-2 border-black", wrapper: "group-data-[selected=true]:border-[#f2d5a3]", label: "font-body text-black font-medium" }}>Tokyo (Yellow)</Radio>
            </RadioGroup>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">Switch & Slider</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
             <Switch defaultSelected aria-label="Automatic updates" classNames={{ wrapper: "group-data-[selected=true]:bg-[#6EDCD9] border-2 border-black bg-gray-200", thumb: "border-2 border-black", label: "font-bold font-body text-black" }}>
              Mint Switch
            </Switch>
            <Switch defaultSelected classNames={{ wrapper: "group-data-[selected=true]:bg-[#E7E5FF] border-2 border-black bg-gray-200", thumb: "border-2 border-black", label: "font-bold font-body text-black" }}>
              Lavender Switch
            </Switch>
            <Switch defaultSelected classNames={{ wrapper: "group-data-[selected=true]:bg-[#fb923c] border-2 border-black bg-gray-200", thumb: "border-2 border-black", label: "font-bold font-body text-black" }}>
              Orange Switch
            </Switch>
            <Switch defaultSelected classNames={{ wrapper: "group-data-[selected=true]:bg-[#87CEEB] border-2 border-black bg-gray-200", thumb: "border-2 border-black", label: "font-bold font-body text-black" }}>
              Sky Switch
            </Switch>
            <Switch defaultSelected classNames={{ wrapper: "group-data-[selected=true]:bg-[#f2d5a3] border-2 border-black bg-gray-200", thumb: "border-2 border-black", label: "font-bold font-body text-black" }}>
              Yellow Switch
            </Switch>
          </div>
           <div className="flex flex-col gap-8 w-full max-w-md">
            <Slider 
              label="Temperature" 
              step={0.01} 
              maxValue={1} 
              minValue={0} 
              defaultValue={0.4}
              className="max-w-md"
              classNames={{ filler: "bg-[#6EDCD9] border-y-2 border-l-2 border-black", thumb: "bg-[#6EDCD9] border-2 border-black after:bg-black", track: "border-2 border-black bg-gray-100", label: "font-bold font-body text-black" }}
            />
            <Slider 
              label="Volume" 
              size="sm"
              step={1} 
              maxValue={100} 
              minValue={0} 
              defaultValue={40}
              className="max-w-md"
              classNames={{ filler: "bg-[#E7E5FF] border-y-2 border-l-2 border-black", thumb: "bg-[#E7E5FF] border-2 border-black after:bg-black", track: "border-2 border-black bg-gray-100", label: "font-bold font-body text-black" }}
            />
             <Slider 
              label="Brightness" 
              size="lg"
              step={10} 
              maxValue={100} 
              minValue={0} 
              defaultValue={70}
              className="max-w-md"
              classNames={{ filler: "bg-[#fb923c] border-y-2 border-l-2 border-black", thumb: "bg-[#fb923c] border-2 border-black after:bg-black", track: "border-2 border-black bg-gray-100", label: "font-bold font-body text-black" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
