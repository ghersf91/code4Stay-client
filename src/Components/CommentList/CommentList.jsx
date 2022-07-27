import { useEffect, useState } from "react"
import { Card, Row, Col, Container } from "react-bootstrap"
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
                        <>
                            <Card id="commentCard">
                                <Row>
                                    <Col xs='6' className="imageSide">
                                        <Card.Img variant="top" size='sm' src={e.giver.profilePicture} id='cardImage' />
                                        <Card.Title >{e.giver.username}</Card.Title>
                                    </Col>

                                    <Col xs='6' className='commentSide'>
                                        <Card.Title>{e.comment}</Card.Title>
                                        <Card.Subtitle>{e.score}/5</Card.Subtitle>
                                    </Col>

                                </Row>
                            </Card>

                        </>
                    )
                })
            }
        </>
    )
}

export default CommentList

