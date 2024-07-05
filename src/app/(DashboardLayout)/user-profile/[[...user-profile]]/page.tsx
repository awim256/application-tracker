"use client";
import {useUser} from '@clerk/nextjs'
import {Card} from "@nextui-org/card";
import {Button} from "@nextui-org/button";


const ViewProfile = () => {
    const {isLoaded, isSignedIn, user} = useUser();

    if (!isLoaded || !isSignedIn) {
        return null
    }

    const deleteAccount = async () => {
        try {
            await fetch('/api/delete-account', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <Card className="pb-8 py-6 px-6">
            <h1 className="sr-only">User Profile Settings</h1>

            <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
                <div>
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-500">
                        This information will be displayed publicly so be careful what you share.
                    </p>

                    <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                        <div className="pt-6 sm:flex">
                            <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Full name</dt>
                            <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                <div className="text-gray-900">{user.fullName}</div>
                                <button type="button"
                                        className="font-semibold text-sky-600 hover:text-sky-500">
                                    Update
                                </button>
                            </dd>
                        </div>
                        <div className="pt-6 sm:flex">
                            <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">Email address
                            </dt>
                            <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                <div className="text-gray-900">
                                    {user.emailAddresses.map((email) => (
                                        <div key={email.emailAddress}>{email.emailAddress}, </div>
                                    ))}
                                </div>
                                <button type="button"
                                        className="font-semibold text-sky-600 hover:text-sky-500">
                                    Update
                                </button>
                            </dd>
                        </div>
                    </dl>
                </div>
                <div className="flex justify-end">
                <Button
                    onClick={deleteAccount}
                    type={'button'}
                    color={'danger'}>
                    Delete Account
                </Button>
                </div>
            </div>
        </Card>
    )
}

export default ViewProfile
