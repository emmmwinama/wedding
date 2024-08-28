import GalleryLogic from "./GalleryLogic";

function StoryGallery(props) {
    return (
        <section className="story">
            <div className="container py-5 my-4">
                <div className="mb-4">
                    <p className="text-center text-uppercase p-0 m-0 fs-6 gray-header-text">our memories</p>
                    <p className="sacramento-regular text-center p-0 m-0"
                       style={{fontSize: '50px', color: "crimson"}}>Love Gallery</p>
                </div>
                <div className="">
                    <GalleryLogic />
                </div>
            </div>
        </section>
    )
}

export default StoryGallery;