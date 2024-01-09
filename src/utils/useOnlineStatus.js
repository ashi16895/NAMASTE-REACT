import { useEffect, useState } from "react"

export default useOnlineStatus = () => {
    const[onlineStatus, setOnlineStatus] = useState(true);
    //check online logic
    useEffect(()=>{
      window.addEventListener("offline", ()=>{
        setOnlineStatus(false);
      })

      window.addEventListener("online", ()=>{
        setOnlineStatus(true);
      })
    }, [])

    //boolean status
    return onlineStatus


}

