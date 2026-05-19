"use client";
import { PostComponent } from "@/components/PostsComponent";
import { useEffect, useState } from "react"


export default function PostPage(){

    const [post, setPost] = useState([]);
    useEffect(()=>{
        async function getAllPosts() {
            const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/posts');
            const data = await res.json();
            setPost(data?.posts);
            return data;
            
        }
        getAllPosts();
    },[])
    
    return(
        <div className="grid grid-cols-4 gap-4 p-4">
            {
                post?.map(({id,title,body},_)=>(
                    <PostComponent
                    key={_}
                    id={id}
                    title={title} 
                    body={body}
                    />
                ))
            }

        </div>
    )
}