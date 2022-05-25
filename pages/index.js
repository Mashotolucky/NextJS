import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './navbar'
import Card from './card'
import BooksPage from './booksPage'

export default function Home() {
  return (
    <>
      < Navbar />
      < Card />
      <BooksPage />
    </>
  )
}
