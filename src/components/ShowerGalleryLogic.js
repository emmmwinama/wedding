import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

class ShowerGalleryLogic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: this.importAllFiles(require.context('../images/shower/', false, /\.(png|jpe?g|svg)$/)),
            currentPage: 1,
            imagesPerPage: 9
        };
    }

    importAllFiles(r) {
        return r.keys().map(r);
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

    // Helper function to split images into groups
    splitIntoColumns = (images, numPerColumn) => {
        const columns = [];
        for (let i = 0; i < images.length; i += numPerColumn) {
            columns.push(images.slice(i, i + numPerColumn));
        }
        return columns;
    };

    render() {
        const { currentPage, imagesPerPage } = this.state;
        const currentImages = this.getCurrentImages();
        const totalImages = currentImages.length;
        const numImagesPerColumn = totalImages <= 6 ? 2 : 3;
        const columns = this.splitIntoColumns(currentImages, numImagesPerColumn);
        const totalPages = Math.ceil(this.state.images.length / this.state.imagesPerPage);

        return (
            <div className="container">
                <div className="row">
                    {columns.map((columnImages, colIndex) => (
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
                    ))}
                </div>

                {/* Pagination Controls */}
                <nav aria-label="Page navigation">
                    <ul className="pagination">
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
            </div>
        );
    }
}

export default ShowerGalleryLogic;
