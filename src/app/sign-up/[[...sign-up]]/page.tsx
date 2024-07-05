"use client";

import * as Clerk from '@clerk/elements/common'
import * as SignUp from '@clerk/elements/sign-up'
import Link from "next/link";
import Image from "next/image";


export default function Example() {
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="p-5">
                        <Image
                            className="mx-auto h-10 w-auto"
                            src="/circle-thin.png"
                            alt="Application Tracker"
                            width={40}
                            height={40}
                        />
                        <h1 className="text-xl text-center font-semibold leading-6">Application Tracker</h1>
                    </div>
                    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Create your account
                    </h2>
                </div>

                <div className="mt-10 px-4 sm:mx-auto sm:w-full sm:max-w-[480px]">
                    <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                        <SignUp.Root>
                            <SignUp.Step name="start" className="space-y-6">

                                <Clerk.Field name="emailAddress">
                                    <Clerk.Label
                                        className="block text-sm font-medium leading-6 text-gray-900">
                                        Email address
                                    </Clerk.Label>
                                    <div className="mt-2">
                                        <Clerk.Input
                                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"/>
                                        <Clerk.FieldError className="block text-red-500 text-sm"/>
                                    </div>
                                </Clerk.Field>

                                <Clerk.Field name="password">
                                    <Clerk.Label
                                        className="block text-sm font-medium leading-6 text-gray-900">Password</Clerk.Label>
                                    <div className="mt-2">
                                        <Clerk.Input
                                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"/>
                                        <Clerk.FieldError className="block text-red-500 text-sm"/>
                                    </div>
                                </Clerk.Field>

                                <SignUp.Action submit
                                               className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                                    Sign up
                                </SignUp.Action>

                                <div>
                                    <div className="relative mt-10">
                                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                            <div className="w-full border-t border-gray-200"/>
                                        </div>
                                        <div className="relative flex justify-center text-sm font-medium leading-6">
                                            <span className="bg-white px-6 text-gray-900">Or continue with</span>
                                        </div>
                                    </div>

                                    <div className="mt-6 grid gap-4">
                                        <Clerk.Connection
                                            name="google"
                                            className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"

                                        >
                                            <Clerk.Icon/>
                                            Sign up with Google
                                        </Clerk.Connection>
                                    </div>
                                </div>
                            </SignUp.Step>

                            <p className="mt-10 text-sm text-center text-gray-500">
                                Already registered?{' '}
                                <Link href="/sign-in" className="font-semibold leading-6 text-sky-600 hover:text-sky-500">
                                    Sign in
                                </Link>
                            </p>


                            <SignUp.Step name="verifications" className="space-y-6">
                                <SignUp.Strategy name="email_code">
                                    <h1 className='text-2xl font-bold mb-1'>Check your email</h1>
                                    <p className="text-[15px] text-slate-500">Enter the 4-digit verification code that
                                        was sent to your email address.</p>


                                    <Clerk.Field name="code">
                                        <Clerk.Label className="block text-sm font-medium leading-6 text-gray-900">Email
                                            Code</Clerk.Label>
                                        <div className="mt-2">
                                            <Clerk.Input
                                                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"/>
                                            <Clerk.FieldError className="block text-red-500 text-sm"/>
                                        </div>
                                    </Clerk.Field>

                                    <SignUp.Action submit
                                                   className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">Verify</SignUp.Action>
                                </SignUp.Strategy>
                            </SignUp.Step>
                        </SignUp.Root>
                    </div>


                </div>
            </div>
        </>
    )
}
