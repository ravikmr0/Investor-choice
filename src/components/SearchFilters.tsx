import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Slider } from "./ui/slider";
import { Search } from "lucide-react";

interface SearchFiltersProps {
  onSearch?: (filters: {
    location: string;
    propertyType: string;
    priceRange: [number, number];
  }) => void;
}

const SearchFilters = ({ onSearch = () => {} }: SearchFiltersProps) => {
  const [location, setLocation] = useState<string>("All Locations");
  const [propertyType, setPropertyType] = useState<string>("All Types");
  const [priceRange, setPriceRange] = useState<[number, number]>([
    500000, 10000000,
  ]);

  const handleSearch = () => {
    onSearch({
      location,
      propertyType,
      priceRange,
    });
  };

  const formatPrice = (price: number) => {
    if (price >= 10000000) {
      return `₹${(price / 10000000).toFixed(1)} Cr`;
    } else if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)} Lac`;
    } else {
      return `₹${price}`;
    }
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-4 md:p-6 flex flex-col md:flex-row gap-4 items-end">
      <div className="flex-1 space-y-2">
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700"
        >
          Location
        </label>
        <Select value={location} onValueChange={setLocation}>
          <SelectTrigger id="location" className="w-full">
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All Locations">All Locations</SelectItem>
            <SelectItem value="Greater Noida West">
              Greater Noida West
            </SelectItem>
            <SelectItem value="Greater Noida">Greater Noida</SelectItem>
            <SelectItem value="Noida Extension">Noida Extension</SelectItem>
            <SelectItem value="Noida Expressway">Noida Expressway</SelectItem>
            <SelectItem value="Yamuna Expressway">Yamuna Expressway</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1 space-y-2">
        <label
          htmlFor="property-type"
          className="block text-sm font-medium text-gray-700"
        >
          Property Type
        </label>
        <Select value={propertyType} onValueChange={setPropertyType}>
          <SelectTrigger id="property-type" className="w-full">
            <SelectValue placeholder="Select property type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All Types">All Types</SelectItem>
            <SelectItem value="Apartment">Apartment</SelectItem>
            <SelectItem value="Villa">Villa</SelectItem>
            <SelectItem value="Plot">Plot</SelectItem>
            <SelectItem value="Commercial">Commercial</SelectItem>
            <SelectItem value="Builder Floor">Builder Floor</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex-1 space-y-2">
        <div className="flex justify-between">
          <label className="block text-sm font-medium text-gray-700">
            Price Range
          </label>
          <span className="text-sm text-gray-500">
            {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
          </span>
        </div>
        <Slider
          defaultValue={[500000, 10000000]}
          min={500000}
          max={20000000}
          step={100000}
          value={priceRange}
          onValueChange={(value) => setPriceRange(value as [number, number])}
          className="py-4"
        />
      </div>

      <div className="flex-none">
        <Button
          onClick={handleSearch}
          className="bg-primary hover:bg-primary/90 text-white px-6 h-10"
        >
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchFilters;
