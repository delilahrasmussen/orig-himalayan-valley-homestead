import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { POLICIES } from '../constants';

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-forest-800">
      <div className="section-container text-center text-white">
        <span className="text-cream-400 font-medium tracking-wide uppercase text-sm mb-4 block">
          Good to Know
        </span>
        <h1 className="heading-xl text-white mb-6">House Policies</h1>
        <p className="body-lg text-cream-200 max-w-2xl mx-auto">
          Please review our house policies to ensure a pleasant stay for all guests
          at Himalayan Valley Homestead.
        </p>
      </div>
    </section>
  );
}

function PolicyItem({
  policy,
  isOpen,
  onToggle,
}: {
  policy: { title: string; content: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-stone-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left"
      >
        <h3 className="font-serif font-medium text-lg text-stone-800">
          {policy.title}
        </h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-forest-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-stone-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6 pr-8">
          <p className="text-stone-600">{policy.content}</p>
        </div>
      )}
    </div>
  );
}

function PoliciesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section bg="cream" padding="lg">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          {POLICIES.map((policy, index) => (
            <PolicyItem
              key={policy.title}
              policy={policy}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

function AdditionalInfoSection() {
  return (
    <Section bg="white" padding="md">
      <div className="max-w-3xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-cream-50 p-6 rounded-xl">
            <h3 className="font-serif font-medium text-lg text-stone-800 mb-4">
              Safety & Security
            </h3>
            <ul className="space-y-2 text-stone-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-forest-500 mt-2 flex-shrink-0" />
                Gated property with secure access
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-forest-500 mt-2 flex-shrink-0" />
                Fire extinguishers available
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-forest-500 mt-2 flex-shrink-0" />
                First aid kit on premises
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-forest-500 mt-2 flex-shrink-0" />
                Emergency contact numbers provided
              </li>
            </ul>
          </div>
          <div className="bg-cream-50 p-6 rounded-xl">
            <h3 className="font-serif font-medium text-lg text-stone-800 mb-4">
              House Rules
            </h3>
            <ul className="space-y-2 text-stone-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-forest-500 mt-2 flex-shrink-0" />
                Respect the property and its surroundings
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-forest-500 mt-2 flex-shrink-0" />
                No loud music after quiet hours
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-forest-500 mt-2 flex-shrink-0" />
                Keep common areas clean
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-forest-500 mt-2 flex-shrink-0" />
                Report any damages immediately
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

function CTASection() {
  return (
    <Section bg="sage" padding="lg">
      <div className="text-center">
        <h2 className="heading-lg text-stone-800 mb-6">Questions About Our Policies?</h2>
        <p className="body-md text-stone-600 max-w-2xl mx-auto mb-10">
          If you have any questions or need clarification on our house policies,
          please don't hesitate to reach out.
        </p>
        <Button href="/contact">Contact Us</Button>
      </div>
    </Section>
  );
}

export function Policies() {
  return (
    <>
      <HeroSection />
      <PoliciesSection />
      <AdditionalInfoSection />
      <CTASection />
    </>
  );
}
