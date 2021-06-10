import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

function EachProfile(props) {
    return (
        <form className="eachprofile--container" noValidate autoComplete="off">
        <img className="eachprofile--img"    
       
        src={props.avatar}/>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <TextField className="eachprofile--txt--input" value={props.name} label="name" variant="outlined" style={{width:'200px',marginBottom:'30px'}} />
        <TextField className="eachprofile--txt--input" value={props.lastName} label="lastname" variant="outlined" style={{width:'200px',marginBottom:'30px'}} />
        <TextField className="eachprofile--txt--input" value={props.id} label="ID" variant="outlined" style={{width:'200px',marginBottom:'30px'}} />
        <TextField className="eachprofile--txt--input" value={props.email} label="E-mail" variant="outlined" style={{width:'200px',marginBottom:'30px'}} />
        <TextField className="eachprofile--txt--input" value={props.phone} label="Phone Number" variant="outlined" style={{width:'200px',marginBottom:'30px'}} />
        <TextField className="eachprofile--txt--input" value={props.corporation} autoFocus label="Corporation" variant="outlined" style={{width:'200px',marginBottom:'30px'}} />
        </Box>
      </form>
    )
}

export default EachProfile
