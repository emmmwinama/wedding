import HeroStory from "./HeroStory";
import StoryGallery from "./StoryGallery";
import {Helmet} from "react-helmet-async";

function Story(props) {
    return (
        <>
            <Helmet>
                <title>Our Story through pictures</title>
            </Helmet>
            <HeroStory />
            <StoryGallery />
        </>
    )
}

export default Story;