import Link from "next/link"


const about = () => {
  return (
    <>
      <h2>About Us</h2>
      <Link href='/home'>Home</Link>
      <br></br>
      <Link href='/contact'>Contact</Link>
    </>
  )
}

export default about
