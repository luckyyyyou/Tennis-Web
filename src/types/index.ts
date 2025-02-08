export interface NewsItem {
  id: string;
  category: string;
  title: string;
  content: string;
}

export interface LiveMatch {
  id: string;
  status: 'live' | 'upcoming';
  tournament: string;
  players: string;
  startTime?: string;
} 