'use client'

import { usePathname } from "next/navigation"

export default function Layout({children}){
    const currentPath = usePathname();
    console.log(currentPath)
    return(
        <>
            {
                currentPath !== 'contact/company' ?
                <h2>Common Layout in Contact</h2> :
                null
                
            }
        {children}
        </>
    )
}