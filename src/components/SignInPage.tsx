import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, Phone, Calendar, Users } from "lucide-react";

export default function SignInPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    age: "",
    gender: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the sign-in logic
    console.log("Form submitted:", formData);
    navigate("/dashboard");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Desktop layout: Image on left, form on right */}
          <div className="flex flex-col md:flex-row">
            {/* Ayurvedic Image Section */}
            <div className="md:w-1/2 bg-green-600">
              <div className="relative h-64 md:h-full">
                <img
                  src="https://media.istockphoto.com/id/488119648/photo/happy-young-female-botanist-collecting-sample-of-leafs-in-nature.jpg?s=612x612&w=0&k=20&c=QDJ_RRtwEDGt4lIVdipG_cRGYvpM0m2a-vU7W5TAL60="
                  alt="Ayurvedic herbs and treatments"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Natural Healing</h3>
                  <p className="text-green-50">
                    Experience the ancient wisdom of Ayurveda for your modern
                    wellness journey
                  </p>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="md:w-1/2 p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">
                  Welcome to Ayurcure
                </h2>
                <p className="text-gray-600 mt-2">
                  Sign in to access personalized remedies
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="relative">
                  <div className="absolute top-3 left-3 text-green-600">
                    <User size={20} />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <div className="absolute top-3 left-3 text-green-600">
                    <Phone size={20} />
                  </div>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <div className="absolute top-3 left-3 text-green-600">
                    <Mail size={20} />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <div className="absolute top-3 left-3 text-green-600">
                      <Calendar size={20} />
                    </div>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="Age"
                      required
                      min="1"
                      max="120"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute top-3 left-3 text-green-600">
                      <Users size={20} />
                    </div>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors mt-6 shadow-md"
                >
                  Sign In
                </button>

                <div className="text-center mt-4 text-sm text-gray-600">
                  By signing in, you agree to our
                  <a href="#" className="text-green-600 hover:underline ml-1">
                    Terms of Service
                  </a>
                  <span className="mx-1">and</span>
                  <a href="#" className="text-green-600 hover:underline">
                    Privacy Policy
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
