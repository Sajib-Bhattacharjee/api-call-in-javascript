<p align="center">
 <img src="images/logo_img.jpg" alt="Api calling in js" title="api" width="100%" height="500px" />
</p>

## `API Call in JavaScript`

### `Welcome`

Hello Everyone, I'm **`Sajib Bhattacharjee, A passionate Full-Stack Web-Developer`**, I want to welcome you to learning **`API call in JavaScript`**.

### `What is API Call in JavaScript?`

```javascript
API is short for Application Programming Interface and is a software mediator that allows two or more applications to talk to
each other. Every time you send a message to your friend over the internet or check the weather on your phone, you use API
without knowing it. The front-end needs to create API requests to servers in the back-end to show dynamic real-time content on
the user's browsers. This creates a need to know how to make API calls in JavaScript and retrieve dynamic data from the servers.
Let's see different ways we can use to create API calls in JavaScript discussed in this article.
```

### `Ways to Make an API Call in JavaScript`

```javascript
JavaScript provides a few built-in methods and external open source libraries to create and interact with the API. A few
possible methods to make an API call in JavaScript are:
```

       XMLHttpRequest
       Fetch
       Using Axios library
       jQuery AJAX

### `XML HTTP Request`

```javascript
XMLHttpRequest was the only way to create HTTP requests in JavaScript before ES6 came out. It is a built-in browser object to
request data from the servers and works in old as well as new browsers. Let's look at the code snippet mentioned below to see
how to create requests using XMLHttpRequest.
```

```javascript
var XMLRequest = new XMLHttpRequest();

// creating get request to dummy API call
XMLRequest.open("GET", "https://reqres.in/api/users/2");

XMLRequest.send();

XMLRequest.onload = () => {
  if (XMLRequest.status === 200) {
    console.log("Request successful");
  } else {
    console.log("Error occurred!");
  }

  console.log(JSON.parse(XMLRequest.response));
};
```

```javascript
XMLHttpRequest by default, receives response in string format that needs to be parsed in JSON format (JSON.parse(XMLRequest.response)).
This way of creating HTTP requests is deprecated with the introduction of fetch in ES 6. Still, it is used when we work with older browsers.
```

### `Fetch`

```javascript
Fetch provides an interface to fetch resources asynchronously. This method returns a Promise and is an object that either contains
a Responseor an Error, and .then() tells the program what is to be done once Promise completes.
```

`There are two ways we can create API calls using fetch.`

#### `Method 1:`

```javascript
fetch('https://reqres.in/api/users/2')
    .then(response => return response.json())
    .then(data => {
        console.log(data);
    })
```

#### `Method 2:`

`The other way is to use async and await with fetch, as shown in the code snippet below.`

```javascript
async function getUserData() {
  let response = await fetch("https://reqres.in/api/users/2");
  let data = await response.json();
  return data;
}

getUserData().then((data) => {
  console.log(data);
});
```

```
The fetch API is a powerful way to create HTTP calls. The second method has a slight advantage because of improved readability
in code. One disadvantage of fetch API is that we need to do error handling.
```

### `Axios`

```javascript
Another possible method to create API calls in JavaScript is using an open-source library for making HTTP requests with several
great features. Axios works in both Node.js and browsers and is a promise-based (asynchronous) HTTP client, which even is used in
frameworks like Angular and React.
```

#### `Installation`

```javascript
1. Using Package Manager
If you are using package manages like npm or yarn, then we can install Axios as shown below.
```

```javascript
npm install axios
// or
yarn add axios
```

and include it in the HTML file like.

```javascript
<script src="./node_modules/axios/dist/axios.min.js"></script>
```

#### `2. Using CDN`

```
Another way to include Axios in HTML is using its external CDN, as shown.
```

```javascript
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

```
Now that we have successfully included Axios in our HTML file. Let's start creating HTTP requests with it.
```

```html
<script>
  axios
    .get("https://reqres.in/api/users/2")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
</script>
```

`Axios has the following advantage:`

```javascript
       etter and easier error handling.
       Axios has a wide range of browser support.
       Axios automatically perform JSON parsing and returns data in JSON format.
       Because of the above-mentioned advantages, Axios is preferred over other methods to create asynchronous API calls.
```

### `jQuery AJAX`

```javascript
jQuery provides several methods to handle asynchronous HTTP requests. Like Axios, in order to use jQuery in our HTML file,
we need to include the source file of jQuery, which can be done as shown in the code snippet below.
```

```javascript
<script src="https://ajax.googleapis.com/ajax/libs/jQuery/3.3.1/jquery.min.js"></script>
```

jQuery uses $.ajax() method to make requests as shown below.

```html
<script>
  $(document).ready(function () {
    $.ajax({
      url: "https://reqres.in/api/users/2",
      type: "GET",
      success: function (result) {
        console.log(result);
      },
      error: function (error) {
        console.log(error);
      },
    });
  });
</script>
```

As shown in the example above, the $.ajax() method takes several parameters, some optional and some required. This method
contains two callback functions: success and error to handle the received response easily.

### `Conclusion`

API is a software mediator that allows two or more applications to talk to each other.
JavaScript provides a few built-in methods and external open source libraries to create and interact with the API.
The three commonly used methods to create API calls are:

      * XML HTTP Request: It is a built-in browser object to request data from the servers and works in old as well as new browsers.
      * Fetch: Returns a Promise and is an object that either contains a Response or an Error, and .then() tells the program what is
         to be done once Promise completes.
      * Axios: Axios is an open-source library that works in both Node.js and browsers and is a promise-based
        (asynchronous) HTTP client.


Most modern applications use Axios to make HTTP requests because it is easy and is an open-source library
to handle HTTP requests.

</br>

<div 
align="center">

##### `All rights reserved by Sajib Bhattacharjee @2023`

### `Created By-->`

**`-Sajib Bhattacharjee`**

**`Dedicated for 💕"Zahan" 💕`**

> > > > ### Thanks A Lot For Visiting...!!!

</div>
