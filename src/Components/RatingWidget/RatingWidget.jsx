import { useContext, useState } from "react"
import { Button, Form, Row, Col } from "react-bootstrap"
import CommentBox from "../CommentBox/CommentBox"
import RatingSystem from "../RatingSystem/RatingSystem"
import ratingServices from '../../Services/rating.services'
import { AuthContext } from "../../Context/auth.context"
import CommentList from "../CommentList/CommentList"
import { Link } from "react-router-dom"

const RatingWidget = ({ testimonials, _id }) => {

    const { user } = useContext(AuthContext)


    const [rate, setRate] = useState(0)
    const [comment, setComment] = useState('')


    const getRating = rating => {
        setRate(rating)
    }

    const getComment = content => {
        setComment(content)
    }

    const handleSubmit = e => {
        e.preventDefault()

        ratingServices
            .createRating(_id, { score: rate, comment: comment, receiver: _id, giver: user._id })
            .then(response => {
                console.log(response)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>

            <CommentList testimonials={testimonials} />

            <Form onSubmit={handleSubmit}>
                <RatingSystem rating={rate} getRating={getRating} />
                {/* <RatingStars /> */}

                <CommentBox comment={comment} getComment={getComment} />

                <Link to='/'>
                    <Button variant='dark' type='submit'>Rate project</Button>
                </Link>
            </Form>




        </div>
    )
}

export default RatingWidget