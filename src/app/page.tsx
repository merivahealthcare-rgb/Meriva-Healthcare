"use client"
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100">
      {/* Header / Logo Space */}
      <header className="flex w-full max-w-7xl justify-start p-6 md:p-8">
        <div className="flex items-center gap-2.5 font-semibold tracking-tight text-lg text-slate-800">
          {/* REPLACE: Swap this div with your actual brand logo mark */}
          <div className="h-6 w-6 rounded bg-indigo-600" />
          <span>BrandName</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-6 text-center">
        {/* Product Image Placeholder */}
        <div className="relative mb-10 flex h-48 w-48 items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-white shadow-sm sm:h-56 sm:w-56">
          {/* REPLACE: Swap this Image with your product image later */}
          <Image
            className="opacity-20"
            src="/next.svg"
            alt="Product preview placeholder"
            width={120}
            height={24}
            priority
          />
          <span className="absolute bottom-4 text-[10px] font-bold tracking-widest text-slate-400 uppercase">
            Product Preview
          </span>
        </div>

        {/* Messaging */}
        <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Something exciting is <br />
          <span className="bg-gradient-to-r from-indigo-600 to-slate-800 bg-clip-text text-transparent">
            on the way.
          </span>
        </h1>
        
        <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600 sm:text-lg">
          We are putting the finishing touches on our new platform. Sign up to secure early access and receive launch updates.
        </p>

        {/* Email Signup Form */}
        <form 
          onSubmit={(e) => e.preventDefault()} 
          className="mt-8 flex w-full max-w-md flex-col gap-2 sm:flex-row"
        >
          <input
            type="email"
            required
            placeholder="Enter your email address"
            className="h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm shadow-sm transition-all placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 focus:outline-none"
          />
          <button
            type="submit"
            className="h-12 rounded-lg bg-indigo-600 px-6 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700 active:bg-indigo-800 sm:shrink-0"
          >
            Notify Me
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl p-6 text-center text-xs font-medium tracking-wide text-slate-400 md:p-8">
        &copy; {new Date().getFullYear()} BrandName. All rights reserved.
      </footer>
    </div>
  );
}