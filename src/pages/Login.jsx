import { useState, useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import {
  FaCoffee,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaFacebookF,
  FaUser
} from 'react-icons/fa'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const { dispatch } = useContext(AuthContext)
  const navigate = useNavigate()

  const togglePasswordVisibility = (e) => {
    e.preventDefault()
    setShowPassword(!showPassword)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    const userData = { name, email }
    dispatch({ type: 'LOGIN', payload: userData })
    navigate('/')
  }

  return (
    <div dir="rtl" className="min-h-screen flex items-center justify-center bg-amber-50 pt-26">
      <div className="max-w-md w-full mx-4 bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative h-48 bg-gradient-to-r from-amber-100 to-amber-200 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10 text-center">
            <div className="animate-bounce text-5xl mb-4 text-amber-800">
              <FaCoffee />
            </div>
            <h1 className="text-3xl font-bold text-amber-900">قهوه بهشت</h1>
            <p className="text-amber-700">وارد حساب خود شوید</p>
          </div>
        </div>

        <div className="p-8">
          <form onSubmit={handleLogin} className="space-y-6">

            {/* 👤 نام */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                نام کامل
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <FaUser className="text-amber-500" />
                </div>
                <input
                  type="text"
                  id="name"
                  required
                  className="input-field pr-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:outline-none transition duration-200"
                  placeholder="مثلاً علی رضایی"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            {/* 📧 ایمیل */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                ایمیل
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-amber-500" />
                </div>
                <input
                  type="email"
                  id="email"
                  required
                  className="input-field pr-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:outline-none transition duration-200"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* 🔒 رمز عبور */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                رمز عبور
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <FaLock className="text-amber-500" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  required
                  className="input-field pr-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-500 focus:outline-none transition duration-200"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 left-0 pl-3 flex items-center"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-amber-500 hover:text-amber-600 cursor-pointer" />
                  ) : (
                    <FaEye className="text-amber-500 hover:text-amber-600 cursor-pointer" />
                  )}
                </button>
              </div>
            </div>

            {/* ☑️ مرا به خاطر بسپار */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-gray-300 rounded ml-2"
                />
                مرا به خاطر بسپار
              </label>
              <a href="#" className="text-amber-600 hover:text-amber-500">
                رمز را فراموش کرده‌اید؟
              </a>
            </div>

            {/* 🎯 دکمه ورود */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition duration-200"
              >
                ورود به حساب
              </button>
            </div>
          </form>

          {/* 🌐 ورود با شبکه‌های اجتماعی */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">یا ورود با</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <a
                href="#"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <FaGoogle className="text-amber-600" />
                <span className="mr-2">گوگل</span>
              </a>
              <a
                href="#"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <FaFacebookF className="text-amber-600" />
                <span className="mr-2">فیسبوک</span>
              </a>
            </div>
          </div>

          {/* 🆕 ثبت‌نام */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              حساب ندارید؟{' '}
              <a href="#" className="font-medium text-amber-600 hover:text-amber-500">
                ثبت‌نام کنید
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
