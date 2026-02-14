'use client'

import { usePathname } from "next/navigation";
import Navbar from "../home/navbar";
import React from "react"; 

export default function LayoutClientWrapped({
    children,
}:{
    children: React.ReactNode;
}){

    return(
        <>
        {<Navbar/>}
        {children}
        </>
    )
}