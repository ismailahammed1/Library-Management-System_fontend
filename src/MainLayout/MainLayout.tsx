import Footer from "@/components/Footer/Footer"
import Navbar from "@/components/Navbar/Navbar"
import { Outlet } from "react-router"

const MainLayout = () => {
  return (
     <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout