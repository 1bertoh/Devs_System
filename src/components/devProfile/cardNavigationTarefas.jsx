import React, { useEffect } from 'react'
import { useSelector } from "react-redux";
import axios from 'axios'

export default (props) => {
    const devId = useSelector((state) => state.getDevId.devId); 
    const [todos, setTodos] = React.useState([]);
    const api = axios.create({
        baseURL: `https://jsonplaceholder.typicode.com/todos?userId=1`,
    });

      /*useEffect(async () => {
          
        }, []);*/
        useEffect( async () => {
            const response = await api.get("");

            setTodos(response.data)
        }, [])

        function generateTodos() {

            return todos.map((todo) => {
            return (
                <div>
                    <p key={todo.id}>
                    {todo.title}
                </p>
                <p>
                    {todo.completed}
                </p>
                </div>
                
            )
        })
        }


    return(
        <div>
            <p>{generateTodos()}</p>
            <p>{devId}</p>
        <h1>Akie vai os todos</h1>
        </div>
        
    )
}