import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, Phone } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold"
        >
          Anik Baidya
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-lg"
        >
          SDET | QA Engineer | Automation Tester
        </motion.p>
        <Button className="mt-6 rounded-2xl">View Projects</Button>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-3xl font-semibold mb-6"
        >
          About Me
        </motion.h2>
        <p className="text-gray-600 leading-relaxed">
          Dedicated QA Engineer with experience in Selenium, Cypress, and Postman. Skilled in
          designing test cases, automation frameworks, and ensuring high-quality software
          delivery. Passionate about continuous learning and modern technologies like AI.
        </p>
      </section>

      {/* Skills */}
      <section className="py-20 bg-gray-50 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {["Java", "JavaScript", "Python", "Selenium", "Cypress", "Postman", "Jenkins", "Git"].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="rounded-2xl shadow-md">
                <CardContent className="p-6 text-center">{skill}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "E-Commerce Testing",
              desc: "Automated 50+ test cases, reduced manual effort by 30%."
            },
            {
              title: "OrangeHRM Automation",
              desc: "Cypress-based testing with POM and bug tracking."
            }
          ].map((proj, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }}>
              <Card className="rounded-2xl shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold">{proj.title}</h3>
                  <p className="text-gray-600 mt-2">{proj.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 bg-gray-50 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Experience</h2>
        <div className="max-w-3xl mx-auto">
          <Card className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">QA Engineer</h3>
              <p className="text-gray-600">Underscore Technology Pvt Ltd</p>
              <p className="text-sm text-gray-500">Mar 2025 - Apr 2026</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <div className="flex justify-center gap-6">
          <a href="mailto:anik.baidya@hotmail.com"><Mail /></a>
          <a href="tel:8927936036"><Phone /></a>
          <a href="https://github.com/anikb6036"><Github /></a>
        </div>
      </section>
    </div>
  );
}
