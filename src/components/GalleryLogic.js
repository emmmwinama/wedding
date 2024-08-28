import {Component} from "react";

class GalleryLogic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: this.importAllFiles(require.context('../images/story/', false, /\.(png|jpe?g|svg)$/))
        };
    }

    importAllFiles(r) {
        return r.keys().map(r);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.images.map((image, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <img src={image} alt={`Image ${index}`} className="img-fluid" />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default GalleryLogic;