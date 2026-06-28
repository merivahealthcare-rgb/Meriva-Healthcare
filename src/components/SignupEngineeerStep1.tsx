"use client";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import {
  signUpSchema,
  SignUpFormValues,
} from "../app/(auth)/signup/engineer/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Image Imports
import Google from "../../public/images/Googlcon.svg";
import Link from "next/link";

// Define props interface for the step component
interface SignupEngineerStep1Props {
  onNext: () => void;
}

export default function SignupEngineerStep1({ onNext }: SignupEngineerStep1Props) {
  const [showPassword, setShowPassword] = useState(false);

const form = useForm<SignUpFormValues>({
  resolver: zodResolver(signUpSchema),
  mode: "onChange",
  defaultValues: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    marketingEmails: false,
    acceptTerms: false,
  },
});

  function onSubmit(data: SignUpFormValues) {
    console.log("Form Submitted:", data);
    // Move to the next step upon successful validation
    onNext();
  }
  
  return (
    <>
      <section className="flex flex-col justify-center items-center border border-[#D4D9E0] rounded-[10px] lg:w-245.25 py-7.5 px-27.25 gap-4">
        <div className="lg:w-190.75 flex flex-col">
          <h1 className="font-sans font-medium text-[28px] leading-9 text-center">
            Signup as an Engineer
          </h1>
        </div>
        <div className="flex flex-col gap-7.5">
          <div className="flex flex-col gap-7 justify-center items-center">
            {/* Continue with Google */}
            <button className="relative bg-[#1A73E8] md:w-91.75 h-9.75 rounded-[30px] border-none cursor-pointer hover:bg-[#1A73E8]/90 transition-all">
              <Image
                src={Google}
                alt="Google"
                height={30}
                width={30}
                className="h-7.5 w-7.5 absolute left-[1%] top-[10%]"
              />
              <span className="text-center text-white font-inter font-medium text-[14px] leading-4">
                Continue with Google
              </span>
            </button>
            {/* OR seperator */}
            <section className="flex gap-5.25 items-center justify-center">
              <div className="bg-[#D4D9E0] h-px w-[50%]"></div>
              <div className="text-[14px] leading-3.25 font-inter font-medium text-[#222428]">
                or
              </div>
              <div className="bg-[#D4D9E0] h-px w-[50%]"></div>
            </section>
            {/* Form */}
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-full space-y-4 p-6 rounded-lg bg-white"
            >
              <Form {...form}>
                {/* Name Fields - Row */}
                <div className="flex gap-4 w-full">
                  <div className="w-1/2">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold text-gray-700">
                            First name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter name"
                              className="border-gray-300 focus-visible:ring-gray-400 placeholder:text-gray-400"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="w-1/2">
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-semibold text-gray-700">
                            Last name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter name"
                              className="border-gray-300 focus-visible:ring-gray-400 placeholder:text-gray-400"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Email Field - Full Width */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-gray-700">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Enter your email address"
                          className="border-gray-300 focus-visible:ring-gray-400 placeholder:text-gray-400"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Password Field - Full Width with Visibility Toggle */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-gray-700">
                        Password
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password (8 characters or more)"
                            className="border-gray-300 focus-visible:ring-gray-400 placeholder:text-gray-400 pr-10"
                            {...field}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                          >
                            {showPassword ? (
                              <EyeOff className="h-5 w-5" />
                            ) : (
                              <Eye className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Checkbox 1: Marketing Emails */}
                <FormField
                  control={form.control}
                  name="marketingEmails"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md">
                      <FormControl>
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-1 cursor-pointer"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-normal text-slate-600 cursor-pointer">
                          Send me emails with tips on how to find service calls
                          that fits your experience.
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                {/* Checkbox 2: Terms and Conditions */}
                <FormField
                  control={form.control}
                  name="acceptTerms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md py-2">
                      <FormControl>
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-1 cursor-pointer"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-normal text-slate-600 cursor-pointer">
                          Yes, I understand and agree to the Onbiomed Terms of
                          Service, including the User Agreement and Privacy
                          Policy.
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <div className="flex flex-col gap-3 justify-center items-center mt-10.5">
                  <Button
                    type="submit"
                    disabled={!form.formState.isValid}
                    className="bg-[#0058AF] rounded-sm p-3 text-white font-sans text-[16px] leading-5 w-45.5 h-11 cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-800 hover:shadow-lg"
                  >
                    Create my account
                  </Button>
                  <span className="text-[#000000] font-normal text-[16px] leading-5">
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      className="text-[#1D84EA] font-normal text-[16px] leading-5 hover:underline"
                    >
                      Log in
                    </Link>
                  </span>
                </div>
              </Form>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}