import {useMemo} from "react";
import {formatDate} from "~/util/formatDate";
import type {ArticleData} from "~/util/types";
import { LinkCard } from "../link-card";

type Props = {
    article: ArticleData
}

export function ArticleCard(props: Props) {
    const date = useMemo(() => formatDate(props.article.createdAt), [props.article.createdAt])

    return (
        <LinkCard url={props.article.url}>
            <div className={"flex flex-col lg:flex-row gap-3 h-full"}>
                <div className={"max-h-[15rem] lg:h-full w-full xl:w-auto lg:w-[35rem] overflow-hidden"}>
                    <img src={props.article.thumbnail} alt={"thumbnail"} className={"min-h-full xl:h-34 w-full xl:w-auto aspect-video object-cover"} />
                </div>
                <div className={"w-full flex flex-col gap-2 h-full py-2 px-2"}>
                    <p className={"font-bold"}>{props.article.title}</p>
                    <p className={"text-sm overflow-ellipsis"}>{props.article.excerpt}</p>
                    <div className={"flex text-sm text-gray-500 gap-5 mt-auto"}>
                        <p>{date}</p>
                        <p className={"ml-auto"}>By: {props.article.author}</p>
                    </div>
                </div>
            </div>
        </LinkCard>
    )
}