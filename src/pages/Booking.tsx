import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Users, Bed, Check, CreditCard, Shield, Clock } from 'lucide-react';

const Booking: React.FC = () => {
  const location = useLocation();
  const selectedRoomFromState = location.state?.selectedRoom;

  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 2,
    rooms: 1,
    roomType: selectedRoomFromState?.id.toString() || 'deluxe',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const roomTypes = [
    { id: 'deluxe', name: 'Deluxe Ocean View', price: 250 },
    { id: 'executive', name: 'Executive Suite', price: 450 },
    { id: 'presidential', name: 'Presidential Suite', price: 800 },
    { id: 'garden', name: 'Garden Villa', price: 350 },
    { id: 'harbour', name: 'Premium Harbour View', price: 320 },
    { id: 'family', name: 'Family Suite', price: 400 }
  ];

  // Update room type if coming from room selection
  useEffect(() => {
    if (selectedRoomFromState) {
      const roomTypeMap: { [key: number]: string } = {
        1: 'deluxe',
        2: 'executive', 
        3: 'presidential',
        4: 'garden',
        5: 'harbour',
        6: 'family'
      };
      
      setFormData(prev => ({
        ...prev,
        roomType: roomTypeMap[selectedRoomFromState.id] || 'deluxe'
      }));
    }
  }, [selectedRoomFromState]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setCurrentStep(1);
      setFormData({
        checkIn: '',
        checkOut: '',
        guests: 2,
        rooms: 1,
        roomType: 'deluxe',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        specialRequests: ''
      });
    }, 3000);
  };

  const selectedRoom = roomTypes.find(room => room.id === formData.roomType);
  const nights = formData.checkIn && formData.checkOut 
    ? Math.ceil((new Date(formData.checkOut).getTime() - new Date(formData.checkIn).getTime()) / (1000 * 60 * 60 * 24))
    : 0;
  const subtotal = selectedRoom ? selectedRoom.price * nights * formData.rooms : 0;
  const taxes = subtotal * 0.15;
  const total = subtotal + taxes;

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center bg-white dark:bg-slate-800 p-12 rounded-lg shadow-2xl max-w-md mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Check className="w-10 h-10 text-white" />
          </motion.div>
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
            Booking Confirmed!
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Thank you for choosing Grandeur Hotel. Your booking confirmation has been sent to your email.
          </p>
          <div className="text-left bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              <strong>Confirmation Number:</strong> GH-{Math.random().toString(36).substr(2, 9).toUpperCase()}
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-slate-800 dark:text-white mb-4">
            Book Your Stay
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Reserve your luxury experience at Grandeur Hotel
          </p>
          {selectedRoomFromState && (
            <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg inline-block">
              <p className="text-amber-800 dark:text-amber-200">
                <strong>Selected Room:</strong> {selectedRoomFromState.name}
              </p>
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8"
            >
              {/* Step Indicator */}
              <div className="flex items-center justify-between mb-8">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                        currentStep >= step
                          ? 'bg-amber-500 text-white'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                      }`}
                    >
                      {step}
                    </div>
                    {step < 3 && (
                      <div
                        className={`flex-1 h-1 mx-4 ${
                          currentStep > step
                            ? 'bg-amber-500'
                            : 'bg-slate-200 dark:bg-slate-700'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Dates and Room Selection */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                      Select Dates & Room
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Check-in Date
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type="date"
                            name="checkIn"
                            value={formData.checkIn}
                            onChange={handleInputChange}
                            min={new Date().toISOString().split('T')[0]}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Check-out Date
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <input
                            type="date"
                            name="checkOut"
                            value={formData.checkOut}
                            onChange={handleInputChange}
                            min={formData.checkIn || new Date().toISOString().split('T')[0]}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Guests
                        </label>
                        <div className="relative">
                          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <select
                            name="guests"
                            value={formData.guests}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                          >
                            {[1, 2, 3, 4, 5, 6].map(num => (
                              <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Rooms
                        </label>
                        <div className="relative">
                          <Bed className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                          <select
                            name="rooms"
                            value={formData.rooms}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                          >
                            {[1, 2, 3, 4].map(num => (
                              <option key={num} value={num}>{num} Room{num > 1 ? 's' : ''}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Room Type
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {roomTypes.map((room) => (
                          <label
                            key={room.id}
                            className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                              formData.roomType === room.id
                                ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20'
                                : 'border-slate-300 dark:border-slate-600 hover:border-amber-300'
                            }`}
                          >
                            <input
                              type="radio"
                              name="roomType"
                              value={room.id}
                              checked={formData.roomType === room.id}
                              onChange={handleInputChange}
                              className="sr-only"
                            />
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-slate-800 dark:text-white">
                                {room.name}
                              </span>
                              <span className="text-amber-600 dark:text-amber-400 font-bold">
                                ${room.price}/night
                              </span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-200"
                    >
                      Continue to Guest Details
                    </button>
                  </motion.div>
                )}

                {/* Step 2: Guest Information */}
                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                      Guest Information
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Special Requests (Optional)
                      </label>
                      <textarea
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                        placeholder="Any special requests or requirements..."
                      />
                    </div>

                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="flex-1 px-6 py-3 border-2 border-amber-500 text-amber-600 dark:text-amber-400 font-semibold rounded-lg hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all duration-200"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setCurrentStep(3)}
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-200"
                      >
                        Review & Confirm
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Review & Payment */}
                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">
                      Review & Confirm
                    </h3>

                    {/* Booking Summary */}
                    <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg">
                      <h4 className="font-semibold text-slate-800 dark:text-white mb-4">Booking Summary</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600 dark:text-slate-300">Guest:</span>
                          <span className="text-slate-800 dark:text-white">{formData.firstName} {formData.lastName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600 dark:text-slate-300">Check-in:</span>
                          <span className="text-slate-800 dark:text-white">{formData.checkIn}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600 dark:text-slate-300">Check-out:</span>
                          <span className="text-slate-800 dark:text-white">{formData.checkOut}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600 dark:text-slate-300">Nights:</span>
                          <span className="text-slate-800 dark:text-white">{nights}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600 dark:text-slate-300">Room:</span>
                          <span className="text-slate-800 dark:text-white">{selectedRoom?.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600 dark:text-slate-300">Guests:</span>
                          <span className="text-slate-800 dark:text-white">{formData.guests}</span>
                        </div>
                      </div>
                    </div>

                    {/* Terms */}
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                        <div className="text-sm text-blue-800 dark:text-blue-200">
                          <p className="font-medium mb-1">Secure Booking</p>
                          <p>Your information is protected with 256-bit SSL encryption. Free cancellation up to 24 hours before check-in.</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="flex-1 px-6 py-3 border-2 border-amber-500 text-amber-600 dark:text-amber-400 font-semibold rounded-lg hover:bg-amber-50 dark:hover:bg-amber-900/20 transition-all duration-200"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-200 flex items-center justify-center space-x-2"
                      >
                        <CreditCard className="w-5 h-5" />
                        <span>Confirm Booking</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>

          {/* Booking Summary Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 sticky top-32"
            >
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
                Booking Summary
              </h3>

              {selectedRoom && (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 dark:text-slate-300">Room:</span>
                    <span className="font-medium text-slate-800 dark:text-white">{selectedRoom.name}</span>
                  </div>

                  {nights > 0 && (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-600 dark:text-slate-300">
                          ${selectedRoom.price} × {nights} night{nights > 1 ? 's' : ''} × {formData.rooms} room{formData.rooms > 1 ? 's' : ''}:
                        </span>
                        <span className="font-medium text-slate-800 dark:text-white">${subtotal}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-slate-600 dark:text-slate-300">Taxes & Fees:</span>
                        <span className="font-medium text-slate-800 dark:text-white">${taxes.toFixed(2)}</span>
                      </div>

                      <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-xl font-bold text-slate-800 dark:text-white">Total:</span>
                          <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">${total.toFixed(2)}</span>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-green-600 dark:text-green-400" />
                      <span className="text-sm font-medium text-green-800 dark:text-green-200">
                        Free cancellation until 24 hours before check-in
                      </span>
                    </div>
                  </div>

                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    * Prices are in USD and include service charges. Additional taxes may apply.
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;