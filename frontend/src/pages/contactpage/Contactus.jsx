import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Contactus = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
  };

  return (
    <div className="container mx-auto px-6 py-6 space-y-6">
      {/* Map Section */}
      <div className="h-64 w-full">
        <MapContainer center={[28.6139, 77.209]} zoom={13} className="h-full w-full rounded-lg">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[28.6139, 77.209]}>
            <Popup>Our Office Location</Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Address Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Address</h2>
          <p className="text-gray-600">Yousufguda,Hyderabad,Telangana</p>
          <p className="text-gray-600">Phone: +9180787098920</p>
          <p className="text-gray-600">Email: sai@gmail.com</p>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg h-24"
              required
            ></textarea>
            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
