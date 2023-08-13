import "./Members.css";
import { FiSearch } from "react-icons/fi";
import Button from "../button/button";
import Membercard from "../membercard/membercard";
import { AiOutlinePlus } from "react-icons/ai";
import { useState, useEffect } from "react";
import Addmemberpopup from "../addmemberpopup/addmemberpopup";
import React from "react";
import axios from "axios";

export default function Members(props) {
  const [add, setadd] = useState(false);

  const closeDialog = () => {
    setadd(false);
  };
  const [myData, setMyData] = useState(false);
  const getApiData = async () => {
    const res = await axios.get("http://127.0.0.1:5000/getMembers");
    console.log(res.data);
    setMyData(res.data);
  };
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      {add && (
        <Addmemberpopup imgurl={props.imgurl} closeDialog={closeDialog} />
      )}

      <div className="horizontal-flex">
        <div className="searchbar">
          <FiSearch size={25} />
          <p className="search-text"> Search for Members</p>
        </div>
        <Button buttonname="Search" />
      </div>

      <button className="addmember" onClick={setadd}>
        <AiOutlinePlus size={30} /> Add Member
      </button>

      <div className="userdetails">
        {myData &&
          myData.map((item) => {
            return (
              <Membercard
                key={item._id}
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
