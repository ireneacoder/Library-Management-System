
import './Members.css'
import { FiSearch } from "react-icons/fi";
import Button from '../button/button';
import Membercard from '../membercard/membercard';
import { AiOutlinePlus } from "react-icons/ai";

export default function Members(){
    return(
        <>

            <div className='horizontal-flex'>
                <div className='searchbar'>
                    <FiSearch size={25}/>
                    <p className='search-text'> Search for Members</p>      
                </div>
            <Button buttonname='Search'/>
            </div>

            <button className='addmember'><AiOutlinePlus size={30}/> Add Member</button>

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