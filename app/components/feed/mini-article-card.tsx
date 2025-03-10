import {useMemo} from "react";
import {formatDate} from "~/util/formatDate";
import type {ArticleData} from "~/util/types";
import {LinkCard} from "~/components/link-card";

type Props = {
    article: ArticleData
}

export function MiniArticleCard(props: Props) {
    const date = useMemo(() => formatDate(props.article.createdAt), [props.article.createdAt])

    return (
        <LinkCard url={props.article.url}>
            <div className={"flex gap-1 h-full"}>
                <div className={"h-full w-full"}>
                    <img src={props.article.thumbnail} alt={"thumbnail"} className={"h-full w-full object-cover"} />
                </div>
                <div className={"w-full flex flex-col gap-2 py-3 px-1 h-full"}>
                    <p className={"font-bold text-sm"}>{props.article.title}</p>
                    <p className={"flex text-xs text-gray-500 gap-5 mt-auto ml-auto"}>By: {props.article.author}</p>
                </div>
            </div>
        </LinkCard>
    )
}