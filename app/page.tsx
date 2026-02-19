"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black p-6">
      <div className="max-w-md mx-auto space-y-8">

        {/* Header */}
        {/* TODO: Replace with your name and title */}
        <header className="text-center space-y-2">
          <h1 className="text-3xl font-bold mt-12">Your Name</h1>
          <p className="text-gray-500">Your Title</p>
        </header>

        {/* Bio */}
        {/* TODO: Edit this description and experiment with colors */}
        <section className="text-center text-gray-600 text-sm">
          <p>
            This is your personal page. Try changing colors, spacing, and fonts
            using Tailwind classes.
          </p>

          {/* You can delete this link if you want */}
          <a
            href="https://acmcsuf.com/dev/tailwind-sp26"
            className="text-blue-500 hover:underline"
          >
            Workshop Link
          </a>
          
          <a href="https://nerdcave.com/tailwind-cheat-sheet" className="text-blue-500 hover:underline">
            Tailwind Cheat Sheet
          </a>
        </section>

        {/* Social Links */}
        {/* TODO: Customize button styles and links */}
        <section className="space-y-3">
          <a
            href="https://github.com/yourusername"
            className="block text-center py-2 rounded-lg bg-black text-white"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            className="block text-center py-2 rounded-lg border border-gray-300"
          >
            LinkedIn
          </a>
        </section>

        <hr />

        {/* Cards */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Build Here</h2>

          {/* TODO: Level 1 — Style a card (colors, shadows, rounded corners) */}
          <div className="p-4 border rounded-lg">
            <p className="text-sm text-gray-500">
              Turn this into a styled card using Tailwind.
            </p>
          </div>

          {/* TODO: Level 2 — Duplicate cards and use flex or grid */}
          <div className="p-4 border rounded-lg">
            <p className="text-sm text-gray-500">
              Duplicate this card and place them side-by-side.
            </p>
          </div>

          {/* TODO: Level 3 — Add your own ideas (images, hover effects, layout) */}
          <div className="p-4 border rounded-lg">
            <p className="text-sm text-gray-500">
              Customize this section however you want.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
