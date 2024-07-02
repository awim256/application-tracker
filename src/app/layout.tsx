import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Providers} from "@/app/providers";
import {NextFont} from "next/dist/compiled/@next/font";

const inter: NextFont = Inter({subsets: ["latin"]});

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
        <html lang="en" className='light'>
            <body className={`${inter.className}`}>
                <Providers>
                 {children}
              </Providers>
            </body>
        </html>
    );
}
