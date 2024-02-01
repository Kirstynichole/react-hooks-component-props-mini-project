import React from "react";
import CreateArticle from "./Article";

function CreateArticleList ({posts}) {
    return (
        <main>
            {posts.map( post => { return (<CreateArticle key={post.id} title={post.title} date={post.date} preview={post.preview}/>)})}
        </main>
    )
}

export default CreateArticleList;