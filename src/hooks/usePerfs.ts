import { useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000'

export default function usePerf(id: string | undefined) {
    const [performance, setPerformance] = useState([])
    const [kind, setKind] = useState({})
    const [error, setError] = useState('')

    const fetchData = () => {
        axios
            .get(`user/${id}/performance`)
            .then((res) => {
                setKind(res.data.data.kind)
                setPerformance(res.data.data.data)
            })
            .catch((err) => {
                setError(err)
            })
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { fetchData() }, [id]);
    
    return {
        kind,
        performance,
        error
    }
}
