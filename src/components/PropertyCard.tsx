import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building2,
  BedDouble,
  Bath,
  Maximize,
  MapPin,
  Heart,
} from "lucide-react";

interface PropertyCardProps {
  id?: string;
  title?: string;
  location?: string;
  price?: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: string;
  propertyType?: string;
  imageUrl?: string;
  featured?: boolean;
  onViewDetails?: (id: string) => void;
  onAddToFavorite?: (id: string) => void;
}

const PropertyCard = ({
  id = "property-1",
  title = "3 BHK Luxury Apartment",
  location = "Sector 1, Greater Noida",
  price = "₹45.5 Lacs",
  bedrooms = 3,
  bathrooms = 2,
  area = "1250 sq.ft",
  propertyType = "Apartment",
  imageUrl = "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
  featured = false,
  onViewDetails = () => {},
  onAddToFavorite = () => {},
}: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        {featured && (
          <Badge className="absolute top-3 left-3 bg-primary text-white">
            Featured
          </Badge>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-white/80 hover:bg-white rounded-full"
          onClick={() => onAddToFavorite(id)}
        >
          <Heart className="h-5 w-5 text-rose-500" />
        </Button>
        <Badge className="absolute bottom-3 left-3 bg-black/70 text-white">
          {propertyType}
        </Badge>
      </div>

      <CardContent className="p-4">
        <div className="mb-2">
          <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
          <div className="flex items-center text-muted-foreground text-sm">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="line-clamp-1">{location}</span>
          </div>
        </div>

        <div className="text-xl font-bold text-primary mb-3">{price}</div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="flex items-center">
            <BedDouble className="h-4 w-4 mr-1 text-muted-foreground" />
            <span className="text-sm">{bedrooms} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1 text-muted-foreground" />
            <span className="text-sm">{bathrooms} Baths</span>
          </div>
          <div className="flex items-center">
            <Maximize className="h-4 w-4 mr-1 text-muted-foreground" />
            <span className="text-sm">{area}</span>
          </div>
        </div>

        <Button className="w-full" onClick={() => onViewDetails(id)}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
