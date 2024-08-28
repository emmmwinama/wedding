import { Helmet} from "react-helmet-async";
import HeroHome from "./HeroHome";
import CoupleIntros from "./CoupleIntros";
import Locations from "./Locations";
import Theme from "./Theme";

function Home(props) {
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <HeroHome />
            <CoupleIntros />
            <Locations />
            <Theme />
        </>
    )
}

export default Home;