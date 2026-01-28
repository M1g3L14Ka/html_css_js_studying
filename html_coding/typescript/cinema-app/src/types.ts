export interface IMovie {
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
    overview: string;
}

export interface IGenre {
    id: number;
    name: string;
}

export interface IMovieResponse {
    page: number;
    results: IMovie[];
    total_pages: number;
}