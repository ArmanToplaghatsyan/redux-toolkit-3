import React from "react";
import { useRoutes } from "react-router-dom";
import { AddFilm } from "../pages/AddFilm";
import { Films } from "../pages/Films";
import { DetailsFilms } from "../pages/DetailsFilms";
import { Layout } from "../pages/Layout";
import { MyError } from "../pages/MyError";
import { Genres } from "../pages/Genres";
import { AddGenre } from "../pages/AddGenre";
import { DetailsGenres } from "../pages/DetailsGenres";

export const MyRouter = React.memo(() => {
    const router = useRoutes([
        {
            path: "/",
            element: <Layout />,
            children: [
                { path: "", element: <Films /> },
                { path: "addFilms", element: <AddFilm /> },
                { path: "detailsFilms/:id", element: <DetailsFilms /> },
                { path: "genres", element: <Genres /> },
                { path: "addGenre", element: <AddGenre /> },
                { path: "detailsGenres/:name", element: <DetailsGenres /> },
            ],
        },
        {
            path: "*",
            element: <MyError />,
        },
    ]);
    return router;
});
