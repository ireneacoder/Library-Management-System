
import Button from '../button/button'
import './bookcard.css'

export default function Bookcard(props){
    return(
        <>
            
            <div className='out'>
                <img src='/bookcover.png' className='image'></img>
                <div className='name-rent'>
                    <p className='book-name'>{props.bookname}</p>
                    <p className='book-rent'>{props.bookrent}</p>
                </div>
                <p className='book-detail'>{props.bookid}</p>
                <p className='book-details'>{props.author}</p>
                <div className='button-align'>
                    <Button buttonname='Make Updates'/>
                </div>
                
            </div>
        
        </>
    )
}
