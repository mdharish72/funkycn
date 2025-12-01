"use client";

import {
  Accordion,
  AccordionItem,
  Avatar,
  AvatarGroup,
  Badge,
  Chip,
  CircularProgress,
  Code,
  Kbd,
  Progress,
  Snippet,
  User,
} from "@heroui/react";

export default function HeroData() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="min-h-screen bg-background p-8 space-y-12 max-w-4xl mx-auto">
      <div className="space-y-4">
        <h1 className="text-4xl font-display font-bold">HeroUI Data Display</h1>
        <p className="text-lg text-muted-foreground font-body">
          Components for displaying data, status, and feedback with{" "}
          <span className="text-[#87CEEB] font-bold">colorful accents</span>.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">
          User & Avatar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <User
              name="Jane Doe"
              description="Product Designer"
              avatarProps={{
                src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                className: "border-2 border-[#6EDCD9]",
              }}
              classNames={{
                name: "font-bold font-display text-lg",
                description: "font-body font-medium text-gray-500",
              }}
            />
            <User
              name="Tony Reichert"
              description="CEO"
              avatarProps={{
                src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                className: "border-2 border-[#fb923c]",
              }}
              classNames={{
                name: "font-bold font-display text-lg",
                description: "font-body font-medium text-gray-500",
              }}
            />
          </div>
          <div className="space-y-4">
            <AvatarGroup isBordered max={3} total={10}>
              <Avatar
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                className="border-2 border-[#E7E5FF]"
              />
              <Avatar
                src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                className="border-2 border-[#87CEEB]"
              />
              <Avatar
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                className="border-2 border-[#f2d5a3]"
              />
              <Avatar
                src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                className="border-2 border-[#81F499]"
              />
              <Avatar
                src="https://i.pravatar.cc/150?u=a04258114e29026702d"
                className="border-2 border-white"
              />
              <Avatar
                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                className="border-2 border-white"
              />
            </AvatarGroup>
            <div className="flex gap-4 items-center">
              <Avatar
                isBordered
                className="ring-[#6EDCD9] ring-offset-2 ring-2"
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              />
              <Avatar
                isBordered
                className="ring-[#E7E5FF] ring-offset-2 ring-2"
                radius="sm"
                src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
              />
              <Avatar
                isBordered
                className="ring-[#fb923c] ring-offset-2 ring-2"
                radius="full"
                src="https://i.pravatar.cc/150?u=a04258114e29026702d"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">
          Chips & Badges
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-wrap gap-2">
            <Chip className="bg-[#6EDCD9] text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold">
              Mint
            </Chip>
            <Chip className="bg-[#E7E5FF] text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold">
              Lavender
            </Chip>
            <Chip className="bg-[#fb923c] text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold">
              Orange
            </Chip>
            <Chip className="bg-[#87CEEB] text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold">
              Sky
            </Chip>
            <Chip className="bg-[#f2d5a3] text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold">
              Yellow
            </Chip>
            <Chip className="bg-[#81F499] text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold">
              Lime
            </Chip>
            <Chip
              variant="bordered"
              className="border-2 border-[#fb923c] text-[#fb923c] font-black"
            >
              Orange Border
            </Chip>
            <Chip
              variant="dot"
              className="border-2 border-[#87CEEB] text-[#87CEEB] font-black"
              classNames={{ dot: "bg-[#87CEEB]" }}
            >
              Sky Dot
            </Chip>
          </div>
          <div className="flex gap-6 items-center">
            <Badge
              content="5"
              className="bg-[#6EDCD9] text-black border-2 border-black font-bold"
            >
              <Avatar
                radius="md"
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                className="border-2 border-black"
              />
            </Badge>
            <Badge
              content="new"
              className="bg-[#fb923c] text-black border-2 border-black font-bold"
              size="sm"
            >
              <Avatar
                radius="md"
                src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                className="border-2 border-black"
              />
            </Badge>
            <Badge
              content=""
              className="bg-[#81F499] border-2 border-black"
              shape="circle"
              placement="bottom-right"
            >
              <Avatar
                radius="full"
                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                className="border-2 border-black"
              />
            </Badge>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">
          Accordion
        </h2>
        <Accordion variant="splitted">
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="Mint Accordion"
            className="bg-[#6EDCD9]/20 border-2 border-black mb-2 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            classNames={{ title: "text-black font-bold font-display" }}
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title="Lavender Accordion"
            className="bg-[#E7E5FF]/20 border-2 border-black mb-2 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            classNames={{ title: "text-black font-bold font-display" }}
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            title="Yellow Accordion"
            className="bg-[#f2d5a3]/20 border-2 border-black mb-2 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            classNames={{ title: "text-black font-bold font-display" }}
          >
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">
          Code & Snippet
        </h2>
        <div className="space-y-4">
          <Snippet
            className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            symbol={<span className="text-[#f2d5a3] font-bold">$</span>}
          >
            npm install @heroui/react
          </Snippet>
          <Snippet
            symbol="#"
            className="bg-[#6EDCD9]/10 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            classNames={{ symbol: "text-[#6EDCD9] font-bold" }}
          >
            npm install @heroui/react
          </Snippet>
          <div className="flex gap-4 items-center">
            <p className="font-body">
              Press{" "}
              <Kbd className="bg-[#E7E5FF] text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold">
                ⌘
              </Kbd>{" "}
              +{" "}
              <Kbd className="bg-[#E7E5FF] text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-bold">
                K
              </Kbd>{" "}
              to search
            </p>
            <Code className="bg-[#87CEEB]/20 text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-mono font-bold">
              npm install @heroui/react
            </Code>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">
          Progress
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Progress
            aria-label="Loading..."
            value={60}
            className="max-w-md"
            classNames={{
              indicator: "bg-[#6EDCD9] border-y-2 border-l-2 border-black",
              track: "border-2 border-black bg-gray-100",
            }}
          />
          <Progress
            aria-label="Downloading..."
            size="md"
            value={40}
            showValueLabel={true}
            className="max-w-md"
            classNames={{
              indicator: "bg-[#fb923c] border-y-2 border-l-2 border-black",
              track: "border-2 border-black bg-gray-100",
              label: "font-bold font-body",
              value: "font-bold font-body",
            }}
          />
          <div className="flex gap-4">
            <CircularProgress
              aria-label="Loading..."
              classNames={{
                indicator: "stroke-[#f2d5a3]",
                track: "stroke-gray-200",
              }}
            />
            <CircularProgress
              label="Loading..."
              classNames={{
                indicator: "stroke-[#87CEEB]",
                value: "text-[#87CEEB] font-bold",
                label: "text-black font-bold",
                track: "stroke-gray-200",
              }}
            />
            <CircularProgress
              aria-label="Loading..."
              size="lg"
              value={70}
              showValueLabel={true}
              classNames={{
                indicator: "stroke-[#81F499]",
                value: "text-black font-bold",
                track: "stroke-gray-200",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
