import type {FeedData} from "~/util/types";
import {MiniArticleCard} from "~/components/feed/mini-article-card";
import {HighlightArticle} from "~/components/feed/highlight-article";

type Props = {
    feed: FeedData
}

export function Feed(props: Props) {
    return (
        <div className={"w-full h-0 grow-1 gap-10 xl:flex"}>
            <div className={"w-full mb-2 xl:w-2/3 2xl:w-3/4 xl:h-full xl:mb-0"}>
                <HighlightArticle article={props.feed.highlightArticle} />
            </div>
            <hr className={"text-gray-50 border-gray-100 my-3 block xl:hidden"} />
            <div className={"w-full xl:w-1/3 2xl:w-1/4 shrink-0 xl:h-full h-[25rem]"}>
                <h4 className={"pb-2 shrink-0 font-bold"}>Today's Articles</h4>
                <div className={"h-full overflow-x-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4"}>
                    {
                        props.feed.recentArticles.map(
                            (p, id) =>
                                <MiniArticleCard article={p} key={`feed-article-${id}`}/>
                        )
                    }
                </div>
            </div>
        </div>
    );
}