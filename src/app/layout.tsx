import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: {
        template: "%s | Application Tracker",
        default: "Application Tracker"
    },
    description: "Track your job applications with ease.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <NextUIProvider>
            <html lang="en">
            <body className={inter.className}>{children}</body>
            </html>
        </NextUIProvider>
    );
}
