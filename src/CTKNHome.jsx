import { useState } from "react";
import { motion } from "framer-motion";

export default function CTKNHome() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="flex items-center justify-between p-6">
        <h1 className="text-2xl font-bold">CTKN</h1>
        <nav className="space-x-6">
          <a href="#shop" className="hover:text-[#00ced1]">Shop</a>
          <a href="#6ixb" className="hover:text-[#00ced1]">6ixB</a>
          <a href="#about" className="hover:text-[#00ced1]">Über CTKN</a>
          <a href="#kontakt" className="hover:text-[#00ced1]">Kontakt</a>
        </nav>
        <span className="text-xl">🛍️</span>
      </header>

      <section className="text-center py-16 bg-cover bg-center" style={{ backgroundImage: 'url(/hero-placeholder.jpg)' }}>
        <section id="shop" className="px-10 py-16 text-center bg-black text-white">
  <h2 className="text-3xl font-bold text-[#00ced1]">6ixB Hoodie – Flock Edition</h2>
  <p className="mt-4 text-gray-300">Fühl den Unterschied. Kein Druck – echtes Flock-Design mit weichem Samtgefühl.</p>
  <img 
    src="https://wwww.directupload.eu/file/d/8951/bqvbxjf3_png.htm" 
    alt="6ixB Hoodie" 
    className="mx-auto mt-6 max-w-xs rounded-2xl shadow-lg"
  />
  <a 
    href="https://www.printful.com/de/dashboard/product-templates/published/16191601/384698884?filter%5BsyncProductType%5D=all&filter%5Bsearch%5D=&filter%5Bpage%5D=1&filter%5Bstore%5D=16191601" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <button className="mt-6 bg-[#00ced1] text-black px-6 py-3 rounded-xl hover:bg-[#00b2b2] transition">
      Jetzt kaufen
    </button>
  </a>
</section>
        <motion.h2 
          className="text-5xl font-bold text-[#00ced1]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          6ixB
        </motion.h2>
        <p className="text-xl mt-4">T-Shirts und Hoodies</p>
        <button className="mt-6 bg-[#00ced1] text-black px-6 py-2 rounded hover:bg-[#00b2b2]">Shop jetzt</button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 py-16 text-center bg-[#111]">
        <div className="p-6 border rounded">
          <h3 className="text-xl text-[#00ced1] font-semibold">Hochwertige Materialien</h3>
          <p className="mt-2 text-sm text-gray-300">Unsere Produkte sind langlebig und sorgfältig verarbeitet.</p>
        </div>
        <div className="p-6 border rounded">
          <h3 className="text-xl text-[#00ced1] font-semibold">Modernes Design</h3>
          <p className="mt-2 text-sm text-gray-300">Minimalistisch, mutig und durchdacht.</p>
        </div>
        <div className="p-6 border rounded">
          <h3 className="text-xl text-[#00ced1] font-semibold">Unsere Vision</h3>
          <p className="mt-2 text-sm text-gray-300">Für alle, die ihre Kleidung mit Haltung tragen.</p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 px-10 py-16 gap-10 items-center">
        <div>
          <h4 className="text-lg font-medium">Folge uns auf Social Media</h4>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-[#00ced1] text-2xl">📸</a>
            <a href="#" className="text-[#00ced1] text-2xl">🐦</a>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-medium">Abonniere unseren Newsletter</h4>
          <div className="flex mt-4 gap-2">
            <input 
              placeholder="Email Adresse"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white text-black px-3 py-2 rounded"
            />
            <button className="bg-[#00ced1] text-black px-4 py-2 rounded hover:bg-[#00b2b2]">Anmelden</button>
          </div>
        </div>
      </section>

      <footer className="text-center py-6 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} CTKN. Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}
