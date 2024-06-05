import React, { Fragment } from "react";
import useFetch from "../Hooks/useFetch";
import {Button} from 'antd'
const Home = () => {
    
    const {data: todos, setData: setTodos, isloading: isTodosLoading} = useFetch('/todos', 5);
    const {data: posts, setData: setPosts, isloading: isPostsLoading} = useFetch('/posts', 5);
    console.log('Todos Loading', isTodosLoading);
    console.log('Posts Loading', isPostsLoading);

    return (
        <>
        <div className="flex-row text-left mb-20" >
            <h1 className="mb-6 text-xl">Todos:</h1>
            {todos?.map(todo => (
                <Fragment key={todo.id}>
                    <p>{todo.title}</p>
                    <Button type="primary m-2">Delete</Button>
                    <Button type="primary">Edit</Button>
                </Fragment>
            ))}
            </div>
            <div className="flex-row text-left mb-20"> 
            <h1 className="mb-6 text-xl">Posts:</h1>
            {posts?.map(post => (
                <Fragment key={post.id}>
                    <p>{post.title}</p>
                    <Button type="primary m-2">Delete</Button>
                    <Button type="primary">Edit</Button>
                </Fragment>
               
            ))}
            </div>
        </>
    );
};

export default Home;
