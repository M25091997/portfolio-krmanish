import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="bg-gray-50 dark:bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Let’s discuss your <span className="text-violet-500">Project</span>
          </h2>
          <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
            I’m always open to discussing new projects, creative ideas or
            opportunities to be part of your vision.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT INFO */}
          <div className="space-y-8">

            {/* Item */}
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-violet-100 dark:bg-violet-900/30">
                <MapPin className="text-violet-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  Address
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Ranchi, Jharkhand, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-violet-100 dark:bg-violet-900/30">
                <Mail className="text-violet-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  My Email
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  mk181610@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-violet-100 dark:bg-violet-900/30">
                <Phone className="text-violet-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  Call Me Now
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  +91 91558 78764
                </p>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-5 pt-4 text-violet-600 font-medium">
              <a href="#" className="hover:underline">GitHub</a>
              <a href="#" className="hover:underline">LinkedIn</a>
              <a href="#" className="hover:underline">Portfolio</a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 md:p-8">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="Name*"
                className="col-span-1 sm:col-span-1 input"
              />

              <input
                type="email"
                placeholder="Email*"
                className="col-span-1 sm:col-span-1 input"
              />

              <input
                type="text"
                placeholder="Location*"
                className="col-span-1 sm:col-span-1 input"
              />

              <input
                type="text"
                placeholder="Budget*"
                className="col-span-1 sm:col-span-1 input"
              />

              <input
                type="text"
                placeholder="Subject*"
                className="col-span-1 sm:col-span-2 input"
              />

              <textarea
                rows={4}
                placeholder="Message*"
                className="col-span-1 sm:col-span-2 input resize-none"
              />

              <button
                type="submit"
                className="col-span-1 sm:col-span-2 bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-lg font-semibold transition"
              >
                Submit →
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
