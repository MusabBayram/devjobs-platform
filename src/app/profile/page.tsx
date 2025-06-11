/* eslint-disable @next/next/no-img-element */
export default function ProfilePage() {
  return (
    <main className="max-w-5xl mx-auto p-4">
      <section className="bg-white dark:bg-zinc-900 shadow rounded-lg overflow-hidden">
        <div className="h-36 bg-gray-200 dark:bg-zinc-800"></div>
        <div className="flex items-center space-x-4 px-6 -mt-10">
          <img
            src="/avatar-placeholder.png"
            alt="Profile"
            className="w-20 h-20 rounded-full border-4 border-white dark:border-zinc-900"
          />
          <div>
            <h1 className="text-xl font-bold dark:text-white">
              Musab (Bahadır) Bayram
            </h1>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Software Engineer
            </p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              İnegöl, Bursa, Türkiye •{" "}
              <a href="#" className="text-blue-500">
                Contact Information
              </a>
            </p>
            <a
              href="https://www.musabbayram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-sm"
            >
              www.musabbayram.com
            </a>
          </div>
        </div>
        <div className="px-6 py-4">
          <button className="bg-blue-600 text-white px-4 py-1 rounded-full mr-2">
            Open
          </button>
          <button className="border border-zinc-300 dark:border-zinc-700 px-4 py-1 rounded-full mr-2">
            Add Profile Section
          </button>
          <button className="border border-zinc-300 dark:border-zinc-700 px-4 py-1 rounded-full">
            Resources
          </button>
        </div>
      </section>
      <section className="mt-6 bg-white dark:bg-zinc-900 shadow rounded-lg p-4">
        <h2 className="font-semibold text-lg mb-2 dark:text-white">
          Open to Work
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Looking for Frontend and Software Developer roles
        </p>
      </section>

      <section className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          {/* Main Content */}
          <div className="bg-white dark:bg-zinc-900 shadow rounded-lg p-4 mb-4">
            <h2 className="font-semibold text-lg mb-2 dark:text-white">
              Recommended for You
            </h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
              Profiliniz harika görünüyor. Başardınız{" "}
              <span className="text-blue-500">Yıldız</span>
            </p>
            <div className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-lg text-sm">
              <p className="mb-2">
                Add GitHub projects to showcase your skills
              </p>
              <button className="text-blue-500 border border-blue-500 px-4 py-1 rounded-full">
                Add Project
              </button>
            </div>
          </div>
        </div>
        <aside>
          {/* Sidebar */}
          <div className="bg-white dark:bg-zinc-900 shadow rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-base mb-1 dark:text-white">
              Profile Language
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">English</p>
          </div>
          <div className="bg-white dark:bg-zinc-900 shadow rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-base mb-1 dark:text-white">
              Public Profile & URL
            </h3>
            <p className="text-sm text-blue-500">
              www.linkedin.com/in/musab-bayram
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
