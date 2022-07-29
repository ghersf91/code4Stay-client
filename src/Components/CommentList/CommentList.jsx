import { useEffect, useState } from "react"
import { Card, Row, Col, Container } from "react-bootstrap"
import { Rating } from 'react-simple-star-rating'

import './CommentList.css'


const CommentList = ({ testimonials }) => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        loadComments()
    }, [testimonials])

    const loadComments = () => {
        setComments(testimonials)
    }
    return (
        <>
            {
                comments.map(e => {
                    return (
                        <Card id="commentCard" key={e._id}>
                            <Row>
                                <Col xs='6' className="imageSide">
                                    <Card.Img variant="top" size='sm' src={e.giver.profilePicture} id='cardImage' />
                                    <Card.Title >{e.giver.username}</Card.Title>
                                </Col>

                                <Col xs='6' className='commentSide'>
                                    <Card.Title>{e.comment}</Card.Title>
                                    <Card.Subtitle>
                                        <Rating
                                            ratingValue={e.score * 20}
                                            size={20}
                                            label
                                            transition
                                            fillColor='orange'
                                            emptyColor='gray'
                                            className='foo'
                                        /></Card.Subtitle>
                                </Col>

                            </Row>
                        </Card>
                    )
                })
            }
        </>
    )
}

export default CommentList

