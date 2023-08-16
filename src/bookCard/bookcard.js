
import Button from '../button/button'
import './bookcard.css'
import { useState } from 'react';
import PopupDialog from '../popupdialog/popupdialog';

export default function Bookcard(props){

    const [showDialog, setShowDialog] = useState(false);

    const closeDialog = () => {
        setShowDialog(false);
    }

    return(
        <>
            {showDialog && <PopupDialog name ={props.bookname} id ={props.bookid} publisher={props.publisher} author={props.author} imgurl={props.imgurl} closeDialog={closeDialog} />}

            
            <div className='out'>
                <img src='/bookcover.png' className='image'></img>
                <div className='name-rent'>
                    <p className='book-name'>{props.bookname}</p>
                    <p className='book-rent'>{props.bookrent}</p>
                </div>
                <div>
                    <p className='book-detail'>{props.bookid}</p>
                    <p className='book-details'>{props.author}</p>
                </div>
                <div className='button-align' >
                    <Button buttonname='Make Updates' onClick={setShowDialog}/>
                </div>
                
            </div>
        
        </>
    )
}
