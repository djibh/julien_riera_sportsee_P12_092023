import { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000'

export default function useActivity(id: string | undefined) {
    const [sessions, setSessions] = useState([])
    const [error, setError] = useState('')

    const fetchData = () => {
        axios
            .get(`user/${id}/activity`)
            .then((res) => {
                setSessions(res.data.data.sessions)
            })
            .catch((err) => {
                setError(err)
            })
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { fetchData() }, [id]);
    
    return {
        sessions,
        error
    }
}
