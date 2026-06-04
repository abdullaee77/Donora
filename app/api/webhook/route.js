import Stripe from "stripe"
import connectDb from "@/db/connectDb"
import Payment from "@/models/Payment"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "")
export async function POST(req) {
    console.log("✅ WEBHOOK HIT")
    
    await connectDb()


if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    return new Response("Missing Stripe env variables", { status: 500 })
}
    const body = await req.text()
    const sig = req.headers.get("stripe-signature")

    console.log("SIGNATURE:", sig)
    console.log("WEBHOOK SECRET:", process.env.STRIPE_WEBHOOK_SECRET)

    let event

    try {
        event = stripe.webhooks.constructEvent(
            body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        )
        console.log("✅ EVENT TYPE:", event.type)
    } catch (err) {
        console.log("❌ WEBHOOK VERIFY ERROR:", err.message)
        return new Response(`Webhook Error: ${err.message}`, { status: 400 })
    }

    if (event.type === "checkout.session.completed") {
        const session = event.data.object
           // Add these two logs
    console.log("FULL SESSION:", JSON.stringify(session, null, 2))
    console.log("METADATA:", session.metadata)
    console.log("TO_USER:", session.metadata?.to_user)
  // Add this check
    if (!session.metadata?.to_user) {
        console.log("❌ Missing to_user in metadata")
        return new Response("Missing metadata", { status: 400 })
    }
        console.log("METADATA:", session.metadata)
        console.log("AMOUNT:", session.amount_total)

        try {
            const payment = await Payment.create({
                oid:     session.id,
                to_user: session.metadata.to_user,
                name:    session.metadata.name,
                message: session.metadata.message,
                amount:  session.amount_total,
                done:    true
            })
            console.log("✅ PAYMENT SAVED:", payment)
        } catch (err) {
            console.log("❌ DB SAVE ERROR:", err.message)
            return new Response("DB Error", { status: 500 })
        }
    }

    return new Response("OK", { status: 200 })
}