import styles from './Slideshow.module.scss'
import { useState } from 'react'

export default function Slideshow({ images }) {
  const [slideIndex, setSlideIndex] = useState(0)

  const next = () => {
    if (slideIndex >= images.length - 1) {
      setSlideIndex(0)
    } else {
      setSlideIndex((prev) => prev + 1)
    }
  }

  const prev = () => {
    if (slideIndex <= 0) {
      setSlideIndex(images.length - 1)
    } else {
      setSlideIndex((prev) => prev - 1)
    }
  }

  return (
    <section className={styles.slideshow}>
      <img src={images.at(slideIndex)} alt="" />
      <nav>
        <button onClick={prev}>{'<'}</button>
        <button onClick={next}>{'>'}</button>
      </nav>
      <div className={styles.pagination}>{slideIndex + 1}/4</div>
    </section>
  )
}
