import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>

        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <p className="text-gray-700 mb-4">
            Have questions about our books or orders? Reach out to us using the
            information below.
          </p>

          <ul className="text-gray-700 space-y-2 mb-6">
            <li>📍 123 Book Street, Booktown</li>
            <li>📧 contact@readerparadise.com</li>
            <li>📞 +1 234 567 890</li>
          </ul>

          <form className="space-y-4">
            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label
                className="block text-gray-700 font-medium mb-1"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="4"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-500 text-white font-semibold py-2 rounded-md hover:bg-indigo-600 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
