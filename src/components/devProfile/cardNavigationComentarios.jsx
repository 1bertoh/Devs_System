import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, FormControl, InputGroup, Button } from "react-bootstrap";
import axios from "axios";
import MyComments from './cardNavigationMyComments'
import "./cardNavigationComment.css";

export default () => {
    const devId = useSelector((state) => state.getDevId.devId);
    const [comments, setComments] = React.useState([]);
    const [emailUser, setEmailUser] = React.useState('')
    const [myComment, setMyComment] = React.useState('')
    const [myCommentName, setMyCommentName] = React.useState("");
    const dispatch = useDispatch();
    const api = axios.create({
        baseURL: `https://jsonplaceholder.typicode.com/comments?postId=${devId}`,
    });
     

    useEffect(async () => {
        const response = await api.get("");

        setComments(response.data);
    }, []);

    function commentCreator() {
        dispatch({ type: "GET_COMMENT", comment: myComment, emailUser: emailUser, name: myCommentName });
        }

        function generateComments() {
        return comments.map((comment) => {
            return (
                <Card
                    id="cardComment"
                    className="mb-3"
                    style={{ textAlign: "start" }}
                >
                    <Card.Body>
                        <Card.Title>{comment.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {comment.email}
                        </Card.Subtitle>
                        <Card.Text>{comment.body}</Card.Text>
                    </Card.Body>
                </Card>
            );
        });
    }

   


    return (
        <div>
            {generateComments()}
            <MyComments></MyComments>
            <FormControl
                placeholder="Nome"
                onChange={(e) => {
                    setMyCommentName(e.target.value);
                }}
                aria-describedby="basic-addon1"
            />
            <FormControl
                placeholder="E-mail/Apelido"
                onChange={(e) => {
                    setEmailUser(e.target.value);
                }}
                aria-describedby="basic-addon1"
            />
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup>
                        <Button
                            variant=""
                            onClick={() => {
                                commentCreator();
                            }}
                            id="button"
                            block
                        >
                            Enviar
                        </Button>
                    </InputGroup>
                </InputGroup.Prepend>
                <FormControl
                    as="textarea"
                    placeholder="Comentário"
                    onChange={(e) => {
                        setMyComment(e.target.value);
                    }}
                />
            </InputGroup>
        </div>
    );
};
