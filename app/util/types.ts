export type ArticleData = {
    title: string
    excerpt: string
    thumbnail: string
    createdAt: string
    url: string
    author: string
    source: string
}

export type FeedData = {
    highlightArticle: ArticleData,
    recentArticles: ArticleData[]
}
