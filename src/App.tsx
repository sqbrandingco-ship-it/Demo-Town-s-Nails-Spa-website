import { motion } from 'motion/react';
import { MapPin, Phone, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { useState, useEffect } from 'react';

const nailImages = [
  "https://lh3.googleusercontent.com/p/AF1QipN-WVzCuXlFsRgbWOFjbBAXjVPPgg_1jz5fyPNa=s0",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFLmN1hnCvhfhftL0rtXau34FuPNRjT4k66HiPxDMGwUO33RnBPtvCBE2LTkRdHR2harRs4C8K-JfzmLLIwD0AMlFzLpzLCLDycpcmtus3iRloEiNpeCpuBYZfna-sfguPHUNl6=s0",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGaFasjv9AiY8sWFW1jF3GOnYeIcvwjHf0rEgS1irvuMiRM7YNjo6Yki3mBZWcaWumYaTkmaDucQ2wB5ihgzrQr_MQ6ASfw31ZwVoJl6nwNjJipD5K6B7WTKRPVfcTgUMK51vJa=s0",
  "https://lh3.googleusercontent.com/p/AF1QipMmQ-s6i5YzolRjDnKL8p3gL6J-0_8092NJRN3S=s0",
  "https://lh3.googleusercontent.com/gps-cs-s/APNQkAF-IiChw0FwMGc-IbUUCWlgmRCwhJEXph1LrUrQ_Vo5G6jZcesy9Vq8DxCmBzUI3x81_60IAPP3QiOXlAvdl0r11lwvMVO861TpaHE5ii7lCkaIXJsfGZ6PnH9gb3TcyCFOm32M=s0"
];

const reviews = [
  {
    name: "Natasha Kestioniah",
    text: "I my mom and my friends are coming here for many times and never get disappointed. The pedicure services are amazing and the team are adorable, friendly and gentle always. They deserve more praise. Their service and price are worth the experience. They worked very hard and dedicatedly. Highly recommended!!"
  },
  {
    name: "Christine Andrews",
    text: "I love getting my nails done here, they always do an amazing job. The girls take their time to do everything absolutely perfect, no matter what design I bring in or picture, they match it up perfectly!! I highly recommend this place, I will always be a repeat customer"
  },
  {
    name: "Mackenzie Casey",
    text: "Ming is hands down the best nail technician! His attention to detail and expertise make every pedicure feel luxurious. He truly cares about his clients, going above and beyond to ensure perfection and comfort. If you want flawless results and a technician who puts your needs first, Ming is the one to see!"
  },
  {
    name: "Phil Lindsay",
    text: "I have been taking my daughter here for years to get her nails done. Decided one day to sit and get my feet done, best decision I have ever made. Very professional. Great place to get your mani/pedi. They do not open at 9:30 like they say they do."
  },
  {
    name: "Steff Hopkins",
    text: "The best! Every single time I go in I'm not rushed. There isn't a design they haven't been able to do. Pedicures are mint. Would recommend to anyone!"
  },
  {
    name: "Katena V. Rosanna",
    text: "I have came here since the summer and got lucky to got the nail done with Rin. She is very kind, friendly, patient, and detailed. She gives very enthusiastic advice and pays a lot of attention to caring for your natural nails. I am never being disappointed with her work!!!"
  }
];

export default function App() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % nailImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const gmapsLink = "https://www.google.com/maps/place/Town's+Nails+%26+Spa/@43.3986872,-80.3013894,15z/data=!4m6!3m5!1s0x882c77df50907e5b:0xb6a066eb4b7fdcf4!8m2!3d43.3986872!4d-80.3013894!16s%2Fg%2F1tcww_v_";
  const phoneNumber = "(519) 622-1234";
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center">
        <div className="font-serif text-3xl font-bold tracking-tight">Town's Nails & Spa</div>
        <div className="hidden md:flex gap-8 items-center small-caps text-[var(--text-primary)]">
           <a href="#services" className="hover:text-vibrant transition-colors">Services</a>
           <a href="#about" className="hover:text-vibrant transition-colors">About</a>
           <a href="#reviews" className="hover:text-vibrant transition-colors">Reviews</a>
           <a href="#contact" className="hover:text-vibrant transition-colors">Visit</a>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-4 text-[var(--text-primary)]">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-vibrant transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/townsnailsspa/" target="_blank" rel="noopener noreferrer" className="hover:text-vibrant transition-colors">
              <Facebook size={20} />
            </a>
          </div>
          <a href={`tel:${phoneNumber.replace(/\D/g, '')}`} className="nav-pill hidden sm:inline-flex">
            Book Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[10%] left-[15%] w-[40rem] h-[40rem] bg-pink-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-70"></div>
          <div className="absolute bottom-[15%] right-[10%] w-[35rem] h-[35rem] bg-purple-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-70"></div>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.2, rotateX: 90 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.7 }}
            className="small-caps mb-6 text-vibrant"
          >
            Cambridge's Premier Destination
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.5, rotateZ: -15, y: -50 }}
            animate={{ opacity: 1, scale: 1, rotateZ: 0, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2, type: "spring", bounce: 0.6 }}
            className="font-serif title-text mb-6 mt-2"
          >
            Vibrant Beauty, <br/><span className="italic text-vibrant">Elevated</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, x: -100, skewX: 20 }}
            animate={{ opacity: 1, x: 0, skewX: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring" }}
            className="text-lg md:text-xl font-light text-[var(--text-secondary)] max-w-2xl mx-auto mb-10"
          >
            Experience the perfect blend of modern style and ultimate relaxation. Town's Nails & Spa offers premium nail artistry and rejuvenating spa treatments designed to make you shine.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.1, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, type: "spring", bounce: 0.7 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <a href={`tel:${phoneNumber.replace(/\D/g, '')}`} className="btn-primary">
              Book Appointment
            </a>
            <a href="#services" className="btn-outline">
              Explore Services
            </a>
          </motion.div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <div className="small-caps mb-3">What We Offer</div>
              <h2 className="font-serif text-5xl md:text-6xl font-bold">
                Radiant <span className="italic text-vibrant">Services</span>
              </h2>
            </div>
            <p className="text-[var(--text-secondary)] max-w-sm text-right hidden md:block text-lg">
              Curated treatments to enhance your natural beauty and restore your vibrant energy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            <div className="group cursor-pointer">
              <div className="h-[450px] w-full rounded-3xl mb-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border-8 border-white relative bg-white bg-opacity-50 overflow-hidden">
                {nailImages.map((src, idx) => (
                  <img 
                    key={src}
                    src={src} 
                    alt={`Nail Services ${idx + 1}`} 
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
                      idx === slideIndex ? 'opacity-100' : 'opacity-0'
                    }`} 
                  />
                ))}
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none"></div>
              </div>
              <h3 className="text-3xl font-serif font-bold mb-3">Nail Artistry</h3>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                Precision manicures, pedicures, and custom nail designs using only the highest quality products for flawless, long-lasting results.
              </p>
            </div>
            
            <div className="group cursor-pointer md:mt-24">
              <div className="h-[450px] w-full rounded-3xl mb-6 overflow-hidden shadow-lg relative bg-[var(--surface-color)]">
                <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2000&auto=format&fit=crop" alt="Spa Treatments" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl"></div>
              </div>
              <h3 className="text-3xl font-serif font-bold mb-3">Spa Refresh</h3>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                Immersive relaxation experiences. Let our soothing spa therapies rejuvenate your body and reset your mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About & Trust Section */}
      <section id="about" className="py-24 px-6 bg-[var(--surface-color)] relative rounded-[3rem] mx-2 md:mx-6 mb-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="small-caps mb-4 text-vibrant">The Diamond Standard</div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 leading-tight">
              A modern sanctuary for <br/><span className="text-vibrant italic">self-expression</span>.
            </h2>
            <div className="space-y-6 text-[var(--text-secondary)] text-lg leading-relaxed mb-10">
              <p>
                At Town's Nails & Spa, we go beyond standard beauty care. We believe your nails are a canvas, and your wellness is a priority. Every detail of our salon is designed to uplift and inspire.
              </p>
              <p>
                With exceptional hygiene, trending techniques, and a vibrant atmosphere, our talented technicians ensure you leave feeling confident and completely refreshed.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-line">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="font-serif text-5xl font-bold mb-2 text-vibrant">01</div>
                <div className="font-bold text-lg mb-1">Expert Talent</div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">Dedicated artists passionate about their craft.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="font-serif text-5xl font-bold mb-2 text-vibrant">02</div>
                <div className="font-bold text-lg mb-1">Pristine Hygiene</div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">Medical-grade sterilization for your safety.</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            animate={{ y: [0, -15, 0] }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 1, ease: [0.16, 1, 0.3, 1],
              y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }
            }}
            className="relative h-[650px] w-full hidden lg:block rounded-3xl overflow-hidden shadow-2xl relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/10 mix-blend-overlay z-10 pointer-events-none transition-opacity duration-700 group-hover:opacity-50"></div>
            <div className="absolute inset-0 bg-pink-500/10 mix-blend-color-burn z-10 pointer-events-none"></div>
            
            <motion.img 
              whileHover={{ scale: 1.15, rotate: 3 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
              src="https://lh3.googleusercontent.com/p/AF1QipN9nWy8mx2KzyrKH8HonTokjNQC__kNWMj2bvhR=s1360-w1360-h1020-rw" 
              alt="Salon Interior" 
              className="w-full h-full object-cover brightness-110 contrast-125 saturate-[1.5] shadow-[0_0_40px_rgba(236,72,153,0.3)] transition-all duration-700 group-hover:saturate-[1.8] group-hover:brightness-125 group-hover:contrast-150" 
            />
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 px-6 relative z-10 bg-[var(--bg-color)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <div className="small-caps mb-3 text-vibrant">Client Love</div>
             <h2 className="font-serif text-5xl md:text-6xl font-bold">
               What They <span className="italic text-vibrant">Say</span>
             </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.1, type: "spring", bounce: 0.6 }}
                whileHover={{ scale: 1.05, rotate: 2, y: -10, transition: { duration: 0.3 } }}
                className="flex flex-col bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-[6px] border-white ring-1 ring-black/5"
              >
                <div className="flex text-vibrant mb-4 gap-1 text-xl">
                  ★★★★★
                </div>
                <p className="text-[var(--text-secondary)] font-medium text-lg leading-relaxed mb-8 flex-grow italic">
                  "{review.text}"
                </p>
                <div className="font-bold text-[var(--text-primary)] mt-auto pt-4 border-t border-black/5 text-right">
                  &mdash; {review.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section id="contact" className="py-24 px-6 z-10 relative">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="flex-1 lg:pr-12">
            <div className="small-caps mb-3">Get in Touch</div>
            <h2 className="font-serif text-5xl md:text-6xl font-bold mb-10">
              <span className="italic text-vibrant">Visit</span> Us
            </h2>
            
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center text-vibrant shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Our Location</h4>
                  <p className="text-[var(--text-secondary)] text-lg mb-4">
                    535 Saginaw Pkwy, Cambridge, ON N1T 0C3<br/>
                    Open today until 8 p.m.
                  </p>
                  <a href={gmapsLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-vibrant hover:underline decoration-2 underline-offset-4 transition-all">
                    Get Directions &rarr;
                  </a>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center text-vibrant shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Book by Phone</h4>
                  <p className="text-[var(--text-secondary)] text-lg mb-4">
                    {phoneNumber}
                  </p>
                  <a href={`tel:${phoneNumber.replace(/\D/g, '')}`} className="inline-flex items-center gap-2 font-bold text-vibrant hover:underline decoration-2 underline-offset-4 transition-all">
                    Call Now &rarr;
                  </a>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center text-vibrant shrink-0">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Message Us</h4>
                  <p className="text-[var(--text-secondary)] text-lg mb-4">
                    Quick responses via WhatsApp
                  </p>
                  <a href={`https://wa.me/1${phoneNumber.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-vibrant hover:underline decoration-2 underline-offset-4 transition-all">
                     Chat on WhatsApp &rarr;
                  </a>
                </div>
              </div>
              <div className="flex gap-6 mt-8">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center text-vibrant shrink-0 hover:bg-vibrant hover:text-white transition-colors group">
                  <Instagram size={24} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.facebook.com/townsnailsspa/" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center text-vibrant shrink-0 hover:bg-vibrant hover:text-white transition-colors group">
                  <Facebook size={24} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-[var(--accent-vibrant)] text-white rounded-3xl p-10 md:p-16 flex flex-col justify-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            
            <h3 className="font-serif text-4xl md:text-5xl font-bold mb-6 relative z-10 text-white">Ready to <br/><span className="italic text-white">glow?</span></h3>
            <p className="text-white/90 text-lg mb-10 max-w-sm relative z-10 leading-relaxed">
              We highly recommend booking your appointment in advance to secure your spot for our premium services.
            </p>
            <a href={`tel:${phoneNumber.replace(/\D/g, '')}`} className="bg-white text-[var(--accent-vibrant)] text-center py-4 px-8 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform shadow-lg relative z-10 block">
              Reserve Your Time
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-line mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-serif text-2xl font-bold tracking-tight">Town's Nails & Spa</div>
          <div className="flex gap-6 items-center">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-vibrant transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://www.facebook.com/townsnailsspa/" target="_blank" rel="noopener noreferrer" className="text-[var(--text-secondary)] hover:text-vibrant transition-colors">
              <Facebook size={24} />
            </a>
          </div>
          <div className="text-[var(--text-secondary)] text-sm font-medium">
            © {new Date().getFullYear()} Town's Nails & Spa. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
