import {} from "../actions/types";
import {FETCH_CNPJ} from "../actions/types";
import {FETCH_LOADING} from "../actions/types";

const INITIAL_STATE = {
    cnpj: '',
    loading: false,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_LOADING:{
            return {
                ...state,
                loading: action.payload,

            }
        }

        case FETCH_CNPJ:
            return {
                ...state,
            }
        default:
            return state;
    }
}



