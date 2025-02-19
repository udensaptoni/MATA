export interface Article {
    title: string;
    description?: string;
    urlToImage?: string;
    url: string;
}

const API_KEY = '98eae99042da401a90411a4cdac03bab'; // Ganti dengan API key yang valid
const NEWS_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

export const fetchNews = async (): Promise<Article[]> => {
    try {
        const response = await fetch(NEWS_URL);
        const data = await response.json();
        return Array.isArray(data.articles) ? data.articles : [];
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
};
