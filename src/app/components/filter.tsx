"use client"
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline"

export function Filter(){
    return( //bg-cardBackground border rounded-full border-gray-400
        <div className="flex items-center gap-2 p-2">
            <AdjustmentsHorizontalIcon className="h-[20px] w-[20px]"/>
            <p className="text-sm font-light">
                Filter
            </p>
        </div>
    )
}