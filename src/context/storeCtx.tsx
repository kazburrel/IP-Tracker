import { createContext, useState } from "react";


interface StoreCtx {
    lat: number
    lon: number
    setLat: any
    setLon: any
}

export const storeCtx = createContext<StoreCtx | any>(null)


const StoreCtxProvider = ({children} : any) => {

    const [lat,setLat] = useState(0);
    const [lon,setLon] = useState(0);


    return <storeCtx.Provider value={{lat, lon, setLat, setLon}}>
            {children}
    </storeCtx.Provider>
}

export default StoreCtxProvider;