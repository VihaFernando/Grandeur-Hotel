import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Phone, Star, Utensils, Wine, Coffee } from 'lucide-react';

const Restaurant: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('appetizers');
  const [reservationForm, setReservationForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    specialRequests: ''
  });

  const menuCategories = [
    { id: 'appetizers', name: 'Appetizers', icon: Utensils },
    { id: 'mains', name: 'Main Courses', icon: Utensils },
    { id: 'desserts', name: 'Desserts', icon: Coffee },
    { id: 'beverages', name: 'Beverages', icon: Wine }
  ];

  const menuItems = {
    appetizers: [
      {
        name: 'Seared Foie Gras',
        description: 'Pan-seared foie gras with cherry compote and brioche toast',
        price: 28,
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Oysters Rockefeller',
        description: 'Fresh oysters baked with spinach, herbs, and parmesan',
        price: 24,
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Tuna Tartare',
        description: 'Yellowfin tuna with avocado, sesame, and citrus vinaigrette',
        price: 22,
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Wagyu Beef Carpaccio',
        description: 'Thinly sliced wagyu with truffle oil and arugula',
        price: 32,
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      }
    ],
    mains: [
      {
        name: 'Lobster Thermidor',
        description: 'Fresh lobster with cognac cream sauce and gruyere cheese',
        price: 68,
        image: 'https://images.unsplash.com/photo-1559847844-d7b2c1a96881?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Dry-Aged Ribeye',
        description: '28-day aged ribeye with truffle butter and seasonal vegetables',
        price: 85,
        image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Pan-Seared Duck Breast',
        description: 'Confit duck leg, cherry gastrique, and potato gratin',
        price: 52,
        image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Halibut En Papillote',
        description: 'Wild halibut with vegetables and herbs baked in parchment',
        price: 45,
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      }
    ],
    desserts: [
      {
        name: 'Chocolate Soufflé',
        description: 'Dark chocolate soufflé with vanilla bean ice cream',
        price: 16,
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Crème Brûlée',
        description: 'Classic vanilla custard with caramelized sugar',
        price: 14,
        image: 'https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Tiramisu',
        description: 'Traditional Italian tiramisu with espresso and mascarpone',
        price: 15,
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Seasonal Fruit Tart',
        description: 'Fresh seasonal fruits on vanilla pastry cream',
        price: 13,
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      }
    ],
    beverages: [
      {
        name: 'Dom Pérignon 2012',
        description: 'Vintage champagne with notes of citrus and brioche',
        price: 350,
        image: 'https://images.unsplash.com/photo-1510741881574-dd86ee9b45e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Château Margaux 2015',
        description: 'Bordeaux red wine with complex tannins and fruit notes',
        price: 450,
        image: 'https://images.unsplash.com/photo-1506377247380-6fbea532b6cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Craft Cocktail Selection',
        description: 'Signature cocktails crafted by our mixologists',
        price: 18,
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      },
      {
        name: 'Single Malt Whiskey',
        description: 'Premium selection of aged single malt whiskies',
        price: 25,
        image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
      }
    ]
  };

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle reservation logic here
    alert('Reservation request submitted! We will contact you shortly to confirm.');
    setReservationForm({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: 2,
      specialRequests: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReservationForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative h-96 mb-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-4">Le Grandeur Restaurant</h1>
            <p className="text-xl mb-6">Culinary excellence in an elegant setting</p>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>
              <span className="text-lg">Michelin Recommended</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Restaurant Info */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">
                A Culinary Journey
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                Experience the finest in contemporary cuisine at Le Grandeur Restaurant. Our award-winning chef creates innovative dishes using the freshest local ingredients and time-honored techniques.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-amber-500" />
                  <div>
                    <p className="font-medium text-slate-800 dark:text-white">Operating Hours</p>
                    <p className="text-slate-600 dark:text-slate-300">Breakfast: 6:30 AM - 10:30 AM</p>
                    <p className="text-slate-600 dark:text-slate-300">Lunch: 12:00 PM - 3:00 PM</p>
                    <p className="text-slate-600 dark:text-slate-300">Dinner: 6:00 PM - 11:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-amber-500" />
                  <div>
                    <p className="font-medium text-slate-800 dark:text-white">Location</p>
                    <p className="text-slate-600 dark:text-slate-300">25th Floor, Grandeur Hotel</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-amber-500" />
                  <div>
                    <p className="font-medium text-slate-800 dark:text-white">Reservations</p>
                    <p className="text-slate-600 dark:text-slate-300">+94 11 234 5679</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                alt="Chef preparing food"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="mb-20">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
              Our Menu
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Discover our exquisite selection of dishes crafted with passion and precision
            </p>
          </motion.div>

          {/* Menu Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-amber-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {menuItems[selectedCategory as keyof typeof menuItems].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover"
                  />
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                        {item.name}
                      </h3>
                      <span className="text-2xl font-bold text-amber-600 dark:text-amber-400">
                        ${item.price}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Reservation Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-6">
                Make a Reservation
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                Reserve your table at Le Grandeur Restaurant for an unforgettable dining experience.
              </p>

              <form onSubmit={handleReservationSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={reservationForm.name}
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
                      value={reservationForm.email}
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
                      value={reservationForm.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Number of Guests
                    </label>
                    <select
                      name="guests"
                      value={reservationForm.guests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={reservationForm.date}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      required
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Time
                    </label>
                    <select
                      name="time"
                      value={reservationForm.time}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                    >
                      <option value="">Select Time</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="18:30">6:30 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                      <option value="21:30">9:30 PM</option>
                      <option value="22:00">10:00 PM</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    name="specialRequests"
                    value={reservationForm.specialRequests}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2  focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                    placeholder="Dietary restrictions, special occasions, seating preferences..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Make Reservation
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                alt="Restaurant interior"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Restaurant;