export const ChannelSource = {
    API_ORG: "API_ORG",
    NY_TIMES: "NY_TIMES"
} as const

export type ChannelSource = typeof ChannelSource[keyof typeof ChannelSource];

export const SearchApi = {
    [ChannelSource.NY_TIMES]: (query: string, source: string) => `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${process.env.NEWS_ORG}`,
    [ChannelSource.API_ORG]: (query: string, sources: string[]) => `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.NEWS_ORG}&sources=${sources.join(",")}`,
}

type Source = {
    keys: Partial<Record<ChannelSource, string>>
}

export const Sources: Record<string, Source> = {
    "The Verge": {
        keys: {
            [ChannelSource.API_ORG]: "the-verge"
        },
    },
    "ABC News": {
        keys: {
            [ChannelSource.API_ORG]: "abc-news"
        },
    },
    "Aftenposten": {
        keys: {
            [ChannelSource.API_ORG]: "aftenposten"
        },
    },
    "The Washington Times": {
        keys: {
            [ChannelSource.API_ORG]: "the-washington-times"
        },
    },
    "New York Times": {
        keys: {
            [ChannelSource.NY_TIMES]: "\"The New York Times\""
        },
    },
};

