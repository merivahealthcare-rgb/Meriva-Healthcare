import Link from "next/link";
import Image from "next/image";

// Image Imports
import Meriva from "../../public/images/meriva.png";

export default function NotFound() {
  return (
    <>
      {/* 404 Hero Section */}
      <section className="mx-auto my-6 max-w-7xl px-4 sm:px-6 lg:my-12">
        <div className="flex flex-col-reverse items-center justify-between gap-8 rounded-3xl bg-[#E2ECF1] p-6 sm:p-12 lg:flex-row lg:p-20">
          {/* Content Box */}
          <div className="flex w-full flex-col items-center gap-6 text-center lg:w-1/2 lg:items-start lg:text-left">
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl font-medium tracking-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight font-jakarta-sans">
                Oops! We couldn’t find that page.
              </h1>
              <p className="text-base font-normal text-gray-700 sm:text-lg lg:text-xl font-jakarta-sans">
                We can’t find the page you are looking for. Go back to home.
              </p>
            </div>
            <Link
              href="/"
              className="inline-block rounded-lg bg-[#054C6D] px-8 py-3.5 text-center font-medium text-white transition hover:bg-[#043d57] font-jakarta-sans"
            >
              Back to home
            </Link>
          </div>

          {/* 404 Graphic */}
          <div className="flex w-full items-center justify-center lg:w-1/2">
            <span className="text-[120px] font-bold leading-none text-black sm:text-[180px] lg:text-[240px] font-jakarta-sans">
              404
            </span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="
      w-full bg-[#E2EDF1] px-4 py-12 sm:px-6 lg:pt-20 lg:pb-2.5"
      >
        <div className="mx-auto max-w-308 rounded-2xl bg-white p-8 shadow-sm sm:p-12 lg:p-16">
          <div className="flex flex-col items-center gap-6 text-center">
            <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-black sm:text-3xl lg:text-4xl lg:leading-snug font-jakarta-sans">
              Ready to Modernize <br className="hidden sm:inline" /> Biomedical
              Equipment Management
            </h2>

            <p className="max-w-2xl text-base font-normal text-[#373B40] sm:text-lg font-jakarta-sans">
              Join hospitals, biomedical engineers, and equipment service
              providers building a smarter way to manage medical devices.
            </p>

            {/* Buttons Container */}
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/"
                className="w-full rounded-lg bg-[#054C6D] px-8 py-3.5 font-medium text-white transition hover:bg-[#043d57] sm:w-auto font-jakarta-sans"
              >
                Request a Demo
              </Link>
              <Link
                href="/"
                className="w-full text-center rounded-lg border border-[#D4D9E0] bg-white px-8 py-3.5 font-medium text-[#054C6D] transition-all duration-300 ease-in-out hover:border-[#054C6D] hover:bg-[#054C6D] hover:text-white sm:w-auto font-jakarta-sans"
              >
                Join the Waitlist
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-308 flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:gap-4">
          {/* Logo Container */}
          <div className="h-12 w-36 overflow-hidden sm:h-15 sm:w-44">
            <Image
              src={Meriva}
              alt="Meriva Healthcare"
              className="h-full w-full object-contain"
            />
          </div>

          {/* Links Container */}
          <div className="flex flex-col gap-2 text-center sm:text-end">
            <Link
              href="/privacy-policy"
              className="relative text-xs font-medium text-black after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 font-jakarta-sans"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-of-service"
              className="relative text-xs font-medium text-black after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:bg-black after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 font-jakarta-sans"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
