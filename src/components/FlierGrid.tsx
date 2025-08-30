import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, ExternalLink } from "lucide-react";
import { format } from "date-fns";

interface Flier {
  id: string;
  title: string;
  description: string;
  image: string;
  date: Date;
  location: string;
  time: string;
  category: string;
}

// Mock data for demonstration
const mockFliers: Flier[] = [
  {
    id: "1",
    title: "Grand Opening Ceremony",
    description: "Join us for the official launch of our 75th anniversary celebration featuring distinguished alumni speakers and a commemorative tree planting.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
    date: new Date("2024-09-15"),
    location: "Main Auditorium",
    time: "10:00 AM",
    category: "Ceremony"
  },
  {
    id: "2", 
    title: "Alumni Homecoming Gala",
    description: "An elegant evening celebrating our alumni achievements with dinner, awards, and reunion activities for all graduating classes.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
    date: new Date("2024-10-12"),
    location: "Heritage Hall",
    time: "7:00 PM",
    category: "Social"
  },
  {
    id: "3",
    title: "Historical Exhibition",
    description: "Explore 75 years of school history through photographs, artifacts, and interactive displays showcasing our journey from 1949 to today.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
    date: new Date("2024-09-20"),
    location: "Library Gallery",
    time: "9:00 AM - 5:00 PM",
    category: "Exhibition"
  },
  {
    id: "4",
    title: "Sports Legacy Tournament",
    description: "Multi-sport tournament featuring current students vs alumni teams in basketball, soccer, and tennis matches.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=400&fit=crop",
    date: new Date("2024-10-05"),
    location: "Athletic Complex",
    time: "2:00 PM",
    category: "Sports"
  },
  {
    id: "5",
    title: "Cultural Arts Festival",
    description: "Showcase of student and alumni talents including musical performances, art exhibitions, and dramatic presentations.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    date: new Date("2024-11-08"),
    location: "Performing Arts Center",
    time: "6:30 PM",
    category: "Arts"
  },
  {
    id: "6",
    title: "Time Capsule Ceremony",
    description: "Students and faculty will contribute items to a time capsule to be opened on the school's 100th anniversary in 2049.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop",
    date: new Date("2024-12-01"),
    location: "School Courtyard", 
    time: "3:00 PM",
    category: "Ceremony"
  }
];

const getCategoryColor = (category: string) => {
  const colors = {
    "Ceremony": "bg-anniversary-gold text-heritage-green",
    "Social": "bg-secondary text-secondary-foreground",
    "Exhibition": "bg-accent text-accent-foreground", 
    "Sports": "bg-heritage-green text-background",
    "Arts": "bg-primary text-primary-foreground"
  };
  return colors[category as keyof typeof colors] || "bg-muted text-muted-foreground";
};

const FlierGrid = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Anniversary Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Celebrate our diamond jubilee with a year-long series of special events, 
            reunions, and commemorative activities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockFliers.map((flier) => (
            <Card key={flier.id} className="group hover:shadow-elegant transition-all duration-300 overflow-hidden border-0 shadow-lg">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={flier.image} 
                  alt={flier.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge className={`${getCategoryColor(flier.category)} text-xs font-medium`}>
                    {flier.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {format(flier.date, "MMM dd")}
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {flier.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                  {flier.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    {flier.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    {flier.time}
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlierGrid;