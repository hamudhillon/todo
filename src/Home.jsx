import { useState,useRef,useEffect  } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Link } from 'react-router-dom';

function Home() {
  const [listinp,setInp]=useState("")
  const [skip,setSkip]=useState(0)
  const [data,setData]=useState([])
  const [search,setSearch]=useState("")
  const limit=10

  // const res=await fetch('https://dummyjson.com/products')
  // const d=await res.json();
  // setData(d)
  useEffect(
   ()=>{
    fetch(`https://dummyjson.com/products?skip=${skip}&limit=${limit}&`)
    .then(res=>res.json())
    .then(data=>setData(data))
   },[skip]
  )


  

  console.log(skip)

  const inoutRef=useRef(null)
  function handleChange(event){
    setInp(event.target.value)
  }
  function handleSearch(e){
    setSearch(e.target.value)
    fetch(`https://dummyjson.com/products/search?q=${search}`)
    .then(res=>res.json())
    .then(data=>setData(data))
  }

  function handleInp(){
    console.log(inoutRef.current.value)
  }

  return (
    <>
     <input type="text" 
      placeholder='Search ...'
      name='search'
      value={search}
      onChange={handleSearch}
    />
    <div>
      <button className='btn btn-danger' onClick={()=>{setSkip(prevSkip => prevSkip - limit)}} disabled={skip===0}>Prev</button>
      <button onClick={()=>{setSkip(prevSkip => prevSkip + limit)}} >Next</button>
      {
      data.products &&
      data.products.map((pros)=>{
          
          return <div key={pros.id}> 
            <img src={pros.images[0]} width={200}/>
            <Link to={`/product/${pros.id}/${pros.title}`}>
            <h1>{pros.title}</h1>
            </Link>
            <p>{pros.price}</p>
            <p>{pros.description}</p>
          </div>
      })}
    </div>
   
    
    </>
  )
}

export default Home
