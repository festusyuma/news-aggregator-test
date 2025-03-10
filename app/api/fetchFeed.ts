import {ChannelSource, Sources} from "~/api/constants";
import {formatter} from "~/api/helpers";
import type {ArticleData} from "~/util/types";

export async function fetchFeed(): Promise<ArticleData[]> {
    const sources: string[] = []
    for (const i in Sources) {
        const key = Sources[i]?.keys[ChannelSource.API_ORG]
        if (key) sources.push(key)
    }

    const res = await fetch(
        `https://newsapi.org/v2/everything?apiKey=${process.env.NEWS_ORG}&sources=${sources.join(",")}&sortBy=popularity&pageSize=20`,
        { method: "GET" }
    );

    return (await res.json())?.articles?.map(formatter[ChannelSource.API_ORG]) ?? [];
}