

import './issuepopup.css'
import { useState } from 'react'
import { FiX } from "react-icons/fi";
import { TextField, InputAdornment } from "@mui/material";
import Button from '../button/button';
import React from 'react';


const Issuepopup = (props) => {
    return(

        <div className='box'>

            <div className="dialog-wrapper" onClick={props.closeDialog}></div>
            <div className="dialog-container">
                <div className="inner-container">
                    <p className='poptitle'>Issue Book </p>

                    <div className='textboxes'>

                        <TextField
                            size="medium"
                            sx={{width: '36vw'}}
                            label=" Book Name"
                            id="outlined-start-adornment"
                            variant="outlined"
                        />

                        <TextField
                            size="medium"
                            sx={{width: '36vw'}}
                            label="Date of Issue"
                            id="outlined-start-adornment"
                            variant="outlined"
                        />

                        <TextField
                            size="medium"
                            sx={{width: '36vw'}}
                            label="Number of Books Issues"
                            id="outlined-start-adornment"
                            variant="outlined"
                        />

                        <TextField
                            size="medium"
                            sx={{width: '36vw'}}
                            label="Scheduled Date of Return"
                            id="outlined-start-adornment"
                            variant="outlined"
                        />

                    </div>

                    <Button buttonname='Issue Book'/>

                    <div className="icon-container" onClick={props.closeDialog}>

                        <FiX className='closeBtn' size={45}/>
                    </div>

                   
                </div>


            </div>





        </div>
    )
}
export default Issuepopup