"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {TypeOf, z} from 'zod'
import { Checkbox } from "@/components/ui/checkbox"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export interface client {
  id: string,
  title: string,
  firstname: string,
  companyname: string,
  address: string,
  phone:string,
  clientemail: string,
  currency: string,
  status: string;
  time: string;
}

export const columns: ColumnDef<client>[] = [
    {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value: any) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value: any) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "firstname",
        header: "FirstName",
    },
    {
      accessorKey: "clientemail",
      header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              Email
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          )
        },
      },
      {
        accessorKey: "phone",
        header: "Phone No",
    },
    {
        accessorKey: "time",
        header: "Time",
      },
      {
        accessorKey: "status",
        header: "Status",
      
    },
    {
        id: "actions",
        cell: ({ row }) => {
          const client = row.original
     
          return (
            <div className="flex bg-white gap-4">

                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <Button  className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className=" rotate-90 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className=" bg-white" align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem
                        onClick={() => navigator.clipboard.writeText(client.id)}
                        >
                        Copy ID
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>View customer</DropdownMenuItem>
                      <DropdownMenuItem>View invoice details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
          )
        },
    },
    
]
