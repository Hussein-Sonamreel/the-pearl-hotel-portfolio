// src/app/dining/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Accordion from "@/components/Accordion";

export default function DiningPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        title="Dining at The Pearl"
        subtitle="A culinary journey that celebrates the finest local ingredients and international flavors."
      />

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            
            <Accordion title="Appetizers">
              <div className="space-y-4 text-gray-400">
                <p><strong>Seared Scallops:</strong> With saffron risotto and a lemon-butter sauce.</p>
                <p><strong>Wagyu Beef Carpaccio:</strong> Thinly sliced, with arugula, parmesan, and truffle oil.</p>
              </div>
            </Accordion>

            <Accordion title="Main Courses">
              <div className="space-y-4 text-gray-400">
                <p><strong>Pan-Seared Duck Breast:</strong> Served with a cherry reduction, on a bed of wild rice.</p>
                <p><strong>Lobster Thermidor:</strong> A classic preparation with a creamy, rich sauce.</p>
                <p><strong>Mushroom & Truffle Tagliatelle:</strong> Hand-made pasta with a decadent cream sauce.</p>
              </div>
            </Accordion>

            <Accordion title="Desserts">
              <div className="space-y-4 text-gray-400">
                <p><strong>Deconstructed Tiramisu:</strong> An elegant twist on the classic Italian dessert.</p>
                <p><strong>Molten Chocolate Lava Cake:</strong> With a scoop of vanilla bean ice cream.</p>
              </div>
            </Accordion>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}