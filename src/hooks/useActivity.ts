import axios from "axios";
import { useEffect, useState } from "react";
import { USER_ACTIVITY } from "../data/mockData";

axios.defaults.baseURL = 'http://localhost:3000'

export default function useActivity(id: string | undefined) {
    const [sessions, setSessions] = useState([{}])

    const fetchData = () => {
        axios
            .get(`user/${id}/activity`)
            .then((res) => {
                setSessions(res.data.data.sessions)
            })
            .catch(() => {
                const userActivity = USER_ACTIVITY.find((data) => String(data.userId) === id)
                if (userActivity) setSessions(userActivity.sessions);
            })
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { fetchData() }, [id]);
    
    return {
        sessions
    }
}
