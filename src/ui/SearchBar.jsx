"use client"
import { Button,  Label, SearchField, } from "@heroui/react";

export function SearchBAr() {
    const handleSearch = (e) => {
        e.preventDefault();
        // const search = e.target.search.value;
        
    }
    return (
        <div className="max-w-md mx-auto">
            <form className="flex gap-2" onSubmit={handleSearch}>
                <SearchField className={'flex-1'} type="text" name="search">
                    {/* <Label>Search</Label> */}
                    <SearchField.Group className='bg-[#111a16] border border-[#1c2f26] focus:outline-2 focus:outline-[#10b981]  text-[#e7f5ee] backdrop-blur-xl rounded-md'>
                        <SearchField.SearchIcon />
                        <SearchField.Input placeholder="Search..." />
                        <SearchField.ClearButton />
                    </SearchField.Group>
                </SearchField>
                <Button className='hover:bg-[#10b981] bg-[#059669] 
                     transition duration-300 rounded-md'
                 type="submit">Search</Button>
            </form>



        </div>
    );
}