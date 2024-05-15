import { AddFilm } from "./../../pages/AddFilm/index";
import { RootState } from "./../../app/store";
import { createSlice } from "@reduxjs/toolkit";
import { IFilm } from "./../../type/type";

const initialState: { films: IFilm[]; film: IFilm } = {
    films: [
        {
            id: 1,
            name: "Triller",
            genres: ["Triller", "Astonshed"],
            img: "ssss",
            feeback: "So hard movie, recommended",
        },
        {
            id: 2,
            name: "Fantasy",
            genres: ["Fantasy", "Magic"],
            img: "ssss",
            feeback: "In my mind, it's interestring film",
        },
        {
            id: 3,
            name: "Commedy",
            genres: ["Commedy", "Humor"],
            img: "ssss",
            feeback: "Very laughable project, like it",
        },
        {
            id: 4,
            name: "Poetry",
            genres: ["Poetry", "Old"],
            img: "ssss",
            feeback: "It's classic movie, respect",
        },
        {
            id: 5,
            name: "Absurd",
            genres: ["Absurd", "Art"],
            img: "ssss",
            feeback: "I guees, it's classic, nice",
        },
    ],
    film: {} as IFilm,
};

const filmSlice = createSlice({
    name: "films",
    initialState,
    reducers: {
        addFilm: (state, action) => {
            state.films.push(action.payload);
        },
        deleteFilmById: (state, action) => {
            state.films = state.films.filter((elm) => elm.id != action.payload);
        },
        findFilmById: (state, action) => {
            const data = state.films.find((elm) => elm.id == action.payload);
            if (data) {
                state.film = data;
            }
        },
    },
});

export const { addFilm, deleteFilmById, findFilmById } = filmSlice.actions;

export const selectFilm = (state: RootState) => state.film;

export default filmSlice.reducer;
