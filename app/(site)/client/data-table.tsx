

"use client"

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import React from "react"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Input } from "@/components/ui/input"
import { DropdownMenu,  DropdownMenuCheckboxItem,  DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"
interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
        )
        const [rowSelection, setRowSelection] = React.useState({})
    const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },

    })

  return (
    <div className="flex flex-col gap-4 items-center w-full">
        <div className="w-full flex items-center gap-2">
            <div className="flex px-8 items-center w-full justify-between ">

                <Button variant={'outline'} className="h-[2rem] rounded-[0.4rem] flex items-center gap-2">
                    <Image 
                        src="/svg/export.svg" 
                        alt="Export" 
                        width={17} 
                        height={17} 
                        className=''
                    />
                    <h3 className="text-sm">EXPORT</h3>
                </Button>
                <div className="flex items-center gap-4">
                    <Input  
                    className='rounded-[0.4rem] h-[2rem] bg-transparent' 
                    placeholder="CLIENT NAME"
                    value={(table.getColumn("firstname")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("firstname")?.setFilterValue(event.target.value)
                    }
                    />
                    <Button className="rounded-[0.4rem] h-[2rem] text-white hover:text-violet-600 hover:border-2 hover:border-violet-600 bg-violet-600">
                        SEARCH
                    </Button>
                </div>
            </div>
            <div className="z-20">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Image
                            src='/svg/three.svg'
                            alt='three dot'
                            width='20'
                            height='20'
                            className=''
                        />

                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='bg-white mr-[3rem]' align="center">
                        {table
                        .getAllColumns()
                        .filter(
                            (column) => column.getCanHide()
                        )
                        .map((column) => {
                            return (
                            <DropdownMenuCheckboxItem
                                key={column.id}
                                className="capitalize"
                                checked={column.getIsVisible()}
                                onCheckedChange={(value) =>
                                column.toggleVisibility(!!value)
                                }
                            >
                                {column.id}
                            </DropdownMenuCheckboxItem>
                            )
                        })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
        <div className="rounded-md border w-full">
            <Table>
                <TableHeader className=''>
                {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                        return (
                        <TableHead key={header.id}>
                            {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                                )}
                        </TableHead>
                        )
                    })}
                    </TableRow>
                ))}
                </TableHeader>
                <TableBody>
                {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                    <TableRow
                        key={row.id}
                        data-state={row.getIsSelected() && "selected"}
                    >
                        {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                        ))}
                    </TableRow>
                    ))
                ) : (
                    <TableRow>
                        <TableCell colSpan={columns.length} className="h-24 text-center">
                            No results.
                        </TableCell>
                    </TableRow>
                )}
                </TableBody>
            </Table>
            <div className="flex items-center justify-end space-x-2 py-4 mr-3">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    className='rounded-[0.4rem] p-2'
                >
                Previous
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    className='rounded-[0.4rem] p-2'
                >
                Next
                </Button>
            </div>
        </div>
    </div>
  )
}
