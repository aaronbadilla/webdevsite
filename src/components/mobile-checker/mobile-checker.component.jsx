import {
    useEffect,
    useState
} from "react";

const useCheckMobileScreen = (maxWidth) => {
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (width <= maxWidth);
}

export default useCheckMobileScreen