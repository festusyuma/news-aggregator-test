import {ArticleCard} from "~/components/search/article-card";
import type {ArticleData} from "~/util/types";
import {useEffect, useMemo, useState} from "react";
import {CheckFilter} from "~/components/check-filter";

type Props = {
    feed: ArticleData[]
}

export function SearchResult(props: Props) {
    /**
     * todo
     *  - get sources, categories and dates from results
     *  - filter original data based on initial data
     * */

    const [filteredFeed, setFilteredFeed] = useState(props.feed);

    const availableFilters = useMemo(() => {
        const sources = new Set<string>();
        const authors = new Set<string>();

        for (const i in props.feed) {
            authors.add(props.feed[i].author);
            sources.add(props.feed[i].source);
        }

        return {
            sources: Array.from(sources),
            authors: Array.from(authors)
        }
    }, [props.feed])


    type Filter = { [key in keyof typeof availableFilters]: string[] }

    const [filters, setFilters] = useState<Filter>({
        authors: [],
        sources: []
    })

    useEffect(() => {
        const filtered = props.feed.filter(article => {
            if (filters.authors.length && !filters.authors.includes(article.author)) return false;
            return !(filters.sources.length && !filters.sources.includes(article.source));
        });

        setFilteredFeed(filtered)
    }, [filters])

    return (
        <>
            <div className={"flex flex-col gap-3 py-3"}>
                <CheckFilter
                    label={"Author"}
                    value={filters.authors}
                    onChange={(i) => setFilters(prev => ({...prev, authors: i}))}
                    items={availableFilters.authors}
                />
                <CheckFilter
                    label={"Sources"}
                    value={filters.sources}
                    onChange={(i) => {
                        console.log("sources :: ", i)
                        setFilters(prev => ({...prev, sources: i}))
                    }}
                    items={availableFilters.sources}
                />
            </div>
            <div
                className={"h-full overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 auto-rows-min gap-5 lg:gap-3"}>
                {
                    filteredFeed.map((item, id) => (
                        <ArticleCard article={item} key={`def-article-${id}`}/>
                    ))
                }
            </div>
        </>
    )
}