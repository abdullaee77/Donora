"use server"

import Stripe from "stripe"
import Payment from "@/models/Payment"
import connectDb from "@/db/connectDb"
import User from "@/models/User"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const initiate = async (amount, to_username, paymentform) => {
    await connectDb()

    console.log("USERNAME RECEIVED:", to_username)
    console.log("AMOUNT:", amount)

    if (!to_username || to_username === "undefined" || to_username === "success") {
        throw new Error("Invalid username: " + to_username)
    }

    const user = await User.findOne({ username: to_username })

    if (!user) {
        throw new Error(`User not found: ${to_username}`)
    }

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",

        line_items: [
            {
                price_data: {
                    currency: "inr",          // ✅ INR so ₹50 stays ₹50
                    product_data: {
                        name: `Donation to ${to_username}`,
                    },
                    unit_amount: amount,       // in paise (₹10 = 1000)
                },
                quantity: 1,
            },
        ],

        metadata: {
            to_user: to_username,
            name: paymentform.name,
            message: paymentform.message,
        },

        success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/${to_username}?paymentdone=true`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/${to_username}?paymentdone=false`,
    })

    return { url: session.url }
}

export const fetchuser = async (username) => {
    await connectDb()
    let u = await User.findOne({ username })
    if (!u) return null
    return JSON.parse(JSON.stringify(u))       // ✅ plain object for client
}

export const fetchpayments = async (username) => {
    await connectDb()
    let p = await Payment.find({ to_user: username, done: true })
        .sort({ amount: -1 })
        .limit(10)
        .lean()
    return JSON.parse(JSON.stringify(p))       // ✅ plain objects for client
}

// }
export const updateProfile = async (data, oldusername) => {
    await connectDb()
    // data is already a plain object, not FormData
    if (oldusername !== data.username) {
        let u = await User.findOne({ username: data.username })
        if (u) {
            return { error: "Username already taken" }
        }
    }
    await User.updateOne({ email: data.email }, data)
}