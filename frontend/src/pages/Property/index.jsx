import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from "axios";


const Property = (props) => {
    const { id } = useParams();
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.post(`http://localhost:3001/property/getProperty`, {_id: id})
        .then((res) => {
            console.log(res.data);
            setData(res.data);
            setIsLoading(false);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <div>
            <h1>Property {id}</h1>
        </div>
    )
}

export default Property