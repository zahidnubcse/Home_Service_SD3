const ContactPage = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6 mt-16">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl w-full">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Have questions or need assistance? Fill out the form below and we'll get back to you as soon as possible.
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold">Name</label>
              <input 
                type="text" 
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                placeholder="Your Name" 
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Email</label>
              <input 
                type="email" 
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                placeholder="Your Email" 
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Message</label>
              <textarea 
                rows="4" 
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" 
                placeholder="Your Message"
              ></textarea>
            </div>
            <button className="w-full bg-teal-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-teal-600 transition">
              Send Message
            </button>
          </form>
          <div className="text-center text-gray-600 mt-6">
            <p>Email: grihobondhu@.ac.bd</p>
            <p>Phone: 01817844031</p>
            <p>Address: Uttara, Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactPage;
  