

import { useState } from 'react'
import { FiX } from "react-icons/fi";
import { TextField, InputAdornment } from "@mui/material";
import Button from '../button/button';
import React from 'react';


const Updatepopup = (props) => {
    return(

        <div className='box'>

            <div className="dialog-wrapper" onClick={props.close}></div>
            <div className="dialog-container">
                <div className="inner-container">
                    <p className='poptitle'> Update Details </p>

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

                            <TextField
                            size="medium"
                            sx={{width: '36vw'}}
                            label="Number of Books Issued"
                            id="outlined-start-adornment"
                            variant="outlined"
                        />

                            <TextField
                            size="medium"
                            sx={{width: '36vw'}}
                            label="Depth"
                            id="outlined-start-adornment"
                            variant="outlined"
                        />
                    </div>

                    <Button buttonname='Update Details'/>

                    <div className="icon-container" onClick={props.close}>

                        <FiX className='closeBtn' size={45}/>
                    </div>

                   
                </div>


            </div>





        </div>
    )
}
export default Updatepopup