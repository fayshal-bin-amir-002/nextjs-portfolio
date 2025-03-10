"use client";

import SectionTitle from "@/components/shared/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Code,
  Monitor,
  Search,
  Paintbrush,
  Server,
  Database,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Frontend Development",
    description:
      "Building modern, responsive UIs using React, Next.js, and Tailwind CSS.",
    icon: <Monitor size={32} className="text-main" />,
  },
  {
    title: "Full-Stack Development",
    description: "Creating scalable web applications with the MERN stack.",
    icon: <Code size={32} className="text-main" />,
  },
  {
    title: "Website Optimization",
    description: "Improving SEO and performance for a better user experience.",
    icon: <Search size={32} className="text-main" />,
  },
  {
    title: "UI/UX Design",
    description: "Designing clean, modern, and user-friendly interfaces.",
    icon: <Paintbrush size={32} className="text-main" />,
  },
  {
    title: "API Development",
    description:
      "Developing and integrating robust RESTful APIs for seamless communication systems.",
    icon: <Server size={32} className="text-main" />,
  },
  {
    title: "Database Management",
    description:
      "Designing and optimizing databases for efficient data storage and retrieval.",
    icon: <Database size={32} className="text-main" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ServiceSection = () => {
  return (
    <section>
      <div className="container mx-auto text-center mb-10 md:mb-16 lg:mb-20">
        <SectionTitle title="My Services" />
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.3 }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="p-6 hover:shadow-lg transition">
                <CardHeader className="flex items-center justify-center">
                  {service.icon}
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-lg font-semibold">
                    {service.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;
