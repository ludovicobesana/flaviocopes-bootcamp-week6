import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'
import prisma from 'lib/prisma'


export default function Home({ cars }) {
  return (
    <div className={styles.container}>
      <ul>
        {cars.map((car, index) => {
          return (
            <li key={index}>{car.model}</li>
          )
        })}
      </ul>
    </div>
  )
}

export async function getServerSideProps() {
  
  let cars = await prisma.car.findMany()
  
  cars = JSON.parse(JSON.stringify(cars))
  
  return {
    props: {
      cars,
    },
  }
}
