import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Star, Users } from "lucide-react";
import heroImage from "@/assets/hero-anniversary.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-celebration">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Heritage Academy celebrating 75 years of excellence"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-celebration opacity-90" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 text-center">
        <Badge variant="secondary" className="mb-6 text-sm font-medium bg-background/10 text-secondary-foreground border-anniversary-gold">
          <Star className="mr-2 h-4 w-4" />
          Diamond Jubilee Celebration
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-secondary-foreground">
          <span className="block">Celebrating</span>
          <span className="block text-6xl md:text-8xl bg-gradient-to-r from-anniversary-gold to-anniversary-gold-light bg-clip-text text-transparent">
            75 Years
          </span>
          <span className="block text-4xl md:text-5xl">of Excellence</span>
        </h1>

        <p className="text-xl md:text-2xl text-secondary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Join us as we commemorate three-quarters of a century of academic achievement, 
          community building, and shaping future leaders at Heritage Academy.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90 shadow-elegant">
            <Calendar className="mr-2 h-5 w-5" />
            View Anniversary Events
          </Button>
          <Button size="lg" variant="outline" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
            <Users className="mr-2 h-5 w-5" />
            Share Your Memory
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-anniversary-gold">75</div>
            <div className="text-secondary-foreground/80">Years of Service</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-anniversary-gold">15,000+</div>
            <div className="text-secondary-foreground/80">Alumni</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-anniversary-gold">500+</div>
            <div className="text-secondary-foreground/80">Faculty & Staff</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;