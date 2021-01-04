import "./App.css";
import React from 'react'
//import User from './components/User'
import NavBar from "./components/NavBar";
import Main from './screens/main'
import Footer from "./components/footer";
import { Provider, useSelector } from "react-redux";
import store from "./store";

function App() {
    const [theme, setTheme] = React.useState('light')

    function getTheme(gotTheme) {
        setTheme(gotTheme)
    }

    return (
        <Provider store={store}>
            <div className={ `App_${theme}`}>
                <header className="mb-3">
                    <NavBar id="navbar" sendTheme={getTheme}></NavBar>
                </header>
                    <Main ></Main>
                <footer>
                    <Footer></Footer>
                </footer>
            </div>
        </Provider>
    );
}

export default App;
