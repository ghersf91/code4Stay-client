import { useContext, useState } from "react"
import { Button, Form, Row, Col } from "react-bootstrap"
import CommentBox from "../CommentBox/CommentBox"
import RatingSystem from "../RatingSystem/RatingSystem"
import ratingServices from '../../Services/rating.services'
import { AuthContext } from "../../Context/auth.context"
import CommentList from "../CommentList/CommentList"


const RatinWidget = ({ testimonials, _id }) => {

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
                <CommentBox comment={comment} getComment={getComment} />

                <div className='d-grid form-button'>
                    <Button variant='dark' type='submit'>Rate project</Button>
                </div>
            </Form>




        </div>
    )
}

export default RatinWidget