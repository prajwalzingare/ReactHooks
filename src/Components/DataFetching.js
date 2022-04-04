import React, { useState, useEffect } from "react";
import axios from "axios";
function DataFetching() {
  const [post, setPost] = useState({}); //initial value should be empty object
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`) //we add id in template literal for random fetching of data according to id.
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]); //without dependancy array loop will be infinite so you should apply dependancy.kisipe depend nahi rahega//id pe depend hai to id dalo means jub bhi id change karo ge useefect chale ga.

  fetch = () => {
    setIdFromButtonClick(id);
  };
  return (
    <div>
      <input
        type="text"
        value={id} //starting value set akrne ke liye id ko use kie apan ne.
        onChange={(e) => {
          //onvhane pe kya karna hai id set karna hai jo app daloge input me
          setId(e.target.value);
        }}
      />
      <button onClick={fetch}>Fetch Data</button>
      <div>{post.body}</div>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default DataFetching;
