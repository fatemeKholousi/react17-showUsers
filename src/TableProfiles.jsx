import React,{useState} from 'react'
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import EachProfile from './EachProfile';
import "./index.css";


import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";


function TableProfiles(props) {

    return (
    <span >
   
    {/* show is related to onClick on my one source of truth */}
      {props.show==true ?
      /**
       * 
       * 
       * it's second time I call EachProfile things as props
       * 
       * 
       */
        <EachProfile
        avatar={props.avatar}
        name={props.name}
        lastName={props.lastName}
        email={props.email}
        phone={props.phone}
        useName={props.userName}
        corporation={props.corporation}
      />

       :
       /**
        *
        * 
        *  I want to get information as a card call profile(that's Demo in this project)
        * 
        * 
        */
       <TableBody>
              <TableCell >
              {props.profile}
              </TableCell></TableBody>
   }
   </span>
    )
}

export default TableProfiles
