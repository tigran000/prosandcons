import axios from "axios";
import getUserId from "./getUserId";
import getGroupId from "./getGroupId";

function handlePutProsAndCons(userIdResponse, groupIdResponse, data) {
  const { userId } = userIdResponse.data;
  const { groupId } = groupIdResponse.data;
  return axios.put(
    `https://avetiq-test.firebaseapp.com/proscons/group/${groupId}/user/${userId}`,
    data
  );
}

export default function putProsAndCons(data) {
  return axios
    .all([getUserId(), getGroupId()])
    .then(
      axios.spread((userIdResponse, groupIdResponse) =>
        handlePutProsAndCons(userIdResponse, groupIdResponse, data)
      )
    );
}
