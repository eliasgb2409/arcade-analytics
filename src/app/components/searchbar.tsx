'use client';
 import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
 import React from 'react';
 import { useState } from 'react';

export function SearchBar(){

    const [searchWord, setSearchword] = useState("")

    function handleSearch(term: string) {
        console.log(term);
    }

    return(
            <div className="w-3/5 pr-10 mt-5">
                <label htmlFor="search" className="sr-only">
                    Search
                </label>
                <div className="pointer-events-none absolute ml-2 mt-2.5">
                    <MagnifyingGlassIcon className="h-[18px] w-[18px] text-gray-400" />
                </div>
                <input
                    className="bg-cardBackground peer block w-full rounded-md border border-gray-400 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                    placeholder="Enter title..."
                    onChange={(e) => {
                        handleSearch(e.target.value);
                    }}
            />
            </div>
    )
}