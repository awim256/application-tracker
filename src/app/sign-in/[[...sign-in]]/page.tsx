'use client';

import * as Clerk from '@clerk/elements/common';
import * as SignIn from '@clerk/elements/sign-in';
import Link from "next/link";

export default function SignInPage() {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="p-5">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://img.icons8.com/pulsar-line/48/circle-thin.png"
                        alt="Application Tracker"
                    />
                    <h1 className="text-xl text-center font-semibold leading-6">Application Tracker</h1>
                </div>
                <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign in
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                    <SignIn.Root>
                        <SignIn.Step
                            name="start"
                            className="space-y-6"
                        >
                            <Clerk.GlobalError className="block text-sm text-red-400"/>
                            <div className="space-y-4">
                                <Clerk.Field name="identifier" className="space-y-2">
                                    <Clerk.Label
                                        className="block text-sm font-medium leading-6 text-gray-900">Username</Clerk.Label>
                                    <Clerk.Input
                                        type="text"
                                        required
                                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 data-[invalid]:ring-red-400 data-[invalid]:focus:ring-indigo-600"
                                    />
                                    <Clerk.FieldError className="block text-sm text-red-400"/>
                                </Clerk.Field>
                                <Clerk.Field name="password" className="space-y-2">
                                    <Clerk.Label
                                        className="block text-sm font-medium leading-6 text-gray-900">Password</Clerk.Label>
                                    <Clerk.Input
                                        type="password"
                                        required
                                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 data-[invalid]:ring-red-400 data-[invalid]:focus:ring-indigo-600"
                                    />
                                    <Clerk.FieldError className="block text-sm text-red-400"/>
                                </Clerk.Field>
                            </div>
                            <SignIn.Action
                                submit
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign In
                            </SignIn.Action>
                            <p className="mt-10 text-sm text-center text-gray-500">
                                No account?{' '}
                                <Link
                                    href="/sign-up"
                                    className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                                >
                                    Create an account
                                </Link>
                            </p>
                        </SignIn.Step>
                    </SignIn.Root>
                </div>
            </div>
        </div>
    );
}
