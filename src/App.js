
import './App.css';
import { db } from './firebase-config';
import { getDocs, doc, collection, addDoc, } from 'firebase/firestore';
import { useEffect, useState } from 'react';


function App() {
  let [newUser,setUser]=useState("");
  let [img,setImg]=useState(null);

  let dataRef = collection(db, "users");
  // console.log(dataRef)

  

  // useEffect(() => {
  //   async function handleInfo() {
  //     let d = await getDocs(dataRef);
  //     // console.log(d)
  //     d.forEach((dc) => {
  //       console.log(dc.id, "=>", dc.data());
  //     })

  //   }
  //   console.log("QQQQQQ")
  //   handleInfo()
  // }, []);

  console.log(img)
   console.log(newUser);
   
  async function addData(){
    try{
      let user=await addDoc(dataRef,{
        namw:newUser
      })
      console.log(user);
      console.log("data added sucessfully");
    }catch(e){
      console.log(e);
      console.log("not added data")
    }
  }


  return (
    <div className="App">
      <div className='input'>
        <label>Wrtie something &nbsp;&nbsp;</label>
        <input placeholder='write here' type='text' onChange={(e) => { setUser(e.target.value)}}></input>
        <br></br>
        <button onClick={addData}>add data</button>
      </div>
    </div>
  );
}

export default App;
