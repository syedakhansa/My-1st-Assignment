import Link from 'next/link' 
import react from 'react'
import contact from"./contact.module.css"
const page = () => {
    return(
        <div>
            <h4 className={contact.bg} >This Is Contact PAGE</h4>
            <p className={contact.p}>Feel free to reach out via email or phone</p>
                <ul className={contact.p}>
                    <li>- abc@gmail.com</li>
                    <li>- 03398768978</li>
                </ul>
            <Link className={contact.color} href="/"> HOME</Link>
            
        </div>
    )
}
export default page