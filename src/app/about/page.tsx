"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Leaf, ShieldCheck, Heart, Utensils, Truck, Recycle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Heart,
    title: "Passion for Food",
    desc: "Every meal we deliver is crafted with love and care, bringing the authentic taste of home-cooked food right to your doorstep.",
    color: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Packaging",
    desc: "We use 100% biodegradable and sustainable packaging materials. We plant a tree with every order — good food, better planet.",
    color: "bg-green-pale",
    iconColor: "text-green-mid",
  },
  {
    icon: ShieldCheck,
    title: "Hygiene First",
    desc: "From kitchen to doorstep, we follow the strictest hygiene standards. Every partner restaurant is regularly audited for quality.",
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: Utensils,
    title: "Curated Menus",
    desc: "We partner with the best local vendors and restaurants to bring you a handpicked selection of the finest dishes in town.",
    color: "bg-yellow-light",
    iconColor: "text-yellow-dark",
  },
  {
    icon: Truck,
    title: "Swift Delivery",
    desc: "Our optimized delivery network ensures your food arrives fresh, hot, and on time — every single time.",
    color: "bg-purple-50",
    iconColor: "text-purple-500",
  },
  {
    icon: Recycle,
    title: "Sustainability Driven",
    desc: "We're committed to reducing our carbon footprint by partnering with eco-conscious vendors and using green logistics.",
    color: "bg-emerald-50",
    iconColor: "text-emerald-500",
  },
];

const stats = [
  { number: "10+", label: "Restaurant Partners" },
  { number: "1000+", label: "Happy Customers" },
  { number: "5000+", label: "Meals Delivered" },
  { number: "100+", label: "Trees Planted" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AboutPage() {
  return (
    <main className="flex-1">
      <Navbar />

      {/* Hero Section */}
      <section className="relative hero-gradient hero-pattern overflow-hidden">
        {/* Decorative glows */}
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-yellow/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-yellow/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 md:py-36 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full mb-6"
          >
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-yellow uppercase">
              Our Story
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight max-w-4xl mx-auto"
          >
            Serving Happiness,{" "}
            <span className="text-yellow">One Meal</span> at a Time
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
          >
            We believe great food has the power to bring people together. At Delito,
            we&apos;re on a mission to deliver joy, one delicious meal at a time — sustainably and hygienically.
          </motion.p>

          {/* Delito Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.45, type: "spring" }}
            className="mt-8"
          >
            <Image
              src="/images/delito.png"
              alt="Delito Logo"
              width={100}
              height={100}
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain mx-auto drop-shadow-lg"
            />
          </motion.div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-[5]">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[60px] md:h-[80px]"
          >
            <path
              d="M0,40 C200,100 400,0 600,50 C800,100 1000,10 1200,60 L1200,120 L0,120 Z"
              className="fill-background"
            />
          </svg>
        </div>
      </section>

      {/* About Story Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <span className="text-xs font-bold tracking-widest text-yellow-dark uppercase">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-main leading-tight">
                Born From a Love for{" "}
                <span className="text-green-mid">Authentic Food</span>
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-text-muted leading-relaxed">
                <p>
                  Delito was born out of a deep passion for serving delicious, authentic food
                  to people who deserve nothing but the best. We saw the gap between amazing
                  local food vendors and the people craving their signature dishes — and we
                  decided to bridge it.
                </p>
                <p>
                  What sets us apart is our unwavering commitment to doing things the right way.
                  Every meal delivered through Delito comes in <strong className="text-text-main">eco-friendly, biodegradable packaging</strong>.
                  We follow strict hygiene protocols across our entire supply chain —
                  from kitchen preparation to the final doorstep delivery.
                </p>
                <p>
                  We&apos;re not just a food delivery platform — we&apos;re a movement. A movement
                  towards healthier eating, greener choices, and bringing communities together
                  over shared love for great food. 🌱
                </p>
              </div>
            </motion.div>

            {/* Right - Image Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/images/hero-pizza.png"
                  alt="Delito authentic food"
                  width={600}
                  height={500}
                  className="w-full h-[300px] sm:h-[400px] object-cover scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-dark/40 to-transparent" />
              </div>
              {/* Floating eco card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-6 -left-4 sm:left-4 bg-white rounded-2xl shadow-xl p-4 max-w-[220px] animate-float-slow"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-pale rounded-xl flex items-center justify-center shrink-0">
                    <Leaf className="w-5 h-5 text-green-mid" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-text-main">Eco-Friendly</p>
                    <p className="text-[10px] text-text-muted">Biodegradable packaging</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl hover:bg-green-pale/50 transition-colors duration-300"
              >
                <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-mid">
                  {stat.number}
                </p>
                <p className="mt-2 text-sm text-text-muted font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Values Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="text-xs font-bold tracking-widest text-yellow-dark uppercase">
              What We Stand For
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-main leading-tight">
              Our Core Values
            </h2>
            <p className="mt-4 text-sm sm:text-base text-text-muted max-w-2xl mx-auto leading-relaxed">
              Everything we do at Delito is guided by these principles — ensuring
              every meal is a delightful experience for you and the planet.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={cardVariants}
                className="group bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-50 hover:border-green-light"
              >
                <div
                  className={`w-14 h-14 ${value.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className={`w-6 h-6 ${value.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-text-main mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-24 hero-gradient hero-pattern relative overflow-hidden">
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-yellow/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Image
              src="/images/delito.png"
              alt="Delito Logo"
              width={64}
              height={64}
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain mx-auto mb-6"
            />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              &ldquo;Our mission is simple — serve food that makes people smile,
              in a way that makes the{" "}
              <span className="text-yellow">planet smile too.</span>&rdquo;
            </h2>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="w-12 h-0.5 bg-yellow/40 rounded-full" />
              <span className="text-sm text-white/60 font-medium">
                Team Delito
              </span>
              <div className="w-12 h-0.5 bg-yellow/40 rounded-full" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-xs font-bold tracking-widest text-yellow-dark uppercase">
              Get In Touch
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-text-main leading-tight">
              We&apos;d Love to Hear From You
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-green-pale rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-green-mid"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-text-main mb-2">Our Address</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                0, Verma Colony, Gali No. 1,<br />
                Hathras, Uttar Pradesh 204101
              </p>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-50 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-yellow-light rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-yellow-dark"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-text-main mb-2">Email Us</h3>
              <a
                href="mailto:Delitosupportt@gmail.com"
                className="text-sm text-green-mid hover:text-green-dark transition-colors font-medium"
              >
                Delitosupportt@gmail.com
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
