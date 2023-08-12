
import Button from '../button/button'
import './membercard.css'
import { FiTrash2 } from "react-icons/fi";

export default function Membercard(props){
    return(
        <>
            <div className ='outerdiv'>
                <img src='/userprofile.png' className='userprofile'></img>
                <div className='verticle-flex'>
                    <p className='username'>{props.username}</p>
                    <p className='count'>{props.bookcount}</p>
                    <p className='count'>{props.depth}</p>
                </div>
                <div className='gap'></div>
                <Button buttonname='Issue Book'/>
                <Button buttonname='Return Book'/>
                <Button buttonname ='Update'/>
                <button className='deletebutton'><FiTrash2 size={25}/></button>

            </div>
        
        </>
    )
}