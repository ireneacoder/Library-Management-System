
import { useState } from 'react'
import { FiX } from "react-icons/fi";
import { TextField, InputAdornment } from "@mui/material";
import Button from '../button/button';
import React from 'react';


const Addmemberpopup = (props) => {
    return(

        <div className='box'>

            <div className="dialog-wrapper" onClick={props.closeDialog}></div>
            <div className="dialog-container">
                <div className="inner-container">
                    <p className='poptitle'> Add New Member </p>

                    <div className='textboxes'>

                        <TextField
                            size="medium"
                            sx={{width: '36vw'}}
                            label="Name"
                            id="outlined-start-adornment"
                            variant="outlined"
                        />

                        <TextField
                            size="medium"
                            sx={{width: '36vw'}}
                            label="Address"
                            id="outlined-start-adornment"
                            variant="outlined"
                        />

                        <TextField
                            size="medium"
                            sx={{width: '36vw'}}
                            label="DOB"
                            id="outlined-start-adornment"
                            variant="outlined"
                        />


                    </div>

                    <Button buttonname='Add Member'/>

                    <div className="icon-container" onClick={props.closeDialog}>

                        <FiX className='closeBtn' size={45}/>
                    </div>

                   
                </div>


            </div>





        </div>
    )
}
export default Addmemberpopup