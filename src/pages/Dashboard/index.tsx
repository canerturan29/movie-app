import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard } from '../../components';
import { IMovie } from '../../interfaces';
import './Dashboard.css';

export default function Dashboard() {
    const [movieList, setMovieList] = useState<Array<IMovie>>([]);

    async function getMovies() {
        const response = await axios.get("http://localhost:3002/movies");
        setMovieList(response.data);
    }

    useEffect(() => {
        getMovies();
    }, []);


    return (
        <>
            <Link to={"/add"}>
                Add New Movie
            </Link>

            <div className='DashboardContainer'>
                {movieList.map(movie => <MovieCard key={movie.id} {...movie} />)}
            </div>
        </>
    );
}
