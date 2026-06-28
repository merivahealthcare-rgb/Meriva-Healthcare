import Link from "next/link";

export default function Signup() {
  const signupOptions = [
    {
      id: "hospital",
      title: "Hospitals & Clinics",
      description:
        "Raise service requests, track equipment issues, and get connected with verified biomedical engineers quickly.",
      href: "/signup/hospital",
      imageBg: "bg-blue-400",
    },
    {
      id: "engineer",
      title: "Biomedical Engineers",
      description:
        "Join the platform, receive service requests from hospitals, manage your assignments, and grow your professional network.",
      href: "/signup/engineer",
      imageBg: "bg-red-300",
    },
  ];
  return (
    <main className="flex flex-col items-center justify-center h-dvh">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-[#222428] font-medium text-[40px] leading-12.5 text-center font-sans">
          Welcome to Onbiomed
        </h1>
        <span className="text-[#4D5259] font-normal text-[18px] leading-5.5 text-center font-inter">
          Choose how you want to use the platform.
        </span>
      </div>

      <div className="flex md:w-188 gap-5 mt-14 justify-self-center">
        {signupOptions.map((option) => (
          <Link key={option.id} href={option.href} className="w-1/2">
            <section className="flex flex-col gap-6 border border-[#D4D9E0] rounded-lg px-4 pt-4 pb-14 hover:border-[#1D84EA] transition-all cursor-pointer">
              <div className={`h-43.75 w-full rounded-sm ${option.imageBg}`} />

              <div className="flex flex-col gap-2">
                <span className="text-[#000000] font-semibold text-[24px] leading-8 font-sans">
                  {option.title} →
                </span>

                <span className="text-[#4D5259] font-normal text-[16px] leading-5 font-inter w-[90%]">
                  {option.description}
                </span>
              </div>
            </section>
          </Link>
        ))}
      </div>

      <span className="mt-10 text-[#000000] font-normal text-[16px] leading-5">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-[#1D84EA] font-normal text-[16px] leading-5 hover:underline"
        >
          Sign in
        </Link>
      </span>
    </main>
  );
}
