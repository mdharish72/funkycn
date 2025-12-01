"use client";

import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Image,
  ScrollShadow,
  Spacer,
  Tooltip,
  useDisclosure,
} from "@heroui/react";

export default function HeroMedia() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="min-h-screen bg-background p-8 space-y-12 max-w-4xl mx-auto">
      <div className="space-y-4">
        <h1 className="text-4xl font-display font-bold">
          HeroUI Media & Overlays
        </h1>
        <p className="text-lg text-muted-foreground font-body">
          Components for rich media content and advanced overlays, styled with{" "}
          <span className="text-[#f2d5a3] font-bold">bold colors</span>.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">Image</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Image
            width={300}
            alt="NextUI Fruit Image with Zoom"
            src="https://heroui.com/images/fruit-1.jpeg"
            isZoomed
            className="border-2 border-[#6EDCD9] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          />
          <Image
            width={300}
            alt="NextUI Fruit Image with Blur"
            src="https://heroui.com/images/fruit-2.jpeg"
            isBlurred
            className="border-2 border-[#E7E5FF] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          />
          <Image
            width={300}
            alt="NextUI Hero Image"
            src="https://heroui.com/images/hero-card-complete.jpeg"
            className="border-2 border-[#fb923c] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">
          ScrollShadow
        </h2>
        <div className="flex gap-4">
          <ScrollShadow className="w-[300px] h-[200px] border-2 border-[#87CEEB] rounded-xl p-4 bg-[#87CEEB]/10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-body">
            <p className="text-foreground font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              pulvinar risus non risus hendrerit venenatis. Pellentesque sit
              amet hendrerit risus, sed porttitor quam. Magna exercitation
              reprehenderit magna aute tempor cupidatat consequat elit dolor
              adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
              Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor
              eiusmod. Et mollit incididunt nisi consectetur esse laborum
              eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud
              ad veniam.
            </p>
            <p className="text-foreground mt-4 font-medium">
              Est dolore sunt aliqua velit velit irure. Dolore magna aliqua aute
              adipisicing consequat tempor. Veniam ea ea culpa do elit. Minim
              mollit veniam fugiat ea.
            </p>
          </ScrollShadow>
          <ScrollShadow
            orientation="horizontal"
            className="w-[300px] h-[200px] border-2 border-[#f2d5a3] rounded-xl p-4 flex gap-4 items-center bg-[#f2d5a3]/10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <div className="w-[150px] h-[150px] bg-[#6EDCD9] rounded-lg flex-shrink-0 border-2 border-black"></div>
            <div className="w-[150px] h-[150px] bg-[#E7E5FF] rounded-lg flex-shrink-0 border-2 border-black"></div>
            <div className="w-[150px] h-[150px] bg-[#fb923c] rounded-lg flex-shrink-0 border-2 border-black"></div>
            <div className="w-[150px] h-[150px] bg-[#87CEEB] rounded-lg flex-shrink-0 border-2 border-black"></div>
            <div className="w-[150px] h-[150px] bg-[#f2d5a3] rounded-lg flex-shrink-0 border-2 border-black"></div>
          </ScrollShadow>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">
          Tooltip
        </h2>
        <div className="flex gap-4">
          <Tooltip
            content="I am a tooltip"
            className="bg-[#6EDCD9] text-foreground border-2 border-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-body"
          >
            <Button
              variant="bordered"
              className="border-2 border-[#6EDCD9] text-black font-bold hover:bg-[#6EDCD9] hover:text-black font-body"
            >
              Mint Tooltip
            </Button>
          </Tooltip>
          <Tooltip
            content="I am a tooltip"
            placement="bottom"
            className="bg-[#E7E5FF] text-foreground border-2 border-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-body"
          >
            <Button
              variant="bordered"
              className="border-2 border-[#E7E5FF] text-black font-bold hover:bg-[#E7E5FF] hover:text-black font-body"
            >
              Lavender Tooltip
            </Button>
          </Tooltip>
          <Tooltip
            content={
              <div className="px-1 py-2 font-body">
                <div className="text-small font-bold">Custom Content</div>
                <div className="text-tiny">This is a custom tooltip</div>
              </div>
            }
            className="bg-white border-2 border-[#fb923c] text-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            <Button
              variant="bordered"
              className="border-2 border-[#fb923c] text-black font-bold hover:bg-[#fb923c] hover:text-white font-body"
            >
              Custom Tooltip
            </Button>
          </Tooltip>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">
          Drawer
        </h2>
        <Button
          onPress={onOpen}
          className="bg-[#81F499] text-foreground font-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-display"
        >
          Open Drawer
        </Button>
        <Drawer
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          classNames={{ wrapper: "z-[9999]" }}
        >
          <DrawerContent className="bg-white border-l-4 border-[#81F499]">
            {(onClose) => (
              <>
                <DrawerHeader className="flex flex-col gap-1 text-black font-black text-2xl uppercase font-display">
                  Drawer Title
                </DrawerHeader>
                <DrawerBody>
                  <p className="font-medium font-body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                  </p>
                  <p className="font-medium font-body">
                    Magna exercitation reprehenderit magna aute tempor cupidatat
                    consequat elit dolor adipisicing. Mollit dolor eiusmod sunt
                    ex incididunt cillum quis. Velit duis sit officia eiusmod
                    Lorem aliqua enim laboris do dolor eiusmod. Et mollit
                    incididunt nisi consectetur esse laborum eiusmod pariatur
                    proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                  </p>
                </DrawerBody>
                <DrawerFooter>
                  <Button
                    color="danger"
                    variant="light"
                    onPress={onClose}
                    className="font-bold font-body"
                  >
                    Close
                  </Button>
                  <Button
                    className="bg-[#81F499] text-foreground font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-body"
                    onPress={onClose}
                  >
                    Action
                  </Button>
                </DrawerFooter>
              </>
            )}
          </DrawerContent>
        </Drawer>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">
          Layout
        </h2>
        <div className="flex flex-col gap-4">
          <div className="h-12 w-full bg-[#6EDCD9]/20 border-2 border-[#6EDCD9] rounded-md flex items-center justify-center font-bold text-black font-display">
            Item 1
          </div>
          <Spacer y={4} />
          <Divider className="bg-[#f2d5a3] h-1" />
          <Spacer y={4} />
          <div className="h-12 w-full bg-[#E7E5FF]/20 border-2 border-[#E7E5FF] rounded-md flex items-center justify-center font-bold text-black font-display">
            Item 2
          </div>
        </div>
      </section>
    </div>
  );
}
