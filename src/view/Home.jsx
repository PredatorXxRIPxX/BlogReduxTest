import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../features/postSlice";
import "../style/global.css"


export default function Home(){

    const dispatch = useDispatch()
    const [title,setTitle]=useState('')
    const [auther,setAuther] = useState('')
    const [content,setContent] = useState('')

    const submitPost =()=>{
        dispatch(addPost(title,auther,content))
        setTitle('')
        setContent('')
        setAuther('')
    }

    return (
        <div>
            <h1>Edit</h1>
            <h2>post title:</h2>
            <input className="rounded-md border-2 border-violet-800 p-2" type="text" placeholder="title" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            <h2>auther</h2>
            <input className="rounded-md border-2 border-violet-800 p-2" type="text" placeholder="autherName" onChange={(e)=>setAuther(e.target.value)} value={auther}/>
            <h2>content</h2>
            <textarea  className="rounded-md border-2 border-violet-800 p-2" onChange={(e)=>setContent(e.target.value)} value={content}/>
            <button className=" rounded-md bg-violet-800 p-2 m-5 text-white font-bold" type="submit" onClick={submitPost} >save Posts</button>
        </div>
    )
}