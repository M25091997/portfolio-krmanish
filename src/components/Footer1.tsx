export default function Footer()
{
    return(
        <footer className="bg-white/80 text-gray-900 dark:bg-gray-900 dark:text-gray-300 border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8 text-center">
        <p>© {new Date().getFullYear()} Manish Kumar. All rights reserved.</p>
      </div>
    </footer>
    )
}