'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"

const contact = () => {
    const router = useRouter();
    const handleNavigation = (routerName)=>{
        router.push(routerName)
    }
  return (
    <>
      <h2>Contact Us</h2>
      <Link href='/contact/company'>Company</Link>
      <br />
      <Link href='/contact/employee'>Employee</Link>
    {/* <Link href='/about'>about</Link>
    <br></br>
    <Link href='/home'>home</Link> */}
    {/* <button onClick={()=>router.push('/about')}>About</button>
    <br />
    <button onClick={()=>router.push('/home')}>home</button> */}
    {/* <button onClick={()=>handleNavigation('/home')}>Home</button>
    <br />
    <button onClick={()=>handleNavigation('/about')}>About</button> */}
    <button onClick={()=>handleNavigation('/contact/company')}>Company</button>
    <br />
    <button onClick={()=>handleNavigation('/contact/employee')}>Employee</button>
    

    </>
  )
}

export default contact
