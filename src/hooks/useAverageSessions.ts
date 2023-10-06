import { useEffect, useState } from "react";
import axios from "axios";
import { USER_AVERAGE_SESSIONS } from "../data/mockData";

axios.defaults.baseURL = 'http://localhost:3000'

export default function useAverageSessions(id: string | undefined) {
    const [averageSessions, setAverageSessions] = useState([{}])

    const fetchData = () => {
        axios
            .get(`user/${id}/average-sessions`)
            .then((res) => {
                setAverageSessions(res.data.data.sessions)
            })
            .catch(() => {
                const userAvgSessions = USER_AVERAGE_SESSIONS.find((data) => String(data.userId) === id)
                if (userAvgSessions) setAverageSessions(userAvgSessions.sessions);
            })
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { fetchData() }, [id]);
    
    return {
        averageSessions
    }
}
