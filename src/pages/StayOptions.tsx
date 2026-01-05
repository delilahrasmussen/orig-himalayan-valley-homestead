import { Check, Users, Clock, Home } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { STAY_OPTIONS } from '../constants';

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-forest-800">
      <div className="section-container text-center text-white">
        <span className="text-cream-400 font-medium tracking-wide uppercase text-sm mb-4 block">
          Accommodation
        </span>
        <h1 className="heading-xl text-white mb-6">
          Choose the Stay That Fits Your Journey
        </h1>
        <p className="body-lg text-cream-200 max-w-2xl mx-auto">
          Himalayan Valley Homestead offers three thoughtfully designed accommodation
          options. All guests enjoy access to shared outdoor spaces, scenic views,
          and a peaceful environment.
        </p>
      </div>
    </section>
  );
}

function StayOptionDetail({
  option,
  index,
}: {
  option: (typeof STAY_OPTIONS)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <Section id={option.id} bg={isEven ? 'cream' : 'white'} padding="lg">
      <div
        className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
          !isEven ? 'lg:flex-row-reverse' : ''
        }`}
      >
        <div className={`${!isEven ? 'lg:order-2' : ''}`}>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <img
              src={option.image}
              alt={option.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className={`${!isEven ? 'lg:order-1' : ''}`}>
          <span className="text-forest-600 font-medium tracking-wide uppercase text-sm mb-4 block">
            {option.shortTitle}
          </span>
          <h2 className="heading-lg text-stone-800 mb-4">{option.title}</h2>
          <p className="body-md text-stone-600 mb-8">{option.description}</p>

          <h3 className="font-serif font-medium text-lg text-stone-800 mb-4">
            What's Included
          </h3>
          <ul className="space-y-3 mb-8">
            {option.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-forest-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-forest-600" />
                </div>
                <span className="text-stone-700">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mb-8">
            {option.idealFor.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-cream-200 text-stone-700 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <Button href="/booking">{option.cta}</Button>
        </div>
      </div>
    </Section>
  );
}

function ComparisonSection() {
  return (
    <Section bg="stone" padding="lg">
      <SectionHeader
        title="Quick Comparison"
        subtitle="Find the perfect stay based on your group size and needs."
      />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] bg-white rounded-xl overflow-hidden shadow-sm">
          <thead>
            <tr className="bg-forest-600 text-white">
              <th className="px-6 py-4 text-left font-medium">Feature</th>
              <th className="px-6 py-4 text-center font-medium">Private Rooms</th>
              <th className="px-6 py-4 text-center font-medium">2BHK</th>
              <th className="px-6 py-4 text-center font-medium">Entire Home</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            <tr>
              <td className="px-6 py-4 text-stone-700">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-forest-600" />
                  Ideal Group Size
                </div>
              </td>
              <td className="px-6 py-4 text-center text-stone-600">1-2 guests</td>
              <td className="px-6 py-4 text-center text-stone-600">2-6 guests</td>
              <td className="px-6 py-4 text-center text-stone-600">6-12+ guests</td>
            </tr>
            <tr className="bg-cream-50">
              <td className="px-6 py-4 text-stone-700">
                <div className="flex items-center gap-2">
                  <Home className="w-4 h-4 text-forest-600" />
                  Private Kitchen
                </div>
              </td>
              <td className="px-6 py-4 text-center text-stone-400">Shared access</td>
              <td className="px-6 py-4 text-center text-forest-600">Yes</td>
              <td className="px-6 py-4 text-center text-forest-600">3 kitchens</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-stone-700">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-forest-600" />
                  Best For
                </div>
              </td>
              <td className="px-6 py-4 text-center text-stone-600">Short stays</td>
              <td className="px-6 py-4 text-center text-stone-600">Week+ stays</td>
              <td className="px-6 py-4 text-center text-stone-600">Group events</td>
            </tr>
            <tr className="bg-cream-50">
              <td className="px-6 py-4 text-stone-700">Privacy Level</td>
              <td className="px-6 py-4 text-center text-stone-600">Room privacy</td>
              <td className="px-6 py-4 text-center text-stone-600">Unit privacy</td>
              <td className="px-6 py-4 text-center text-stone-600">Full exclusivity</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Section>
  );
}

function CTASection() {
  return (
    <Section bg="forest" padding="lg">
      <div className="text-center">
        <h2 className="heading-lg text-white mb-6">Not Sure Which to Choose?</h2>
        <p className="body-md text-cream-200 max-w-2xl mx-auto mb-10">
          Reach out to us with your requirements, and we'll help you find the perfect
          accommodation for your stay.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" variant="white" size="lg">
            Get in Touch
          </Button>
          <Button
            href="/booking"
            variant="secondary"
            size="lg"
            className="border-cream-300 text-cream-300 hover:bg-cream-300 hover:text-forest-800"
          >
            View Booking Options
          </Button>
        </div>
      </div>
    </Section>
  );
}

export function StayOptions() {
  return (
    <>
      <HeroSection />
      {STAY_OPTIONS.map((option, index) => (
        <StayOptionDetail key={option.id} option={option} index={index} />
      ))}
      <ComparisonSection />
      <CTASection />
    </>
  );
}
