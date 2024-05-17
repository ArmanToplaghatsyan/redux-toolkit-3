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
            img: "/img/1.jpg",
            feedback: ["So hard movie", "recommended"],
        },
        {
            id: 2,
            name: "Fantasy",
            genres: ["Fantasy", "Magic"],
            img: "/img/2.jpg",
            feedback: ["In my mind", "it's interestring film"]
        },
        {
            id: 3,
            name: "Commedy",
            genres: ["Commedy", "Humor"],
            img: "/img/3.jpg",
            feedback:[ "Very laughable project", "like it"],
        },
        {
            id: 4,
            name: "Poetry",
            genres: ["Poetry", "Old"],
            img: "/img/4.jpg",
            feedback: ["It's classic movie", "respect"],
        },
        {
            id: 5,
            name: "Absurd",
            genres: ["Absurd", "Art"],
            img: "/img/5.jpg",
            feedback: ["I guees, it's classic", "nice"],
        },
        {
            id: 6,
            name: "AbsurdArt",
            genres: ["Absurd", "Art"],
            img: "/img/5.jpg",
            feedback:[ "I guees, it's classic", "nice"],
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
        addFeedback: (state, action) => {//{id, str}
            const data = state.films.find((elm) => elm.id == action.payload.id);
            console.log(data, action.payload);
            
            if(data){
                data.feedback.push(action.payload.str)
            }
        }
    },
});

export const { addFilm, deleteFilmById, findFilmById, addFeedback } = filmSlice.actions;

export const selectFilm = (state: RootState) => state.film;

export default filmSlice.reducer;
