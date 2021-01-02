import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import axios from 'axios'

export default (props) => {
    const devId = useSelector((state) => state.getDevId.devId); 
    const [todos, setTodos] = React.useState([]);
    const api = axios.create({
        baseURL: `https://jsonplaceholder.typicode.com/todos?userId=${devId}`,
    });

      /*useEffect(async () => {
          
        }, []);*/
        useEffect( async () => {
            const response = await api.get("");

            setTodos(response.data)
        }, [])

        function generateTodos() {

            return todos.map((todo) => {
            return <ListGroup.Item variant={todo.completed ? 'success' : 'danger'}>{todo.title}</ListGroup.Item>;
        })
        }


    return (
        <div>
            <ListGroup variant="flush">
                <>{generateTodos()}</>
            </ListGroup>
        </div>
    );
}