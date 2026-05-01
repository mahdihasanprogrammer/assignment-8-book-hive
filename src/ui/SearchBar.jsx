"use client"
import { Button,  Label, SearchField, } from "@heroui/react";

export function SearchBAr() {
    const handleSearch = (e) => {
        e.preventDefault();
        // const search = e.target.search.value;
        
    }
    return (
        <div>
            <form className="flex" onSubmit={handleSearch}>
                <SearchField className={'flex-1'} type="text" name="search">
                    <Label>Search</Label>
                    <SearchField.Group>
                        <SearchField.SearchIcon />
                        <SearchField.Input className="w-full" placeholder="Search..." />
                        <SearchField.ClearButton />
                    </SearchField.Group>
                </SearchField>
                <Button type="submit">Search</Button>
            </form>



        </div>
    );
}