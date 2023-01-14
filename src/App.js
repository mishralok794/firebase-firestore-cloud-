
import './App.css';
import { db } from './firebase-config';
import { getDocs, doc, collection, data, id } from 'firebase/firestore';
import { useEffect } from 'react';
// import { async } from '@firebase/util';

function App() {

  let dataRef = collection(db, "users");
  // console.log(dataRef)

  function handleUser(data) {
    console.log("hey user");
    console.log(data)
  }

  useEffect(() => {
    async function handleInfo() {
      let d = await getDocs(dataRef);
      // console.log(d)
      d.forEach((dc) => {
        console.log(dc.id, "=>", dc.data());
      })

    }
    console.log("QQQQQQ")
    handleInfo()
  }, []);


  return (
    <div className="App">
      <div className='input'>

        <label>Wrtie something &nbsp;&nbsp;</label>
        <input placeholder='write here' type='text' onChange={(e) => { handleUser(e.target.value) }}></input>
        <button >add data</button>
      </div>
    </div>
  );
}

export default App;
