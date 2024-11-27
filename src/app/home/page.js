import Link from "next/link"


const home = () => {
  return (
    <>
      <h2>Home</h2>
      <Link href='/about'>AboutUS</Link>
      <br></br>
      <Link href='/contact'>Contact</Link>
    </>
  )
}

export default home
