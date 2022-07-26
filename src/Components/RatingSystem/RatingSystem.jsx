import { Rating } from 'react-simple-star-rating'

const RatingStars = ({ rating, getRating }) => {

    const handleRating = (rate) => {
        const newRate = rate / 20
        getRating(newRate)
    }

    return (
        <div className='App'>
            <Rating
                onClick={handleRating}
                ratingValue={rating * 20}
                size={20}
                label
                transition
                fillColor='orange'
                emptyColor='gray'
                className='foo'
            />
            {rating}
        </div>
    )
}

export default RatingStars


