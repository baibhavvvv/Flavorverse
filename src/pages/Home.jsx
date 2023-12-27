import React from 'react'
import Header from '../components/Header'
import Recipes from '../components/Recipes'

const Home = () => {
  return (
    <main className='w-full flex flex-col'>
        <Header
        title={
          <p>
            Taste the real flavors <br /> with FlavorVerse.
          </p>
        }
        type = 'home'
        />
        <section id='recipes' className="mx-auto md:px-20 md:max-w-[1440px]">
          <Recipes/>
        </section>
    </main>
  )
}

export default Home
