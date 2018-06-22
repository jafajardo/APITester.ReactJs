import axios from 'axios';

import {
  API_TESTER_HOST,
  API_TESTER_SERVICES_ENDPOINT
} from '../config/Configuration';

export function GetService(serviceName) {
  axios.get(`${API_TESTER_HOST}/${API_TESTER_SERVICES_ENDPOINT}/${serviceName}`)
    .then(response => {
      console.dir(response.data)
      dispatch => {
        dispatch({

        });
      }
    })
}