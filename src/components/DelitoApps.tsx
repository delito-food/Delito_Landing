
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const apps = [
  {
    name: "Delito Vendor",
    tagline: "For Restaurants",
    icon: "/vendor_logo.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.platoos.vendor&pcampaignid=web_share",
  },
  {
    name: "Delito",
    tagline: "For Customers",
    icon: "/delito_logo.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.platoos.customer",
  },
  {
    name: "Delito Delivery",
    tagline: "For Delivery Partners",
    icon: "/deliveryman_logo.jpeg",
    link: "https://play.google.com/store/apps/details?id=com.platoos.delivery&pcampaignid=web_share",
  }
];

export default function DelitoApps() {
  const handleAppClick = (link: string) => {
    if(link) window.open(link, "_blank");
  };

  return (
    <section id="our-apps" className="bg-white py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* -- Heading -- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          {/* Delito brand name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-text-main tracking-tight leading-none">
            Delito
          </h2>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-4 mb-3">
            <span className="block w-12 h-[2px] bg-gradient-to-r from-transparent to-yellow" />
            <span className="block w-2 h-2 rounded-full bg-yellow" />
            <span className="block w-12 h-[2px] bg-gradient-to-l from-transparent to-yellow" />
          </div>

          {/* Tagline */}
          <p className="text-sm sm:text-base md:text-lg font-semibold tracking-[0.18em] uppercase text-text-muted leading-snug">
            Street ka Swaad.
            <br className="sm:hidden" />{" "}
            Restaurant ki Shaan.
          </p>
        </motion.div>

        {/* -- App Logos Grid -- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-row items-center justify-center gap-4 sm:gap-12 md:gap-20"
        >
          {apps.map((app) => (
            <div
              key={app.name}
              className="flex flex-col items-center justify-center cursor-pointer"
              onClick={() => handleAppClick(app.link)}
            >
              {/* App icon */}
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl sm:rounded-[2rem] overflow-hidden mb-2 sm:mb-4 bg-white border border-gray-100">
                <Image
                  src={app.icon}
                  alt={`${app.name} app icon`}
                  fill
                  sizes="128px"
                  className="object-contain rounded-2xl sm:rounded-[2rem]"
                />
              </div>

              {/* App name */}
              <h3 className="text-sm sm:text-xl md:text-2xl font-bold text-text-main mb-0.5 sm:mb-1 text-center">
                {app.name}
              </h3>

              {/* Tagline pill */}
              <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-text-muted/80 tracking-wide uppercase text-center">
                {app.tagline}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

