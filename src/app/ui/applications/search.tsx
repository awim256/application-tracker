'use client';

import {SearchIcon} from "@nextui-org/shared-icons";
import {Input} from "@nextui-org/input";
import {ReadonlyURLSearchParams, usePathname, useRouter, useSearchParams} from "next/navigation";
import {DebouncedState, useDebouncedCallback} from "use-debounce";
import {ChangeEvent} from "react";

export default function Search({placeholder}: { placeholder: string }) {
    const searchParams: ReadonlyURLSearchParams = useSearchParams();
    const pathname: string = usePathname();
    const {replace} = useRouter();

    const handleSearch: DebouncedState<any> = useDebouncedCallback((event: ChangeEvent<HTMLInputElement>): void => {
        const term: string = event.target.value;
        const params: URLSearchParams = new URLSearchParams(searchParams);
        params.set('page', '1');
        term ? params.set('query', term) : params.delete('query');
        replace(`${pathname}?${params.toString()}`);
    }, 500);

    const clearSearch = (): void => {
        const params: URLSearchParams = new URLSearchParams(searchParams);
        params.delete('query');
        params.delete('page');
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <Input
            isClearable
            onClear={clearSearch}
            placeholder={placeholder}
            defaultValue={searchParams.get('query')?.toString()}
            onChange={handleSearch}
            startContent={
                <SearchIcon
                    className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0"/>
            }
        />
    )
}
