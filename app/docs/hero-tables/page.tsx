"use client";

import {
  Chip,
  Listbox,
  ListboxItem,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  User,
} from "@heroui/react";
import React from "react";

const columns = [
  { name: "NAME", uid: "name" },
  { name: "ROLE", uid: "role" },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];

interface UserData {
  id: number;
  name: string;
  role: string;
  team: string;
  status: "active" | "paused" | "vacation";
  age: string;
  avatar: string;
  email: string;
}

const users: UserData[] = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    team: "Management",
    status: "active",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  {
    id: 2,
    name: "Zoey Lang",
    role: "Technical Lead",
    team: "Development",
    status: "paused",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    email: "zoey.lang@example.com",
  },
  {
    id: 3,
    name: "Jane Fisher",
    role: "Senior Developer",
    team: "Development",
    status: "active",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    email: "jane.fisher@example.com",
  },
  {
    id: 4,
    name: "William Howard",
    role: "Community Manager",
    team: "Marketing",
    status: "vacation",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    email: "william.howard@example.com",
  },
  {
    id: 5,
    name: "Kristen Copper",
    role: "Sales Manager",
    team: "Sales",
    status: "active",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    email: "kristen.cooper@example.com",
  },
];

const statusColorMap: Record<string, "success" | "danger" | "warning"> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

export default function HeroTables() {
  const renderCell = React.useCallback(
    (user: UserData, columnKey: React.Key) => {
      const cellValue = user[columnKey as keyof UserData];

      switch (columnKey) {
        case "name":
          return (
            <User
              avatarProps={{
                radius: "lg",
                src: user.avatar,
                className: "border-2 border-black",
              }}
              description={user.email}
              name={cellValue}
              classNames={{
                name: "font-bold font-display",
                description: "font-body",
              }}
            >
              {user.email}
            </User>
          );
        case "role":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize font-bold font-body">
                {cellValue}
              </p>
              <p className="text-bold text-tiny capitalize text-default-400 font-body">
                {user.team}
              </p>
            </div>
          );
        case "status":
          return (
            <Chip
              className="capitalize border-2 border-black font-bold font-body"
              color={statusColorMap[user.status]}
              size="sm"
              variant="flat"
            >
              {cellValue}
            </Chip>
          );
        case "actions":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip
                content="Details"
                className="bg-[#87CEEB] text-black font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-body"
              >
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50 hover:text-[#87CEEB] transition-colors">
                  👁️
                </span>
              </Tooltip>
              <Tooltip
                content="Edit user"
                className="bg-[#f2d5a3] text-black font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-body"
              >
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50 hover:text-[#f2d5a3] transition-colors">
                  ✏️
                </span>
              </Tooltip>
              <Tooltip
                color="danger"
                content="Delete user"
                className="bg-[#fb923c] text-black font-bold border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] font-body"
              >
                <span className="text-lg text-danger cursor-pointer active:opacity-50 hover:text-[#fb923c] transition-colors">
                  🗑️
                </span>
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );

  return (
    <div className="min-h-screen bg-background p-8 space-y-12 max-w-4xl mx-auto">
      <div className="space-y-4">
        <h1 className="text-4xl font-display font-bold">
          HeroUI Tables & Lists
        </h1>
        <p className="text-lg text-muted-foreground font-body">
          Components for displaying and managing lists of data with{" "}
          <span className="text-[#E7E5FF] font-bold bg-black px-1 rounded-sm">
            personality
          </span>
          .
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">Table</h2>
        <Table
          aria-label="Example table with custom cells"
          classNames={{
            wrapper:
              "bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rounded-xl",
            th: "bg-[#f2d5a3]/30 text-black font-bold border-b-2 border-black font-display",
            td: "border-b border-black/10 group-last:border-b-0 font-body",
          }}
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "actions" ? "center" : "start"}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={users}>
            {(item) => (
              <TableRow
                key={item.id}
                className="hover:bg-[#f2d5a3]/10 transition-colors"
              >
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">
          Listbox
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full max-w-[260px] border-2 border-black px-1 py-2 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-white">
            <Listbox
              aria-label="Actions"
              onAction={(key) => alert(key as string)}
              classNames={{ list: "font-body" }}
            >
              <ListboxItem
                key="new"
                className="data-[hover=true]:bg-[#6EDCD9] data-[hover=true]:text-black font-bold data-[hover=true]:border-2 data-[hover=true]:border-black rounded-md mb-1"
              >
                New file
              </ListboxItem>
              <ListboxItem
                key="copy"
                className="data-[hover=true]:bg-[#87CEEB] data-[hover=true]:text-black font-bold data-[hover=true]:border-2 data-[hover=true]:border-black rounded-md mb-1"
              >
                Copy link
              </ListboxItem>
              <ListboxItem
                key="edit"
                className="data-[hover=true]:bg-[#f2d5a3] data-[hover=true]:text-black font-bold data-[hover=true]:border-2 data-[hover=true]:border-black rounded-md mb-1"
              >
                Edit file
              </ListboxItem>
              <ListboxItem
                key="delete"
                className="text-red-500 data-[hover=true]:bg-red-100 data-[hover=true]:text-red-600 font-bold data-[hover=true]:border-2 data-[hover=true]:border-red-600 rounded-md"
                color="danger"
              >
                Delete file
              </ListboxItem>
            </Listbox>
          </div>
          <div className="w-full max-w-[260px] border-2 border-[#81F499] px-1 py-2 rounded-xl bg-[#81F499]/10">
            <Listbox
              aria-label="Actions"
              variant="flat"
              classNames={{ list: "font-body" }}
            >
              <ListboxItem
                key="new"
                description="Create a new file"
                className="data-[hover=true]:bg-[#81F499] data-[hover=true]:text-black font-bold rounded-md mb-1"
              >
                New file
              </ListboxItem>
              <ListboxItem
                key="copy"
                description="Copy the link to clipboard"
                className="data-[hover=true]:bg-[#81F499] data-[hover=true]:text-black font-bold rounded-md mb-1"
              >
                Copy link
              </ListboxItem>
              <ListboxItem
                key="edit"
                description="Edit the file content"
                className="data-[hover=true]:bg-[#81F499] data-[hover=true]:text-black font-bold rounded-md mb-1"
              >
                Edit file
              </ListboxItem>
            </Listbox>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2 font-display">
          Colored Lists
        </h2>
        <div className="flex gap-4 flex-wrap">
          <div className="w-[200px] border-2 border-[#E7E5FF] p-2 rounded-xl bg-[#E7E5FF]/30">
            <Listbox
              aria-label="Lavender List"
              classNames={{ list: "font-body" }}
            >
              <ListboxItem
                key="1"
                className="data-[hover=true]:bg-[#E7E5FF] font-bold rounded-md mb-1"
              >
                Item 1
              </ListboxItem>
              <ListboxItem
                key="2"
                className="data-[hover=true]:bg-[#E7E5FF] font-bold rounded-md mb-1"
              >
                Item 2
              </ListboxItem>
              <ListboxItem
                key="3"
                className="data-[hover=true]:bg-[#E7E5FF] font-bold rounded-md mb-1"
              >
                Item 3
              </ListboxItem>
            </Listbox>
          </div>
          <div className="w-[200px] border-2 border-[#fb923c] p-2 rounded-xl bg-[#fb923c]/30">
            <Listbox
              aria-label="Orange List"
              classNames={{ list: "font-body" }}
            >
              <ListboxItem
                key="1"
                className="data-[hover=true]:bg-[#fb923c] data-[hover=true]:text-black font-bold rounded-md mb-1"
              >
                Item 1
              </ListboxItem>
              <ListboxItem
                key="2"
                className="data-[hover=true]:bg-[#fb923c] data-[hover=true]:text-black font-bold rounded-md mb-1"
              >
                Item 2
              </ListboxItem>
              <ListboxItem
                key="3"
                className="data-[hover=true]:bg-[#fb923c] data-[hover=true]:text-black font-bold rounded-md mb-1"
              >
                Item 3
              </ListboxItem>
            </Listbox>
          </div>
          <div className="w-[200px] border-2 border-[#87CEEB] p-2 rounded-xl bg-[#87CEEB]/30">
            <Listbox aria-label="Sky List" classNames={{ list: "font-body" }}>
              <ListboxItem
                key="1"
                className="data-[hover=true]:bg-[#87CEEB] font-bold rounded-md mb-1"
              >
                Item 1
              </ListboxItem>
              <ListboxItem
                key="2"
                className="data-[hover=true]:bg-[#87CEEB] font-bold rounded-md mb-1"
              >
                Item 2
              </ListboxItem>
              <ListboxItem
                key="3"
                className="data-[hover=true]:bg-[#87CEEB] font-bold rounded-md mb-1"
              >
                Item 3
              </ListboxItem>
            </Listbox>
          </div>
        </div>
      </section>
    </div>
  );
}
