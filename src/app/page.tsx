import Image from 'next/image'
import styles from './page.module.css'

  const Home = (() => {
  return (
    <>
      <h2>Welcome</h2>
      <h3>Hello, web!</h3>
      <img src='/janmangloop.png' style={{width:'100px'}}/>
    </>
  )
})

export default Home;