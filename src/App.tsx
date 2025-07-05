import { RouterProvider } from "react-router"
import router from "./router/router"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"



function App() {


  return (
    <div>
        <ToastContainer position="top-right" autoClose={3000} />
      <RouterProvider router={router} />

    </div>
  )
}

export default App
