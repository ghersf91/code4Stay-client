import { Card, Row, Col, Container } from "react-bootstrap"
import './CommentList.css'



const CommentList = ({ testimonials }) => {
    return (
        <>
            {
                testimonials.map(e => {
                    return (
                        <>
                            <Card id="commentCard">
                                <Row>
                                    <Col className="sm-12 md-6  ">
                                        <Card.Img variant="top" size='sm' src={e.giver.profilePicture} id='cardImage' />
                                    </Col>

                                    <Col className="sm-12 md-8  ">
                                        <Card.Title >{e.giver.username}</Card.Title>
                                        <hr />
                                        <Card.Text>{e.comment}</Card.Text>
                                        <hr />
                                        <Card.Text>{e.score}/5</Card.Text>
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

