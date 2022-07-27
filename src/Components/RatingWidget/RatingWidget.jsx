import { useContext, useEffect, useState } from "react"
import { Button, } from "react-bootstrap"
import CommentBox from "../CommentBox/CommentBox"
import RatingSystem from "../RatingSystem/RatingSystem"
import ratingServices from '../../Services/rating.services'
import { AuthContext } from "../../Context/auth.context"
import CommentList from "../CommentList/CommentList"

import './RatingWidget.css'

const RatingWidget = ({ testimonials, _id }) => {

    const { user } = useContext(AuthContext)

    const [comments, setComments] = useState(testimonials)

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
            .then(({ data }) => setComments(data.testimonials))
            .catch(err => console.log(err))
    }

    return (
        <div>

            <CommentList testimonials={comments} />

            <RatingSystem rating={rate} getRating={getRating} />

            <CommentBox comment={comment} getComment={getComment} />

            <Button id='rating-button' type='submit' onClick={handleSubmit}>Rate project</Button>

        </div >
    )
}

export default RatingWidget