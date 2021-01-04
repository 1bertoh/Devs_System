import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    Card,
    FormControl,
    InputGroup,
    Button,
    Alert,
    Spinner,
} from "react-bootstrap";
import axios from "axios";
import MyComments from "./cardNavigationMyComments";
import "./cardNavigationComment.css";

export default (props) => {
    const devId = useSelector((state) => state.getDevId.devId);
    const [comments, setComments] = React.useState([]);
    const [emailUser, setEmailUser] = React.useState("");
    const [myComment, setMyComment] = React.useState("");
    const [myCommentTitle, setMyCommentTitle] = React.useState("");
    const [commentAlert, setCommentAlert] = React.useState(false);
    const [loadSpinner, setLoadSpinner] = React.useState(true);
    const dispatch = useDispatch();
    const api = axios.create({
        baseURL: `https://jsonplaceholder.typicode.com/comments?postId=${devId}`,
    });

    useEffect(() => {
        setTimeout(async () => {
            const response = await api.get("");
            setComments(response.data);
            setLoadSpinner(false);
        }, 1000);
    }, []);

    function commentCreator() {
        if (myComment === "" || myCommentTitle === "" || emailUser === "") {
            setCommentAlert(true);
        } else {
            dispatch({
                type: "GET_COMMENT",
                comment: myComment,
                emailUser: emailUser,
                title: myCommentTitle,
            });
            setMyComment("");
            setMyCommentTitle("");
            setEmailUser("");
            setCommentAlert(false);
        }
    }

    function generateComments() {
        return comments.map((comment) => {
            return (
                <Card
                    key={comment.id}
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
            {loadSpinner ? (
                <div style={{ height: "30em", paddingTop: "20%" }}>
                    <Spinner animation="border" />
                </div>
            ) : (
                ""
            )}
            <MyComments></MyComments>
            <FormControl
                placeholder="Titulo"
                value={myCommentTitle}
                onChange={(e) => {
                    setMyCommentTitle(e.target.value);
                }}
                aria-describedby="basic-addon1"
            />
            <FormControl
                className="my-2"
                placeholder="E-mail/Apelido"
                value={emailUser}
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
                            id={`button_${props.theme}`}
                            block
                        >
                            Enviar
                        </Button>
                    </InputGroup>
                </InputGroup.Prepend>
                <FormControl
                    as="textarea"
                    placeholder="Comentário"
                    value={myComment}
                    onChange={(e) => {
                        setMyComment(e.target.value);
                    }}
                />
            </InputGroup>
            {commentAlert ? (
                <Alert variant="danger">Preencha os compos</Alert>
            ) : (
                ""
            )}
        </div>
    );
};
