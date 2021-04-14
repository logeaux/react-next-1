import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam doloribus omnis recusandae? Numquam quo assumenda nam! Blanditiis ipsum sapiente cumque libero. Obcaecati possimus quae sint hic fugiat ullam laborum illo?</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam doloribus omnis recusandae? Numquam quo assumenda nam! Blanditiis ipsum sapiente cumque libero. Obcaecati possimus quae sint hic fugiat ullam laborum illo?</p>
        <Link href="/ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>
      </div>
    </>
  )
}
