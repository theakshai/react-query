import React,{useState}  from "react";
import Card from "../components/CardComponent/Card";
import '../../src/App.css'
import axios from 'axios'
import { useQuery } from "react-query";

let CardLayout = () => {

  const[page, setPage] = useState(1);

  const fetchData = async ({queryKey})=>{

      const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${queryKey[1]}`);
      return  response.data.results;
  }
  const{ data, error, isLoading } = useQuery(['characters', page],fetchData, {keepPreviousData:true})


  if(error) return <h1>Error!!!</h1>
  if(isLoading) return <h1>Loading!!!</h1>


  return (
    <div className="layout">
      
      {
        data.map((character) => (
          <Card character={character}/>
        ))
      }

      <div className="btns">
          
          <button onClick={() => setPage((currentPage) => currentPage - 1)} disabled={page === 1 }>Prev Page</button>
          <button onClick={() => setPage((currentPage) => currentPage + 1)} disabled={page === 42}>Next Page</button>

      </div>
    </div>
  )
}

export default CardLayout;
