// https://codesandbox.io/s/xv6wozqjmw?file=/src/components/userCards.js
import React, { useEffect, useState } from "react";
import "./index.css";
import Demo from "./Demo";
import TableProfiles from "./TableProfiles";
import LoadingComponent from "./LoadingComponent";
import { Box } from "@material-ui/core";
import EachProfile from "./EachProfile";
import { Router, Route, Switch, Link } from "react-router";
import { NavLink } from "react-router-dom";
function App() {
  <Switch>
    <Route path="/profile" exact component={EachProfile} />
    <Route path="/" exact component={App} />
  </Switch>;

  const [dataUser, setDataUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showList, setShowList] = useState(false);
  const [userNameSaver, setUserNameSaver] = useState({
    username: "",
    name: "undefined",
    lastName: "undefined",
    corporation: "undefined",
    email: "undefined",
    phone: "undefined",
    id: "undefined",
    avatar: "undefined",
  });
  // fetch API user mock
  //I'll get every thing and put it into dataUser

  const fetchUser = async () => {
    const response = await fetch(
      " https://60bcc600b8ab37001759fa69.mockapi.io/users/v1/users"
    );
    const data = await response.json();
    setDataUser(data);
    return data;
  };
  useEffect(async () => {
    const getFromServer = await fetchUser();
    fetchUser();
    setLoading(false);
  }, []);

  //just make sure I get right information
  // console.log(dataUser);
  // console.log("===========");
  // console.log(userNameSaver);
  // console.log("===========");

  return (
    <div>
      {loading ? (
        <LoadingComponent loading={loading} />
      ) : (
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <TableProfiles
            name={userNameSaver.name}
            lastName={userNameSaver.lastName}
            email={userNameSaver.email}
            phone={userNameSaver.phone}
            id={userNameSaver.id}
            corporation={userNameSaver.corporation}
            avatar={userNameSaver.avatar}
            show={showList}
            profile={dataUser.map((row) => (
              <Demo
                useName={row.username}
                profileImage={row.avatar}
                handleClickToShow={() => {
                  setShowList(!showList);
                  setUserNameSaver({
                    username: row.username,
                    name: row.name,
                    lastName: row.lastname,
                    corporation: row.corporation,
                    email: row.email,
                    phone: row.phone,
                    id: row.id,
                    avatar: row.avatar,
                  });
                }}
              />
            ))}
          />
        </Box>
      )}
    </div>
  );
}

export default App;
