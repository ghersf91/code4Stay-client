import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import CommentBox from "../../Components/CommentBox/CommentBox"
import RatingSystem from "../../Components/RatingSystem/RatingSystem"
import ratingServices from './../../Services/rating.services'


const RatingPage = () => {

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
        console.log(rate)
        console.log(comment)

        ratingServices
            .createRating({ score: rate, comment: comment })
            .then(({ data }) => {
                console.log(data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>

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

export default RatingPage