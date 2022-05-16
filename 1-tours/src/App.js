import React, { useState, useEffect, createContext } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
export const RemoveContext = createContext();

function App() {
    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const fetchTours = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setLoading(false);
            setTours(data);
            console.log(data);
        } catch (error) {
            setLoading(true);
            console.log(error);
        }
    }

    useEffect(() => { fetchTours() }, []);

    const removeTour = (id) => {
        const newTours = tours.filter(tour => id !== tour.id);
        setTours(newTours);
    }

    return (
        <RemoveContext.Provider value={removeTour}>
            {loading ?
                (<main><Loading /></main>)
                : tours.length === 0 ?
                    (<div className='title'>
                        <h2>no tours left</h2>
                        <button className='btn' onClick={fetchTours}>refresh</button>
                    </div>)
                    : <Tours tours={tours} />}
        </RemoveContext.Provider>

    )
}

export default App