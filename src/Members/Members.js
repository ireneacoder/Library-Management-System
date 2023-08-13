import "./Members.css";
import { FiSearch } from "react-icons/fi";
import Button from "../button/button";
import Membercard from "../membercard/membercard";
import { AiOutlinePlus } from "react-icons/ai";
import { useState, useEffect } from "react";
import Addmemberpopup from "../addmemberpopup/addmemberpopup";
import React from "react";
import axios from "axios";
import {useForm} from 'react-hook-form';

export default function Members(props) {
  const {handleSubmit,register}=useForm()
  const [add, setadd] = useState(false);
  const [myData, setMyData] = useState(false);
  async function loadMember(data) {
    const res = await axios.post("http://127.0.0.1:5000/getMembers",data);
    console.log(data);
    setMyData(res.data);
  }
  const closeDialog = () => {
    setadd(false);
  };
  useEffect(() => {
    axios.post("http://127.0.0.1:5000/getMembers",{'name':''})
    .then((response)=>{
      setMyData(response.data)
    })
  }, []);

  return (
    <>
      {add && (
        <Addmemberpopup imgurl={props.imgurl} closeDialog={closeDialog} />
      )}

      <form onSubmit = {handleSubmit(loadMember)}className="horizontal-flex">
        <div className="searchbar">
          <FiSearch size={25} />
          <input {...register('name')} placeholder='Search' type='text' className="search-text"/> 
        </div>
        <button className='button'>
                Search
            </button>
      </form>

      <button className="addmember" onClick={setadd}>
        <AiOutlinePlus size={30} /> Add Member
      </button>

      <div className="userdetails">
        {myData &&
          myData.map((item) => {
            return (
              <Membercard
                id={item['memberID']}
                key={item['memberID']}
                username={item["name"]}
                depth={item["debt"]}
              />
            );
          })}
        {/* <Membercard
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
                depth='400'/> */}
      </div>
    </>
  );
}
