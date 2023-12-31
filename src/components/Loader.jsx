import React, { useEffect } from 'react';
import PuffLoader from "react-spinners/PuffLoader";
import './Loader.css'
export const Loader = ({loading, setLoading}) => {

  useEffect(() => {
    setLoading(true)
  setTimeout(() => {
    setLoading(false)
  },1000);
  }, [loading, setLoading])
  return (
    <div className='loaderContainer'>

  
    <div>
         <PuffLoader
        color={"#00043c"}
        loading={loading}
       
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
    </div>
  )
}
