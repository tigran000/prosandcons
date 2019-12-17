import axios from "axios";
function getGroupId() {
  return axios.get(
    "https://avetiq-test.firebaseapp.com/group/tigran_harutyunyan"
  );
}

export default getGroupId;
