import axios from 'axios'

export function request(baseurl) {
  return axios.get(baseurl).then(function (response) {
    return response;
  }).catch(function (error) {
    console.log(error);
  })
}
