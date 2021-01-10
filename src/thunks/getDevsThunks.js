import axios from 'axios';
import getDevsAction from '../redux/actions/getDevs'

const getDevsThunk = () => {
    return async (dispatch) => {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
        ).then( response => response.data);
        console.log(response);
        dispatch(getDevsAction(response));
    };
};

export default getDevsThunk