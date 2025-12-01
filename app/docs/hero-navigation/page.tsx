"use client";

import {
  BreadcrumbItem,
  Breadcrumbs,
  Card,
  CardBody,
  Link,
  Pagination,
  Tab,
  Tabs,
} from "@heroui/react";
import React from "react";

export default function HeroNavigation() {
  const [selected, setSelected] = React.useState("photos");

  return (
    <div className="min-h-screen bg-background p-8 space-y-12 max-w-4xl mx-auto">
      <div className="space-y-4">
        <h1 className="text-4xl font-display font-bold">HeroUI Navigation</h1>
        <p className="text-lg text-muted-foreground font-body">
          Components that help users navigate through your application, now with{" "}
          <span className="text-[#f2d5a3] font-bold">extra flavor</span>.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">
          Breadcrumbs
        </h2>
        <div className="flex flex-col gap-4">
          <Breadcrumbs
            itemClasses={{
              item: "text-black data-[current=true]:text-[#f2d5a3] font-black font-body text-lg",
            }}
          >
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Music</BreadcrumbItem>
            <BreadcrumbItem>Artist</BreadcrumbItem>
            <BreadcrumbItem>Album</BreadcrumbItem>
            <BreadcrumbItem>Song</BreadcrumbItem>
          </Breadcrumbs>

          <Breadcrumbs
            size="lg"
            itemClasses={{
              item: "text-black data-[current=true]:text-[#fb923c] font-black font-body",
            }}
          >
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Music</BreadcrumbItem>
            <BreadcrumbItem>Artist</BreadcrumbItem>
            <BreadcrumbItem>Album</BreadcrumbItem>
            <BreadcrumbItem>Song</BreadcrumbItem>
          </Breadcrumbs>

          <Breadcrumbs
            underline="active"
            onAction={(key) => console.log(key)}
            itemClasses={{
              item: "text-black data-[current=true]:text-[#E7E5FF] font-black font-body",
            }}
          >
            <BreadcrumbItem key="home" isCurrent={selected === "home"}>
              Home
            </BreadcrumbItem>
            <BreadcrumbItem key="music" isCurrent={selected === "music"}>
              Music
            </BreadcrumbItem>
            <BreadcrumbItem key="artist" isCurrent={selected === "artist"}>
              Artist
            </BreadcrumbItem>
            <BreadcrumbItem key="album" isCurrent={selected === "album"}>
              Album
            </BreadcrumbItem>
            <BreadcrumbItem key="song" isCurrent={selected === "song"}>
              Song
            </BreadcrumbItem>
          </Breadcrumbs>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">
          Pagination
        </h2>
        <div className="flex flex-col gap-6">
          <Pagination
            total={10}
            initialPage={1}
            classNames={{
              cursor:
                "bg-[#fb923c] text-black font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black",
              item: "font-bold font-body",
            }}
          />
          <Pagination
            showControls
            total={10}
            initialPage={1}
            classNames={{
              cursor:
                "bg-[#f2d5a3] text-black font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black",
              item: "font-bold font-body",
            }}
          />
          <Pagination
            isCompact
            showControls
            total={10}
            initialPage={1}
            classNames={{
              cursor:
                "bg-[#E7E5FF] text-black font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border-2 border-black",
              item: "font-bold font-body",
            }}
          />
          <Pagination
            loop
            showControls
            total={5}
            initialPage={1}
            classNames={{
              cursor:
                "bg-[#87CEEB] text-black font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black",
              item: "font-bold font-body",
            }}
          />
          <Pagination
            showShadow
            total={10}
            initialPage={1}
            classNames={{
              cursor:
                "bg-[#81F499] text-black font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-black",
              item: "font-bold font-body",
            }}
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">Tabs</h2>
        <div className="flex w-full flex-col">
          <Tabs
            aria-label="Options"
            variant="bordered"
            classNames={{
              cursor: "bg-[#fb923c]",
              tabContent:
                "group-data-[selected=true]:text-black font-bold font-body",
              tabList: "border-black border-2 bg-white",
              tab: "data-[hover=true]:bg-gray-100",
            }}
          >
            <Tab key="photos" title="Orange Tab">
              <Card className="bg-[#fb923c]/20 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl">
                <CardBody className="font-body font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </CardBody>
              </Card>
            </Tab>
            <Tab key="music" title="Lavender Tab">
              <Card className="bg-[#E7E5FF]/20 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl">
                <CardBody className="font-body font-medium">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </CardBody>
              </Card>
            </Tab>
            <Tab key="videos" title="Yellow Tab">
              <Card className="bg-[#f2d5a3]/20 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-xl">
                <CardBody className="font-body font-medium">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </CardBody>
              </Card>
            </Tab>
          </Tabs>

          <div className="mt-8">
            <Tabs
              aria-label="Options"
              radius="full"
              classNames={{
                cursor: "bg-[#81F499] text-black border-2 border-black",
                tabContent:
                  "group-data-[selected=true]:text-black font-bold font-body text-white",
                tabList: "bg-black p-2 border-2 border-black",
              }}
            >
              <Tab key="photos" title="Lime" />
              <Tab key="music" title="Yellow" />
              <Tab key="videos" title="Sky" />
            </Tabs>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">Link</h2>
        <div className="flex gap-4 flex-wrap">
          <Link
            href="#"
            className="text-[#6EDCD9] font-black hover:text-[#6EDCD9]/80 underline decoration-4 decoration-[#6EDCD9]/30 font-body text-lg"
          >
            Mint Link
          </Link>
          <Link
            href="#"
            className="text-[#E7E5FF] font-black hover:text-[#E7E5FF]/80 underline decoration-4 decoration-[#E7E5FF] font-body text-lg shadow-sm bg-black px-2"
          >
            Lavender Link
          </Link>
          <Link
            href="#"
            className="text-[#fb923c] font-black hover:text-[#fb923c]/80 underline decoration-4 decoration-[#fb923c] font-body text-lg"
          >
            Orange Link
          </Link>
          <Link
            href="#"
            className="text-[#87CEEB] font-black hover:text-[#87CEEB]/80 underline decoration-4 decoration-[#87CEEB] font-body text-lg"
          >
            Sky Link
          </Link>
          <Link
            href="#"
            className="text-[#f2d5a3] font-black hover:text-[#f2d5a3]/80 underline decoration-4 decoration-[#f2d5a3] font-body text-lg shadow-sm bg-black px-2"
          >
            Yellow Link
          </Link>
          <Link
            href="#"
            className="text-[#81F499] font-black hover:text-[#81F499]/80 underline decoration-4 decoration-[#81F499] font-body text-lg"
          >
            Lime Link
          </Link>
          <Link
            isBlock
            showAnchorIcon
            href="#"
            className="text-black bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all font-body font-bold"
          >
            Block Link
          </Link>
        </div>
      </section>
    </div>
  );
}
