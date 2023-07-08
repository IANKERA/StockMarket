import{useState, useEffect} from "react"
import finnHub from "../apis/finnHub"

export const StockList = () => {
  const[stock , setStock] = useState()
 const [watchList, setWatch] = useState(["GOOGL", "MSFT", "AMZN"])

  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      const responses = []
      try {
      
       const responses = await Promise.all(watchList.map((s)           => {
         return finnHub.get("/quote", {
           params: {
             symbol: stock
           }
         })
       }))
      
       
                        
        console.log(responses)
        if (isMounted) {
          setStock(responses)
        }
      
      }catch (err) {
        
      }
    }
    fetchData()

    return () => (isMounted = false)
    
  },[])
  return <div>StockList</div>
}
