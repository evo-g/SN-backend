import { useState, useEffect } from 'react'
import './App.css'


const getSNData = async () => {
  const response = await fetch('https://dev99637.service-now.com//api/495743/test_knowledge/test')
  const data = await response.json();
  console.log(data)
  return data.result;
}

function App() {
  const [things, setThings] = useState([]);


  useEffect(()=> {
    getSNData().then(item => setThings(item));
  }, []);

  if (!things) {
    return <div>Loading...</div>;
  }

  console.log({things});
  return things.map(item => 
    <div key={item.id}>
      <h1>{item.number}</h1>
      <h2>{item.short_description}</h2>
    </div>
    )
}

export default App
