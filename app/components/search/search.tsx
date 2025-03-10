import {useDebounce} from "~/hooks/useDebounce";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router";

type Props = {
    query: string
}

export function Search(props: Props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(props.query)
    const query = useDebounce(searchQuery, 500);

    useEffect(() => {
        setSearchParams((oldParams) => {
            const prevQuery = oldParams.get('query')
            if (prevQuery === query) return oldParams;

            const newSearchParams = new URLSearchParams(searchParams);
            if (query) newSearchParams.set("query", query)
            else newSearchParams.delete("query")

            return newSearchParams;
        });
    }, [query])

    return (
        <div className={"w-full py-1 lg:py-3"}>
            <input
                placeholder={"Search here"}
                className={"w-full border border-gray-200 py-2 px-4"}
                value={searchQuery}
                onChange={e => setSearchQuery(e.currentTarget.value)}
            />
        </div>
    )
}