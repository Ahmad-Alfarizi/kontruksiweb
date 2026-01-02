export default function Footer() {
  return (
    <footer className="bg-[#121714] text-white pt-16 pb-8">
      <div className="layout-container flex justify-center px-4 lg:px-20">
        <div className="max-w-[1280px] w-full flex flex-col gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-white">
                CV. Fahmi Konstruksi
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Penyedia bata ringan terpercaya di Lombok Timur. Membangun
                pondasi masa depan dengan kualitas dan integritas.
              </p>
              <div className="flex gap-4 mt-2">
                <a
                  className="text-gray-400 hover:text-accent transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>
                </a>
                <a
                  className="text-gray-400 hover:text-accent transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined">mail</span>
                </a>
              </div>
            </div>
            {/* Links */}
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-white text-base">Perusahaan</h4>
              <a
                className="text-gray-400 hover:text-accent text-sm transition-colors"
                href="#"
              >
                Tentang Kami
              </a>
              <a
                className="text-gray-400 hover:text-accent text-sm transition-colors"
                href="#"
              >
                Karir
              </a>
              <a
                className="text-gray-400 hover:text-accent text-sm transition-colors"
                href="#"
              >
                Berita &amp; Artikel
              </a>
            </div>
            {/* Product */}
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-white text-base">Produk</h4>
              <a
                className="text-gray-400 hover:text-accent text-sm transition-colors"
                href="#"
              >
                Bata Ringan Standar
              </a>
              <a
                className="text-gray-400 hover:text-accent text-sm transition-colors"
                href="#"
              >
                Panel Lantai
              </a>
              <a
                className="text-gray-400 hover:text-accent text-sm transition-colors"
                href="#"
              >
                Semen Mortar
              </a>
            </div>
            {/* Contact */}
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-white text-base">Kontak</h4>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <span className="material-symbols-outlined text-accent text-lg mt-0.5">
                  location_on
                </span>
                <span>
                  Jl. Raya Lombok Timur No. 123,
                  <br />
                  Nusa Tenggara Barat, 83611
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-400 text-sm">
                <span className="material-symbols-outlined text-accent text-lg">
                  call
                </span>
                <span>+62 812 3456 7890</span>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © 2025 CV. Fahmi Konstruksi. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a className="text-gray-500 hover:text-white text-sm" href="#">
                Kebijakan Privasi
              </a>
              <a className="text-gray-500 hover:text-white text-sm" href="#">
                Syarat &amp; Ketentuan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
