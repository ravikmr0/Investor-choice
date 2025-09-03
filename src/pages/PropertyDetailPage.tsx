import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  MapPin,
  Phone,
  Mail,
  Home,
  Maximize2,
  BedDouble,
  Bath,
  Square,
  Calendar,
  Check,
} from "lucide-react";
import PropertyGallery from "@/components/PropertyGallery";

interface PropertyDetailProps {
  id?: string;
}

const PropertyDetailPage: React.FC<PropertyDetailProps> = ({ id: propId }) => {
  const { id: urlId } = useParams<{ id: string }>();
  const propertyId = propId || urlId || "1";

  // Mock property data - in a real app this would come from an API
  const property = {
    id: propertyId,
    title: "Luxury 3 BHK Apartment in Greater Noida West",
    price: "₹ 65.5 Lacs",
    location: "Sector 1, Greater Noida West",
    description:
      "This beautiful 3 BHK apartment offers modern living with premium amenities. Located in a prime area of Greater Noida West, this property features spacious rooms, quality fittings, and excellent connectivity to major landmarks.",
    specifications: {
      bedrooms: 3,
      bathrooms: 2,
      area: "1450 sq.ft.",
      furnished: "Semi-Furnished",
      floor: "8th out of 18",
      facing: "East",
      possession: "Ready to Move",
      ageOfProperty: "2 years",
    },
    amenities: [
      "Swimming Pool",
      "Gym",
      "Children's Play Area",
      "Clubhouse",
      "Landscaped Gardens",
      "Security",
      "Power Backup",
      "Lift",
      "Indoor Games",
      "Jogging Track",
      "Parking",
      "Community Hall",
    ],
    nearbyPlaces: [
      { name: "Schools", distance: "0.5 km" },
      { name: "Hospitals", distance: "1.2 km" },
      { name: "Shopping Malls", distance: "2 km" },
      { name: "Metro Station", distance: "3 km" },
      { name: "Airport", distance: "35 km" },
    ],
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&q=80",
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&q=80",
      "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?w=800&q=80",
    ],
    floorPlan:
      "https://images.unsplash.com/photo-1536749790688-299ed3bd0d12?w=800&q=80",
    postedDate: "15 May, 2023",
    agent: {
      name: "Rahul Sharma",
      phone: "+91 9876543210",
      email: "rahul@investorchoice.com",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=rahul",
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message:
      "I am interested in this property. Please contact me with more information.",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a backend
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry. Our agent will contact you shortly.");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header section would typically be in a layout component */}

      <main className="container mx-auto px-4 py-8">
        {/* Property Title and Price */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground">
            {property.title}
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-2">
            <div className="flex items-center text-muted-foreground mb-2 sm:mb-0">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{property.location}</span>
            </div>
            <div className="text-2xl font-bold text-primary">
              {property.price}
            </div>
          </div>
        </div>

        {/* Property Gallery */}
        <div className="mb-8">
          <PropertyGallery images={property.images} />
        </div>

        {/* Main Content and Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs for different sections */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid grid-cols-4 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold mb-4">
                      Property Description
                    </h2>
                    <p className="text-muted-foreground">
                      {property.description}
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                      <div className="flex flex-col items-center p-3 border rounded-lg">
                        <BedDouble className="h-6 w-6 text-primary mb-2" />
                        <span className="text-sm text-muted-foreground">
                          Bedrooms
                        </span>
                        <span className="font-medium">
                          {property.specifications.bedrooms}
                        </span>
                      </div>
                      <div className="flex flex-col items-center p-3 border rounded-lg">
                        <Bath className="h-6 w-6 text-primary mb-2" />
                        <span className="text-sm text-muted-foreground">
                          Bathrooms
                        </span>
                        <span className="font-medium">
                          {property.specifications.bathrooms}
                        </span>
                      </div>
                      <div className="flex flex-col items-center p-3 border rounded-lg">
                        <Square className="h-6 w-6 text-primary mb-2" />
                        <span className="text-sm text-muted-foreground">
                          Area
                        </span>
                        <span className="font-medium">
                          {property.specifications.area}
                        </span>
                      </div>
                      <div className="flex flex-col items-center p-3 border rounded-lg">
                        <Home className="h-6 w-6 text-primary mb-2" />
                        <span className="text-sm text-muted-foreground">
                          Furnished
                        </span>
                        <span className="font-medium">
                          {property.specifications.furnished}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold mb-4">Floor Plan</h2>
                    <div className="border rounded-lg overflow-hidden">
                      <img
                        src={property.floorPlan}
                        alt="Floor Plan"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Specifications Tab */}
              <TabsContent value="specifications">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold mb-4">
                      Property Specifications
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex justify-between p-3 border-b">
                        <span className="text-muted-foreground">Bedrooms</span>
                        <span className="font-medium">
                          {property.specifications.bedrooms}
                        </span>
                      </div>
                      <div className="flex justify-between p-3 border-b">
                        <span className="text-muted-foreground">Bathrooms</span>
                        <span className="font-medium">
                          {property.specifications.bathrooms}
                        </span>
                      </div>
                      <div className="flex justify-between p-3 border-b">
                        <span className="text-muted-foreground">Area</span>
                        <span className="font-medium">
                          {property.specifications.area}
                        </span>
                      </div>
                      <div className="flex justify-between p-3 border-b">
                        <span className="text-muted-foreground">
                          Furnished Status
                        </span>
                        <span className="font-medium">
                          {property.specifications.furnished}
                        </span>
                      </div>
                      <div className="flex justify-between p-3 border-b">
                        <span className="text-muted-foreground">Floor</span>
                        <span className="font-medium">
                          {property.specifications.floor}
                        </span>
                      </div>
                      <div className="flex justify-between p-3 border-b">
                        <span className="text-muted-foreground">Facing</span>
                        <span className="font-medium">
                          {property.specifications.facing}
                        </span>
                      </div>
                      <div className="flex justify-between p-3 border-b">
                        <span className="text-muted-foreground">
                          Possession
                        </span>
                        <span className="font-medium">
                          {property.specifications.possession}
                        </span>
                      </div>
                      <div className="flex justify-between p-3 border-b">
                        <span className="text-muted-foreground">
                          Age of Property
                        </span>
                        <span className="font-medium">
                          {property.specifications.ageOfProperty}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Amenities Tab */}
              <TabsContent value="amenities">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold mb-4">
                      Property Amenities
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {property.amenities.map((amenity, index) => (
                        <div key={index} className="flex items-center p-2">
                          <Check className="h-5 w-5 text-primary mr-2" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Location Tab */}
              <TabsContent value="location">
                <Card>
                  <CardContent className="pt-6">
                    <h2 className="text-xl font-semibold mb-4">
                      Location & Nearby Places
                    </h2>

                    {/* Map placeholder - in a real app, this would be an actual map */}
                    <div className="bg-muted h-64 rounded-lg flex items-center justify-center mb-6">
                      <span className="text-muted-foreground">
                        Map View - {property.location}
                      </span>
                    </div>

                    <h3 className="text-lg font-medium mb-3">Nearby Places</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {property.nearbyPlaces.map((place, index) => (
                        <div
                          key={index}
                          className="flex justify-between p-3 border-b"
                        >
                          <span className="text-muted-foreground">
                            {place.name}
                          </span>
                          <span className="font-medium">{place.distance}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Agent Card */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden mr-4">
                    <img
                      src={property.agent.image}
                      alt={property.agent.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{property.agent.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Property Agent
                    </p>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-primary" />
                    <span>{property.agent.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-primary" />
                    <span>{property.agent.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    <span className="text-sm">
                      Posted on: {property.postedDate}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Inquiry Form */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">
                  Interested in this property?
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Your Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Property Features */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">
                  Property Features
                </h3>
                <div className="space-y-2">
                  {property.amenities.slice(0, 6).map((feature, index) => (
                    <Badge key={index} variant="outline" className="mr-2 mb-2">
                      {feature}
                    </Badge>
                  ))}
                  {property.amenities.length > 6 && (
                    <div className="text-sm text-primary cursor-pointer mt-2">
                      +{property.amenities.length - 6} more features
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PropertyDetailPage;
