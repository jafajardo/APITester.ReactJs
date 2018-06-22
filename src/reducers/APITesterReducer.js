import {
  API_TESTER_GETSERVICES
} from '../config/Configuration';

const INITIAL_STATE = {
  services: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case API_TESTER_GETSERVICES: {
      return { ...state, services: action.payload }
    }
  }
  return state;
}