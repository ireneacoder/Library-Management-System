
import Bookcard from '../bookCard/bookcard'
import './Books.css'
import { FiSearch } from "react-icons/fi";
import Button from '../button/button';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import { useState,useEffect } from 'react';
export default function Books(){
    const {handleSubmit,register}=useForm()
    const [myBook, setmyBook] = useState(false)
    const [page, setpage] = useState(1)
    const [text,setText] = useState('')
    useEffect(() => {
        axios.post("http://127.0.0.1:5000/getBooks",{text,'page':page})
        .then((res)=>{
            setmyBook(res.data)
        })     
    }, [])
    
    function loadBook(data) {
        setText(data.title)
        axios.post("http://127.0.0.1:5000/getBooks",{...data,'page':page})
        .then((res)=>{
            setmyBook(res.data)
        })
    }
    function back() {
        if(page>1){
            setpage(page-1)
        }
        axios.post("http://127.0.0.1:5000/getBooks",{text,'page':page})
        .then((res)=>{
            setmyBook(res.data)
        })
        
    }
    function next() {
        setpage(page+1)
        axios.post("http://127.0.0.1:5000/getBooks",{text,'page':page})
        .then((res)=>{
            setmyBook(res.data)
        })
    }
    return(
        <>
            <form onSubmit={handleSubmit(loadBook)} className='horizontal-flex'>
                <div className='searchbar'>
                    <FiSearch size={25}/>
                    <input {...register('title')} placeholder='Search' type='text' className="search-text"/>       
                </div>
            <button className='button'>
                Search
            </button>
            </form>

            <div className='book-list'>
                {
                    myBook &&
                    myBook.map((item)=>{
                        return(
                        <Bookcard
                        bookname={item['title'].slice(0,15)+'...'}
                        bookrent ={item['isAvailable']?'₹100':'out of stock'}
                        bookid = {item['isbn']}
                        author = {item['authors']}/>

                        )
                    })
                }                
                {/* <Bookcard
                bookname='Harry Potter'
                bookrent ='Rs 100'
                bookid = '150'
                author = 'J.K. Rowling'/> */}

                {/* <Bookcard
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
                author = 'J.K. Rowling'/> */}
            </div>

            <div className="back-next">
                <button onClick = {back} className='button1'>
                    Back
                </button>
                <button onClick = {next} className='button1'>
                    Next
                </button>
            </div>
        </>
    )
}