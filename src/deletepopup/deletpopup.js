
import React from 'react'
import './deletepopup.css'
import { FiX } from "react-icons/fi";
import { TextField, InputAdornment } from "@mui/material";
import Button from '../button/button';
import {useState,useEffect} from "react"
import axios from 'axios'

function Deletepopup (props){
    function deletemember(){
        axios.post("http://127.0.0.1:5000/deleteMember",{'id':props.id})
        props.closee()
        window.location.reload()
    }


    return (
        <div className='box'>

            <div className="dialog-wrapper" onClick={props.closee}></div>
            <div className="dialog-container">
                <div className="inner-container">

                    <p className='ptitle'>Are you sure you want to delete this member permanently?</p>
                    <p className='description'>Deleting the member may lead to permanent removal of the user data.</p>
                    <div className='btnflex'>
                        
                        <button onClick = {deletemember} className='del'>Delete Member </button>
                        <buton onClick={props.closee} className='cancel'>Cancel</buton>
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