import React from 'react'
import './popupdialog.css'
import { FiX } from "react-icons/fi";
import { TextField, InputAdornment } from "@mui/material";
import Button from '../button/button';
import axios from 'axios';

const PopupDialog = (props) => {
    function setBookActive(){
        axios.post("http://127.0.0.1:5000/setBookActive", {'isbn':props.id})
        .then(
            (res)=>{
                // console.log(res)
            }
        )
    }

    function setBookInactive(){
        axios.post("http://127.0.0.1:5000/setBookInactive", {'isbn':props.id, 'title':props.name, 'publisher':props.publisher, 'authors': props.author} )
        .then(
            (res)=>{
                console.log(res)
            }
        )
    }


    return (
        <div className='box'>

            <div className="dialog-wrapper" onClick={props.closeDialog}></div>
            <div className="dialog-container">
                <div className="inner-container">

                    <p className='ptitle'>Do you want to make updates to <br/>this Book?</p>
                    <p className='description'>Select if the book is available or not</p>
                    <form onSubmit={(e)=>{e.preventDefault()}} className='btnflex'>
                        {/* <Button buttonname='Book in Stock'/> */}
                        <button className='button' onClick={setBookActive}> Book in Stock</button>
                        <button className='button' onClick={setBookInactive}>Book Out of Stock</button>
                        {/* <Button buttonname ='Book out of Stock'/> */}
                    </form>

                    <div className="icon-container" onClick={props.closeDialog}>

                        <FiX className='closeBtn' size={45}/>
                    </div>

                   
                </div>


            </div>





        </div>
    )
}

export default PopupDialog