import useFetch from "../Hooks/useFetch";
import { Button,Modal,Input } from 'antd';
import React, { useState } from 'react';




const Home = () => {
  const { data: todos, setData: setTodos, isloading: isTodosLoading } = useFetch('/todos', 5);
  const { data: posts, setData: setPosts, isloading: isPostsLoading } = useFetch('/posts', 5);

  console.log('Todos Loading', isTodosLoading);
  console.log('Posts Loading', isPostsLoading);

  const deletePosts = (id: number) => {
    const newPosts = posts.filter(post => post.id !== id);
    setPosts(newPosts);
  };

  const deleteTodos = (id: number) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const permEditTodos = (id: number) => {
    const newTodos = todos.map(todo => 
      todo.id === id ? { ...todo, title: 'hello' } : todo
    );
    setTodos(newTodos);
  };

  const permEditPosts = (id: number) => {
    const newPosts = posts.map(post => 
      post.id === id ? { ...post, title: 'hello' } : post
    );
    setPosts(newPosts);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex-row text-left w-full max-w-[60%] min-w-[50%] mx-auto justify-center mb-20">
        <h1 className="mb-6 text-xl">Todos:</h1>
        <table className="">
          <thead>
            <tr>
              <th>Title</th>
              <th className="pl-3">Edit</th>
              <th className="pl-2">Delete</th>
              <th className="pl-3">EditPerm</th>
            </tr>
          </thead>
          <tbody>
            {todos?.map(todo => (
              <tr key={todo.id}>
                <td className="w-full max-w-96">{todo.title}</td>
                <td> <Button type="primary" onClick={showModal}>
              Edit
              </Button>
              <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <Input placeholder="Basic usage" />
                
                
              </Modal></td>
                <td><Button onClick={() => deleteTodos(todo.id)} type="primary m-2">Delete</Button></td>
                <td><Button onClick={() => permEditTodos(todo.id)} type="primary m-2">EditPerm</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex-row text-left justify-center w-full max-w-[60%] min-w-[50%] mx-auto mb-20">
        <h1 className="mb-6 text-xl">Posts:</h1>
        <table className="">
          <thead>
            <tr>
              <th>Title</th>
              <th className="pl-3">Edit</th>
              <th className="pl-2">Delete</th>
              <th className="pl-3">EditPerm</th>
            </tr>
          </thead>
          <tbody>
            {posts?.map(post => (
              <tr key={post.id}>
                <td className="w-full max-w-96">{post.title}</td>
                <td> <Button type="primary" onClick={showModal}>
              Edit
              </Button>
              <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <Input placeholder="Basic usage" />

              </Modal></td>
                <td><Button onClick={() => deletePosts(post.id)} type="primary m-2">Delete</Button></td>
                <td><Button onClick={() => permEditPosts(post.id)} type="primary m-2">EditPerm</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      <div>
      <div>
      <h1>Modal</h1>
     
      </div>
      </div>
        </div>
    </>
  );
};

export default Home;
