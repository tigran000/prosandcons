import axios from "axios";
import getUserId from "./getUserId";
import getGroupId from "./getGroupId";
function hanleFetchProsAndCons(userIdResponse, groupIdResponse) {
  const { userId } = userIdResponse.data;
  const { groupId } = groupIdResponse.data;
  return axios.get(
    `https://avetiq-test.firebaseapp.com/proscons/group/${groupId}/user/${userId}`
  );
}

export default function fetchProsAndCons() {
  return axios
    .all([getUserId(), getGroupId()])
    .then(axios.spread(hanleFetchProsAndCons));
}
