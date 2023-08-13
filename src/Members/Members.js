
import './Members.css'
import { FiSearch } from "react-icons/fi";
import Button from '../button/button';
import Membercard from '../membercard/membercard';
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from 'react';
import Addmemberpopup from '../addmemberpopup/addmemberpopup';
import React from 'react';

export default function Members(props){
    const [add, setadd] = useState(false);

        const closeDialog = () => {
            setadd(false);
        }
    return(
        <>
            {add && <Addmemberpopup imgurl={props.imgurl} closeDialog={closeDialog} />}

            <div className='horizontal-flex'>
                <div className='searchbar'>
                    <FiSearch size={25}/>
                    <p className='search-text'> Search for Members</p>      
                </div>
            <Button buttonname='Search'/>
            </div>

            <button className='addmember' onClick={setadd}><AiOutlinePlus size={30}/> Add Member</button>

           <div className='userdetails'>

                <Membercard
                username='Prerna Verma'
                bookcount='02'
                depth='400'/>

                <Membercard
                username='Prerna Verma'
                bookcount='02'
                depth='400'/>

                <Membercard
                username='Prerna Verma'
                bookcount='02'
                depth='400'/>

                <Membercard
                username='Prerna Verma'
                bookcount='02'
                depth='400'/>

            <Membercard
                username='Prerna Verma'
                bookcount='02'
                depth='400'/>

                <Membercard
                username='Prerna Verma'
                bookcount='02'
                depth='400'/>

           </div>

        </>

    )
}