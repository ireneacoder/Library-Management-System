
import Button from '../button/button'
import './membercard.css'
import Issuepopup from '../issuepopup/issuepopup';
import { FiTrash2 } from "react-icons/fi";
import { useState } from 'react';
import Updatepopup from '../updatepopup/updatepopup';
import Returnpopup from '../returnpopup/returnpopup';
import Deletepopup from '../deletepopup/deletpopup';
import axios from 'axios';

export default function Membercard(props){

    const [show, setshow] = useState(false);

        const closeDialog = () => {
            setshow(false);
        }

    const [back, setback] = useState(false);
        const closed = () => {
            setback(false);
        }

    const [update, setupdate] = useState(false);
        const close = () => {
            setupdate(false);
        }
    
    const [del, setdel] = useState(false);
        const closee = () => {
            setdel(false);
        }
    function clearDebt(){
        const date = new Date();

        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        let currentDate = `${day}-${month}-${year}`

        axios.post('http://127.0.0.1:5000/clearDebt', {'memberID': props.id, 'dot': currentDate} )
        window.location.reload()
        alert('Debt Cleared')
    }
    
    

    return( 
        <>

            {show && <Issuepopup id = {props.id} imgurl={props.imgurl} closeDialog={closeDialog} />}
            {back && <Returnpopup id = {props.id} imgurl={props.imgurl} closed={closed} />}
            {update && <Updatepopup id = {props.id} imgurl={props.imgurl} close={close} />}
            {del && <Deletepopup id = {props.id } imgurl={props.imgurl} closee={closee} />}
            

            <div className ='outerdiv'>
                <img src='/userprofile.png' className='userprofile'></img>
                <div className='verticle-flex'>
                    <p className='username'>{props.username}</p>
                    <p className='count'>{props.bookcount}</p>
                    <p className='count'>₹{props.depth}</p>
                </div>
                <div className='gap'></div>
                <Button buttonname='Issue Book' onClick={setshow}/>
                <Button buttonname='Return Book' onClick={setback}/>
                <Button buttonname='Clear Debt'onClick={clearDebt}/>
                <Button buttonname ='Update' onClick={setupdate}/>
                <button className='deletebutton' onClick={setdel}><FiTrash2 size={25}/></button>

            </div>
        
        </>
    )
}