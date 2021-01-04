import React from 'react'
import './footer.css'
import {useSelector} from 'react-redux'

export default () => {
    const theme = useSelector((status) => status.changeTheme.theme)

    return (
        <div id={ `footer_${theme}`}>
            <p>DevFamily &copy; 2021</p>
        </div>
    );
}