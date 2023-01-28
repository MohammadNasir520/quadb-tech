import React, { useEffect, useState } from 'react';
import useAllShows, { getAllShows } from '../../api/show';
import ShowCard from '../../Components/Cards/ShowCard';
import './Home.css'

const Home = () => {
    const [shows, setShows] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllShows()
            .then(data => {
                console.log(data);
                setShows(data)
            })
    }, [])

    return (
        <div className='cards-container'>
            {
                shows.map(show => <ShowCard
                    key={show.show.id}
                    show={show}
                > </ShowCard>)
            }
        </div>
    );
};

export default Home;