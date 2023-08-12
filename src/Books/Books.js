
import Bookcard from '../bookCard/bookcard'
import './Books.css'
import { FiSearch } from "react-icons/fi";
import Button from '../button/button';

export default function Books(){
    return(
        <>
            <div className='horizontal-flex'>
                <div className='searchbar'>
                    <FiSearch size={25}/>
                    <p className='search-text'> Search for Books and Authors</p>      
                </div>
            <Button buttonname='Search'/>
            </div>

            <div className='book-list'>
                <Bookcard
                bookname='Harry Potter'
                bookrent ='Rs 100'
                bookid = '150'
                author = 'J.K. Rowling'/>

                <Bookcard
                bookname='Harry Potter'
                bookrent ='Rs 100'
                bookid = '150'
                author = 'J.K. Rowling'/>

                <Bookcard
                bookname='Harry Potter'
                bookrent ='Rs 100'
                bookid = '150'
                author = 'J.K. Rowling'/>

                <Bookcard
                bookname='Harry Potter'
                bookrent ='Rs 100'
                bookid = '150'
                author = 'J.K. Rowling'/>
            </div>

            <div className="back-next">
                <Button buttonname='Back'/>
                <Button buttonname='Next'/>
            </div>
        </>
    )
}