import axios from "axios";
import { useEffect, useState } from "react"

const useVets = () => {
    const [vets, setVets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        axios('../vets.json')
            .then(data => setVets(data.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])
    return { vets, loading, error }
}
export default useVets;