import './Like.css';

export const Like = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="content text-center">
                <div className="ratings">
                    <span className="product-rating">4.6</span>
                    <span>/5</span>
                    <div className="stars">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                    </div>
                    <div className="rating-text">
                        <span>46 ratings &amp; 15 reviews</span>
                    </div>
                </div>
            </div>
        </div>



    );
}