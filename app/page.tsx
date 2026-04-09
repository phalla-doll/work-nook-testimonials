import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "\"WorkNook makes finding a coworking space so easy! I can book a desk in minutes and get straight to work. Highly recommend!\"",
    name: "Joao M.",
    role: "Startup Founder",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces&q=80"
  },
  {
    quote: "Our team needed a flexible meeting space, and WorkNook delivered. The process was smooth, and the space was exactly what we needed!",
    name: "Bruno K.",
    role: "UX Designer",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces&q=80"
  },
  {
    quote: "\"I love the variety of spaces available! Whether I need a quiet spot or a collaborative space, WorkNook always has the perfect option.\"",
    name: "Lais A.",
    role: "Digital Marketer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces&q=80"
  }
];

const Img = ({ src, h }: { src: string, h: string }) => (
  <div className={`relative w-full rounded-[1.25rem] overflow-hidden ${h}`}>
    <Image src={src} alt="Coworking space" fill className="object-cover" referrerPolicy="no-referrer" />
  </div>
);

export default function Page() {
  return (
    <main className="min-h-screen w-full max-w-[1400px] mx-auto overflow-hidden pb-24">
        
        {/* Image Grid */}
        <div className="relative h-[400px] md:h-[500px] lg:h-[550px] overflow-hidden flex justify-center items-start gap-3 md:gap-4 pt-12 md:pt-16 px-4">
          
          {/* Col 1 */}
          <div className="hidden xl:flex flex-col gap-3 md:gap-4 w-[160px] shrink-0 translate-y-32">
            <Img h="h-[180px]" src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=400&fit=crop&q=80" />
            <Img h="h-[160px]" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=300&h=300&fit=crop&q=80" />
          </div>
          
          {/* Col 2 */}
          <div className="hidden lg:flex flex-col gap-3 md:gap-4 w-[160px] shrink-0 translate-y-16">
            <Img h="h-[180px]" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=400&fit=crop&q=80" />
            <Img h="h-[200px]" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300&h=400&fit=crop&q=80" />
          </div>
          
          {/* Col 3 */}
          <div className="hidden md:flex flex-col gap-3 md:gap-4 w-[160px] shrink-0 translate-y-4">
            <Img h="h-[380px]" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=300&h=600&fit=crop&q=80" />
          </div>
          
          {/* Col 4 */}
          <div className="flex flex-col gap-3 md:gap-4 w-[140px] md:w-[160px] shrink-0 -translate-y-4">
            <Img h="h-[420px]" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=300&h=800&fit=crop&q=80" />
          </div>
          
          {/* Col 5 */}
          <div className="flex flex-col gap-3 md:gap-4 w-[140px] md:w-[160px] shrink-0 -translate-y-4">
            <Img h="h-[420px]" src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=300&h=800&fit=crop&q=80" />
          </div>
          
          {/* Col 6 */}
          <div className="hidden md:flex flex-col gap-3 md:gap-4 w-[160px] shrink-0 translate-y-4">
            <Img h="h-[380px]" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=300&h=600&fit=crop&q=80" />
          </div>
          
          {/* Col 7 */}
          <div className="hidden lg:flex flex-col gap-3 md:gap-4 w-[160px] shrink-0 translate-y-16">
            <Img h="h-[180px]" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=400&fit=crop&q=80" />
            <Img h="h-[200px]" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=400&fit=crop&q=80" />
          </div>
          
          {/* Col 8 */}
          <div className="hidden xl:flex flex-col gap-3 md:gap-4 w-[160px] shrink-0 translate-y-32">
            <Img h="h-[160px]" src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop&q=80" />
            <Img h="h-[180px]" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=300&h=400&fit=crop&q=80" />
          </div>
          
        </div>

        {/* Header */}
        <div className="text-center px-4 max-w-4xl mx-auto mt-12 md:mt-20">
          <span className="inline-block py-2 px-6 rounded-full border border-gray-200 text-sm font-medium text-gray-700 mb-8">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-bold tracking-tight mb-2 text-gray-900">
            Trusted by creatives and leaders
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-bold tracking-tight text-gray-400 mb-16 md:mb-24">
            from various industries
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-6 md:px-12 lg:px-24">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow text-[15px]">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    fill 
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-gray-900 text-[15px]">{testimonial.name}</span>
                  <span className="text-gray-500 text-sm">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

    </main>
  );
}
