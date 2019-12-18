A frontend for a "Pro’s & Con’s" application. The application has two modifiable lists (named "pros" and "cons"), in which the user can add and remove list items.

getting the `groupId` needed in the request from the backend with the following request:
  GET https://avetiq-test.firebaseapp.com/group/tigran_harutyunyan

getting the necessary `userId` from the request to this endpoint:
  GET https://avetiq-test.firebaseapp.com/user/tigran_harutyunyan
  
  
Everytime a todo is added or removed the whole(!) list of Pro’s & Con’s is submitted to the server via:
  PUT https://avetiq-test.firebaseapp.com/proscons/group/{groupId}/user/{userId}
