import { Form } from "react-bootstrap"

const CommentBox = ({ comment, getComment }) => {

    const handleChange = e => {
        const { value } = e.target
        getComment(value)

    }
    return (
        <Form.Group className='mb-3' controlId='comment'>
            <Form.Label>Comment</Form.Label>
            <Form.Control as="textarea" rows={3} value={comment} name='comment' onChange={handleChange} />
        </Form.Group>
    )
}

export default CommentBox