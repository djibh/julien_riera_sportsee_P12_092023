import { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000'

export default function useAverageSessions(id: string | undefined) {
    const [averageSessions, setAverageSessions] = useState([])
    const [error, setError] = useState('')

    const fetchData = () => {
        axios
            .get(`user/${id}/average-sessions`)
            .then((res) => {
                setAverageSessions(res.data.data.sessions)
            })
            .catch((err) => {
                setError(err)
            })
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { fetchData() }, [id]);
    
    return {
        averageSessions,
        error
    }
}
