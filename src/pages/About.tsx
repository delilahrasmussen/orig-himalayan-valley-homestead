import { Check } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { PROPERTY } from '../constants';

const whatMakesUsDifferent = [
  'Multiple accommodation formats in one property',
  'Open terraces and mountain-facing balconies',
  'Quiet, non-commercial neighborhood',
  'Suitable for long stays and remote work',
  'Host-managed with personal attention',
];

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hhs-banner-about.jpg"
          alt="Himalayan Valley Homestead at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/70" />
      </div>
      <div className="relative z-10 section-container text-center text-white">
        <span className="text-cream-400 font-medium tracking-wide uppercase text-sm mb-4 block">
          About Us
        </span>
        <h1 className="heading-xl text-white mb-6">
          A Home in the Heart of the Himalayas
        </h1>
        <p className="body-lg text-cream-200 max-w-2xl mx-auto">
          Where space, calm, and connection with nature come together to create
          unforgettable mountain experiences.
        </p>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <Section bg="cream" padding="lg">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <h2 className="heading-lg text-stone-800 mb-6">Our Story</h2>
          <p className="body-md text-stone-600 mb-6">
            Himalayan Valley Homestead is built around a simple idea—
            <strong className="text-stone-800">
              space, calm, and connection with nature
            </strong>
            . The property features generous indoor and outdoor areas, including
            verandas, balconies, and a rooftop terrace that opens up to sweeping
            Himalayan views.
          </p>
          <p className="body-md text-stone-600 mb-8">
            Designed as a lived-in home rather than a hotel block, the homestead
            welcomes families, couples, groups of friends, and long-stay travelers
            who prefer comfort without crowds.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-white rounded-xl">
              <div className="text-3xl font-serif font-medium text-forest-600 mb-2">
                {PROPERTY.stats.bedrooms}
              </div>
              <div className="text-sm text-stone-600">Bedrooms</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl">
              <div className="text-3xl font-serif font-medium text-forest-600 mb-2">
                {PROPERTY.stats.bathrooms}
              </div>
              <div className="text-sm text-stone-600">Bathrooms</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl">
              <div className="text-3xl font-serif font-medium text-forest-600 mb-2">
                {PROPERTY.stats.kitchens}
              </div>
              <div className="text-sm text-stone-600">Kitchens</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl">
              <div className="text-3xl font-serif font-medium text-forest-600 mb-2">
                {PROPERTY.stats.parking}
              </div>
              <div className="text-sm text-stone-600">Car Parking</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/5997967/pexels-photo-5997967.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Balcony with mountain view"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-forest-600 rounded-2xl flex items-center justify-center text-white p-6">
            <div className="text-center">
              <div className="text-4xl font-serif font-medium mb-1">5</div>
              <div className="text-sm">Star Rating on Airbnb</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function DifferenceSection() {
  return (
    <Section bg="white" padding="lg">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2440061/pexels-photo-2440061.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Rooftop terrace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden mt-8">
              <img
                src="https://images.pexels.com/photos/6585757/pexels-photo-6585757.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Bedroom"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Living area"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden mt-8">
              <img
                src="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Mountain view"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="text-forest-600 font-medium tracking-wide uppercase text-sm mb-4 block">
            Why Choose Us
          </span>
          <h2 className="heading-lg text-stone-800 mb-6">
            What Makes Us Different
          </h2>
          <p className="body-md text-stone-600 mb-8">
            Unlike typical hotels or cramped homestays, we offer a genuine home
            experience with the space and freedom to truly unwind.
          </p>
          <ul className="space-y-4">
            {whatMakesUsDifferent.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-forest-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-forest-600" />
                </div>
                <span className="text-stone-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function LocationPreview() {
  return (
    <Section bg="sage" padding="lg">
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-forest-600 font-medium tracking-wide uppercase text-sm mb-4 block">
          Location
        </span>
        <h2 className="heading-lg text-stone-800 mb-6">
          Nestled in Palampur
        </h2>
        <p className="body-md text-stone-600 mb-8">
          Located approximately 9.5 km from Palampur town, the homestead sits in a
          scenic, peaceful residential area surrounded by the majestic Dhauladhar
          mountains and lush Kangra Valley.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="text-center">
            <div className="text-2xl font-serif font-medium text-forest-600">35 km</div>
            <div className="text-sm text-stone-600">from Dharamshala</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-serif font-medium text-forest-600">38 km</div>
            <div className="text-sm text-stone-600">from Kangra Airport</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-serif font-medium text-forest-600">483 km</div>
            <div className="text-sm text-stone-600">from Delhi</div>
          </div>
        </div>
        <Button href="/location">
          View Full Location Details
        </Button>
      </div>
    </Section>
  );
}

export function About() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <DifferenceSection />
      <LocationPreview />
    </>
  );
}
