"use client";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Button } from "@/components/ui/button";
import { heroSlides } from "@/lib/data/hero-slides";

import type { Swiper as SwiperType } from "swiper";
export default function Hero() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiper, setSwiper] = useState<SwiperType | null>(null);

    return (
        <section className="relative h-screen min-h-[600px] max-h-[900px] bg-neutral-900 overflow-hidden">
            {/* Swiper Container */}
            <Swiper
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                effect="fade"
                speed={1000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                onSwiper={setSwiper}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="h-full w-full"
            >
                {heroSlides.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative h-full w-full">
                            {/* Background Image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-neutral-900">
                                <div className="absolute inset-0 opacity-20">
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        fill
                                        className="object-contain object-right scale-110"
                                        priority={index === 0}
                                    />
                                </div>
                            </div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/95 via-neutral-900/70 to-transparent" />

                            {/* Content */}
                            <div className="relative h-full container-custom">
                                <div className="flex flex-col justify-center h-full max-w-2xl">
                                    <AnimatePresence mode="wait">
                                        {activeIndex === index && (
                                            <motion.div
                                                key={`content-${slide.id}`}
                                                initial={{ opacity: 0, y: 40 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -40 }}
                                                transition={{
                                                    duration: 0.6,
                                                    ease: "easeOut",
                                                }}
                                            >
                                                {/* Badge */}
                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        scale: 0.8,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        scale: 1,
                                                    }}
                                                    transition={{ delay: 0.2 }}
                                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 text-primary-200 text-sm font-medium mb-6"
                                                >
                                                    <Sparkles className="w-4 h-4" />
                                                    <span>
                                                        {slide.subtitle}
                                                    </span>
                                                </motion.div>

                                                {/* Title */}
                                                <motion.h1
                                                    initial={{
                                                        opacity: 0,
                                                        y: 20,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    transition={{ delay: 0.3 }}
                                                    className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight"
                                                >
                                                    {slide.title}
                                                </motion.h1>

                                                {/* Description */}
                                                <motion.p
                                                    initial={{
                                                        opacity: 0,
                                                        y: 20,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    transition={{ delay: 0.4 }}
                                                    className="text-lg md:text-xl text-neutral-300 mb-8 leading-relaxed"
                                                >
                                                    {slide.description}
                                                </motion.p>

                                                {/* CTAs */}
                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        y: 20,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    transition={{ delay: 0.5 }}
                                                    className="flex flex-col sm:flex-row gap-4"
                                                >
                                                    <Button
                                                        asChild
                                                        size="lg"
                                                        className="bg-primary-600 hover:bg-primary-700 text-white text-lg px-8 py-6 shadow-premium hover:shadow-2xl transition-all"
                                                    >
                                                        <Link
                                                            href={
                                                                slide?.cta
                                                                    ?.href || ""
                                                            }
                                                        >
                                                            {slide?.cta?.text}
                                                        </Link>
                                                    </Button>

                                                    {slide.secondaryCta && (
                                                        <Button
                                                            asChild
                                                            size="lg"
                                                            variant="outline"
                                                            className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm text-lg px-8 py-6"
                                                        >
                                                            <Link
                                                                href={
                                                                    slide
                                                                        .secondaryCta
                                                                        .href
                                                                }
                                                            >
                                                                {
                                                                    slide
                                                                        .secondaryCta
                                                                        .text
                                                                }
                                                            </Link>
                                                        </Button>
                                                    )}
                                                </motion.div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Product Image on Right (Desktop) */}
                                <AnimatePresence mode="wait">
                                    {activeIndex === index && (
                                        <motion.div
                                            key={`image-${slide.id}`}
                                            initial={{
                                                opacity: 0,
                                                scale: 0.8,
                                                x: 100,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                scale: 1,
                                                x: 0,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                scale: 0.8,
                                                x: -100,
                                            }}
                                            transition={{
                                                duration: 0.8,
                                                ease: "easeOut",
                                            }}
                                            className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[80%]"
                                        >
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={slide.image}
                                                    alt={slide.title}
                                                    fill
                                                    className="object-contain drop-shadow-2xl"
                                                    priority={index === 0}
                                                />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
                {/* Previous Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => swiper?.slidePrev()}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all shadow-lg"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6" />
                </motion.button>

                {/* Pagination Dots */}
                <div className="flex gap-2">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => swiper?.slideTo(index)}
                            className="group p-2"
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            <div
                                className={`h-1 rounded-full transition-all duration-300 ${
                                    index === activeIndex
                                        ? "w-8 bg-white"
                                        : "w-6 bg-white/40 group-hover:bg-white/60"
                                }`}
                            />
                        </button>
                    ))}
                </div>

                {/* Next Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => swiper?.slideNext()}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all shadow-lg"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6" />
                </motion.button>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute bottom-8 md:bottom-12 right-8 md:right-12 z-20 hidden md:block"
            >
                <div className="flex flex-col items-center gap-2 text-white/60">
                    <span className="text-sm font-medium tracking-wider rotate-90 origin-center translate-x-6">
                        SCROLL
                    </span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="w-0.5 h-12 bg-gradient-to-b from-white/60 to-transparent"
                    />
                </div>
            </motion.div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-50 to-transparent pointer-events-none z-10" />
        </section>
    );
}
