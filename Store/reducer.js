import { ACTIONS } from "./Actions";

const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.AUTH:
            return ({
                ...state,
                auth: action.payload
            })
        case ACTIONS.USERS:
            return ({
                ...state,
                users: action.payload
            })
        default:
            return state
  }
}

export default reducer