import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { allPost, deletePost } from "../features/postSlice";
import "../style/global.css";

export default function Post() {
    const dispatch = useDispatch();
    const posts = useSelector(allPost);
    
    const trashPost = (element) => {
        try {
            dispatch(deletePost(element.id));
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <div>
            {posts.length !== 0 ? (
                posts.map((e) => (
                    <div key={e.id} className="rounded-md bg-violet-800 text-white m-4 p-4 shadow-sm shadow-black drop-shadow-lg w-auto flex flex-col">
                        <nav className="flex justify-between items-center m-2">
                            <h1>{e.title}</h1>
                            <h3>{e.auther}</h3>
                        </nav>
                        <p>{e.content}</p>
                        <footer>
                            <button className="bg-red-500 rounded-md p-2 m-2" onClick={() => trashPost(e)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>
                        </footer>
                    </div>
                ))
            ) : (
                <p>no post yet</p>
            )}
        </div>
    );
}
