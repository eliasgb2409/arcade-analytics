"use client";
import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";

export function Sorting(){
    return( //bg-cardBackground border rounded-full border-gray-400
        <div className="flex items-center p-2 gap-2">
            <ArrowsUpDownIcon className="h-[20px] w-[20px]" /> 
            <p className="text-sm font-light">
                Sort by
            </p>
        </div>
    )
}
