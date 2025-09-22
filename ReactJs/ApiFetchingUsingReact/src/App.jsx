import { useState } from 'react';
import './App.css'

function App() {
  const [fetchedData, setFetchedData] = useState([]);
  

  async function fetchApiData(url){
    const response = await fetch(url);
    if(response.ok){
      const data = await response.json();
      console.log(data.products);
      setFetchedData(data.products);
    }else{
      console.log("not able to fetch data");
    }
  }

  return (
    <>
      <button onClick={() => {
        fetchApiData('https://dummyjson.com/products')
      }}>Fetch Products</button>
      <button onClick={() => {
        fetchApiData('https://dummyjson.com/posts')
      }}>Fetch Posts</button>

      <div>
        {fetchedData && fetchedData.map(product => <p key={product.id}>{product.title} </p>)}
      </div>
    </>
  )
}

export default App
