

import './issuepopup.css'
import { useState } from 'react'
import { FiX } from "react-icons/fi";
import { TextField, InputAdornment } from "@mui/material";
import Button from '../button/button';
import React from 'react';
import {useForm} from 'react-hook-form'
import axios from 'axios';


const Issuepopup = (props) => {
    const {register,handleSubmit} = useForm()
    function issue(data){
        
        axios.post("http://127.0.0.1:5000/issueBook",{...data,'memberID':props.id})
        props.closeDialog()
        window.location.reload()
    }
    return(

        <div className='box'>

            <div className="dialog-wrapper" onClick={props.closeDialog}></div>
            <div className="dialog-container">
                <form onSubmit = {handleSubmit(issue)} className="inner-container">
                    <p className='poptitle'>Issue Book </p>

                    <div className='textboxes'>

                        <TextField
                        {...register('isbn')}
                            size="medium"
                            sx={{width: '36vw'}}
                            label=" Book ID"
                            id="outlined-start-adornment"
                            variant="outlined"
                        />

                        <TextField
                        {...register('doi')}
                            size="medium"
                            sx={{width: '36vw'}}
                            label="Date of Issue"
                            id="outlined-start-adornment"
                            variant="outlined"
                        />

                    </div>

                    <button className='button'>
                        Issue
                    </button>

                    <div className="icon-container" onClick={props.closeDialog}>

                        <FiX className='closeBtn' size={45}/>
                    </div>

                   
                </form>


            </div>





        </div>
    )
}
export default Issuepopup