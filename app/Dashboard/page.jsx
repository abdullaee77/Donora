"use client"

import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { fetchuser, updateProfile } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
const Dashboard = () => {
  const { data: session, status, update } = useSession()
  const router = useRouter()
  const [form, setForm] = React.useState({})

  useEffect(() => {
    if (status === "authenticated") {
      getData()
    }


    if (status === "unauthenticated") {
      router.push('/login')
    }
  }, [status, router])

  if (status === "loading") {
    return <p className="text-white">Loading...</p>
  }

  const handlechange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const getData = async () => {
    if (!session?.user?.name) return
    let u = await fetchuser(session.user.name)
    if (u) setForm(u)  // ← only set if not null
  }

  const handleSubmuit = async (e) => {

    let a = await updateProfile(form, session.user.name)


    toast('Profile updated successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
   
  }

  return (
    <>
      <ToastContainer
      />
      <div className="min-h-screen flex items-center justify-center p-5">

        <div className="w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden">



          {/* Content */}
          <div className="pt-20 px-8 pb-8">

            <h1 className="text-3xl text-center font-bold text-white mb-8">
              User Dashboard
            </h1>

            <form className="space-y-6" action={handleSubmuit}>

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={form.name || ""}
                  onChange={handlechange}
                  placeholder="Enter your name"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email || ""}
                  onChange={handlechange}
                  placeholder="Enter your email"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Username */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Username
                </label>

                <input
                  type="text"
                  name="username"
                  value={form.username || ""}
                  onChange={handlechange}
                  placeholder="Enter username"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Profile Picture URL */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Profile Picture
                </label>

                <input
                  type="text"
                  name="profilepic"
                  value={form.profilepic || ""}
                  onChange={handlechange}
                  placeholder="Enter profile picture URL"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Cover Picture URL */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Cover Picture
                </label>

                <input
                  type="text"
                  name="coverpic"
                  value={form.coverpic || ""}
                  onChange={handlechange}
                  placeholder="Enter cover picture URL"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Razorpay ID */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Razorpay ID
                </label>

                <input
                  type="text"
                  name="razorpayid"
                  value={form.razorpayid || ""}
                  onChange={handlechange}
                  placeholder="Enter Razorpay ID"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Razorpay Secret */}
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Razorpay Secret
                </label>

                <input
                  type="password"
                  name="razorpaysecret"
                  value={form.razorpaysecret || ""}
                  onChange={handlechange}
                  placeholder="Enter Razorpay Secret"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className=" w-full rounded-lg text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5"
              >
                Save Details
              </button>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}


export default Dashboard
