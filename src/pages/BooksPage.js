import React from 'react'
import BookList from '../components/BookList'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import Book from '../static/CoverSvg/BookSVG.svg'

const BooksPage = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-primary'>
      <Navbar/>
      <div className='flex flex-row justify-center items-center'>
        <div className='ml-14'>
          <h1 className='font-serif font-extralight text-secondary-darkgray text-6xl '>Refresh your mind <br/> with books</h1>
          <p className='text-2xl font-sans text-secondary-darkgray mt-6'>Get books of top authors for free.</p>
        </div>
        <img src={Book} alt='Book' draggable='false' className='mt-14 ml-32'/>
      </div>
      <p className='font-serif font-extralight text-secondary-darkgray text-6xl'>Popular books</p>
      <BookList/>
      <Footer/>
    </div>
  )
}

export default BooksPage
