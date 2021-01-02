import React from "react";
import { Card, Nav } from "react-bootstrap";
import CardNavigationDados from './cardNavigationDados'
import CardNavigationTarefas from "./cardNavigationTarefas";
import CardNavigationComentarios from "./cardNavigationComentarios";
import { useSelector } from "react-redux";
import './cardNavigation.css'

export default (props) => {

    const [nav, setNav] = React.useState(1)
    const devId = useSelector((state) => state.getDevId.devId); 
    
    return (
        <Card id='cardNav'>
            {}
            <Card.Header id='cardNavHeader'>
                <Nav id='cardNavbar' variant="tabs" defaultActiveKey="#dados">
                    <Nav.Item>
                        <Nav.Link
                            onClick={() => {
                                setNav(1)
                            }}
                            href="#dados"
                        >
                            Dados
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            onClick={() => {
                                setNav(2);
                            }}
                            href="#tarefas"
                        >
                            Tarefas
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            onClick={() => {
                                setNav(3);
                            }}
                            href="#comentarios"
                        >
                            Comentários
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                {nav === 1 ? <CardNavigationDados></CardNavigationDados> : ""}
                {nav === 2 ? (
                    <CardNavigationTarefas></CardNavigationTarefas>
                ) : (
                    ""
                )}
                {nav === 3 ? (
                    <CardNavigationComentarios></CardNavigationComentarios>
                ) : (
                    ""
                )}
            </Card.Body>
        </Card>
    );
};
