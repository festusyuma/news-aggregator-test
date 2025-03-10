import type {Route} from "./+types/home";
import {Suspense} from "react";
import {Search} from "~/components/search/search";
import {SearchResult} from "~/components/search/search-result";
import {Await} from "react-router";
import {Feed} from "~/components/feed/feed";
import {fetchFeed} from "~/api/fetchFeed";
import {searchArticles} from "~/api/searchArticles";
import type {ArticleData} from "~/util/types";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "New React Router App"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

export async function loader({params, request}: Route.LoaderArgs) {
    const searchParams = new URL(request.url).searchParams;
    const query = searchParams.get('query');

    const articles = await fetchFeed()

    return {
        defaultData: {query: query ?? ""},
        searchResults: query
            ? new Promise<ArticleData[]>(resolve => searchArticles(query).then(resolve))
            : null,
        feed: {
            highlightArticle: articles[0],
            recentArticles: articles.slice(1)
        }
    }
}

export default function Home({loaderData: {searchResults, feed, defaultData}}: Route.ComponentProps) {
    return (
        <>
            <div className={"w-full flex flex-col gap-3 flex-shrink-0 h-full"}>
                <div className={"w-full md:w-[40rem] mx-auto"}>
                    <Search query={defaultData.query}/>
                </div>
                { !searchResults && <Feed feed={feed} /> }
                {
                    searchResults &&
                    <div className={"w-full lg:w-3/4 mx-auto h-0 grow-1"}>
                        <Suspense fallback={<div>Loading</div>}>
                            <Await resolve={searchResults}>
                                {(data => <SearchResult feed={data}/> )}
                            </Await>
                        </Suspense>
                    </div>
                }
            </div>
        </>
    );
}


























