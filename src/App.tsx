import { Routes, Route } from 'react-router-dom'

import './globals.css'
import SignInForm from './_auth/forms/SignInForm'
import SignUpForm from './_auth/forms/SignUpForm'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'
import { Home } from './_root/pages'
import { Toaster } from "@/components/ui/toaster"

const App = () => {
  return (
    <main className="flex h-screen">
        <Routes>
            {/* public routes */}
            <Route element={<AuthLayout />}>
                <Route path="/signIn" element={<SignInForm />} />
                <Route path="/signUp" element={<SignUpForm />} />
            </Route>


            {/* private routes */}
            <Route element={<RootLayout />} >
                <Route index element={<Home />} />
            </Route>
        </Routes>
        
        <Toaster />
    </main>
  )
}

export default App