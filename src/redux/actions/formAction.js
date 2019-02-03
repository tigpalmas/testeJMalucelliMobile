import axios from 'axios';



import {FETCH_CNPJ, FETCH_LOADING} from "./types";
import {baseUrl, userToken} from "../../components/common/constants/index";


export const fetch_cnpj = (value) => async (dispatch) => {


    dispatch({type: FETCH_LOADING, payload: true})


    try {
        let config = '';
        var url = `${baseUrl}/quote/:${value}`
        config = {
            headers: {
                'ACCESS-TOKEN': userToken,
            }
        }

        const {data} = await axios.get(url, config);

        dispatch({
            type: FETCH_CNPJ,
            payload: {

            }
        })

        dispatch({type: FETCH_LOADING, payload: false})
    } catch (e) {
        console.log(e.message);
        dispatch({type: FETCH_LOADING, payload: false})

    }

}
