import { useEffect, useState } from "react";
import axios from "axios";
import { USER_MAIN_DATA } from "../data/mockData";

axios.defaults.baseURL = 'http://localhost:3000'

export default function useInfos(id: string | undefined) {
    const [firstName, setFirstName] = useState("")
    const [score, setScore] = useState(0)
    const [keyData, setKeyData] = useState({calorieCount: 0, proteinCount: 0, carbohydrateCount: 0, lipidCount: 0})
    const [isLoading, setIsLoading] = useState(true)

    const fetchData = () => {
        axios
            .get(`user/${id}`)
            .then((res) => {
                setFirstName(res.data.data.userInfos.firstName)
                setScore(res.data.data.todayScore || res.data.data.score)
                setKeyData(res.data.data.keyData)
            })
            .catch(() => {
                const user = USER_MAIN_DATA.find((data) => String(data.id) === id)
                if (user) {
                    setFirstName(`Mocked ${user.userInfos.firstName}`)
                    const score = user.todayScore || user.score
                    if (score) { setScore(score) }
                    setKeyData(user.keyData)
                }
            })
            .finally(() => {
                setIsLoading(false)
            })
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { fetchData() }, [id]);
    
    return {
        firstName,
        score,
        keyData,
        isLoading
    }
}
