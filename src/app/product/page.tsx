import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

function Product() {
  
  const whatsapp = "https://wa.me/6287863622189";
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section with Geometric Pattern */}
      <section
        id="product"
        style={{ scrollMarginTop: "80px" }}
        className="relative py-16 lg:py-24 bg-islamic-pattern"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F2EB]/80 to-[#F5F2EB] z-0 pointer-events-none" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/30 mb-6">
              <span className="material-symbols-outlined text-accent-gold text-sm">
                verified
              </span>
              <span className="text-[#162e20] text-xs font-bold tracking-widest uppercase">
                Kualitas Terpercaya Lombok Timur
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#162e20] mb-6 leading-tight">
              Bangun Masa Depan <br />
              <span className="relative inline-block">
                <span className="relative z-10">Yang Kokoh</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-accent-gold/30 -z-0" />
              </span>
            </h2>
            <p className="text-lg text-[#162e20]/80 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Solusi bata ringan (hebel) presisi tinggi dengan teknologi modern
              untuk konstruksi yang lebih cepat, hemat, dan tahan lama.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="flex items-center justify-center gap-2 bg-[#162e20] hover:bg-[#162e20]-light text-dark px-8 py-3.5 rounded-lg font-bold shadow-lg transition-all border-b-4 border-[#162b1e]">
                <span>Lihat Katalog</span>
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </button>
            </div> */}
          </div>
          {/* Hero Image with Arch Frame */}
          <div className="flex-1 w-full max-w-[500px]">
            <div className="relative p-2 border border-accent-gold/30 rounded-t-[200px] rounded-b-lg bg-white/50 backdrop-blur-sm">
              <div className="absolute -inset-1 border border-accent-gold/20 rounded-t-[210px] rounded-b-xl -z-10 m-2" />
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-t-[190px] rounded-b-lg shadow-2xl">
                <img
                  alt="Bata Ringan Fahmi Konstruksi"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                  data-alt="Stack of clean white lightweight bricks in a construction site setting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR45wKrf8LwFq19sfrP7wO5bQrupMosZWa5JxXanD844sIc9i6SXK0wRRm9-Euc8xrQkQrR7j_ouuKq1GfEIYD6oeKGD_nAHeurZ-lskm0GABPvbROlL2MqWuPd_v1EvKXuZdUQgfHDGZ53eLP44SCez5pGZZMDjdY6TiBxZwgeWcoB8NU35PyraPJr62oGdCdU0OmknwCxurNaJVZ_IUjOI8fkzwiL9wAYgDTwVEM15hyurnJo8Ls_A6wLHKBYDCshNfD_zMQ07kr"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#162e20]/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm font-light tracking-wider opacity-90">
                    Tipe Standar
                  </p>
                  <p className="text-2xl font-bold">Bata Ringan AAC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature Grid (Ottoman Style) */}
      <section className="py-20 bg-stone-cream border-y border-accent-gold/20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent-gold text-sm font-bold tracking-[0.2em] uppercase block mb-3">
              Keunggulan Utama
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#162e20]">
              Kenapa Memilih Bata Ringan Kami?
            </h2>
            <div className="w-24 h-1 bg-accent-gold mx-auto mt-6 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-background-light p-6 rounded-xl border border-accent-gold/20 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-accent-gold/0 group-hover:bg-accent-gold transition-colors" />
              <div className="w-14 h-14 bg-[#162e20]/5 rounded-t-2xl rounded-b-lg flex items-center justify-center mb-4 text-[#162e20] group-hover:bg-[#162e20] group-hover:text-accent-gold transition-colors">
                <span className="material-symbols-outlined text-3xl">
                  flight
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#162e20] mb-2">
                Ringan &amp; Praktis
              </h3>
              <p className="text-[#162e20]/70 text-sm leading-relaxed">
                Beban struktur lebih ringan, memudahkan pengangkutan dan
                mempercepat pemasangan di lokasi proyek.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-background-light p-6 rounded-xl border border-accent-gold/20 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-accent-gold/0 group-hover:bg-accent-gold transition-colors" />
              <div className="w-14 h-14 bg-[#162e20]/5 rounded-t-2xl rounded-b-lg flex items-center justify-center mb-4 text-[#162e20] group-hover:bg-[#162e20] group-hover:text-accent-gold transition-colors">
                <span className="material-symbols-outlined text-3xl">
                  shield_moon
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#162e20] mb-2">
                Kuat &amp; Kokoh
              </h3>
              <p className="text-[#162e20]/70 text-sm leading-relaxed">
                Memiliki kuat tekan tinggi yang memenuhi standar SNI, menjamin
                keamanan bangunan jangka panjang.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-background-light p-6 rounded-xl border border-accent-gold/20 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-accent-gold/0 group-hover:bg-accent-gold transition-colors" />
              <div className="w-14 h-14 bg-[#162e20]/5 rounded-t-2xl rounded-b-lg flex items-center justify-center mb-4 text-[#162e20] group-hover:bg-[#162e20] group-hover:text-accent-gold transition-colors">
                <span className="material-symbols-outlined text-3xl">
                  square_foot
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#162e20] mb-2">
                Dimensi Presisi
              </h3>
              <p className="text-[#162e20]/70 text-sm leading-relaxed">
                Potongan yang sangat akurat meminimalkan penggunaan plester dan
                menghasilkan dinding yang rapi.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="bg-background-light p-6 rounded-xl border border-accent-gold/20 shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-accent-gold/0 group-hover:bg-accent-gold transition-colors" />
              <div className="w-14 h-14 bg-[#162e20]/5 rounded-t-2xl rounded-b-lg flex items-center justify-center mb-4 text-[#162e20] group-hover:bg-[#162e20] group-hover:text-accent-gold transition-colors">
                <span className="material-symbols-outlined text-3xl">
                  savings
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#162e20] mb-2">
                Efisien Biaya
              </h3>
              <p className="text-[#162e20]/70 text-sm leading-relaxed">
                Menghemat biaya tenaga kerja dan material semen hingga 30%
                dibandingkan bata merah konvensional.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Product Details & Specs */}
      <section className="py-20 bg-background-light relative overflow-hidden">
        {/* Decorative circle */}
        <div className="absolute -right-20 top-20 w-96 h-96 border-[40px] border-stone-cream rounded-full opacity-50 pointer-events-none" />
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-accent-gold/20">
            <div className="flex flex-col lg:flex-row">
              {/* Product Image Side */}
              <div className="lg:w-2/5 relative bg-[#162e20] p-8 flex flex-col justify-between">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]" />
                <div className="relative z-10">
                  <h3 className="text-accent-gold text-sm font-bold tracking-widest uppercase mb-1">
                    Produk Unggulan
                  </h3>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Bata Ringan AAC
                  </h2>
                  <div className="w-full aspect-square rounded-t-[120px] rounded-b-lg overflow-hidden border-4 border-accent-gold/30 shadow-lg bg-white">
                    <img
                      className="w-full h-full object-cover"
                      data-alt="Close up texture detail of aerated autoclaved concrete block"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzumAWLi_8e8zH9JQh4Ga22KLoeZkmDgvJZW_Bkg_CasD0jxP7MVHCKrAtl0bPrDhNF9_Iu2eVwTxocIoB7fJkrnsPaiEDXwZrqWvRDoNyQwEdpHxATq1IICNLDeocL299VeGKBra2soD0xaqT8WIYWaCnfavYtDeDUfHPlHIyjZLT4qXaBraaOcl5XMQHWwo7Wd4YdMagTz6Vb19IdOgnPayLyByGQfXmm6T57WXaZlK1dCbbdi3KRPILdjVp0NMNHIgwRFtcsW4e"
                    />
                  </div>
                </div>
                <div className="relative z-10 mt-8">
                  <p className="text-white/80 text-sm italic">
                    "Pilihan cerdas kontraktor profesional untuk hasil bangunan
                    maksimal."
                  </p>
                </div>
              </div>
              {/* Specs Side */}
              <div className="lg:w-3/5 p-8 lg:p-10 bg-white">
                <div className="flex items-center gap-2 mb-6">
                  <span className="material-symbols-outlined text-[#162e20]">
                    wysiwyg
                  </span>
                  <h3 className="text-2xl font-bold text-[#162e20]">
                    Spesifikasi Teknis
                  </h3>
                </div>
                <p className="text-[#162e20]/70 mb-8 leading-relaxed">
                  Bata ringan kami diproduksi dengan teknologi aerasi modern,
                  menghasilkan pori-pori mikro yang menjaga suhu ruangan tetap
                  sejuk sekaligus meredam suara.
                </p>
                {/* Specs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  <div className="border-b border-stone-cream pb-3">
                    <p className="text-[#162e20]/50 text-xs font-bold uppercase tracking-wider mb-1">
                      Dimensi (P x L)
                    </p>
                    <p className="text-[#162e20] font-bold">60 cm x 20 cm</p>
                  </div>
                  <div className="border-b border-stone-cream pb-3">
                    <p className="text-[#162e20]/50 text-xs font-bold uppercase tracking-wider mb-1">
                      Ketebalan
                    </p>
                    <p className="text-[#162e20] font-bold">7.5 cm / 10 cm</p>
                  </div>
                  <div className="border-b border-stone-cream pb-3">
                    <p className="text-[#162e20]/50 text-xs font-bold uppercase tracking-wider mb-1">
                      Berat Jenis Kering
                    </p>
                    <p className="text-[#162e20] font-bold">500 - 550 kg/m³</p>
                  </div>
                  <div className="border-b border-stone-cream pb-3">
                    <p className="text-[#162e20]/50 text-xs font-bold uppercase tracking-wider mb-1">
                      Kuat Tekan
                    </p>
                    <p className="text-[#162e20] font-bold">&gt; 4.0 N/mm²</p>
                  </div>
                  <div className="border-b border-stone-cream pb-3">
                    <p className="text-[#162e20]/50 text-xs font-bold uppercase tracking-wider mb-1">
                      Isi Per Kubik (7.5 cm)
                    </p>
                    <p className="text-[#162e20] font-bold">111 Pcs</p>
                  </div>
                  <div className="border-b border-stone-cream pb-3">
                    <p className="text-[#162e20]/50 text-xs font-bold uppercase tracking-wider mb-1">
                      Isi Per Kubik (10 cm)
                    </p>
                    <p className="text-[#162e20] font-bold">83 Pcs</p>
                  </div>
                </div>
                <div className="mt-10 pt-6 border-t border-dashed border-[#162e20]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-[#162e20] font-bold">
                      Butuh ukuran khusus?
                    </p>
                    <p className="text-xs text-[#162e20]/60">
                      Hubungi kami untuk pemesanan custom.
                    </p>
                  </div>
                  <a href={whatsapp} target="_blank" rel="noreferrer">
                    <button className="w-full sm:w-auto bg-[#121714] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#162e20] transition-colors flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-accent-gold text-lg">
                        chat
                      </span>
                      Konsultasi Gratis
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
    </main>
  );
}

export default Product;
