"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  useDisclosure,
} from "@heroui/react";

export default function HeroDemo() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="min-h-screen bg-background p-8 space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-4">Navbar & Dropdown</h2>
        <div className="border rounded-xl overflow-hidden relative z-10">
          <Navbar
            isBordered
            position="static"
            className="bg-white border-b-2 border-black"
          >
            <NavbarBrand>
              <p className="font-bold text-black text-xl font-display">
                FunkyHero
              </p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarItem>
                <Link
                  className="text-black font-medium hover:text-black/70 transition-colors font-body"
                  href="#"
                >
                  Features
                </Link>
              </NavbarItem>
              <NavbarItem isActive>
                <Link
                  href="#"
                  aria-current="page"
                  className="text-black font-black tracking-wide border-b-2 border-black font-body"
                >
                  Customers
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link
                  className="text-black font-medium hover:text-black/70 transition-colors font-body"
                  href="#"
                >
                  Integrations
                </Link>
              </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
              <NavbarItem>
                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      variant="bordered"
                      className="border-2 border-black text-black font-bold hover:bg-black hover:text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all font-body bg-white"
                    >
                      Open Menu
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Static Actions"
                    className="bg-white border-2 border-black p-2 font-body rounded-lg"
                  >
                    <DropdownItem
                      key="new"
                      className="data-[hover=true]:bg-[#6EDCD9] data-[hover=true]:text-black font-bold border-2 border-transparent data-[hover=true]:border-black rounded-md mb-1"
                    >
                      New file
                    </DropdownItem>
                    <DropdownItem
                      key="copy"
                      className="data-[hover=true]:bg-[#f2d5a3] data-[hover=true]:text-black font-bold border-2 border-transparent data-[hover=true]:border-black rounded-md mb-1"
                    >
                      Copy link
                    </DropdownItem>
                    <DropdownItem
                      key="edit"
                      className="data-[hover=true]:bg-[#fb923c] data-[hover=true]:text-black font-bold border-2 border-transparent data-[hover=true]:border-black rounded-md mb-1"
                    >
                      Edit file
                    </DropdownItem>
                    <DropdownItem
                      key="delete"
                      className="text-red-500 data-[hover=true]:bg-red-100 data-[hover=true]:text-red-600 font-bold border-2 border-transparent data-[hover=true]:border-red-600 rounded-md"
                      color="danger"
                    >
                      Delete file
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 font-display">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-[#fb923c] text-black font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black active:translate-y-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all font-display text-lg">
            ORANGE
          </Button>
          <Button className="bg-[#f2d5a3] text-black font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black active:translate-y-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all font-display text-lg">
            YELLOW
          </Button>
          <Button className="bg-[#E7E5FF] text-black font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black active:translate-y-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all font-display text-lg">
            LAVENDER
          </Button>
          <Button className="bg-[#81F499] text-black font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black active:translate-y-1 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all font-display text-lg">
            LIME
          </Button>
          <Button
            variant="bordered"
            className="border-2 border-black text-black font-bold bg-white hover:bg-gray-100 font-display text-lg"
          >
            Bordered
          </Button>
          <Button
            variant="ghost"
            className="border-2 border-transparent text-black font-bold hover:bg-gray-100 hover:border-black font-display text-lg"
          >
            Ghost
          </Button>
          <Button
            variant="flat"
            className="bg-gray-200 text-black font-bold font-display text-lg"
          >
            Flat
          </Button>
          <Button
            isLoading
            className="bg-[#6EDCD9] text-black font-bold border-2 border-black font-display text-lg"
          >
            Loading
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 font-display">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="py-4 bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-xl">
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl border-2 border-black"
                src="https://heroui.com/images/hero-card-complete.jpeg"
                width={270}
              />
            </CardBody>
            <CardFooter className="pb-0 pt-2 px-4 flex-col items-start font-body">
              <p className="text-tiny uppercase font-black text-black tracking-wider">
                Daily Mix
              </p>
              <h4 className="font-bold text-large text-black">
                Frontend Radio
              </h4>
              <small className="text-default-500 font-medium">12 Tracks</small>
            </CardFooter>
          </Card>
          <Card className="py-4 bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-xl">
            <CardBody className="overflow-visible py-2">
              <div className="h-[150px] w-full rounded-xl bg-[#E7E5FF] border-2 border-black flex items-center justify-center">
                <span className="text-6xl filter drop-shadow-md">🎵</span>
              </div>
            </CardBody>
            <CardFooter className="pb-0 pt-2 px-4 flex-col items-start font-body">
              <p className="text-tiny uppercase font-black text-black tracking-wider">
                Chill Vibes
              </p>
              <h4 className="font-bold text-large text-black">Lo-Fi Beats</h4>
              <small className="text-default-500 font-medium">45 Tracks</small>
            </CardFooter>
          </Card>
          <Card className="py-4 bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-xl">
            <CardBody className="overflow-visible py-2">
              <div className="h-[150px] w-full rounded-xl bg-[#f2d5a3] border-2 border-black flex items-center justify-center">
                <span className="text-6xl filter drop-shadow-md">🔥</span>
              </div>
            </CardBody>
            <CardFooter className="pb-0 pt-2 px-4 flex-col items-start font-body">
              <p className="text-tiny uppercase font-black text-black tracking-wider">
                Workout
              </p>
              <h4 className="font-bold text-large text-black">Pump It Up</h4>
              <small className="text-default-500 font-medium">20 Tracks</small>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 font-display">Modal</h2>
        <Button
          onPress={onOpen}
          className="bg-white text-black font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-display text-lg"
        >
          Open Funky Modal
        </Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          className="bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-black font-black text-3xl uppercase tracking-tighter font-display">
                  Funky Alert!
                </ModalHeader>
                <ModalBody>
                  <p className="font-medium text-lg leading-relaxed font-body">
                    This modal pop-up is styled with{" "}
                    <span className="bg-[#fb923c] text-black px-1 border border-black rounded-md">
                      orange
                    </span>{" "}
                    shadows and{" "}
                    <span className="bg-[#f2d5a3] text-black px-1 border border-black rounded-md">
                      yellow
                    </span>{" "}
                    accents. The background is kept clean to let the colors pop!
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button
                    className="bg-transparent border-2 border-black font-bold hover:bg-black hover:text-white font-body"
                    onPress={onClose}
                  >
                    Close
                  </Button>
                  <Button
                    className="bg-[#fb923c] text-black font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all font-body"
                    onPress={onClose}
                  >
                    Let's Go!
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </section>
    </div>
  );
}
