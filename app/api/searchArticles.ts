import {ChannelSource, SearchApi, Sources} from "~/api/constants";
import {formatter} from "~/api/helpers";
import type {ArticleData} from "~/util/types";

export async function searchArticles(query: string): Promise<ArticleData[]> {
    const apiOrgSources: string[] = []
    let nyTimeSource: string = ""

    for (const i in Sources) {
        const keys = Sources[i]?.keys
        if (keys[ChannelSource.API_ORG]) apiOrgSources.push(keys[ChannelSource.API_ORG] ?? "")
        if (keys[ChannelSource.NY_TIMES]) nyTimeSource = ChannelSource.NY_TIMES
    }

    const apiOrgRes = await fetch(
        SearchApi[ChannelSource.API_ORG](query, apiOrgSources),
        { method: "GET" }
    );

    const nyTimesRes = await fetch(
        SearchApi[ChannelSource.NY_TIMES](query, nyTimeSource),
        { method: "GET" }
    );

    const apiOrgs = (await apiOrgRes.json())?.articles?.map(formatter[ChannelSource.API_ORG]) ?? []
    const nyTimes = (await nyTimesRes.json())?.response?.docs?.map(formatter[ChannelSource.NY_TIMES]) ?? []

    return [
        ...nyTimes,
        ...apiOrgs,
    ]
}