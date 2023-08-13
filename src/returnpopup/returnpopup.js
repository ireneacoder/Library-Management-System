
import { useState } from 'react'
import { FiX } from "react-icons/fi";
import { TextField, InputAdornment } from "@mui/material";
import Button from '../button/button';
import React from 'react';


const Returnpopup = (props) => {
    return(

        <div className='box'>

            <div className="dialog-wrapper" onClick={props.closed}></div>
            <div className="dialog-container">
                <div className="inner-container">
                    <p className='poptitle'> Return Book </p>

                    <div className='textboxes'>

                        <TextField
                            size="medium"
                            sx={{width: '36vw'}}
                            label="Book Name"
                            id="outlined-start-adornment"
                            variant="outlined"
                        />

                        <TextField
                            size="medium"
                            sx={{width: '36vw'}}
                            label="Scheduled Date of Issue"
                            id="outlined-start-adornment"
                            variant="outlined"
                        />

                        <TextField
                            size="medium"
                            sx={{width: '36vw'}}
                            label="Book Charges"
                            id="outlined-start-adornment"
                            variant="outlined"
                        />

                            <TextField
                            size="medium"
                            sx={{width: '36vw'}}
                            label="Date of Return"
                            id="outlined-start-adornment"
                            variant="outlined"
                        />
                    </div>

                    <Button buttonname='Return Book'/>

                    <div className="icon-container" onClick={props.closed}>

                        <FiX className='closeBtn' size={45}/>
                    </div>

                   
                </div>


            </div>





        </div>
    )
}
export default Returnpopup