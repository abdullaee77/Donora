import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        
        <h1 className="text-4xl font-bold text-center mb-6">
          About Us
        </h1>

        <p className="text-lg text-white text-center mb-12">
          Welcome to <span className="font-semibold">Donora</span>, a platform
          designed to connect creators, organizations, and supporters. Our
          mission is to make fundraising simple, transparent, and accessible for
          everyone.
        </p>

        <div className="bg-slate-800 shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            What We Do
          </h2>
          <p className="text-white leading-relaxed">
            We provide a space where creators, non-profit organizations,
            community projects, and other initiatives can register and create
            their own fundraising pages. Supporters can discover these pages and
            contribute directly to causes and people they believe in.
          </p>
        </div>

        <div className="bg-slate-800 shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            For Creators & Organizations
          </h2>
          <p className="text-white leading-relaxed">
            Whether you are a content creator, charity, educational project,
            startup, or community organization, you can create a profile and
            share your story with potential supporters. Our platform helps you
            receive donations securely and build meaningful connections with
            your audience.
          </p>
        </div>

        <div className="bg-slate-800 shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            For Donors
          </h2>
          <p className="text-white leading-relaxed">
            Donors can explore registered creators and organizations, learn
            about their missions, and make contributions with confidence. Every
            donation helps individuals and organizations continue their work,
            achieve their goals, and create a positive impact.
          </p>
        </div>

        <div className="bg-slate-800 shadow-md rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Join Our Community
          </h2>
          <p className="mb-4">
            Together, we can empower creators, support meaningful causes, and
            make fundraising more accessible for everyone.
          </p>
          <p className="font-medium">
            Register today and start making a difference.
          </p>
        </div>

      </div>
    </div>
  )
}

export default page