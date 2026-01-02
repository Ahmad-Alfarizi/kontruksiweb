import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

function Profile() {
  return (
    <>
      {/* Navigation */}
      {/* Hero Section */}
      <div id="profile" className="relative w-full h-[600px] flex flex-col justify-center items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          data-alt="Detailed view of a construction site with brickwork and scaffolding"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDYOO-ex3fy2DGYGzO5ag8-hoYeeTdjZixTvcVuDDupJ-MTK9iFb3KQh5q-4qwXRWMOWqzqBCWd24666EvBUj6JaT74YY0cFsVAPn2CZczbabgDNinkTrDWlwLTFBZZLuTgnKtm3YkR-R0bPhXX5qrOH7I1Ql5mIQ9BX0z2UmoR2QS-p_Ww3d4wKPj2i89xXmnr6R8BN45xRQwEinGlf94VTaMxh7h4DXOiZo11v9IOzS_sBbd5tgSnLUu5JQ-cKIPBttu72259jhBN")',
          }}
        ></div>
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#162e20]/95 via-[#162e20]/80 to-[#162e20]/60 mix-blend-multiply" />
        <div className="absolute inset-0 z-10 bg-islamic-pattern opacity-30" />
        <div className="relative z-20 max-w-[960px] px-6 text-center flex flex-col items-center gap-6">
          <div className="w-16 h-1 bg-accent-gold mb-2" />
          <h1 className="text-sand-beige text-white text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-xl">
            Membangun Pondasi
            <br />
            Kualitas &amp; Kepercayaan
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            CV. Fahmi Konstruksi — Mitra terpercaya Anda dalam penyediaan bata
            ringan berkualitas tinggi di Lombok Timur. Kokoh, Presisi, dan
            Elegan.
          </p>
        </div>
        {/* Bottom Arch Decoration */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] rotate-180 text-sand-beige z-20">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[60px]"
            data-name="Layer 1"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="shape-fill"
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="currentColor"
              opacity=".25"
            />
            <path
              className="shape-fill"
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              fill="currentColor"
              opacity=".5"
            />
            <path
              className="shape-fill"
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
      {/* Main Content: Official Data */}
      <div className="relative w-full bg-sand-beige py-20 px-4 md:px-10">
        <div className="layout-container max-w-[1100px] mx-auto flex flex-col gap-12">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-3 text-[#162e20] opacity-60">
              <span className="h-px w-12 bg-[#162e20]" />
              <span className="text-sm font-semibold tracking-widest uppercase">
                Profil Perusahaan
              </span>
              <span className="h-px w-12 bg-[#162e20]" />
            </div>
            <h2 className="text-[#162e20] text-4xl font-serif font-bold relative inline-block">
              Data Resmi CV. Fahmi Konstruksi
              {/* Decorative curve underneath */}
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-accent-gold rounded-full" />
            </h2>
            <p className="text-gray-600 mt-2 max-w-2xl">
              Informasi legalitas dan struktur organisasi perusahaan sebagai
              wujud komitmen kami terhadap transparansi dan profesionalisme.
            </p>
          </div>
          {/* Modern Document Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Nama Usaha */}
            <div className="group relative bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#162e20]" />
              <div className="p-6 pt-8 flex flex-col items-center text-center h-full">
                {/* Arch Icon Container */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-sand-beige rounded-full flex items-center justify-center border-2 border-accent-gold text-[#162e20] group-hover:bg-[#162e20] group-hover:text-accent-gold transition-colors duration-300">
                    <span className="material-symbols-outlined text-3xl">
                      badge
                    </span>
                  </div>
                </div>
                <h3 className="text-[#162e20] font-serif font-bold text-lg mb-2">
                  Nama Usaha
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Identitas resmi yang terdaftar
                </p>
                <div className="mt-auto w-full py-3 bg-gray-50 rounded-lg border border-gray-100 group-hover:border-accent-gold/30 transition-colors">
                  <span className="text-[#162e20] font-bold text-base">
                    CV. Fahmi Konstruksi
                  </span>
                </div>
              </div>
            </div>
            {/* Card 2: Bidang Usaha */}
            <div className="group relative bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#162e20]" />
              <div className="p-6 pt-8 flex flex-col items-center text-center h-full">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-sand-beige rounded-full flex items-center justify-center border-2 border-accent-gold text-[#162e20] group-hover:bg-[#162e20] group-hover:text-accent-gold transition-colors duration-300">
                    <span className="material-symbols-outlined text-3xl">
                      architecture
                    </span>
                  </div>
                </div>
                <h3 className="text-[#162e20] font-serif font-bold text-lg mb-2">
                  Bidang Usaha
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Fokus operasional perusahaan
                </p>
                <div className="mt-auto w-full py-3 bg-gray-50 rounded-lg border border-gray-100 group-hover:border-accent-gold/30 transition-colors">
                  <span className="text-[#162e20] font-bold text-base">
                    Produksi Bata Ringan
                  </span>
                </div>
              </div>
            </div>
            {/* Card 3: Bentuk Usaha */}
            <div className="group relative bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#162e20]" />
              <div className="p-6 pt-8 flex flex-col items-center text-center h-full">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-sand-beige rounded-full flex items-center justify-center border-2 border-accent-gold text-[#162e20] group-hover:bg-[#162e20] group-hover:text-accent-gold transition-colors duration-300">
                    <span className="material-symbols-outlined text-3xl">
                      gavel
                    </span>
                  </div>
                </div>
                <h3 className="text-[#162e20] font-serif font-bold text-lg mb-2">
                  Bentuk Usaha
                </h3>
                <p className="text-gray-600 text-sm mb-4">Jenis badan hukum</p>
                <div className="mt-auto w-full py-3 bg-gray-50 rounded-lg border border-gray-100 group-hover:border-accent-gold/30 transition-colors">
                  <span className="text-[#162e20] font-bold text-base">
                    Commanditaire Vennootschap
                  </span>
                </div>
              </div>
            </div>
            {/* Card 4: Pemilik */}
            <div className="group relative bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#162e20]" />
              <div className="p-6 pt-8 flex flex-col items-center text-center h-full">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-sand-beige rounded-full flex items-center justify-center border-2 border-accent-gold text-[#162e20] group-hover:bg-[#162e20] group-hover:text-accent-gold transition-colors duration-300">
                    <span className="material-symbols-outlined text-3xl">
                      person_apron
                    </span>
                  </div>
                </div>
                <h3 className="text-[#162e20] font-serif font-bold text-lg mb-2">
                  Pemilik
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Penanggung jawab utama
                </p>
                <div className="mt-auto w-full py-3 bg-gray-50 rounded-lg border border-gray-100 group-hover:border-accent-gold/30 transition-colors">
                  <span className="text-[#162e20] font-bold text-base">
                    Bpk. Iswan Fahmi
                  </span>
                </div>
              </div>
            </div>
            {/* Card 5: Tim Awal */}
            <div className="group relative bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#162e20]" />
              <div className="p-6 pt-8 flex flex-col items-center text-center h-full">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-sand-beige rounded-full flex items-center justify-center border-2 border-accent-gold text-[#162e20] group-hover:bg-[#162e20] group-hover:text-accent-gold transition-colors duration-300">
                    <span className="material-symbols-outlined text-3xl">
                      groups
                    </span>
                  </div>
                </div>
                <h3 className="text-[#162e20] font-serif font-bold text-lg mb-2">
                  Tim Awal
                </h3>
                <p className="text-gray-600 text-sm mb-4">Karyawan perintis</p>
                <div className="mt-auto w-full py-3 bg-gray-50 rounded-lg border border-gray-100 group-hover:border-accent-gold/30 transition-colors">
                  <span className="text-[#162e20] font-bold text-base">
                    6 Orang Tenaga Ahli
                  </span>
                </div>
              </div>
            </div>
            {/* Card 6: Lokasi */}
            <div className="group relative bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-[#162e20]" />
              <div className="p-6 pt-8 flex flex-col items-center text-center h-full">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-sand-beige rounded-full flex items-center justify-center border-2 border-accent-gold text-[#162e20] group-hover:bg-[#162e20] group-hover:text-accent-gold transition-colors duration-300">
                    <span className="material-symbols-outlined text-3xl">
                      location_on
                    </span>
                  </div>
                </div>
                <h3 className="text-[#162e20] font-serif font-bold text-lg mb-2">
                  Lokasi
                </h3>
                <p className="text-gray-600 text-sm mb-4">Basis operasional</p>
                <div className="mt-auto w-full py-3 bg-gray-50 rounded-lg border border-gray-100 group-hover:border-accent-gold/30 transition-colors">
                  <span className="text-[#162e20] font-bold text-base">
                    Lombok Timur, NTB
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Detailed Description List (Ornamental Style) */}
          <div className="mt-8 bg-white rounded-2xl p-8 border border-accent-gold/20 shadow-lg relative overflow-hidden">
            {/* Watermark Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#162e20]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            <h3 className="text-2xl font-serif font-bold text-[#162e20] mb-8 border-b pb-4 border-gray-100">
              Detail Legalitas &amp; Operasional
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 relative z-10">
              <div className="flex flex-col gap-1">
                <p className="text-gray-500 text-sm uppercase tracking-wider">
                  Nama Legal Perusahaan
                </p>
                <p className="text-[#162e20] text-lg font-medium border-l-4 border-accent-gold pl-3">
                  CV. Fahmi Konstruksi
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-gray-500 text-sm uppercase tracking-wider">
                  Sektor Industri
                </p>
                <p className="text-[#162e20] text-lg font-medium border-l-4 border-accent-gold pl-3">
                  Manufaktur Bahan Bangunan (Bata Ringan)
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-gray-500 text-sm uppercase tracking-wider">
                  Jenis Badan Usaha
                </p>
                <p className="text-[#162e20] text-lg font-medium border-l-4 border-accent-gold pl-3">
                  Commanditaire Vennootschap (CV)
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-gray-500 text-sm uppercase tracking-wider">
                  Pemilik Utama
                </p>
                <p className="text-[#162e20] text-lg font-medium border-l-4 border-accent-gold pl-3">
                  Bpk. Iswan Fahmi
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-gray-500 text-sm uppercase tracking-wider">
                  Lokasi Operasional
                </p>
                <p className="text-[#162e20] text-lg font-medium border-l-4 border-accent-gold pl-3">
                  Lombok Timur, Nusa Tenggara Barat
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-gray-500 text-sm uppercase tracking-wider">
                  Jumlah Personil Awal
                </p>
                <p className="text-[#162e20] text-lg font-medium border-l-4 border-accent-gold pl-3">
                  6 Orang Tenaga Ahli
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Ornamental Divider */}
      <div className="h-16 w-full bg-[#162e20] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-islamic-pattern opacity-10" />
        <div className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-accent-gold to-transparent" />
        <div className="absolute bg-[#162e20] p-2 border-2 border-accent-gold rounded-full">
          <span className="material-symbols-outlined text-accent-gold">
            star
          </span>
        </div>
      </div>
      {/* Footer */}
    </>
  );
}

export default Profile;
