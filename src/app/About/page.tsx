import link from 'next/link'
import about from"./about.module.css"
import Link from 'next/link'
const page =()=> {
    return(
       <div>
        <h1 className={about.bg}>THIS IS ABOUT PAGE</h1>
        <p>Information about our website development</p>
        <br />
        <Link className={about.color} href="/"> HOME</Link>
       </div> 
    )
}
export default page