import { FaStar } from "react-icons/fa"
import { Container, Radio, Rating } from "./RatingStyles"
import './RatingSystem.css'



const RatingSystem = ({ rating, getRating }) => {

    // const [rating, setRating] = useState(0)


    return (
        <Container >
            {[...Array(5)].map((item, index) => {
                const givenRating = index + 1;
                return (
                    <label>
                        <Radio
                            type="radio"
                            value={givenRating}
                            onClick={() => {
                                getRating(givenRating);
                            }}
                        />
                        <Rating className="ratingStars">
                            <FaStar
                                className="star"
                                color={
                                    givenRating < rating || givenRating === rating
                                        ? "000"
                                        : "rgb(192,192,192)"
                                }
                            />
                        </Rating>
                    </label>
                );
            })}
        </Container>
    )
}

export default RatingSystem