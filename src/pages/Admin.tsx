import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Upload, Image, Calendar, MapPin, Clock, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import { useToast } from "@/hooks/use-toast";

const Admin = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    time: "",
    date: "",
    category: "",
    image: null as File | null
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Since we don't have backend yet, show a toast message
    toast({
      title: "Event Created Successfully!",
      description: "Your anniversary event flier has been posted and will appear on the homepage.",
    });

    // Reset form
    setFormData({
      title: "",
      description: "",
      location: "",
      time: "",
      date: "",
      category: "",
      image: null
    });
  };

  const generateSuggestion = () => {
    // Mock AI suggestion - in real implementation this would call an AI service
    const suggestions = [
      "Join us for an unforgettable celebration of academic excellence and community spirit as we commemorate 75 years of Heritage Academy's remarkable journey.",
      "Experience a magical evening filled with nostalgia, achievements, and the bright future ahead as we honor three-quarters of a century of educational leadership.",
      "Celebrate the legacy of thousands of graduates who have shaped our world while creating new memories for the next generation of Heritage Academy scholars."
    ];
    
    const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
    setFormData(prev => ({ ...prev, description: randomSuggestion }));
    
    toast({
      title: "AI Caption Generated!",
      description: "A suggested description has been added to your event.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-foreground">
              Post Anniversary Event
            </h1>
            <p className="text-xl text-muted-foreground">
              Share your 75th anniversary celebration with the community
            </p>
            <Badge variant="secondary" className="mt-4 bg-gradient-golden text-heritage-green">
              Admin Access Required
            </Badge>
          </div>

          <Card className="shadow-elegant border-0">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5 text-primary" />
                Create Event Flier
              </CardTitle>
              <CardDescription>
                Upload details for your anniversary event. All fields are required to ensure complete event information.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div className="space-y-2">
                  <Label htmlFor="title" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Event Title
                  </Label>
                  <Input
                    id="title"
                    placeholder="e.g., Grand Opening Ceremony"
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    required
                  />
                </div>

                {/* Description with AI Enhancement */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="description">Event Description</Label>
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="sm"
                      onClick={generateSuggestion}
                      className="flex items-center gap-2"
                    >
                      <Sparkles className="h-4 w-4" />
                      AI Suggest
                    </Button>
                  </div>
                  <Textarea
                    id="description"
                    placeholder="Describe your anniversary event in detail..."
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    rows={4}
                    required
                  />
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Event Date</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time" className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Time
                    </Label>
                    <Input
                      id="time"
                      placeholder="e.g., 10:00 AM"
                      value={formData.time}
                      onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                {/* Location & Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location" className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Location
                    </Label>
                    <Input
                      id="location"
                      placeholder="e.g., Main Auditorium"
                      value={formData.location}
                      onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Ceremony">Ceremony</SelectItem>
                        <SelectItem value="Social">Social</SelectItem>
                        <SelectItem value="Exhibition">Exhibition</SelectItem>
                        <SelectItem value="Sports">Sports</SelectItem>
                        <SelectItem value="Arts">Arts</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Image Upload */}
                <div className="space-y-2">
                  <Label htmlFor="image" className="flex items-center gap-2">
                    <Image className="h-4 w-4" />
                    Event Flier Image
                  </Label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      required
                    />
                    <label htmlFor="image" className="cursor-pointer">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Click to upload flier image or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </label>
                    {formData.image && (
                      <p className="text-sm text-primary mt-2">
                        Selected: {formData.image.name}
                      </p>
                    )}
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-golden hover:shadow-golden transition-all duration-300">
                  <Upload className="mr-2 h-5 w-5" />
                  Post Anniversary Event
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Backend Notice */}
          <Card className="mt-6 border-heritage-green/20 bg-heritage-green/5">
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground text-center">
                💡 <strong>Connect to Supabase</strong> to enable full functionality including database storage, 
                authentication, and AI-powered caption generation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;