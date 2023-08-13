
import { useState } from 'react'
import { FiX } from "react-icons/fi";
import { TextField, InputAdornment } from "@mui/material";
import Button from '../button/button';
import React from 'react';
import {useForm} from 'react-hook-form'
import axios from 'axios';


const Returnpopup = (props) => {
    const {register,handleSubmit} = useForm()
    function returnBook(data){
        
        axios.post("http://127.0.0.1:5000/returnBook",{...data,'memberID':props.id})
        props.closed()
        window.location.reload()
    }
    return(

        <div className='box'>

            <div className="dialog-wrapper" onClick={props.closed}></div>
            <div className="dialog-container">
                <form onSubmit = {handleSubmit(returnBook)}className="inner-container">
                    <p className='poptitle'> Return Book </p>

                    <div className='textboxes'>

                        <TextField
                        {...register('isbn')}
                            size="medium"
                            sx={{width: '36vw'}}
                            label="Book Name"
                            id="outlined-start-adornment"
                            variant="outlined"
                        />
                        <TextField
                        {...register('dor')}
                            size="medium"
                            sx={{width: '36vw'}}
                            label="Date of Return"
                            id="outlined-start-adornment"
                            variant="outlined"
                        />
                    </div>

                    <button className='button'>
                        Return Book
                    </button>

                    <div className="icon-container" onClick={props.closed}>

                        <FiX className='closeBtn' size={45}/>
                    </div>

                   
                </form>


            </div>





        </div>
    )
}
export default Returnpopup