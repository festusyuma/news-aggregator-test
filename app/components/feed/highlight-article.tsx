import type {ArticleData} from "~/util/types";
import {useMemo} from "react";
import {formatDate} from "~/util/formatDate";

type Props = {
    article: ArticleData
}

export function HighlightArticle(props: Props) {
    const date = useMemo(() => formatDate(props.article.createdAt), [props.article.createdAt])

    return (
        <a href={props.article.url} target={"_blank"}>
            <h3 className={"text-lg md:text-2xl font-bold"}>{props.article.title}</h3>
            <div className={"text-sm md:text-base flex text-gray-500 gap-5"}>
                <p>{date}</p>
                <p>By: {props.article.author}</p>
            </div>
            <img src={props.article.thumbnail} alt={"thumbnail"} className={"lg:w-full max-w-full xl:max-h-full rounded-sm mt-3"} />
            <p className={"mt-3 md:text-base text-sm"}>{props.article.excerpt}</p>
        </a>
    )
}