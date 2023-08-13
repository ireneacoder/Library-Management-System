
import Button from '../button/button'
import './membercard.css'
import Issuepopup from '../issuepopup/issuepopup';
import { FiTrash2 } from "react-icons/fi";
import { useState } from 'react';
import Updatepopup from '../updatepopup/updatepopup';
import Returnpopup from '../returnpopup/returnpopup';
import Deletepopup from '../deletepopup/deletpopup';

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

    
    
    
    

    return( 
        <>

            {show && <Issuepopup imgurl={props.imgurl} closeDialog={closeDialog} />}
            {back && <Returnpopup imgurl={props.imgurl} closed={closed} />}
            {update && <Updatepopup imgurl={props.imgurl} close={close} />}
            {del && <Deletepopup imgurl={props.imgurl} closee={closee} />}
            

            <div className ='outerdiv'>
                <img src='/userprofile.png' className='userprofile'></img>
                <div className='verticle-flex'>
                    <p className='username'>{props.username}</p>
                    <p className='count'>{props.bookcount}</p>
                    <p className='count'>{props.depth}</p>
                </div>
                <div className='gap'></div>
                <Button buttonname='Issue Book' onClick={setshow}/>
                <Button buttonname='Return Book' onClick={setback}/>
                <Button buttonname ='Update' onClick={setupdate}/>
                <button className='deletebutton' onClick={setdel}><FiTrash2 size={25}/></button>

            </div>
        
        </>
    )
}