

import { useState } from 'react'
import { FiX } from "react-icons/fi";
import { TextField, InputAdornment } from "@mui/material";
import Button from '../button/button';
import React from 'react';
import {useForm} from 'react-hook-form'
import axios from 'axios';


const Updatepopup = (props) => {
    const {register,handleSubmit} = useForm()
    function update(data){
        
        axios.post("http://127.0.0.1:5000/updateMember",{...data,'id':props.id})
        props.close()
        window.location.reload()
    }
    return(
        <div className='box'>

            <div className="dialog-wrapper" onClick={props.close}></div>
            <div className="dialog-container">
                <form onSubmit = {handleSubmit(update)} className="inner-container">
                    <p className='poptitle'> Update Details </p>

                    <div className='textboxes'>

                        <TextField
                        {...register("name")}
                            size="medium"
                            sx={{width: '36vw'}}
                            label="Name"
                            id="outlined-start-adornment"
                            variant="outlined"
                        />

                        <TextField
                        {...register("address")}
                            size="medium"
                            sx={{width: '36vw'}}
                            label="Address"
                            id="outlined-start-adornment"
                            variant="outlined"
                        />

                        <TextField
                        {...register("dob")}
                            size="medium"
                            sx={{width: '36vw'}}
                            label="DOB"
                            id="outlined-start-adornment"
                            variant="outlined"
                        />
                    </div>

                    <button className='button'>
                        Update
                    </button>

                    <div className="icon-container" onClick={props.close}>

                        <FiX className='closeBtn' size={45}/>
                    </div>

                   
                </form>


            </div>





        </div>
    )
}
export default Updatepopup