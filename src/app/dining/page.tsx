import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import DiningConceptCard from "@/components/DiningConceptCard";
import { prisma } from "@/lib/prisma";  // Import from the new singleton file

export default async function DiningPage() {
  const diningConcepts = await prisma.diningConcept.findMany({
    include: {
      menuItems: true,
    },
  });

  return (
    <main>
      <Navbar />
      <PageHeader
        title="Our Culinary Experiences"
        subtitle="Dining at The Pearl blends Swahili heritage with global influences, creating unforgettable moments."
      />
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {diningConcepts.map((concept) => (
              <DiningConceptCard
                key={concept.id}
                imageUrl={concept.imageUrl}
                title={concept.title}
                description={concept.description}
                menuHighlights={concept.menuItems.map(item => item.name)}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}