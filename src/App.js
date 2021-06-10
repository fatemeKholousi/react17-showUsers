// https://codesandbox.io/s/xv6wozqjmw?file=/src/components/userCards.js
import React, { useEffect, useState } from "react";
import "./App.css";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Demo from "./Demo";
import LoadingComponent from "./LoadingComponent";
import { CircularProgress } from "@material-ui/core";
import TableProfiles from "./TableProfiles";
import TransitionsModal from "./ModalProfile";
import EachProfile from "./EachProfile";
import { Router, Route, Switch, Link } from "react-router";
import { NavLink } from "react-router-dom";
function App() {
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
  const [userProfileInformation, setUserProfileInformation] = useState({});
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
  console.log(dataUser);

  console.log("===========");
  console.log(userNameSaver);
  console.log("===========");

  return (
    <div>
      illa illa
      {/* <NavLink exact activeClassName="activeLink" to="/EachProfile">
        برو به پروفایل/
      </NavLink>
      <NavLink exact activeClassName="activeLink" to="/">
        صفحه اصلی/
      </NavLink> */}
      <TransitionsModal />
      {loading ? (
        <LoadingComponent loading={loading} />
      ) : (
        <span>
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
        </span>
      )}
    </div>
  );
}

export default App;
