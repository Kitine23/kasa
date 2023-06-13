import Banner from '../components/banner'
import Gallery from '../components/gallery/Gallery'

export default function Home() {
  return (
    <>
      <Banner
        img="/img/banner-home.jpg"
        title="Chez vous, partout et ailleurs"
      />
      <Gallery />
    </>
  )
}
