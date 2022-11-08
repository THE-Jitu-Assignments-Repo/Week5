import {
    useEffect,
    useState,
    useRef
} from 'react';
import axios from 'axios'



const useFetch = (url) => {

    const [data, setData] = useState(null);

    const Ismounted = useRef(null)

    useEffect(() => {
        const fetchData = async () => {

            const res = await axios.get(url);
            setData(res.data)
            Ismounted.current = true
            console.log("mount");
        }

        fetchData();

        return () => {
            Ismounted.current = false
            console.log("unmount");
        }

    }, []);

    return [
        data,
        setData
    ]
}

export default useFetch