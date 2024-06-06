import React, { Fragment } from "react";
import useFetch from "../Hooks/useFetch";
import {Button} from 'antd'
import { CardTabListType } from '../../../node_modules/antd/es/card/Card.d';
const Home = () => {
    
    const {data: todos, setData: setTodos, isloading: isTodosLoading} = useFetch('/todos', 5);
    const {data: posts, setData: setPosts, isloading: isPostsLoading} = useFetch('/posts', 5);
    console.log('Todos Loading', isTodosLoading);
    console.log('Posts Loading', isPostsLoading);

    return (
        <>

        <div className="flex-row text-left  w-full max-w-[60%] mx-auto justify-center mb-20">
                <h1 className="mb-6 text-xl">Todos:</h1>
                <table className="">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th className="pl-3">Edit</th>
                            <th className="pl-2">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos?.map(todo => (
                            <tr key={todo.id}>
                                <td className="w-full max-w-96">{todo.title}</td>
                                <td><Button type="primary m-2">Edit</Button></td>
                                <td><Button type="primary">Delete</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex-row text-left  justify-center w-full max-w-[60%] mx-auto mb-20"> 
            <h1 className="mb-6 text-xl">Posts:</h1>
            <table className="">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th  className="pl-3">Edit</th>
                        <th  className="pl-2">Delete</th>
                    </tr>
                </thead>
                
            {posts?.map(post => (
                //question mark used to maske sure that the function stopps and waits as the state is == null or undefined however if not equal to null it can continue.
                <tbody>
                <tr key={post.id}>

                    <td className="w-full max-w-96">{post.title}</td>
                    
                    <td><Button type="primary m-2">Edit</Button></td>
                    <td><Button type="primary m-2">Delete</Button></td>
                </tr>
                </tbody>
            ))}
            </table>
            </div>
            </>
    );
};

export default Home;
