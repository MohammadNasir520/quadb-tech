import { Markup } from 'interweave';
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { getAllShows } from '../../api/show';
import style from './ShowSummery.module.css'

const ShowSummery = () => {
    const { state } = useLocation()
    const id = state.id
    console.log(id);


    const [shows, setShows] = useState([])
    console.log(shows);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllShows()
            .then(data => {
                console.log(data);
                setShows(data)
            })
    }, [])


    const show = shows.find(show => show.show.id === id)
    console.log(show);

    return (
        <div className={style.cards}>

            <div className={style.imageContainer}>
                <img className='' src={show?.show?.image?.original} alt="" />

                <div>
                    <div className={style.nameRating}>
                        <p>{show?.show?.name}</p>

                        {show?.show?.rating?.average &&
                            <div className={style.rating}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                                {show?.show?.rating?.average}
                            </div>
                        }

                    </div>

                    <p>{show?.show?.genres}</p>
                </div>
            </div>

            <div className={style.textBox}>


                {/* <p>{show?.show?.summary}</p> */}

                <Markup content={show?.show?.summary} />

                <Link to={`/showSummery/${id}`} state={{ id: id }}>
                    <button>Book a Ticket</button>

                </Link >
            </div>
        </div>
    );
};

export default ShowSummery;