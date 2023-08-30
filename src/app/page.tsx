import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <h2>Welcome</h2>
      <h3>Hello, web!</h3>
      <img src='/janmangloop.png' style={{width:'100px'}}/>
    </>
  )
}
