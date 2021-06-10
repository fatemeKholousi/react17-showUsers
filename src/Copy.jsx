// Loading:
// https://codesandbox.io/s/84795n1vv8?file=/src/index.js:887-997

// API:
// https://60bcc600b8ab37001759fa69.mockapi.io/users/v1/users
import React, { useEffect, useState } from "react";
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
const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor: "red",
    color: "yellow",
  },
});

function App() {
  setTimeout(function () {
    alert("Hello");
  }, 3000);

  const [datauser, setDatauser] = useState([]);
  const [users, setUsers] = useState({
    id: "",
    name: "",
    lastname: "",
    email: "",
    phone: "",
    username: "",
    corporation: "",
    avatar: "",
  });
  //total fetch API Call
  const fetchUser = async () => {
    const response = await fetch(
      " https://60bcc600b8ab37001759fa69.mockapi.io/users/v1/users"
    );
    const data = await response.json();
    setDatauser(data);
    return data;
  };
  useEffect(async () => {
    const getFromServer = await fetchUser();
    console.log(datauser);

    fetchUser();
  }, []);

  return (
    <TableContainer>
      {/* <LoadingComponent /> */}
      <Table className={useStyles.table}>
        {datauser.map((row) => (
          <TableRow className="eachRow">
            <TableCell align="center">
              <img className="avatar" src={row.avatar} />
            </TableCell>

            <TableCell align="center">{row.username} </TableCell>
            <Demo />
          </TableRow>
        ))}
      </Table>
    </TableContainer>
  );
}

