import React from "react";
import Article from "./Article"

function ArticleList({posts}){
    const articleElements = posts.map(post=>{
        return (
            <main>
                <Article key={post.id} title={post.title} date = {post.date} preview = {post.preview}/>
            </main>
        )
    })

    //console.log(articleElements)
    return articleElements;
}

export default ArticleList;