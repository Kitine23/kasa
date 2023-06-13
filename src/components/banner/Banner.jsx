import styles from './Banner.module.scss'

export default function Banner({ img, title = '' }) {
  return (
    <section
      className={styles.banner}
      style={{
        backgroundImage: `url('${img}')`,
      }}
    >
      <div>{title}</div>
    </section>
  )
}
