import { Genres } from "./../../pages/Genres/index";
import { AddGenre } from "./../../pages/AddGenre/index";
import { RootState } from "./../../app/store";
import { createSlice } from "@reduxjs/toolkit";
import { IGenre } from "./../../type/type";

const initialState: { genres: IGenre[]; genre: IGenre } = {
    genres: [
        { id: 1, name: "Triller" },
        { id: 2, name: "Fantasy" },
        { id: 3, name: "Commedy" },
        { id: 4, name: "Poetry" },
        { id: 5, name: "Absurd" },
    ],
    genre: {} as IGenre,
};

const genreSlice = createSlice({
    name: "genres",
    initialState,
    reducers: {
        addGenres: (state, action) => {
            state.genres.push(action.payload);
        },
        deleteGenresById: (state, action) => {
            state.genres = state.genres.filter(
                (elm) => elm.id != action.payload
            );
        },
        findGenresById: (state, action) => {
            const data = state.genres.find((elm) => elm.id == action.payload);
            if (data) {
                state.genre = data;
            }
        },
    },
});

export const { addGenres, deleteGenresById, findGenresById } =
    genreSlice.actions;

export const selectGenres = (state: RootState) => state.genre;

export default genreSlice.reducer;
