import {useEffect, useState} from "react"
import finnHub from "../apis/finnHub"


export const  AutoComplete = () => {
  const [search, setSearch] = useState("")
  const [results, setResults] = useState([])

  const renderDropDown = () => {
    const dropDownClass = search ? "show" : null
    return (
      <ul style={{
        height:"500px",
        overflowY:"scroll",
        overflowX:"hidden",
        cursor: "pointer"
      }} className={`dropdown-menu ${dropDownClass}`}>
        {results.map((result) => {
          return (
            <li key={result.symbol} className = "dropdown-item">{result.description}
              ({result.symbol})</li>
            )
          
        })}
      </ul>
    )
  }
  
  
  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      try{
        const response = await finnHub.get("/search", {
          params: {
            q: search
          }
        })
        console.log(response)
        if(isMounted){
         setResults(response.data.result) 
        }
        
      }catch(err) {
        
      }
    }
    if(search.length > 0){
    fetchData()
    }else {
      setResults([])
    }
  }, [search])
  
  return <div className="w-50 p-5 rounded mx-auto"> 
    <div className="form-floating dropdown">
    
        <input style={{backgroundColor: "rgba(145,158,                        171, 0.04"}} 
          id="search" type="text" 
          className="form-control"
          placeholder="Search" 
          autoComplete="off"
          value={search} onChange={(e) =>
            setSearch(e.target.value)}>
        </input> 
      
       <label htmlFor="search">Search</label>
      {renderDropDown()}
      </div>
    </div>
}