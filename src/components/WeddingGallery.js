import {Helmet} from "react-helmet-async";
import HeroWedding from "./HeroWedding";
import WeddingEventGallery from "./WeddingEventGallery";

function WeddingGallery(props) {
    return (
        <section>
            <Helmet>
                <title>Wedding Gallery</title>
            </Helmet>
            <HeroWedding/>
            <WeddingEventGallery />
        </section>
    )
}

export default WeddingGallery;