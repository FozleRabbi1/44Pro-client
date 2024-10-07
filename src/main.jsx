import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/router.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
      <RouterProvider router={routes}></RouterProvider>
        <ToastContainer />
    </Provider>
  </StrictMode>,
)
