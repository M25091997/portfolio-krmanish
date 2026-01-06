import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Top */}
        <div className="grid gap-10 md:grid-cols-3 items-start">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold">
                KM
              </div>
              <h3 className="text-xl font-semibold text-white">Manish Kumar</h3>
            </div>

            <p className="mt-4 text-gray-400 max-w-sm">
              Full Stack Web Developer building modern, scalable and secure web
              applications using Laravel, React, Next.js and Node.js.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-violet-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-violet-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-violet-400">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-violet-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-violet-500" />
                <span>Ranchi, Jharkhand</span>
              </li>

              <li className="flex items-center gap-3">
                <Mail size={18} className="text-violet-500" />
                <a
                  href="mailto:mk181610@gmail.com"
                  className="hover:text-violet-400 transition"
                >
                  mk181610@gmail.com
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Phone size={18} className="text-violet-500" />
                <a
                  href="tel:+91915587XXXX"
                  className="hover:text-violet-400 transition"
                >
                  +91 91558 XXXXX
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/M25091997"
                target="_blank"
                className="hover:text-violet-400"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/krmanish1812"
                target="_blank"
                className="hover:text-violet-400"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:mk181610@gmail.com"
                className="hover:text-violet-400"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Manish Kumar. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Built with ❤️ using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
