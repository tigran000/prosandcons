import axios from "axios";

function getUserId() {
  return axios.get(
    "https://avetiq-test.firebaseapp.com/user/tigran_harutyunyan"
  );
}

export default getUserId;
