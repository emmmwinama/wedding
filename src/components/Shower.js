import HeroBridal from "./HeroBridal";
import ShowerGallery from "./ShowerGallery";
import {Helmet} from "react-helmet-async";

function Shower(props) {
    return (
        <section>
            <Helmet>
                <title>Bridal Shower</title>
            </Helmet>
            <HeroBridal />
            <ShowerGallery />
        </section>
    )
}

export default Shower;