import { Dispatch, SetStateAction, useEffect, useState } from "react";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000'

export default function useMainInfo(id: string | undefined) {
    const [firstName, setFirstName]: [string, Dispatch<SetStateAction<string>>] = useState("")
    const [score, setScore]: [number, Dispatch<SetStateAction<number>>] = useState(0)
    const [keyData, setKeyData] = useState({calorieCount: 0, proteinCount: 0, carbohydrateCount: 0, lipidCount: 0})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const fetchData = () => {
        axios
            .get(`user/${id}`)
            .then((res) => {
                setFirstName(res.data.data.userInfos.firstName)
                setScore(res.data.data.todayScore)
                setKeyData(res.data.data.keyData)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { fetchData() }, [id]);
    
    return {
        firstName,
        score,
        keyData,
        error,
        isLoading
    }
}
