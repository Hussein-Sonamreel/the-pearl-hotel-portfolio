// src/app/contact/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <PageHeader 
        title="Get In Touch"
        subtitle="We're here to help you plan your perfect stay. Reach out to us anytime."
      />

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            
            {/* Column 1: Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl mb-2">The Pearl Boutique</h3>
                <p className="text-gray-400">123 Paradise Lane, Serenity Bay</p>
              </div>
              <div>
                <h3 className="text-2xl mb-2">Reservations</h3>
                <p className="text-gray-400">reservations@thepearl.com</p>
                <p className="text-gray-400">+1 (234) 567-890</p>
              </div>
              <div>
                <h3 className="text-2xl mb-2">Concierge</h3>
                <p className="text-gray-400">concierge@thepearl.com</p>
              </div>
            </div>

            {/* Column 2: Contact Form */}
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-white" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-2">Email</label>
                  <input type="email" id="email" className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-white" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm mb-2">Message</label>
                  <textarea id="message" rows={5} className="w-full bg-[#1a1a1a] border border-gray-700 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-white"></textarea>
                </div>
                <button type="submit" className="w-full bg-white text-black font-bold py-3 px-6 rounded-md hover:bg-gray-200">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}