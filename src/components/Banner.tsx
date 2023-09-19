'use client';
import Image from 'next/image';
import Container from './Container';
import { motion } from 'framer-motion';
import bannerOne from '../../public/images/banner/bannerOne.webp';
import bannerTwo from '../../public/images/banner/bannerTwo.webp';
import bannerThree from '../../public/images/banner/bannerThree.webp';
import FadeIn from './FadeIn';

export default function Banner() {
  return (
    <div className="bg-primeColor w-full rounded-bl-3xl rounded-br-3xl px-4">
      <Container>
        <div className="text-white grid md:grid-cols-2 gap-20 place-items-center">
          {/* Right side */}
          <div className="flex flex-col gap-6 xl:gap-10">
            <FadeIn>
              <h1 className="text-3xl md:text-2xl mdl:text-3xl lgl:text-4xl xl:text-5xl font-semibold">
                Showcase your creativity
              </h1>
            </FadeIn>
            <FadeIn>
              <p className="text-sm tracking-wide">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
                aspernatur recusandae qui reprehenderit ut accusantium in sequi,
                atque, necessitatibus obcaecati nulla mollitia eaque eveniet hic
                provident ea sed dignissimos, itaque facere voluptatibus.
                Repellat, rem ad dolor cumque temporibus neque optio quaerat
                vero possimus quia accusantium nisi debitis excepturi distinctio
                asperiores.
              </p>
            </FadeIn>
            <FadeIn>
              <div className="w-full p-6 xl:p-10 bg-white rounded-3xl flex flex-col lg:flex-row text-black justify-between gap-5">
                <input
                  className="w-full h-12 border-[1px] text-base text-gray-600 placeholder:tracking-wide border-gray-300 rounded-xl px-4 outline-none hover:border-primeColor duration-300 focus-visible:border-primeColor "
                  type="text"
                  placeholder="Email"
                />
                <button className="w-full h-12 rounded-xl bg-black text-white uppercase font-medium hover:bg-darkGreen cursor-pointer duration-300">
                  Next
                </button>
              </div>
            </FadeIn>
          </div>
          {/* Left side */}
          <div className="w-full relative flex justify-center items-center gap-6">
            <motion.div
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={bannerOne}
                alt="BannerImage"
                className="w-52 rounded-2xl object-cover"
              />
            </motion.div>
            <div className="flex flex-col gap-7 z-20">
              <motion.div
                initial={{ y: 300 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={bannerTwo}
                  alt="BannerImage"
                  className="w-52 rounded-2xl object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
              >
                <Image
                  src={bannerThree}
                  alt="bannerImage"
                  className="w-52 rounded-2xl object-cover"
                />
              </motion.div>
            </div>
            
          </div>
          <div></div>
        </div>
      </Container>
    </div>
  );
}
