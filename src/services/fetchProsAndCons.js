import axios from "axios";

function getUserId() {
  return axios.get(
    "https://avetiq-test.firebaseapp.com/user/tigran_harutyunyan"
  );
}

function getGroupId() {
  return axios.get(
    "https://avetiq-test.firebaseapp.com/group/tigran_harutyunyan"
  );
}

function getProsAndCons(userIdResponse, groupIdResponse) {
  const { userId } = userIdResponse.data;
  const { groupId } = groupIdResponse.data;
  return axios.get(
    `https://avetiq-test.firebaseapp.com/proscons/group/${groupId}/user/${userId}`
  );
}

export default function fetchProsAndCons() {
  return axios
    .all([getUserId(), getGroupId()])
    .then(axios.spread(getProsAndCons));
}
