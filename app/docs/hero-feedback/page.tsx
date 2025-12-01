"use client";

import {
  Alert,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Skeleton,
  Spinner,
  User,
} from "@heroui/react";

export default function HeroFeedback() {
  return (
    <div className="min-h-screen bg-background p-8 space-y-12 max-w-4xl mx-auto">
      <div className="space-y-4">
        <h1 className="text-4xl font-display font-bold">HeroUI Feedback</h1>
        <p className="text-lg text-muted-foreground font-body">
          Components that provide feedback and loading states, now{" "}
          <span className="text-[#81F499] font-bold">funkier</span> than ever.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">
          Skeleton
        </h2>
        <div className="max-w-[300px] w-full flex items-center gap-3">
          <div>
            <Skeleton className="flex rounded-full w-12 h-12 before:!bg-[#6EDCD9]/50 border-2 border-transparent bg-gray-200" />
          </div>
          <div className="w-full flex flex-col gap-2">
            <Skeleton className="h-3 w-3/5 rounded-lg before:!bg-[#E7E5FF]/50 border-2 border-transparent bg-gray-200" />
            <Skeleton className="h-3 w-4/5 rounded-lg before:!bg-[#fb923c]/50 border-2 border-transparent bg-gray-200" />
          </div>
        </div>
        <div className="space-y-3 mt-4">
          <Skeleton className="rounded-lg before:!bg-[#87CEEB]/50 border-2 border-transparent bg-gray-200">
            <div className="h-24 rounded-lg bg-default-300"></div>
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg before:!bg-[#f2d5a3]/50 border-2 border-transparent bg-gray-200">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg before:!bg-[#81F499]/50 border-2 border-transparent bg-gray-200">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">
          Spinner
        </h2>
        <div className="flex gap-4 items-center">
          <Spinner
            classNames={{
              circle1: "border-b-[#6EDCD9]",
              circle2: "border-b-[#6EDCD9]",
            }}
          />
          <Spinner
            classNames={{
              circle1: "border-b-[#E7E5FF]",
              circle2: "border-b-[#E7E5FF]",
            }}
          />
          <Spinner
            classNames={{
              circle1: "border-b-[#fb923c]",
              circle2: "border-b-[#fb923c]",
            }}
          />
          <Spinner
            classNames={{
              circle1: "border-b-[#87CEEB]",
              circle2: "border-b-[#87CEEB]",
            }}
          />
          <Spinner
            classNames={{
              circle1: "border-b-[#f2d5a3]",
              circle2: "border-b-[#f2d5a3]",
            }}
          />
          <Spinner
            classNames={{
              circle1: "border-b-[#81F499]",
              circle2: "border-b-[#81F499]",
            }}
          />
        </div>
        <div className="flex gap-4 items-center mt-4">
          <Spinner size="sm" color="success" />
          <Spinner size="md" color="warning" />
          <Spinner size="lg" color="danger" />
        </div>
        <div className="flex gap-4 items-center mt-4">
          <Spinner
            label="Loading..."
            classNames={{
              label: "text-[#f2d5a3] font-bold font-body",
              circle1: "border-b-[#f2d5a3]",
              circle2: "border-b-[#f2d5a3]",
            }}
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">
          Popover
        </h2>
        <Popover
          placement="right"
          classNames={{
            content:
              "bg-[#6EDCD9]/20 border-2 border-[#6EDCD9] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl",
          }}
        >
          <PopoverTrigger>
            <Button className="bg-[#6EDCD9] text-black font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-body">
              Mint Popover
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-small font-bold font-display">
                Minty Fresh
              </div>
              <div className="text-tiny font-body">
                This is the popover content
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <div className="mt-4">
          <Popover
            showArrow
            placement="bottom"
            classNames={{
              content:
                "bg-[#fb923c]/20 border-2 border-[#fb923c] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl",
            }}
          >
            <PopoverTrigger>
              <User
                as="button"
                name="Zoe Lang"
                description="Product Designer"
                className="transition-transform"
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
                  className: "border-2 border-[#fb923c]",
                }}
                classNames={{
                  name: "font-bold font-display",
                  description: "font-body",
                }}
              />
            </PopoverTrigger>
            <PopoverContent className="p-1">
              <User
                as="button"
                name="Zoe Lang"
                description="Product Designer"
                className="transition-transform"
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
                }}
                classNames={{
                  name: "font-bold font-display",
                  description: "font-body",
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">Alert</h2>
        <div className="flex flex-col w-full gap-4">
          <Alert
            classNames={{
              base: "bg-[#6EDCD9]/20 border-2 border-[#6EDCD9] rounded-xl",
              title: "text-black font-bold font-display",
            }}
            title="This is a Mint alert"
          />
          <Alert
            classNames={{
              base: "bg-[#E7E5FF]/20 border-2 border-[#E7E5FF] rounded-xl",
              title: "text-black font-bold font-display",
            }}
            title="This is a Lavender alert"
            variant="faded"
          />
          <Alert
            classNames={{
              base: "border-2 border-[#fb923c] rounded-xl",
              title: "text-[#fb923c] font-bold font-display",
              mainWrapper: "text-[#fb923c]",
            }}
            title="This is a Orange alert"
            variant="bordered"
          />
          <Alert
            classNames={{
              base: "bg-[#87CEEB]/20 border-2 border-[#87CEEB] rounded-xl",
              title: "text-black font-bold font-display",
              description: "text-black font-body",
            }}
            title="This is a Sky alert"
            description="This is a description for the Sky alert"
          />
          <Alert
            classNames={{
              base: "bg-[#f2d5a3]/20 border-2 border-[#f2d5a3] rounded-xl",
              title: "text-black font-bold font-display",
            }}
            title="This is a Yellow alert"
            endContent={
              <Button
                className="bg-[#f2d5a3] text-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border-2 border-black font-body"
                size="sm"
                variant="flat"
              >
                Action
              </Button>
            }
          />
        </div>
      </section>
    </div>
  );
}
