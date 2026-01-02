import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="about" style={{ scrollMarginTop: '80px' }} className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-pattern-islamic pointer-events-none" />
        <div className="layout-container flex justify-center px-4 lg:px-20">
          <div className="max-w-[1280px] w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div className="flex flex-col gap-6 z-10 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand w-fit border border-[#162e20]/10">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-xs font-bold text-[#162e20] uppercase tracking-wider">
                  Est. 2025 Lombok Timur
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-[#121714] leading-[1.1] tracking-tight">
                Membangun Masa Depan{" "}
                <span className="text-[#162e20] relative inline-block">
                  Lombok Timur
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-2 text-accent opacity-60"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 10"
                  >
                    <path
                      d="M0 5 Q 50 10 100 5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    />
                  </svg>
                </span>
              </h1>
              <p className="text-lg text-[#5a6b60] leading-relaxed max-w-xl">
                CV. Fahmi Konstruksi hadir sebagai solusi material bangunan
                modern. Kami memadukan kekuatan struktur dengan keindahan
                estetika untuk setiap hunian impian Anda.
              </p>
              {/* <div className="flex flex-wrap gap-4 pt-2">
                <button className="bg-[#162e20] hover:bg-[#162e20]-light text-white px-7 py-3 rounded-lg font-bold shadow-lg shadow-[#162e20]/20 transition-all transform hover:-translate-y-0.5">
                  Lihat Katalog
                </button>
              </div> */}
            </div>
            {/* Visual Content */}
            <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
              {/* Decorative Circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-sand rounded-full opacity-50 blur-3xl -z-10" />
              {/* Main Image in Arch */}
              <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden border-turkish-arch shadow-2xl border-[6px] border-white">
                <div className="absolute inset-0 bg-gradient-to-t from-[#162e20]/60 to-transparent z-10" />
                <div
                  className="w-full h-full bg-cover bg-center"
                  data-alt="Modern construction site with intricate archway silhouettes in the foreground"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBnq8EpLisucxLxmsV0dAJTMxsgfKGGZqldGzsx2CCenHGy-rjM_gwBPvg3rdnB-q89sfHoGNzT2_sr1DNKKE18np_omPJ-Oqi4qJlxvfZVS4MQrWvbQOdfGW7mRjT0DkdKqtjDbYxkaVWSnyjn8B33fZs8LlpNONM89tKebaD6kWmAo1EWMHlQxtaNyZp1UHm-TLlcmcKNiQaIogAejPEd91XmUcvgMhFwgcdVwDcnu4OXZxyKDNJ_UVn5bz8qPuNnJK51hd3AK4Hu")',
                  }}
                ></div>
                <div className="absolute bottom-6 left-6 z-20 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-accent">
                      verified
                    </span>
                    <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                      Kualitas Premium
                    </span>
                  </div>
                  <p className="text-xl font-bold">Bata Ringan Terbaik</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section className="relative py-20 bg-[#162e20] overflow-hidden">
        {/* Background Texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#c5a065 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        ></div>
        <div className="layout-container flex justify-center px-4 lg:px-20 relative z-10">
          <div className="max-w-[1280px] w-full grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Visual Frame */}
            <div className="relative flex justify-center lg:justify-start">
              {/* The Arch Frame Container */}
              <div className="relative w-full max-w-md">
                {/* Back decorative border */}
                <div className="absolute inset-0 border-2 border-accent/30 border-turkish-arch translate-x-4 translate-y-4" />
                {/* Main Image Container */}
                <div className="relative w-full aspect-[3/4] bg-sand border-turkish-arch overflow-hidden shadow-2xl">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform hover:scale-105 duration-700"
                    data-alt="Close up of sturdy brick construction architecture with elegant lighting"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC3vEq2FGwB1hOXb5QeK19b3rigVEGeDw_pNcMRpfwbhwunbvaoMkRelWo0FzvlqvCtH4O_d2LZ2cJeZ_Zgzafw53Cm9FeF_zG17mipZRCnwQ8H2B_REe_8NjSOz-hzKO5iv-e169kp7zztDjIUFmM2Tft8QZd3hf51w2uENSOJvSqZEipM2Ju8q3L7MriCE6qD8ZVDvEm3B0DVqzv_zrsgWUImhoJlXaiVrhzN6hZy1oneZOuhcc97nT1JG39cHhSGeyxsDeZ9bRl1")',
                    }}
                  ></div>
                  {/* Overlay badge */}
                  <div className="absolute bottom-0 w-full bg-background-light/95 backdrop-blur py-4 px-6 border-t border-accent/20">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-[#5a6b60] font-bold uppercase tracking-wider">
                          Lokasi Produksi
                        </p>
                        <p className="text-[#162e20] font-bold">
                          Lombok Timur, NTB
                        </p>
                      </div>
                      <div className="bg-[#162e20]/10 p-2 rounded-full">
                        <span className="material-symbols-outlined text-[#162e20]">
                          location_on
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right: Narrative */}
            <div className="flex flex-col gap-8 text-white">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="h-px w-12 bg-accent" />
                  <h3 className="text-accent font-bold uppercase tracking-widest text-sm">
                    Tentang Kami
                  </h3>
                </div>
                <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                  Pondasi Kokoh dengan Sentuhan Elegan
                </h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  <strong className="text-white">CV. Fahmi Konstruksi</strong>{" "}
                  didirikan pada tahun 2025 dengan visi sederhana: menyediakan
                  material konstruksi yang tidak hanya kuat, tetapi juga
                  menghargai nilai estetika.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  Terinspirasi oleh ketahanan arsitektur klasik dan inovasi
                  modern, kami memproduksi bata ringan berkualitas tinggi
                  langsung dari jantung Lombok Timur. Setiap bata yang kami
                  hasilkan adalah janji keamanan dan keindahan untuk bangunan
                  Anda.
                </p>
              </div>
              {/* Stats / Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="bg-accent/20 p-2 rounded-lg text-accent">
                    <span className="material-symbols-outlined">factory</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">
                      Produksi Lokal
                    </h4>
                    <p className="text-white/60 text-sm">
                      Mendukung ekonomi daerah dengan standar industri global.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="bg-accent/20 p-2 rounded-lg text-accent">
                    <span className="material-symbols-outlined">security</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">
                      Kualitas Terjamin
                    </h4>
                    <p className="text-white/60 text-sm">
                      Material presisi, ringan, dan tahan gempa.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <button className="flex items-center gap-2 text-accent font-bold hover:text-white transition-colors group">
                  <span>Pelajari Lebih Lanjut</span>
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Section (Reused & Themed) */}
      <section className="py-20 bg-sand">
        <div className="layout-container flex justify-center px-4 lg:px-20">
          <div className="max-w-[1280px] w-full flex flex-col gap-12">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#162e20]">
                Keunggulan Kami
              </h2>
              <p className="text-[#5a6b60]">
                Komitmen kami untuk memberikan pondasi terbaik bagi setiap
                bangunan Anda di Lombok dan sekitarnya.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="group bg-white p-8 rounded-xl border border-[#d7e0da] shadow-sm hover:shadow-md hover:border-accent transition-all duration-300">
                <div className="w-12 h-12 bg-[#162e20]/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#162e20] group-hover:text-white transition-colors text-[#162e20]">
                  <span className="material-symbols-outlined text-[28px]">
                    local_shipping
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#162e20] mb-3">
                  Pengiriman Cepat
                </h3>
                <p className="text-[#5a6b60]">
                  Layanan logistik terpadu di seluruh Lombok Timur memastikan
                  material tiba tepat waktu di proyek Anda.
                </p>
              </div>
              {/* Card 2 */}
              <div className="group bg-white p-8 rounded-xl border border-[#d7e0da] shadow-sm hover:shadow-md hover:border-accent transition-all duration-300">
                <div className="w-12 h-12 bg-[#162e20]/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#162e20] group-hover:text-white transition-colors text-[#162e20]">
                  <span className="material-symbols-outlined text-[28px]">
                    architecture
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#162e20] mb-3">
                  Presisi Tinggi
                </h3>
                <p className="text-[#5a6b60]">
                  Potongan bata yang rapi dan ukuran presisi memudahkan
                  pemasangan dan menghemat penggunaan perekat.
                </p>
              </div>
              {/* Card 3 */}
              <div className="group bg-white p-8 rounded-xl border border-[#d7e0da] shadow-sm hover:shadow-md hover:border-accent transition-all duration-300">
                <div className="w-12 h-12 bg-[#162e20]/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#162e20] group-hover:text-white transition-colors text-[#162e20]">
                  <span className="material-symbols-outlined text-[28px]">
                    eco
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#162e20] mb-3">
                  Ramah Lingkungan
                </h3>
                <p className="text-[#5a6b60]">
                  Proses produksi yang efisien energi dan material yang aman
                  bagi lingkungan sekitar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-[#ebefed]">
        <div className="layout-container flex justify-center px-4 lg:px-20">
          <div className="bg-[#162e20] rounded-2xl overflow-hidden w-full max-w-[1280px] relative">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent opacity-10 rounded-full translate-y-1/3 -translate-x-1/4" />
            <div className="flex flex-col md:flex-row items-center justify-between p-10 lg:p-16 gap-10 relative z-10">
              <div className="flex flex-col gap-4 max-w-2xl">
                <h2 className="text-3xl lg:text-4xl font-bold text-white">
                  Siap Membangun Bersama Kami?
                </h2>
                <p className="text-white/80 text-lg">
                  Konsultasikan kebutuhan bata ringan Anda hari ini. Dapatkan
                  penawaran terbaik khusus untuk wilayah Lombok Timur.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <a href="https://wa.me/6287863622189" target="_blank" rel="noreferrer">
                <button className="bg-[#b08d55] hover:bg-[#b08d55] text-[#162e20] font-bold px-8 py-4 rounded-lg transition-colors whitespace-nowrap w-full sm:w-auto flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">call</span>
                  Hubungi via WhatsApp
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
