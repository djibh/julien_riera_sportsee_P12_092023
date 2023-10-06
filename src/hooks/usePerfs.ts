import { useEffect, useState } from "react";
import axios from "axios";
import { USER_PERFORMANCE } from "../data/mockData";

axios.defaults.baseURL = 'http://localhost:3000'

export default function usePerf(id: string | undefined) {
    const [performance, setPerformance] = useState([{}])
    const [kind, setKind] = useState({})

    const fetchData = () => {
        axios
            .get(`user/${id}/performance`)
            .then((res) => {
                setKind(res.data.data.kind)
                setPerformance(res.data.data.data)
            })
            .catch(() => {
                const userPerf = USER_PERFORMANCE.find((data) => String(data.userId) === id)
                if (userPerf) {
                    setKind(userPerf.kind)
                    setPerformance(userPerf.data);
                }
            })
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { fetchData() }, [id]);
    
    return {
        kind,
        performance
    }
}
