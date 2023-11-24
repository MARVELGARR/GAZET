

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
        <div className="w-full flex items-center justify-between">
            <div className="flex px-8 items-center w-full justify-between ">

                <Button variant={'outline'} className="h-[2rem] rounded-[0.4rem] flex items-center gap-2">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3334 4.66671L12.15 5.85004L10.825 4.52504V13.8334H9.17504V4.52504L7.85004 5.85004L6.66671 4.66671L10 1.33337L13.3334 4.66671ZM16.6667 8.83337V18C16.6667 18.9167 15.9167 19.6667 15 19.6667H5.00004C4.07504 19.6667 3.33337 18.9167 3.33337 18V8.83337C3.33337 7.90837 4.07504 7.16671 5.00004 7.16671H7.50004V8.83337H5.00004V18H15V8.83337H12.5V7.16671H15C15.9167 7.16671 16.6667 7.90837 16.6667 8.83337Z" fill="#8A8D93"/>
                    </svg>
                    <h3 className="">EXPORT</h3>
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
                    <Button className="rounded-[0.4rem] h-[2rem] bg-violet-600">
                        SEARCH
                    </Button>
                </div>
            </div>
            <div className="">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 8.5C13.1 8.5 14 7.6 14 6.5C14 5.4 13.1 4.5 12 4.5C10.9 4.5 10 5.4 10 6.5C10 7.6 10.9 8.5 12 8.5ZM12 10.5C10.9 10.5 10 11.4 10 12.5C10 13.6 10.9 14.5 12 14.5C13.1 14.5 14 13.6 14 12.5C14 11.4 13.1 10.5 12 10.5ZM12 16.5C10.9 16.5 10 17.4 10 18.5C10 19.6 10.9 20.5 12 20.5C13.1 20.5 14 19.6 14 18.5C14 17.4 13.1 16.5 12 16.5Z" fill="#3A3541" fill-opacity="0.54"/>
                        </svg>

                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
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
                <TableHeader>
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
            <div className="flex items-center justify-end space-x-2 py-4">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                    Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                    Next
                    </Button>
            </div>
        </div>
    </div>
  )
}
