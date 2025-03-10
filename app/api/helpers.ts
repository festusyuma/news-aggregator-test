import {ChannelSource} from "~/api/constants";
import type {ArticleData} from "~/util/types";

export const formatter: Record<ChannelSource, (data: any) => ArticleData> = {
    [ChannelSource.API_ORG]: (api: any) => ({
        title: api.title,
        excerpt: api.description,
        thumbnail: api.urlToImage,
        source: api.source.name,
        url: api.url,
        author: api.author,
        createdAt: api.publishedAt
    }),
    [ChannelSource.NY_TIMES]: (api: any) => ({
        title: api.headline?.main,
        excerpt: api.lead_paragraph,
        thumbnail: "https://www.nytimes.com/" + (api.multimedia?.find((m: any) => m?.type === 'image')?.url ?? ""),
        source: api.source,
        url: api.web_url,
        author: api.byline?.original,
        createdAt: api.pub_date
    })
}