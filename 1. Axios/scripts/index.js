console.clear();

// --> It Supports all modern browsers including IE.
// --> IT Returns promise.
// --> Thorows error brittiantly.
// --> No need to set header cause axios is intelligence.

// GET REQUEST

// axios
//   .get("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

//or

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// POST REQUEST

// axios
//   .post("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({
//       title: "foo",
//       body: "bar",
//       userId: 1,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err));

// PUT REQUEST

// axios
//   .put("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "PUT",
//     body: JSON.stringify({
//       id: 1,
//       title: "football",
//       body: "barbell",
//       userId: 1,
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   })
//   .then((response) => console.log(response))
//   .then((error) => console.log(error));

//DELETE REQUEST

// axios
//   .delete("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "DELETE",
//   })
//   .then((response) => console.log(response))
//   .then((error) => console.log(error));

// Using Async Await........

// makerequest function

// const makeRequest = async (config) => {
//   return await axios(config);
// };

// DELETE REQUEST

// const deleteData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts/1",
//     method: "delete",
//   })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// };

// deleteData();

// UPDATE REQUEST

// const updateData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts/1",
//     method: "put",
//     data: JSON.stringify({
//       id: 1,
//       title: "foot ball",
//       body: "bar tik tik",
//       userId: 1,
//     }),
//   })
//     .then((res) => console.log(res.data))
//     .catch((err) => console.log(err));
// };

// updateData();

//POST REQU4EST

// const postData = () => {
//   makeRequest({
//     url: "https://jsonplaceholder.typicode.com/posts",
//     method: "post",
//     data: JSON.stringify({
//       title: "foo",
//       body: "bar",
//       userId: 1,
//     }),
//   })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };

// postData();

//GET REQUEST

// const getData = () => {
//   makeRequest("https://jsonplaceholder.typicode.com/posts/")
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };

// getData();
