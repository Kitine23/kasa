import Header from '../components/header'

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>footer</footer>
    </>
  )
}
