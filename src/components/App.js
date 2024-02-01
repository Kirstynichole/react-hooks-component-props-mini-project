import React from "react";
import blogData from "../data/blog";
import CreateHeader from "./Header";
import CreateAbout from "./About";
import CreateArticleList from "./ArticleList";

function App() {
  return (
    <div className="App">
    <CreateHeader name={blogData.name}/>
    <CreateAbout image={blogData.image} about={blogData.about}/>
    <CreateArticleList posts={blogData.posts} key={blogData.posts.id}/>
    </div>
  );
}

export default App;
