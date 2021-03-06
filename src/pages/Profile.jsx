import React, { useState, useEffect } from "react";

// UI imports
import { Button } from "antd";
import { Auth, Hub } from "aws-amplify";

import Container from "../components/Container";
import Form from "../components/Form";

const Profile = () => {
  useEffect(() => {
    checkUser();
    Hub.listen("auth", (data) => {
      const { payload } = data;
      if (payload.event === "signOut") {
        setUser(null);
      }
    });
  }, []);

  const [user, setUser] = useState({});

  async function checkUser() {
    const data = await Auth.currentUserPoolUser();
    const userInfo = { username: data.username, ...data.attributes };
    setUser(userInfo);
  }

  function signOut() {
    Auth.signOut().catch((err) => console.log("error signing out: ", err));
  }

  if (user) {
    return (
      <Container>
        <h1>Profile</h1>
        <h2>Username: {user.username}</h2>
        <h3>Email: {user.email}</h3>
        <h4>Phone: {user.phone_number}</h4>
        <Button onClick={signOut}>Sign Out</Button>
      </Container>
    );
  }
  return <Form setUser={setUser} />;
};

export default Profile;
