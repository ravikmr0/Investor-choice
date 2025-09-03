import React from "react";
import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import SearchFilters from "./SearchFilters";
import PropertyCard from "./PropertyCard";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [api, setApi] = React.useState<any>();
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Enhanced auto-slide functionality with pause on hover
  React.useEffect(() => {
    if (!api || !isAutoPlaying) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [api, isAutoPlaying]);

  // Track current slide
  React.useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Enhanced hero slider images with better variety
  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=90",
      title: "Luxury Living Spaces",
      subtitle: "Premium apartments with modern amenities",
    },
    {
      url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=90",
      title: "Elegant Villa Collection",
      subtitle: "Spacious villas in prime locations",
    },
    {
      url: "https://images.unsplash.com/photo-1600047509807-f8261a3f7051?w=1920&q=90",
      title: "Modern Architecture",
      subtitle: "Contemporary designs for modern living",
    },
    {
      url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=90",
      title: "Investment Opportunities",
      subtitle: "High-return properties in Greater Noida",
    },
    {
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=90",
      title: "Dream Homes Await",
      subtitle: "Find your perfect property today",
    },
    {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=90",
      title: "Luxury Interiors",
      subtitle: "Beautifully designed living spaces",
    },
  ];

  // Mock data for featured properties
  const featuredProperties = [
    {
      id: 1,
      title: "Luxury Apartment in Sector 1",
      price: "₹45.5 Lac",
      location: "Sector 1, Greater Noida",
      bedrooms: 3,
      bathrooms: 2,
      area: "1250 sq.ft",
      image:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    },
    {
      id: 2,
      title: "Premium Villa in Sector 16B",
      price: "₹1.2 Cr",
      location: "Sector 16B, Greater Noida",
      bedrooms: 4,
      bathrooms: 3,
      area: "2100 sq.ft",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    },
    {
      id: 3,
      title: "Modern Apartment in Sector 4",
      price: "₹38.75 Lac",
      location: "Sector 4, Greater Noida",
      bedrooms: 2,
      bathrooms: 2,
      area: "1050 sq.ft",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    },
    {
      id: 4,
      title: "Spacious Flat in Sector 10",
      price: "₹52.8 Lac",
      location: "Sector 10, Greater Noida",
      bedrooms: 3,
      bathrooms: 2,
      area: "1450 sq.ft",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    },
    {
      id: 5,
      title: "Elegant Villa in Sector 12",
      price: "₹95.5 Lac",
      location: "Sector 12, Greater Noida",
      bedrooms: 4,
      bathrooms: 3,
      area: "1850 sq.ft",
      image:
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    },
    {
      id: 6,
      title: "Budget Friendly Flat in Sector 2",
      price: "₹32.5 Lac",
      location: "Sector 2, Greater Noida",
      bedrooms: 2,
      bathrooms: 1,
      area: "950 sq.ft",
      image:
        "https://images.unsplash.com/photo-1600047509807-f8261a3f7051?w=800&q=80",
    },
  ];

  // Mock data for property types
  const propertyTypes = [
    { name: "Apartments", count: 124, icon: "🏢" },
    { name: "Villas", count: 45, icon: "🏡" },
    { name: "Plots", count: 78, icon: "🏞️" },
    { name: "Commercial", count: 36, icon: "🏪" },
  ];

  // Mock data for locations
  const locations = [
    { name: "Sector 1", count: 18 },
    { name: "Sector 2", count: 24 },
    { name: "Sector 4", count: 15 },
    { name: "Sector 10", count: 32 },
    { name: "Sector 12", count: 27 },
    { name: "Sector 16B", count: 19 },
  ];

  return (
    <div className="bg-background min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-primary">
                Investor Choice
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Home
              </Link>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-primary font-medium">
                  Properties <ChevronDown size={16} className="ml-1" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10 hidden group-hover:block">
                  <Link
                    to="/properties/apartments"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Apartments
                  </Link>
                  <Link
                    to="/properties/villas"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Villas
                  </Link>
                  <Link
                    to="/properties/plots"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Plots
                  </Link>
                  <Link
                    to="/properties/commercial"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Commercial
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-primary font-medium">
                  Locations <ChevronDown size={16} className="ml-1" />
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10 hidden group-hover:block">
                  {locations.map((location) => (
                    <Link
                      key={location.name}
                      to={`/locations/${location.name.toLowerCase().replace(" ", "-")}`}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {location.name} ({location.count})
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                to="/about"
                className="text-gray-700 hover:text-primary font-medium"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-primary font-medium"
              >
                Contact
              </Link>
              <Button variant="default" className="ml-4">
                <Phone size={16} className="mr-2" /> Call Now
              </Button>
            </nav>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="pt-2 space-y-1">
                <Link
                  to="/"
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  Home
                </Link>
                <div className="block px-3 py-2">
                  <button className="flex items-center text-gray-700 font-medium w-full text-left">
                    Properties <ChevronDown size={16} className="ml-1" />
                  </button>
                  <div className="pl-4 mt-1 space-y-1">
                    <Link
                      to="/properties/apartments"
                      className="block px-3 py-1 text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                      Apartments
                    </Link>
                    <Link
                      to="/properties/villas"
                      className="block px-3 py-1 text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                      Villas
                    </Link>
                    <Link
                      to="/properties/plots"
                      className="block px-3 py-1 text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                      Plots
                    </Link>
                    <Link
                      to="/properties/commercial"
                      className="block px-3 py-1 text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                      Commercial
                    </Link>
                  </div>
                </div>
                <div className="block px-3 py-2">
                  <button className="flex items-center text-gray-700 font-medium w-full text-left">
                    Locations <ChevronDown size={16} className="ml-1" />
                  </button>
                  <div className="pl-4 mt-1 space-y-1">
                    {locations.map((location) => (
                      <Link
                        key={location.name}
                        to={`/locations/${location.name.toLowerCase().replace(" ", "-")}`}
                        className="block px-3 py-1 text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        {location.name} ({location.count})
                      </Link>
                    ))}
                  </div>
                </div>
                <Link
                  to="/about"
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  Contact
                </Link>
                <div className="px-3 py-2">
                  <Button variant="default" className="w-full">
                    <Phone size={16} className="mr-2" /> Call Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden bg-gray-900">
        <div
          className="w-full h-full relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              duration: 30,
            }}
            className="w-full h-full"
          >
            <CarouselContent className="h-full -ml-0">
              {heroImages.map((image, index) => (
                <CarouselItem key={index} className="h-full pl-0 basis-full">
                  <div className="relative w-full h-full">
                    {/* Background Image with Parallax Effect */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] ease-out"
                      style={{
                        backgroundImage: `url(${image.url})`,
                        filter: "brightness(0.7) contrast(1.1)",
                      }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />

                    {/* Animated Overlay Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-pulse" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Enhanced Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
          {/* Dynamic Title Based on Current Slide */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-2xl animate-fade-in">
              {heroImages[currentSlide]?.title ||
                "Find Your Dream Investment Property"}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-2 drop-shadow-lg font-light">
              {heroImages[currentSlide]?.subtitle ||
                "Explore premium properties with expert guidance"}
            </p>
          </div>

          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-4xl drop-shadow-md leading-relaxed">
            Discover exceptional residential and commercial investment
            opportunities in Greater Noida's most sought-after locations.
          </p>

          {/* Enhanced Search Filters */}
          <div className="w-full max-w-5xl bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8 border border-white/20">
            <SearchFilters />
          </div>
        </div>

        {/* Enhanced Navigation Arrows */}
        <button
          onClick={() => api?.scrollPrev()}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 md:p-4 transition-all duration-300 hover:scale-110 group"
        >
          <svg
            className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={() => api?.scrollNext()}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 md:p-4 transition-all duration-300 hover:scale-110 group"
        >
          <svg
            className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Enhanced Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? "w-12 h-3 bg-white shadow-lg"
                  : "w-3 h-3 bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
          <div
            className="h-full bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300"
            style={{
              width: `${((currentSlide + 1) / heroImages.length) * 100}%`,
            }}
          />
        </div>

        {/* Floating Elements */}
        <div
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        />
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-blue-400/20 rounded-full blur-lg animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-40 left-20 w-12 h-12 bg-purple-400/20 rounded-full blur-md animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "5s" }}
        />
      </section>

      {/* Featured Properties */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Featured Properties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our handpicked selection of premium investment properties
              in the most sought-after locations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" size="lg">
              View All Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Browse by Property Type</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find the perfect property that matches your specific requirements
              and preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {propertyTypes.map((type) => (
              <Card
                key={type.name}
                className="hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{type.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{type.name}</h3>
                  <p className="text-gray-500">{type.count} Properties</p>
                  <Button variant="link" className="mt-4">
                    Browse {type.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Locations */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Popular Locations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover investment properties in the most desirable and
              well-connected neighborhoods.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <Link
                key={location.name}
                to={`/locations/${location.name.toLowerCase().replace(" ", "-")}`}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow h-48 relative group">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url(https://images.unsplash.com/photo-${1600585154000 + locations.indexOf(location)}340-be6161a56a0c?w=800&q=80)`,
                      backgroundBlendMode: "overlay",
                      backgroundColor: "rgba(0,0,0,0.3)",
                      transition: "all 0.3s ease",
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-30 transition-opacity"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                    <h3 className="text-xl font-bold mb-2">{location.name}</h3>
                    <p>{location.count} Properties</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive real estate services with a focus on
              customer satisfaction and expert guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Wide Range of Properties
              </h3>
              <p className="text-gray-600">
                Explore a diverse portfolio of residential and commercial
                properties across Greater Noida.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Prime Locations</h3>
              <p className="text-gray-600">
                Access to properties in the most sought-after and well-connected
                investment areas.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <Phone size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
              <p className="text-gray-600">
                Receive personalized assistance from our team of experienced
                real estate professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 md:py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact our team of experts today for personalized assistance and
            guidance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="secondary" size="lg">
              <Phone size={18} className="mr-2" /> Call Us Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Mail size={18} className="mr-2" /> Send Inquiry
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Investor Choice
              </h3>
              <p className="mb-4">
                Your trusted partner for finding the perfect investment
                property. We offer comprehensive real estate services with a
                focus on customer satisfaction.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/properties" className="hover:text-white">
                    Properties
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Property Types
              </h3>
              <ul className="space-y-2">
                {propertyTypes.map((type) => (
                  <li key={type.name}>
                    <Link
                      to={`/properties/${type.name.toLowerCase()}`}
                      className="hover:text-white"
                    >
                      {type.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/properties/ready-to-move"
                    className="hover:text-white"
                  >
                    Ready to Move
                  </Link>
                </li>
                <li>
                  <Link
                    to="/properties/under-construction"
                    className="hover:text-white"
                  >
                    Under Construction
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Contact Information
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                  <span>
                    Office 123, Investment Plaza, Commercial Complex, Sector 4,
                    New Delhi, DL 110001
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone size={20} className="mr-2 flex-shrink-0" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center">
                  <Mail size={20} className="mr-2 flex-shrink-0" />
                  <span>info@investorchoice.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 py-6">
          <div className="container mx-auto px-4 text-center">
            <p>
              © {new Date().getFullYear()} Investor Choice. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
