const CommentList = ({ testimonials }) => {
    console.log(testimonials)
    return (
        <>
            {
                testimonials.map(e => {
                    return (
                        <>
                            <p>{e.comment}</p>
                            <p>{e.score}/5</p>
                        </>
                    )
                })
            }
        </>

    )
}

export default CommentList