import {
  Wifi,
  Zap,
  Bed,
  Sparkles,
  Sun,
  Mountain,
  Armchair,
  Shield,
  Car,
  Plane,
} from 'lucide-react';
import { Section } from '../components/ui/Section';
import { SectionHeader } from '../components/ui/SectionHeader';
import { AMENITIES } from '../constants';
import { Button } from '../components/ui/Button';

const iconMap: Record<string, React.ReactNode> = {
  Wifi: <Wifi className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Bed: <Bed className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Sun: <Sun className="w-6 h-6" />,
  Mountain: <Mountain className="w-6 h-6" />,
  Armchair: <Armchair className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Car: <Car className="w-6 h-6" />,
  Plane: <Plane className="w-6 h-6" />,
};

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/amenties-banner.jpg"
          alt="Comfortable veranda seating area"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/70" />
      </div>
      <div className="relative z-10 section-container text-center text-white">
        <span className="text-cream-400 font-medium tracking-wide uppercase text-sm mb-4 block">
          Comfort & Convenience
        </span>
        <h1 className="heading-xl text-white mb-6">
          Amenities at the Homestead
        </h1>
        <p className="body-lg text-cream-200 max-w-2xl mx-auto">
          Everything you need for a comfortable stay in the mountains, from modern
          essentials to scenic outdoor spaces.
        </p>
      </div>
    </section>
  );
}

interface AmenityCategoryProps {
  title: string;
  items: Array<{ name: string; icon: string }>;
  description?: string;
  image?: string;
  reversed?: boolean;
}

function AmenityCategory({
  title,
  items,
  description,
  image,
  reversed,
}: AmenityCategoryProps) {
  return (
    <div
      className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
        reversed ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {image && (
        <div className={`${reversed ? 'lg:order-2' : ''}`}>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        </div>
      )}
      <div className={`${reversed ? 'lg:order-1' : ''} ${!image ? 'lg:col-span-2' : ''}`}>
        <h2 className="heading-md text-stone-800 mb-4">{title}</h2>
        {description && (
          <p className="body-md text-stone-600 mb-8">{description}</p>
        )}
        <div className={`grid ${image ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'} gap-4`}>
          {items.map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm"
            >
              <div className="w-12 h-12 rounded-full bg-forest-100 flex items-center justify-center text-forest-600 flex-shrink-0">
                {iconMap[item.icon]}
              </div>
              <span className="text-stone-700 font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EssentialsSection() {
  return (
    <Section bg="cream" padding="lg">
      <AmenityCategory
        title="Essentials"
        description="All the basics for a comfortable and connected stay."
        items={AMENITIES.essentials.items}
        image="/hote-essentials.jpg"
      />
    </Section>
  );
}

function OutdoorsSection() {
  return (
    <Section bg="white" padding="lg">
      <AmenityCategory
        title="Outdoors & Views"
        description="Soak in the mountain atmosphere from our thoughtfully designed outdoor spaces."
        items={AMENITIES.outdoors.items}
        image="/outdoor-view.jpeg"
        reversed
      />
    </Section>
  );
}

function ParkingAndServicesSection() {
  return (
    <Section bg="sage" padding="lg">
      <SectionHeader
        title="Parking & Services"
        subtitle="Additional conveniences for a hassle-free stay."
      />
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h3 className="heading-sm text-stone-800 mb-6">Parking & Access</h3>
          <div className="space-y-4">
            {AMENITIES.parking.items.map((item) => (
              <div key={item.name} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center text-forest-600 flex-shrink-0">
                  {iconMap[item.icon]}
                </div>
                <span className="text-stone-700">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h3 className="heading-sm text-stone-800 mb-6">Add-On Services</h3>
          <div className="space-y-4">
            {AMENITIES.addons.items.map((item) => (
              <div key={item.name} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-forest-100 flex items-center justify-center text-forest-600 flex-shrink-0">
                  {iconMap[item.icon]}
                </div>
                <span className="text-stone-700">{item.name}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-stone-500 mt-6">
            Additional services can be arranged on request. Please contact us for
            details and pricing.
          </p>
        </div>
      </div>
    </Section>
  );
}

function CTASection() {
  return (
    <Section bg="forest" padding="lg">
      <div className="text-center">
        <h2 className="heading-lg text-white mb-6">
          Ready to Experience Mountain Living?
        </h2>
        <p className="body-md text-cream-200 max-w-2xl mx-auto mb-10">
          Book your stay and enjoy all the comforts and amenities our homestead has
          to offer.
        </p>
        <Button href="/booking" variant="white" size="lg">
          Book Your Stay
        </Button>
      </div>
    </Section>
  );
}

export function Amenities() {
  return (
    <>
      <HeroSection />
      <EssentialsSection />
      <OutdoorsSection />
      <ParkingAndServicesSection />
      <CTASection />
    </>
  );
}
