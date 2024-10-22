import Image from "next/image";
import Link from "next/link";
import home from "./home.module.css"
export default function Home() {
  return (
    
    <div className={home.container}>
   <h1 className={home.title}>Home Page</h1>
    <nav>
      <ul>
        <li><Link href="/About">. About</Link></li>
        <li><Link href="/Contact">. Contact</Link></li>
        <li><Link href="/Service">. Services</Link></li>
      </ul>
    </nav>
  </div>
  );
}
