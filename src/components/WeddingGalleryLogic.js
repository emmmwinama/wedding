import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

// Preload the images
const ourImages = require.context('../images/wedding/ours/', false, /\.(png|jpe?g|svg)$/).keys().map(require.context('../images/wedding/ours/', false, /\.(png|jpe?g|svg)$/));
const yourImages = require.context('../images/wedding/yours/', false, /\.(png|jpe?g|svg)$/).keys().map(require.context('../images/wedding/yours/', false, /\.(png|jpe?g|svg)$/));

class WeddingGalleryLogic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCategory: 'our', // default category
            images: ourImages,
            currentPage: 1,
            imagesPerPage: 9
        };
    }

    loadImages(category) {
        const images = category === 'our' ? ourImages : yourImages;
        this.setState({ images, currentCategory: category, currentPage: 1 });
    }

    getCurrentImages() {
        const { currentPage, imagesPerPage, images } = this.state;
        const startIndex = (currentPage - 1) * imagesPerPage;
        const endIndex = startIndex + imagesPerPage;
        return images.slice(startIndex, endIndex);
    }

    handlePageChange = (pageNumber) => {
        this.setState({ currentPage: pageNumber });
    }

    splitIntoColumns(images, numPerColumn) {
        const columns = [];
        for (let i = 0; i < images.length; i += numPerColumn) {
            columns.push(images.slice(i, i + numPerColumn));
        }
        return columns;
    }

    render() {
        const { currentPage, imagesPerPage, currentCategory, images } = this.state;
        const currentImages = this.getCurrentImages();
        const totalImages = currentImages.length;
        const numImagesPerColumn = totalImages <= 6 ? 2 : 3;
        const columns = this.splitIntoColumns(currentImages, numImagesPerColumn);
        const totalPages = Math.ceil(images.length / imagesPerPage);

        return (
            <div className="container">
                {/* Centered Filter Buttons */}
                <div className="d-flex justify-content-center mb-4">
                    <div className="btn-group" role="group">
                        <button
                            className={`btn ${currentCategory === 'our' ? 'active' : ''}`}
                            onClick={() => this.loadImages('our')}
                            style={{border: '2px solid crimson'}}
                        >
                            Our Pictures
                        </button>
                        <button
                            className={`btn ${currentCategory === 'your' ? 'active' : ''}`}
                            onClick={() => this.loadImages('your')}
                            style={{border: '2px solid crimson'}}
                        >
                            Your Pictures
                        </button>
                    </div>
                </div>

                {/* Image Gallery */}
                <div className="row">
                    {columns.length > 0 ? (
                        columns.map((columnImages, colIndex) => (
                            <div className={`col-lg-${12 / columns.length} mb-4`} key={colIndex}>
                                {columnImages.map((image, imgIndex) => (
                                    <div className="mb-4" key={imgIndex}>
                                        <img
                                            src={image}
                                            alt={`Picture ${colIndex * numImagesPerColumn + imgIndex}`}
                                            className="img-fluid"
                                            style={{ cursor: 'pointer', objectFit: 'cover' }}
                                        />
                                    </div>
                                ))}
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center p-5">
                            <div className="no-images-message p-5">
                                <h3>No pictures available in this category.</h3>
                                <p>Please check back later or explore the other category.</p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Pagination Controls */}
                {images.length > 0 && (
                    <nav aria-label="Page navigation">
                        <ul className="pagination justify-content-center">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={() => this.handlePageChange(currentPage - 1)}>
                                    Previous
                                </button>
                            </li>
                            {[...Array(totalPages)].map((_, index) => (
                                <li className={`page-item ${currentPage === index + 1 ? 'active' : ''}`} key={index}>
                                    <button className="page-link" onClick={() => this.handlePageChange(index + 1)}>
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={() => this.handlePageChange(currentPage + 1)}>
                                    Next
                                </button>
                            </li>
                        </ul>
                    </nav>
                )}

                {/* Custom Styles */}
                <style jsx="true">{`
                    .btn-group .btn {
                        transition: background-color 0.3s ease;
                    }
                    .btn-group .btn:hover {
                        background-color: crimson;
                        color: white;
                    }
                    .btn-group .btn.active {
                        background-color: crimson;
                        color: white;
                        border-color: crimson;
                    }
                    .no-images-message {
                        padding: 70px;
                    }
                    
                    .no-images-message h3 {
                        color: crimson;
                        font-weight: bold;
                    }
                    .no-images-message p {
                        color: #555;
                    }
                `}</style>
            </div>
        );
    }
}

export default WeddingGalleryLogic;
