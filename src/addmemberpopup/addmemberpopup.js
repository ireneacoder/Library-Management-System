import { useState } from "react";
import { FiX } from "react-icons/fi";
import { TextField, InputAdornment } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Addmemberpopup = (props) => {
  const [open, setOpen] = useState(false);
  const config = {
    headers: { "content-type": "multipart/form-data" },
  };
  const { register, handleSubmit } = useForm();
  function addmember(data) {
    let formData = new FormData();
    formData.append("name", "lily");
    formData.append("address", "xyz");
    formData.append("dob", "0002-02-02");
    axios.post("http://127.0.0.1:5000/addMember", { body: { data } });
  }
  return (
    <div className="box">
      <div className="dialog-wrapper" onClick={props.closeDialog}></div>
      <div className="dialog-container">
        <form onSubmit={handleSubmit(addmember)} className="inner-container">
          <p className="poptitle"> Add New Member </p>

          <div className="textboxes">
            <TextField
              {...register("name")}
              size="medium"
              sx={{ width: "36vw" }}
              label="Name"
              id="outlined-start-adornment"
              variant="outlined"
            />

            <TextField
              {...register("address")}
              size="medium"
              sx={{ width: "36vw" }}
              label="Address"
              id="outlined-start-adornment"
              variant="outlined"
            />

            <TextField
              {...register("dob")}
              size="medium"
              sx={{ width: "36vw" }}
              label="DOB"
              id="outlined-start-adornment"
              variant="outlined"
            />
          </div>
          <button className="button">Add Member</button>

          <div className="icon-container" onClick={props.closeDialog}>
            <FiX className="closeBtn" size={45} />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Addmemberpopup;
