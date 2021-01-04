import Redux from "redux";

import Index from "../screens/index";
import DevProfile from "../screens/devProfile";
import AboutUs from "../screens/aboutUs";
import { Switch, Route } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./main.css";

export default (props) => {
    const theme = useSelector((state) => state.changeTheme.theme);

    return (
        <main>
            <Container id={`container_${theme}`}>
                <Row>
                    <Col>
                        <Switch>
                            <Route exact path="/" component={Index} />
                            <Route exact path="/devs" component={Index} />
                            <Route path="/aboutus" component={AboutUs} />
                            <Route
                                exact
                                to="/devprofile?id=:id"
                                component={DevProfile}
                            />
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};
