import Link from "next/link"
import styles from '../../styles/Burgers.module.css'
import Image from "next/image"

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:5000/items')
  const data = await res.json()

  return {
    props: {
      burgers: data
    }
  }
}

const Burgers = ({ burgers }) => {
  return (
    <div>
      <h1>Наши Бургеры</h1>

      {burgers.map(burger => {
        return (
          <Link
            className={styles.burgerCard}
            href={`/burgers/${burger.id}`}
            key={burger.id}>

            <div className={styles.imageContainer}>
              <Image
                className={styles.image}
                src={`${burger.image}`}
                alt={`${burger.name}`}
                width='100'
                height='100'
              />
            </div>

            <div>
              <h3>{burger.name}</h3>
              <p>{burger.desc}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Burgers