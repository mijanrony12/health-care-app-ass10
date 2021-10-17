import { useEffect } from "react"
import { useState } from "react"


const useDoctors = () => {
    const [ doctors, setDoctor ] = useState([])
    
   // get date
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
        .then(data=> setDoctor(data))
    }, [])
    return [doctors, setDoctor]
}

export default useDoctors;