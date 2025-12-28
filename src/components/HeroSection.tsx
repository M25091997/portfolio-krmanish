import Link from "next/link";
import Image from "next/image";
import ProfileImage from "./ProfileImage";


export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-violet-50 to-purple-100 dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hello, I’m <br />
            <span className="text-violet-500">Manish Kumar</span>
          </h1>

          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-lg">
            Full Stack Developer building modern, scalable and beautiful web
            applications.
          </p>

          <div className="mt-8">
            <Link href="/contact" className="btn-primary">
              Say Hello!
            </Link>
          </div>
        </div>

        {/* Image placeholder */}
        <ProfileImage/>
        {/* <div className="flex justify-center">
          <div className="w-72 h-72 rounded-2xl bg-white shadow-xl"></div>
        </div> */}
      </div>
    </section>
  );
}
