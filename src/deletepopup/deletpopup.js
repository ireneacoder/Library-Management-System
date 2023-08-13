
import React from 'react'
import './deletepopup.css'
import { FiX } from "react-icons/fi";
import { TextField, InputAdornment } from "@mui/material";
import Button from '../button/button';

const Deletepopup = (props) => {


    return (
        <div className='box'>

            <div className="dialog-wrapper" onClick={props.closee}></div>
            <div className="dialog-container">
                <div className="inner-container">

                    <p className='ptitle'>Are you sure you want to delete this member permanently?</p>
                    <p className='description'>Deleting the member may lead to permanent removal of the user data.</p>
                    <div className='btnflex'>
                        
                        <button className='del'>Delete Member </button>
                        <buton className='cancel'>Cancel</buton>
                    </div>

                    <div className="icon-container" onClick={props.closee}>

                        <FiX className='closeBtn' size={45}/>
                    </div>

                   
                </div>


            </div>





        </div>
    )
}

export default Deletepopup