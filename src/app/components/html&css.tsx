import Image from "next/image";
import { FaArrowRight, FaEye, FaCommentDots, FaVirus, FaShoppingCart, FaPlane } from "react-icons/fa";
import covido from "@/app/images/covido.png";
import daraz from "@/app/images/daraz.png";
import food from "@/app/images/flight.png";
import Link from "next/link";

export default function Html() {
  return (
    <>
      <section className="bg-[#0B192C] text-gray-100 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-wrap -m-4">
          
            <div className="p-4 md:w-1/3">
              <div className="h-full bg-[#1E3E62] border-2 border-[#FFB200] rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-500">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg transition-transform duration-500 ease-in-out hover:scale-110"
                  src={covido}
                  alt="Coffee website"
                />
                <div className="p-6">
                  <h2 className="flex items-center tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    <FaVirus className="mr-2 text-indigo-400" />
                    Covid-19
                  </h2>
                  <h1 className="flex items-center title-font text-2xl font-bold text-[#FFB200] mb-3">
                    <FaVirus className="mr-2 text-[#FFB200]" />
                    Covido Web
                  </h1>
                  <p className="leading-relaxed mb-7">
                  Explore the world of Covid-19 with an immersive design powered by HTML, CSS, and Tailwind CSS....                  </p>
                  <div className="flex items-center justify-center">
                    <Link
                      href="/covido"
                      className="bg-[#FFB200] text-white px-3 py-2 rounded-full shadow-lg inline-flex items-center text-lg hover:bg-[#c48900] transition-colors duration-300"
                    >
                      Read More
                      <FaArrowRight className="ml-2 transition-transform duration-300 hover:translate-x-1" />
                    </Link>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <FaEye className="mr-1" /> 1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <FaCommentDots className="mr-1" /> 6
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full bg-[#1E3E62] border-2 border-[#FFB200] rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-500">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg transition-transform duration-500 ease-in-out hover:scale-110"
                  src={daraz}
                  alt="Daraz clone"
                />
                <div className="p-6">
                  <h2 className="flex items-center tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    <FaShoppingCart className="mr-2 text-indigo-400" />
                    E-commerce Clone
                  </h2>
                  <h1 className="flex items-center title-font text-2xl font-bold text-[#FFB200] mb-3">
                    <FaShoppingCart className="mr-2 text-[#FFB200]" />
                    Daraz Clone
                  </h1>
                  <p className="leading-relaxed mb-3">
                  developed a clone of Daraz using HTML, CSS, Bootstrap, and Slick.js! This project was a fantastic opportunity for me ...                  </p>
                  <div className="flex items-center justify-center">
                    <Link
                      href="/daraz"
                      className="bg-[#FFB200] text-white px-3 py-2 rounded-full shadow-lg inline-flex items-center text-lg hover:bg-bg-[#c48900] transition-colors duration-300"
                    >
                      Read More
                      <FaArrowRight className="ml-2 transition-transform duration-300 hover:translate-x-1" />
                    </Link>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <FaEye className="mr-1" /> 1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <FaCommentDots className="mr-1" /> 8
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full bg-[#1E3E62] border-2 border-[#FFB200] rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 hover:scale-105 transition-all duration-500">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg transition-transform duration-500 ease-in-out hover:scale-110"
                  src={food}
                  alt="Food website"
                />
                <div className="p-6">
                  <h2 className="flex items-center tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    <FaPlane className="mr-2 text-indigo-400" />
                    Flight Blog
                  </h2>
                  <h1 className="flex items-center title-font text-2xl font-bold text-[#FFB200] mb-3">
                    <FaPlane className="mr-2 text-[#FFB200]" />
                    Flight Booking Web
                  </h1>
                  <p className="leading-relaxed mb-3">
                  A Flight Booking website featuring stunning scroll animations powered by Chatbot Integration ... </p>
                  <div className="flex items-center justify-center">
                    <Link
                      href="/flight"
                      className="bg-[#FFB200] text-white px-3 py-2 rounded-full shadow-lg inline-flex items-center text-lg hover:bg-[#c48900] transition-colors duration-300"
                    >
                      Read More
                      <FaArrowRight className="ml-2 transition-transform duration-300 hover:translate-x-1" />
                    </Link>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <FaEye className="mr-1" /> 1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <FaCommentDots className="mr-1" /> 12
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}