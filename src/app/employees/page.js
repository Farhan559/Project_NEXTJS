import Link from "next/link"

const Employees = () => {
  return (
    <>
        <h1>Employees</h1>
        <ul>
            <li><Link href='/employees/Ali'>Ali</Link></li>
            <li><Link href='/employees/Asad'>Asad</Link></li>
            <li><Link href='/employees/Abdullah'>Abdullah</Link></li>
        </ul>
    </>
  )
}

export default Employees
