import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            Get In <span className="text-violet-500">Touch</span>
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind, job opportunity, or just want to say hello?
            I’d love to hear from you.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Contact Information
            </h2>

            <div className="space-y-6 text-gray-600 dark:text-gray-400">
                  <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-violet-500" />
                <span>Ranchi, Jharkhand</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-violet-500" />
                <a
                  href="mailto:mk181610@gmail.com"
                  className="hover:text-violet-500 transition"
                >
                  mk181610@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-violet-500" />
                <a
                  href="tel:+91915587XXXX"
                  className="hover:text-violet-500 transition"
                >
                  +91 91558 XXXXX
                </a>
              </li>
            </ul>
             
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-4">
              <a href="https://github.com/M25091997" target="_blank" className="text-gray-600 hover:text-violet-500">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/krmanish1812" target="_blank" className="text-gray-600 hover:text-violet-500">
                LinkedIn
              </a>
              <a href="https://portfolio-krmanish1812.vercel.app" target="_blank" className="text-gray-600 hover:text-violet-500">
                Portfolio
              </a>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8">
            <form className="space-y-6">

              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-violet-500 outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-violet-500 outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-violet-500 outline-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 rounded-lg transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
