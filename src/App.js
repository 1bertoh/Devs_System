import "./App.css";
//import User from './components/User'
import Index from "./screens/index";
import DevProfile from "./screens/devProfile";
import AboutUs from "./screens/aboutUs";
import NavBar from "./components/NavBar";
import { Switch, Route } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import {Provider} from 'react-redux'
import store from './store'

function App() {
    const oi = "bb";
    return (
        <Provider store={store}>
            <div className="App ">
                <header className="mb-3">
                    <NavBar id="navbar"></NavBar>
                </header>

                <Container id="container">
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
            </div>
        </Provider>
    );
}

export default App;
