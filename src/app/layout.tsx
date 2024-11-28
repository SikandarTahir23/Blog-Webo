import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-[#0B192C] text-white body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

            <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
              <span className="ml-3 text-2xl font-bold">Personal Blogs</span>
            </a>


            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-8">
              <a
                href="https://www.linkedin.com/in/sikandar-tahir-356a56273/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://github.com/SikandarTahir23"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=sikandar.tahir.04@gmail.com"
                className="hover:text-gray-400"
              >
                <FaEnvelope className="text-2xl" />
              </a>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
