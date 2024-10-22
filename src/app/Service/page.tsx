import React from 'react'
import link from "next/link"
import Link from 'next/link'
import service from "./service.module.css"
const page = () =>{
  return (
    <div className={service.p}>
        <h1 className={service.bg}> This is service page</h1>
        <b className={service.b}>
        <Link href="/Service/App-development" >. APP DEVELOPMENT</Link>
        <br />
        <Link href="Service/Website-development">. WEBSITE DEVELOPMENT</Link>
        </b>
        <br />
        <Link className={service.color} href="/"> HOME</Link>
    </div>
  )
}
export default page;