export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-sans">
        <header className="bg-[#f5bc41] p-5 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold uppercase">InsideBU</h1>
            <nav className="space-x-4 font-semibold">
              <a href="/outstatic" className="bg-black text-white px-4 py-2 rounded shadow">Reporter Login</a>
            </nav>
          </div>
        </header>
        <main className="container mx-auto mt-10 p-4">{children}</main>
        <footer className="bg-gray-100 p-10 mt-20 text-center">
          <p>© 2026 InsideBU - Student News Platform</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://instagram.com/inside_bu_">Instagram</a>
            <a href="https://youtube.com/InsideBU">YouTube</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
