import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Amplify ,{ API } from 'aws-amplify';
import AWS from 'aws-sdk';
import { Storage } from 'aws-amplify';


const Signup = () => {
  const history = useHistory();
  const fileInputRef = useRef(null);
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [phoneno,setphoneno]=useState('');
  const [accountno,setaccountno]=useState('');
  const [password,setpassword]=useState('');
  const [selectedfile,setSelectedFile]=useState(null)


  const handleUpload = async(event) => {
    const file=event.target.files[0];
  setSelectedFile(file.name)

    try {
      await Storage.put(file.name, file);
      console.log('File uploaded successfully');
      // Perform any additional actions after successful upload
    } catch (error) {
      console.error('Error uploading file:', error);
      // Handle the upload error
    }

  };

  const handleRegister = async() => {
    console.log(name)
    console.log(email)
    console.log(phoneno)
    console.log(accountno)
    console.log(password)
    
    function generateRandomId(length) {
      const characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let id = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        id += characters[randomIndex];
      }
      return id;
    }
    
    
    const Id = generateRandomId(8);
    const min = 1000;
    const max = 100000;
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;

    const newUser={
      id:Id,
      name,
      email,
      phoneno,
      accountno,
      password,
      filename:selectedfile,
      balance:randomValue
    }

    const data={
      operation:'create',
      payload:newUser,
      tablename:'user-dev'
    }
    try{
      const response=await API.post("palmpay2",'/users',{
        body:{
          data
        }
      });
      console.log("user saved succesfully")
    }
    catch(e){
      console.log("error saving user")
    }


    history.push("/login");
  };

  return (
   <section className="signup">
    <div className="container mt-5">
      <div className="signup-content">
        <div className="signup-form">
          <h2 className="form-title">Sign Up</h2>
          <form className="register-form" id="register-form">

            <div className="form-group">
              <label htmlFor="name">
                <i class="zmdi zmdi-account material-icons-name"></i>
              </label>
              <input type="text" name="name" id="name" autoComplete="off" placeholder="Name" onChange={event=>setname(event.target.value)}/>
            </div>

            <div className="form-group">
              <label htmlFor="Email">
                <i class="zmdi zmdi-email material-icons-name"></i>
              </label>
              <input type="Email" name="Email" id="Email" autoComplete="off" placeholder="Email" onChange={event=>setemail(event.target.value)}/>
            </div>

            <div className="form-group">
              <label htmlFor="Phone">
                <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
              </label>
              <input type="Number" name="Number" id="Number" autoComplete="off" placeholder=" Phone Number" onChange={event=>setphoneno(event.target.value)}/>
            </div>

            <div className="form-group">
              <label htmlFor="Bank Account Number">
                <i class="zmdi zmdi-balance material-icons-name"></i>
              </label>
              <input type="text" name="text" id="text" autoComplete="off" placeholder="Account No." onChange={event=>setaccountno(event.target.value)}/>
            </div>

            <div className="form-group">
              <label htmlFor="Password">
                <i class="zmdi zmdi-lock material-icons-name"></i>
              </label>
              <input type="Password" name="Password" id="Password" autoComplete="off" placeholder="Password" onChange={event=>setpassword(event.target.value)}/>
            </div>

            <div className="form-group form-button">
              <h4>Upload your Palm Image</h4>
              <input type="file" name="file" id="file" ref={fileInputRef} style={{ display: "none" }} />
              <input type="file" name="signup" id="signup" className="form-submit"   onChange={handleUpload} />
            </div>
            <div className="form-group form-button">
              <input type="submit" name="signup" id="signup" className="form-submit1" value="Register" onClick={handleRegister} />
            </div>

          </form>
          </div>

          <div className="signup-img">

            <img
                src="./images/signupimg.jpg"
                alt="signupimg"
                className="img-fluid"
              />
          
            <div/>
      </div>
    </div>
    </div>

   </section>
    
  );
};

export default Signup;