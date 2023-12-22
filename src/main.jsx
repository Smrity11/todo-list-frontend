import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './provider/AuthProvider.jsx';
import { router } from './routes/router.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <AuthProvider>
      <QueryClientProvider client={queryClient}>
      
          <div className=' mx-auto '>
            <RouterProvider router={router} />
          </div>
       
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
