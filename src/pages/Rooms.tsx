import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, Car, Utensils, Waves, Users, Bed, Bath, Square, Star, X, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

const Rooms: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const rooms = [
    {
      id: 1,
      name: 'Deluxe Ocean View',
      price: 250,
      image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      size: 45,
      capacity: 2,
      beds: 1,
      bathrooms: 1,
      amenities: ['Ocean View', 'Free Wi-Fi', 'Mini Bar', 'Air Conditioning', 'Room Service', '24/7 Concierge', 'Daily Housekeeping', 'Premium Toiletries'],
      description: 'Experience breathtaking ocean views from this elegantly appointed deluxe room featuring modern amenities and luxurious furnishings.',
      detailedDescription: 'Our Deluxe Ocean View rooms offer an unparalleled experience with floor-to-ceiling windows showcasing stunning panoramic views of the Indian Ocean. Each room is meticulously designed with contemporary furnishings, marble bathrooms, and state-of-the-art technology. The spacious layout includes a comfortable seating area, work desk, and premium bedding for the ultimate comfort.',
      features: [
        'Floor-to-ceiling windows with ocean views',
        'Marble bathroom with rain shower',
        'Premium Egyptian cotton linens',
        'Nespresso coffee machine',
        'Smart TV with streaming services',
        'Climate control system',
        'In-room safe',
        'Complimentary Wi-Fi'
      ],
      rating: 4.8
    },
    {
      id: 2,
      name: 'Executive Suite',
      price: 450,
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      size: 75,
      capacity: 4,
      beds: 2,
      bathrooms: 2,
      amenities: ['Living Area', 'Executive Lounge Access', 'Butler Service', 'Premium Amenities', 'City View', 'Kitchenette', 'Dining Area', 'Work Station'],
      description: 'Spacious executive suite with separate living area, perfect for business travelers and those seeking extra comfort and luxury.',
      detailedDescription: 'The Executive Suite combines luxury with functionality, featuring a separate living room, dining area, and bedroom. Perfect for extended stays or business travelers, this suite includes access to our exclusive Executive Lounge with complimentary breakfast, evening cocktails, and business facilities.',
      features: [
        'Separate living and sleeping areas',
        'Executive lounge access',
        'Personal butler service',
        'Kitchenette with premium appliances',
        'Dining table for 4 guests',
        'Two marble bathrooms',
        'Walk-in closet',
        'Private balcony'
      ],
      rating: 4.9
    },
    {
      id: 3,
      name: 'Presidential Suite',
      price: 800,
      image: 'https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1631049552057-403cdb8f0658?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      size: 120,
      capacity: 6,
      beds: 3,
      bathrooms: 3,
      amenities: ['Private Terrace', 'Jacuzzi', 'Personal Chef', 'Limousine Service', 'Panoramic Views', 'Wine Cellar', 'Home Theater', 'Gym Access'],
      description: 'The ultimate in luxury accommodation, featuring a private terrace, jacuzzi, and unparalleled views of the city and ocean.',
      detailedDescription: 'Our Presidential Suite represents the pinnacle of luxury hospitality. Spanning an entire floor, this magnificent suite features multiple bedrooms, a grand living area, private terrace with jacuzzi, and personalized services including a dedicated chef and limousine service.',
      features: [
        'Entire floor accommodation',
        'Private terrace with jacuzzi',
        'Personal chef and butler',
        'Limousine service',
        'Wine cellar with premium selections',
        'Home theater system',
        'Private gym access',
        'Panoramic city and ocean views'
      ],
      rating: 5.0
    },
    {
      id: 4,
      name: 'Garden Villa',
      price: 350,
      image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      size: 90,
      capacity: 4,
      beds: 2,
      bathrooms: 2,
      amenities: ['Private Garden', 'Outdoor Seating', 'Ground Floor Access', 'Pet Friendly', 'Kitchenette', 'BBQ Area', 'Garden View', 'Patio'],
      description: 'Tranquil garden villa with private outdoor space, perfect for guests seeking a peaceful retreat surrounded by nature.',
      detailedDescription: 'Escape to our serene Garden Villa, featuring direct access to beautifully landscaped gardens. This ground-floor accommodation offers the perfect blend of indoor comfort and outdoor tranquility, with a private patio and garden area for ultimate relaxation.',
      features: [
        'Private landscaped garden',
        'Outdoor dining patio',
        'BBQ facilities',
        'Pet-friendly accommodation',
        'Ground floor accessibility',
        'Full kitchenette',
        'Garden view from all windows',
        'Outdoor shower option'
      ],
      rating: 4.7
    },
    {
      id: 5,
      name: 'Premium Harbour View',
      price: 320,
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      size: 55,
      capacity: 3,
      beds: 1,
      bathrooms: 1,
      amenities: ['Harbour View', 'Work Desk', 'Express Check-in', 'Complimentary Breakfast', 'Late Check-out', 'Business Center', 'Meeting Room', 'Printer Access'],
      description: 'Modern room with stunning harbour views, designed for both leisure and business travelers with premium amenities.',
      detailedDescription: 'Our Premium Harbour View rooms offer spectacular views of the bustling harbour and city skyline. Designed with the modern traveler in mind, these rooms feature a dedicated workspace, express services, and complimentary breakfast to start your day right.',
      features: [
        'Panoramic harbour views',
        'Dedicated work station',
        'Express check-in/out',
        'Complimentary gourmet breakfast',
        'Late check-out privilege',
        'Business center access',
        'High-speed internet',
        'City skyline views'
      ],
      rating: 4.6
    },
    {
      id: 6,
      name: 'Family Suite',
      price: 400,
      image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ],
      size: 85,
      capacity: 5,
      beds: 2,
      bathrooms: 2,
      amenities: ['Kids Play Area', 'Connecting Rooms Available', 'Baby Cot', 'Game Console', 'Family Dining', 'Child Safety', 'Babysitting', 'Kids Menu'],
      description: 'Spacious family suite designed with children in mind, featuring dedicated play areas and family-friendly amenities.',
      detailedDescription: 'Perfect for families, our Family Suite offers spacious accommodation with child-friendly features and safety measures. The suite includes a dedicated play area, connecting room options, and special amenities to ensure a comfortable stay for guests of all ages.',
      features: [
        'Dedicated children\'s play area',
        'Connecting rooms available',
        'Child safety features',
        'Baby cot and high chair',
        'Gaming console',
        'Family dining area',
        'Babysitting services',
        'Kids welcome amenities'
      ],
      rating: 4.8
    }
  ];

  const selectedRoomData = rooms.find(room => room.id === selectedRoom);

  const nextImage = () => {
    if (selectedRoomData) {
      setCurrentImageIndex((prev) => 
        prev === selectedRoomData.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedRoomData) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedRoomData.gallery.length - 1 : prev - 1
      );
    }
  };

  const openRoomDetails = (roomId: number) => {
    setSelectedRoom(roomId);
    setCurrentImageIndex(0);
  };

  const closeRoomDetails = () => {
    setSelectedRoom(null);
    setCurrentImageIndex(0);
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-slate-800 dark:text-white mb-4">
            Luxury Accommodations
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Discover our collection of elegantly appointed rooms and suites, each designed to provide the ultimate in comfort and luxury
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white dark:bg-slate-800 px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                  <span className="text-sm font-medium text-slate-800 dark:text-white">
                    {room.rating}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                  {room.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {room.description}
                </p>

                {/* Room specs */}
                <div className="grid grid-cols-4 gap-4 mb-4 text-center">
                  <div>
                    <Square className="w-5 h-5 text-amber-500 mx-auto mb-1" />
                    <div className="text-sm text-slate-600 dark:text-slate-300">{room.size}m²</div>
                  </div>
                  <div>
                    <Users className="w-5 h-5 text-amber-500 mx-auto mb-1" />
                    <div className="text-sm text-slate-600 dark:text-slate-300">{room.capacity} guests</div>
                  </div>
                  <div>
                    <Bed className="w-5 h-5 text-amber-500 mx-auto mb-1" />
                    <div className="text-sm text-slate-600 dark:text-slate-300">{room.beds} bed{room.beds > 1 ? 's' : ''}</div>
                  </div>
                  <div>
                    <Bath className="w-5 h-5 text-amber-500 mx-auto mb-1" />
                    <div className="text-sm text-slate-600 dark:text-slate-300">{room.bathrooms} bath{room.bathrooms > 1 ? 's' : ''}</div>
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-800 dark:text-white mb-2">Key Amenities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.slice(0, 3).map((amenity, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-sm rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                    {room.amenities.length > 3 && (
                      <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm rounded-full">
                        +{room.amenities.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Price and actions */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-3xl font-bold text-slate-800 dark:text-white">
                      ${room.price}
                    </span>
                    <span className="text-slate-600 dark:text-slate-300">/night</span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => openRoomDetails(room.id)}
                    className="flex-1 px-4 py-2 border-2 border-amber-500 text-amber-600 dark:text-amber-400 font-medium rounded-lg hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all duration-200"
                  >
                    View Details
                  </button>
                  <Link
                    to="/booking"
                    state={{ selectedRoom: room }}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl text-center flex items-center justify-center"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Room Details Overlay */}
        <AnimatePresence>
          {selectedRoom && selectedRoomData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
              onClick={closeRoomDetails}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-slate-800 rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="relative">
                  <div className="relative h-80">
                    <img
                      src={selectedRoomData.gallery[currentImageIndex]}
                      alt={selectedRoomData.name}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Navigation arrows */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Image indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {selectedRoomData.gallery.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={closeRoomDetails}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
                        {selectedRoomData.name}
                      </h2>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-5 h-5 text-amber-400 fill-current" />
                          <span className="font-medium text-slate-800 dark:text-white">
                            {selectedRoomData.rating}
                          </span>
                        </div>
                        <span className="text-slate-600 dark:text-slate-300">•</span>
                        <span className="text-slate-600 dark:text-slate-300">
                          {selectedRoomData.size}m² • {selectedRoomData.capacity} guests
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">
                        ${selectedRoomData.price}
                      </div>
                      <div className="text-slate-600 dark:text-slate-300">per night</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left column */}
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">
                        About This Room
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-6">
                        {selectedRoomData.detailedDescription}
                      </p>

                      <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">
                        Room Features
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {selectedRoomData.features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                            <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right column */}
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">
                        Room Specifications
                      </h4>
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                          <Square className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                          <div className="font-semibold text-slate-800 dark:text-white">{selectedRoomData.size}m²</div>
                          <div className="text-sm text-slate-600 dark:text-slate-300">Room Size</div>
                        </div>
                        <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                          <Users className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                          <div className="font-semibold text-slate-800 dark:text-white">{selectedRoomData.capacity}</div>
                          <div className="text-sm text-slate-600 dark:text-slate-300">Max Guests</div>
                        </div>
                        <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                          <Bed className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                          <div className="font-semibold text-slate-800 dark:text-white">{selectedRoomData.beds}</div>
                          <div className="text-sm text-slate-600 dark:text-slate-300">Bedroom{selectedRoomData.beds > 1 ? 's' : ''}</div>
                        </div>
                        <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                          <Bath className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                          <div className="font-semibold text-slate-800 dark:text-white">{selectedRoomData.bathrooms}</div>
                          <div className="text-sm text-slate-600 dark:text-slate-300">Bathroom{selectedRoomData.bathrooms > 1 ? 's' : ''}</div>
                        </div>
                      </div>

                      <h4 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">
                        All Amenities
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedRoomData.amenities.map((amenity, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-sm rounded-full"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex space-x-4 pt-6 border-t border-slate-200 dark:border-slate-700">
                    <button
                      onClick={closeRoomDetails}
                      className="flex-1 px-6 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200"
                    >
                      Close
                    </button>
                    <Link
                      to="/booking"
                      state={{ selectedRoom: selectedRoomData }}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl text-center flex items-center justify-center"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Book This Room
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 p-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Choosing?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Our concierge team is available 24/7 to help you find the perfect accommodation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-slate-50 transition-all duration-200">
              Call +94 11 234 5678
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-amber-600 transition-all duration-200">
              Live Chat
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Rooms;