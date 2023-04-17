import './Like.css';

export const Like = () => {
    return (
        // <div className="container d-flex justify-content-center mt-200">
        //     <div className="row">
        //         <div className="col-md-12">
        //             <div className="stars">
        //                 <form action="">
        //                     <input className="star star-5" id="star-5" type="radio" name="star" />
        //                     <label className="star star-5" htmlFor="star-5" />
        //                     <input className="star star-4" id="star-4" type="radio" name="star" />
        //                     <label className="star star-4" htmlFor="star-4" />
        //                     <input className="star star-3" id="star-3" type="radio" name="star" />
        //                     <label className="star star-3" htmlFor="star-3" />
        //                     <input className="star star-2" id="star-2" type="radio" name="star" />
        //                     <label className="star star-2" htmlFor="star-2" />
        //                     <input className="star star-1" id="star-1" type="radio" name="star" />
        //                     <label className="star star-1" htmlFor="star-1" />
        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="container-wrapper">
            <div className="container d-flex align-items-center justify-content-center">
                <div className="row justify-content-center">
                    {/* star rating */}
                    <div className="rating-wrapper">
                        {/* star 5 */}
                        <input
                            type="radio"
                            id="5-star-rating"
                            name="star-rating"
                            defaultValue={5}
                        />
                        <label htmlFor="5-star-rating" className="star-rating">
                            <i className="fas fa-star d-inline-block" />
                        </label>
                        {/* star 4 */}
                        <input
                            type="radio"
                            id="4-star-rating"
                            name="star-rating"
                            defaultValue={4}
                        />
                        <label htmlFor="4-star-rating" className="star-rating star">
                            <i className="fas fa-star d-inline-block" />
                        </label>
                        {/* star 3 */}
                        <input
                            type="radio"
                            id="3-star-rating"
                            name="star-rating"
                            defaultValue={3}
                        />
                        <label htmlFor="3-star-rating" className="star-rating star">
                            <i className="fas fa-star d-inline-block" />
                        </label>
                        {/* star 2 */}
                        <input
                            type="radio"
                            id="2-star-rating"
                            name="star-rating"
                            defaultValue={2}
                        />
                        <label htmlFor="2-star-rating" className="star-rating star">
                            <i className="fas fa-star d-inline-block" />
                        </label>
                        {/* star 1 */}
                        <input
                            type="radio"
                            id="1-star-rating"
                            name="star-rating"
                            defaultValue={1}
                        />
                        <label htmlFor="1-star-rating" className="star-rating star">
                            <i className="fas fa-star d-inline-block" />
                        </label>
                    </div>
                </div>
            </div>
        </div>

    );
}