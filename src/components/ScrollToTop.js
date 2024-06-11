import { useSearchParams, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function ScrollToTop(){
    const [searchParams] = useSearchParams();
    const {pathname} = useLocation();
   useEffect(()=>{
    window.scrollTo(0,0);
}, [searchParams, pathname]);
}