import React from 'react'
import { useSelector } from "react-redux";
import {Card} from 'react-bootstrap'

export default function CardNavigationMyComments (props) {
    const comments = useSelector((state) => state.getComment.myComment);
    const emailUser = useSelector((state) => state.getComment.myCommentEmailUser);
    const commentTitle = useSelector((state) => state.getComment.myCommentTitle);

    function generateMyComments() {
        return comments.map((comment, idx) => {
            return (
                <Card
                    id="cardComment"
                    className="mb-3"
                    style={{ textAlign: "start" }}
                >
                    <Card.Body>
                        <Card.Title>{commentTitle[idx]}</Card.Title>
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
        </>
    );
}