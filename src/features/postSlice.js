import { createSlice ,nanoid} from "@reduxjs/toolkit";

const initialState = [{
    

}]

export const postSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        addPost:{
            reducer(state,action){
                state.push(action.payload)
            },
            prepare(title,content,auther){
                return {
                    payload:{
                        id:nanoid(),
                        title:title,
                        content:content,
                        auther:auther,
                    }
                }
            }
        },
        deletePost:{
            reducer(state,action){
                return state.filter((element)=>element.id!=action.payload.id)
            },
            prepare(id){
                return {
                    payload:{
                        id:id,
                    }
                };
            }
        }
    }
})


export const allPost = (state)=>state.posts;

export const {addPost,deletePost} = postSlice.actions;

export default postSlice.reducer;

