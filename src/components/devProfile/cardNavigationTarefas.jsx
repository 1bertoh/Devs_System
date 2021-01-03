import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ListGroup, Spinner } from "react-bootstrap";
import axios from "axios";

export default (props) => {
    const devId = useSelector((state) => state.getDevId.devId);
    const [todos, setTodos] = React.useState([]);
    const [loadSpinner, setLoadSpinner] = React.useState(true);
    const api = axios.create({
        baseURL: `https://jsonplaceholder.typicode.com/todos?userId=${devId}`,
    });

    useEffect( () => {
        setTimeout(async() => {
            const response = await api.get("");
            setTodos(response.data);
            setLoadSpinner(false)
        }, 1000)
        
    }, []);

    function generateTodos() {
        return todos.map((todo) => {
            return (
                <ListGroup.Item variant={todo.completed ? "success" : "danger"}>
                    {todo.title}
                </ListGroup.Item>
            );
        });
    }

    return (
        <div>
            <ListGroup variant="flush">
                {loadSpinner ? (
                    <div style={{ height: "30em", paddingTop: "20%" }}>
                        <Spinner animation="border" />
                    </div>
                ) : (
                    ""
                )}
                <>{generateTodos()}</>
            </ListGroup>
        </div>
    );
};
