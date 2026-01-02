export default function Hero() {
  const whatsapp = "https://wa.me/6287863622189";
  return (
    <header
      id="home"
      style={{ scrollMarginTop: "80px" }}
      className="relative w-full min-h-[calc(100vh-80px)] flex items-center bg-sand-beige/30 dark:bg-background-dark"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Islamic Pattern Overlay */}
        <div className="absolute inset-0 w-full h-full bg-islamic-pattern opacity-100 z-0" />
        {/* Left Gradient Blob */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold-accent/10 rounded-full blur-3xl z-0" />
        {/* Right Gradient Blob */}
        <div className="absolute top-1/2 -right-24 w-[500px] h-[500px] bg-[#162e20]/5 rounded-full blur-3xl z-0" />
      </div>
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="flex flex-col gap-6 lg:pr-8 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-[#162e20] dark:text-gold-accent font-bold text-sm tracking-widest uppercase mb-2">
              <span className="w-8 h-[2px] bg-gold-accent" />
              <span>Terpercaya Sejak 2010</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#121714] dark:text-white leading-[1.15] tracking-tight">
              Solusi{" "}
              <span className="text-[#162e20] dark:text-emerald-400 relative inline-block">
                Bata Ringan
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-gold-accent opacity-40"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 10"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={4}
                  />
                </svg>
              </span>{" "}
              <br className="hidden lg:block" /> Berkualitas untuk Konstruksi
              Modern
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-display max-w-2xl mx-auto lg:mx-0">
              Produksi dan penjualan bata ringan premium oleh CV. Fahmi
              Konstruksi. Kami membangun kepercayaan dengan material yang kokoh,
              presisi, dan tahan lama untuk masa depan hunian Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
              <a href={whatsapp} target="_blank" rel="noreferrer">
                <button className="flex items-center justify-center gap-2 px-8 py-4 bg-[#162e20] text-white rounded-lg font-bold text-base shadow-lg hover:bg-[#162e20] hover:shadow-[#162e20]/20 transition-all transform hover:-translate-y-0.5">
                  <span>Hubungi Kami</span>
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </button>
              </a>
              {/* <button className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-[#162e20] text-[#162e20] dark:text-white dark:border-white rounded-lg font-bold text-base hover:bg-[#162e20]/5 dark:hover:bg-white/10 transition-all">
                <span>Lihat Produk</span>
                <span className="material-symbols-outlined text-sm">
                  grid_view
                </span>
              </button> */}
            </div>
            {/* Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700 grid grid-cols-3 gap-4">
              <div className="text-center lg:text-left">
                <h3 className="font-serif text-2xl font-bold text-[#162e20] dark:text-white">
                  50K+
                </h3>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mt-1">
                  Proyek Selesai
                </p>
              </div>
              <div className="text-center lg:text-left border-l border-gray-200 dark:border-gray-700 pl-4">
                <h3 className="font-serif text-2xl font-bold text-[#162e20] dark:text-white">
                  100%
                </h3>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mt-1">
                  Kualitas Terjamin
                </p>
              </div>
              <div className="text-center lg:text-left border-l border-gray-200 dark:border-gray-700 pl-4">
                <h3 className="font-serif text-2xl font-bold text-[#162e20] dark:text-white">
                  24/7
                </h3>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mt-1">
                  Layanan Cepat
                </p>
              </div>
            </div>
          </div>
          {/* Hero Image Composition */}
          <div className="relative order-1 lg:order-2 flex justify-center items-center">
            {/* Decorative Arch Frame */}
            <div className="relative w-full max-w-[500px] aspect-[4/5] mx-auto">
              {/* Main Image with Arch Mask */}
              <div className="absolute inset-0 z-20 overflow-hidden rounded-t-full rounded-b-lg shadow-2xl border-4 border-white dark:border-[#2d3b32]">
                <div className="w-full h-full bg-gray-200 relative">
                  <img
                    alt="Professional construction worker inspecting high quality lightweight bricks on a sunny construction site"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt9GXW6JfOMmuzhHLN-8Z2wpveDlgB7QXb_RGR2vdFSELQr_12prd1v0k-ZYfcwbI7iN__ZxTSN2n5jg7mk3LaSPjxKylZ0DMKbsGZgsvBFQXjLbmfFRaHf4IQoGc8G8mC0QKcPGrRaFzP6oQ5X0r3dVj8mQHk4ZRZ94currIH9nuSmvJXy2tMn9aTHmgovGTrjsNx75Zdv-YMvyraBD_It9_pCsS3i-5HHlJYKlOT50WQk8vi67WEoox6cTKlR_gqONdQ3Sj-ijbd"
                  />
                  {/* Gradient Overlay on Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#162e20]/60 to-transparent" />
                  {/* Floating Badge on Image */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="bg-gold-accent/20 p-2 rounded-full text-[#162e20]">
                        <span className="material-symbols-outlined">
                          verified
                        </span>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-bold uppercase">
                          Standar SNI
                        </p>
                        <p className="text-sm font-serif font-bold text-[#121714]">
                          Kualitas Beton Ringan Terbaik
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Back Pattern Circle (Halos) */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-gold-accent/30 rounded-full z-10 animate-pulse" />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-gold-accent/10 rounded-full z-0" />
              {/* Geometric decorative element */}
              <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 flex flex-col gap-2 z-30 hidden lg:flex">
                <div className="w-2 h-2 rounded-full bg-[#162e20]" />
                <div className="w-2 h-2 rounded-full bg-gold-accent" />
                <div className="w-2 h-2 rounded-full bg-[#162e20]/40" />
                <div className="w-2 h-2 rounded-full bg-gold-accent/40" />
                <div className="w-16 h-[2px] bg-gray-300 mt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Pattern Border */}
      <div
        className="absolute bottom-0 w-full h-3 bg-repeat-x opacity-20"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg width=\\"20\\" height=\\"12\\" viewBox=\\"0 0 20 12\\" xmlns=\\"http://www.w3.org/2000/svg\\"%3E%3Cpath d=\\"M0 12h20L10 0z\\" fill=\\"%231f3d2b\\" fill-rule=\\"evenodd\\"/%3E%3C/svg%3E")',
          backgroundSize: "20px 12px",
        }}
      />
    </header>
  );
}
