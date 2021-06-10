import React,{useState} from 'react'


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
import EachProfile from './EachProfile';


function TableProfiles(props) {

    const useStyles = makeStyles({
        table: {
          minWidth: 800,
          
        },
        celll:{
            margin:400,

        }
      });
    return (
    <span>
      {props.show==true ?
        <EachProfile
        avatar={props.avatar}
        name={props.name}
        lastName={props.lastName}
        email={props.email}
        phone={props.phone}
        id={props.id}
        corporation={props.corporation}
      />
  
       :
        <TableContainer>
        <Table className={useStyles.table}>
            <TableBody>
            <TableCell className={useStyles.celll}>
              {props.profile}
            </TableCell>
            </TableBody>
        </Table>
      </TableContainer>
   }</span>
    )
}

export default TableProfiles
