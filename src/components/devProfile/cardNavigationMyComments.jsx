import React from 'react'
import { useSelector } from "react-redux";
import {Card} from 'react-bootstrap'

export default (props) => {
    const comments = useSelector((state) => state.getComment.myComment);
    const emailUser = useSelector((state) => state.getComment.myCommentEmailUser);
    const commentName = useSelector((state) => state.getComment.myCommentName);

    function generateMyComments() {
        return comments.map((comment, idx) => {
            return (
                <Card
                    id="cardComment"
                    className="mb-3"
                    style={{ textAlign: "start" }}
                >
                    <Card.Body>
                        <Card.Title>{commentName[idx]}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {emailUser[idx]}
                        </Card.Subtitle>
                        <Card.Text>{comments[idx]}</Card.Text>
                    </Card.Body>
                </Card>
            );
        });
    }

    return (
        <>
            {generateMyComments()}
            {console.log(commentName)}
            {console.log(comments)}
            {console.log(emailUser)}
        </>
    );
}