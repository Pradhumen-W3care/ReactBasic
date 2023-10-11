import React, { useState } from "react";
import AdminPannel from "./AdminPannel";
import LoginForm from "./LoginForm";
import MyButton from "../Component/MyButton";


const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

let isLoggedIn = true;

const NewTest = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      {isLoggedIn ? <AdminPannel /> : <LoginForm />}

      <h1>{user.name}</h1>
      <img
        className="avtar"
        src={user.imageUrl}
        alt={"photo of " + user.name}
        style={{ width: user.imageSize, height: user.imageSize }}
      />
      <div className="mx-2 d-block">
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick}/>

       
        
      </div>
    </>
  );
};

export default NewTest;
