export interface IGenre {
    id: number;
    name: string;
}

export interface IFilm {
    id: number;
    name: string;
    genres: string[];
    img: string;
    feedback: string[];
}
