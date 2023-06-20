import styles from './Slideshow.module.scss'
import { useSlideshow } from './useSlideshow'
import PrevIcon from '../icons/PrevIcon'
import NextIcon from '../icons/NextIcon'

export default function Slideshow({ images }) {
  const { slideIndex, next, prev } = useSlideshow(images)

  return (
    <section className={styles.slideshow}>
      <img src={images.at(slideIndex)} alt="" />
      {images.length > 1 && (
        <>
          <nav>
            <button onClick={prev}>
              <PrevIcon />
            </button>
            <button onClick={next}>
              <NextIcon />
            </button>
          </nav>
          <div className={styles.pagination}>
            {slideIndex + 1}/{images.length}
          </div>
        </>
      )}
    </section>
  )
}
