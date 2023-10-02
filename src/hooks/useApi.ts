import axios from "axios";
import { useState, useEffect } from "react";

export default function useApi() {
    const [userData, setUserData] = useState([])

    useEffect(() => {
        // axios.get(url ou param)
        // setUserData(response)
    }, [])

}