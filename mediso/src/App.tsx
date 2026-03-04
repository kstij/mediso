import React from 'react';
import './index.css';

export default function App() {
  const categories = [
    { name: 'Vitamins', color: 'bg-orange-100/80 hover:bg-orange-100', text: 'text-orange-700', icon: '💊' },
    { name: 'Personal Care', color: 'bg-pink-100/80 hover:bg-pink-100', text: 'text-pink-700', icon: '🧴' },
    { name: 'Supplements', color: 'bg-green-100/80 hover:bg-green-100', text: 'text-green-700', icon: '🌿' },
    { name: 'Baby Care', color: 'bg-blue-100/80 hover:bg-blue-100', text: 'text-blue-700', icon: '👶' },
    { name: 'Ayurveda', color: 'bg-amber-100/80 hover:bg-amber-100', text: 'text-amber-700', icon: '🍃' },
    { name: 'Devices', color: 'bg-purple-100/80 hover:bg-purple-100', text: 'text-purple-700', icon: '🩺' },
  ];

  const popularProducts = [
    { name: 'CeraVe Foaming Cleanser', price: '₹450', original: '₹550', discount: '18% OFF' },
    { name: 'Optimum Nutrition Fish Oil', price: '₹1200', original: '₹1500', discount: '20% OFF' },
    { name: 'Vicks BabyRub', price: '₹150', original: '₹180', discount: '16% OFF' },
    { name: 'Revital H Supplements', price: '₹280', original: '₹350', discount: '20% OFF' },
  ];

  return (
    <div className="relative overflow-x-hidden min-h-screen bg-slate-50 font-sans selection:bg-mediso-blue selection:text-white pb-20">
      
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-blue-100/60 to-transparent -z-10 pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-300/20 blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-emerald-200/20 blur-3xl -z-10 pointer-events-none"></div>

      {/* Sticky Top Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/75 border-b border-white/50 shadow-sm transition-all duration-300">
        <nav className="flex items-center justify-between px-6 py-4 max-w-[1600px] mx-auto w-full">
          
          {/* Logo and Location wrapper */}
          <div className="flex items-center gap-6">
            
            {/* Brand Logo */}
            <div className="flex items-start cursor-pointer hover:opacity-90 transition-opacity">
              <h1 className="text-[40px] font-black italic tracking-tighter text-mediso-blue m-0 leading-none" style={{ transform: "scaleX(1.1)", transformOrigin: 'left' }}>
                MEDISO
              </h1>
              <span className="text-[10px] font-bold text-mediso-blue mt-[4px] ml-[14px]">™</span>
            </div>
            
            <div className="h-10 w-px bg-blue-200/60 hidden md:block"></div>
            
            {/* Location Details (Responsive) */}
            <div className="flex items-center gap-2.5 cursor-pointer group hidden sm:flex">
              <div className="p-2 bg-blue-50 text-mediso-blue rounded-full group-hover:bg-blue-100 transition-colors shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.242-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-[14px] font-extrabold text-slate-800 leading-tight">Delivery to <span className="text-mediso-blue">Home</span></span>
                <div className="flex items-center text-[12px] text-slate-500 font-medium">
                  <span className="truncate max-w-[140px]">B62, South City I...</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-0.5 text-mediso-blue">
                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Links Box & Actions */}
          <div className="flex items-center gap-2 lg:gap-4">
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 bg-white/60 border border-blue-100 rounded-full p-1.5 shadow-sm">
              {['Home', 'Pharmacy', 'Lab Tests', 'Consult'].map((link, i) => (
                <a key={i} href="#" className={`px-5 py-2.5 rounded-full text-[15px] font-bold transition-all ${i === 0 ? 'bg-mediso-blue text-white shadow-md' : 'text-slate-600 hover:text-mediso-blue hover:bg-blue-50/80'}`}>
                  {link}
                </a>
              ))}
            </div>

            {/* Login / Actions */}
            <div className="flex items-center gap-2 pl-2">
              <button className="hidden sm:flex items-center justify-center px-4 py-2 text-slate-600 hover:text-mediso-blue hover:bg-blue-50 rounded-full transition-colors font-bold text-[15px]">
                Login
              </button>

              <button className="flex items-center gap-2 bg-mediso-blue text-white px-6 py-2.5 rounded-full font-bold text-[16px] hover:bg-blue-700 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all whitespace-nowrap shadow-mediso-blue/30 shadow-md">
                <span className="hidden sm:inline">My Cart</span>
                <div className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-[22px] w-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="absolute -top-2 -right-2.5 bg-red-500 text-white text-[10px] min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full border-2 border-mediso-blue">
                    2
                  </span>
                </div>
              </button>
            </div>

          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="w-full flex flex-col items-center justify-center pt-24 pb-20 z-10 relative px-4 text-center">
        
        {/* Pulsing Status Badge */}
        <div className="mb-6 inline-flex items-center gap-2.5 bg-white border border-blue-100 shadow-sm px-4 py-2 rounded-full text-sm font-bold text-slate-700 animate-fade-in-up">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          Delivering right now in your area
        </div>

        {/* Dynamic Big Typography Headline */}
        <h2 className="flex flex-col lg:flex-row items-center justify-center gap-y-4 gap-x-3 text-[42px] md:text-[56px] font-extrabold italic tracking-tight text-slate-800 mb-10 flex-wrap max-w-5xl leading-[1.1]">
          <span>Your essential</span>
          
          <div className="bg-mediso-blue text-white px-6 py-2 rounded-[20px] slant-box flex items-center shadow-xl shadow-blue-900/10 border-2 border-white/20">
            <span className="text-straight align-middle">Medicine</span>
            <span className="text-straight text-4xl ml-2 drop-shadow-md">💊</span>
          </div>
          
          <span>delivered in</span>
          
          <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-2 rounded-[20px] slant-box flex items-center shadow-xl shadow-teal-900/20 border-2 border-white/20">
            <span className="text-straight align-middle">10 Mins</span>
            <span className="text-straight text-4xl ml-2 drop-shadow-md">⚡</span>
          </div>
        </h2>

        {/* Powerful Search Bar */}
        <div className="w-full max-w-4xl relative z-10 group mt-4">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-300 via-emerald-200 to-blue-400 rounded-full blur-lg opacity-25 group-hover:opacity-40 transition duration-500"></div>
          
          <div className="relative flex items-center w-full h-[76px] rounded-full border-[3px] border-white bg-white/95 shadow-2xl focus-within:ring-[4px] focus-within:ring-blue-100 transition-all pr-3 pl-3">
            
            <div className="ml-4 flex items-center justify-center p-2.5 rounded-full bg-blue-50 text-mediso-blue hidden md:flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            
            <input 
              type="text" 
              placeholder="Search for medicines, vitamins..." 
              className="w-full h-full bg-transparent text-slate-800 text-[20px] font-bold placeholder-slate-400 outline-none px-4 md:px-5"
            />

            <button className="h-[56px] px-8 bg-mediso-blue text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-md flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]">
              Search
            </button>
          </div>

          {/* Quick tags */}
          <div className="flex items-center justify-center gap-3 mt-6 flex-wrap text-[13px] font-bold text-slate-500">
            <span>Trending:</span>
            {['Paracetamol', 'Thermometer', 'Whey Protein', 'Sunscreen'].map(tag => (
              <span key={tag} className="px-3.5 py-1.5 bg-white border border-slate-200 rounded-full hover:border-mediso-blue hover:text-mediso-blue cursor-pointer transition-colors shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

      </main>

      {/* Value Propositions Strip */}
      <section className="bg-white border-y border-slate-100 py-10 mt-4 mb-20 relative">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {[
            { title: "Genuine Medicines", desc: "100% authentic sourced directly from verified brands", icon: "🛡️" },
            { title: "Superfast Delivery", desc: "Average delivery time of exactly 10-15 minutes", icon: "🚀" },
            { title: "Best Discounts", desc: "Save up to 20% on all your daily health essentials", icon: "💰" }
          ].map((feat, i) => (
            <div key={i} className="flex items-center justify-center md:justify-start gap-5 px-4 pt-6 md:pt-0">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-3xl shadow-inner border border-blue-100 transform -rotate-3 hover:rotate-0 transition-transform">
                {feat.icon}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[18px] font-extrabold text-slate-800">{feat.title}</span>
                <span className="text-[14px] text-slate-500 font-medium leading-tight mt-1">{feat.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content Area - Grid Layout */}
      <div className="max-w-[1400px] w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-12">
        
        {/* Left Sidebar / Action Panel */}
        <aside className="hidden lg:flex flex-col gap-8 col-span-1 border-r border-slate-200 pr-8">
          
          {/* Upload Prescription Card */}
          <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-emerald-50 rounded-[28px] p-6 border border-blue-100 relative overflow-hidden shadow-sm group cursor-pointer hover:shadow-md transition-all">
             <div className="absolute -right-4 -bottom-4 text-7xl opacity-20 group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-500">⚕️</div>
             <h4 className="font-extrabold text-slate-800 text-xl mb-2 relative z-10">Upload<br/>Prescription</h4>
             <p className="text-[13px] text-slate-600 mb-6 font-medium relative z-10">Have a doctor's slip? Upload and we'll process your order instantly.</p>
             <button className="w-full bg-white text-mediso-blue border-2 border-mediso-blue py-2.5 rounded-xl text-[15px] font-bold shadow-sm group-hover:bg-mediso-blue group-hover:text-white transition-colors relative z-10">
               Upload Now
             </button>
          </div>

          {/* Shop By Category List */}
          <div className="bg-white rounded-[28px] p-7 border border-slate-200 shadow-sm sticky top-[120px]">
             <h3 className="text-lg font-black text-slate-800 mb-6 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-mediso-blue" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                </svg>
                Shop by Health
             </h3>
             <ul className="space-y-4">
                {['Immunity Boosters', 'Diabetic Care', 'Heart Health', 'Digestion', 'Bone & Joint', 'Eye Care'].map((item, i) => (
                  <li key={i} className={`flex items-center gap-3 cursor-pointer font-bold text-[15px] ${i === 0 ? 'text-mediso-blue' : 'text-slate-500 hover:text-slate-800 hover:translate-x-1'} transition-all`}>
                    <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-mediso-blue shadow-md outline outline-2 outline-blue-100' : 'bg-slate-200'}`}></div>
                    {item}
                  </li>
                ))}
             </ul>
          </div>
        </aside>

        {/* Main Feed Content */}
        <div className="col-span-1 lg:col-span-3 space-y-16">
          
          {/* Top Level Categories */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-[28px] md:text-3xl font-black text-slate-800 tracking-tight">Explore Categories</h3>
              <a href="#" className="hidden sm:inline-block text-[15px] font-extrabold text-mediso-blue hover:text-blue-800 bg-blue-50 px-4 py-1.5 rounded-full">See all →</a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((cat, i) => (
                <div key={i} className={`${cat.color} rounded-[24px] p-6 flex flex-col items-center justify-center gap-4 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 border border-white/50 backdrop-blur-md`}>
                  <div className="text-[40px] bg-white p-3 rounded-[20px] shadow-sm">{cat.icon}</div>
                  <span className={`text-[15px] font-black ${cat.text} text-center leading-tight`}>{cat.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Trending Products Grid */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-[28px] md:text-3xl font-black text-slate-800 tracking-tight">Trending Near You</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularProducts.map((prod, i) => (
                <div key={i} className="bg-white border text-left border-slate-200 rounded-[28px] p-5 cursor-pointer hover:border-mediso-blue hover:shadow-2xl hover:shadow-blue-900/5 transition-all group overflow-hidden relative flex flex-col h-full">
                  <div className="absolute top-5 left-5 bg-red-500 text-white text-[11px] font-black px-2.5 py-1 rounded-md z-10 shadow-md shadow-red-500/30 tracking-wide uppercase">
                    {prod.discount}
                  </div>
                  <div className="absolute top-5 right-5 bg-white text-slate-300 p-2 rounded-full hover:text-red-500 shadow-sm hover:bg-red-50 transition-colors z-10 border border-slate-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  
                  <div className="w-full h-44 bg-slate-50 rounded-[20px] mb-5 flex items-center justify-center group-hover:bg-blue-50/50 transition-colors overflow-hidden">
                    <span className="text-6xl group-hover:scale-110 transition-transform duration-300">📦</span>
                  </div>
                  
                  <div className="flex flex-col flex-grow">
                    <h4 className="font-extrabold text-slate-800 text-[16px] leading-tight mb-1 group-hover:text-mediso-blue transition-colors line-clamp-2">{prod.name}</h4>
                    <p className="text-[13px] text-slate-500 font-bold mb-5">Box of 60 tablets</p>
                    
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[12px] text-slate-400 line-through font-extrabold">{prod.original}</span>
                        <span className="text-[20px] font-black text-slate-900 leading-none mt-0.5">{prod.price}</span>
                      </div>
                      <button className="w-12 h-12 bg-mediso-blue text-white rounded-2xl flex items-center justify-center hover:bg-blue-700 shadow-lg shadow-blue-500/30 active:scale-90 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Epic Promotional Banner */}
          <section className="bg-gradient-to-br from-mediso-blue via-blue-700 to-indigo-800 rounded-[2.5rem] p-8 md:p-14 text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl shadow-blue-900/20">
             
             {/* Decorative Elements */}
             <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] bg-white/10 blur-3xl rounded-full pointer-events-none"></div>
             <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-indigo-500/30 blur-2xl rounded-full pointer-events-none"></div>
             
             <div className="relative z-10 max-w-xl">
                <span className="bg-white/20 border border-white/30 text-blue-50 px-3.5 py-1.5 rounded-lg text-xs font-black uppercase tracking-widest mb-5 inline-block backdrop-blur-sm">Mediso Plus Membership</span>
                <h3 className="text-3xl md:text-[44px] font-black mb-5 leading-[1.1] tracking-tight">Zero Delivery Fees. <br className="hidden md:block"/>Ever.</h3>
                <p className="text-blue-100 text-[17px] mb-8 font-medium leading-relaxed">Join our exclusive membership program to unlock massive discounts, priority 5-minute delivery lane, and an absolutely free monthly physician consultation.</p>
                <div className="flex items-center gap-4">
                  <button className="bg-white text-mediso-blue px-8 py-4 rounded-full font-black text-[17px] hover:bg-slate-50 transition-colors shadow-xl hover:scale-105 active:scale-95 duration-200">
                    Sign Up Now
                  </button>
                  <span className="text-sm font-bold text-blue-200">Starting at ₹99/mo</span>
                </div>
             </div>
             
             <div className="relative z-10 hidden md:flex items-center justify-center p-8 bg-white/10 rounded-full border-[6px] border-white/20 backdrop-blur-md shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
                <span className="text-[120px] drop-shadow-2xl filter block">👨‍⚕️</span>
             </div>
          </section>

        </div>
      </div>
      
    </div>
  );
}
