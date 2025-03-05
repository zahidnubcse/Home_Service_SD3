import { FaStar, FaUserShield, FaTools, FaClock } from "react-icons/fa";

const policies = [
  {
    icon: <FaStar className="text-yellow-500 text-4xl" />, 
    title: "Top-Rated Services", 
    description: "We provide high-quality, reliable home services with expert professionals."
  },
  {
    icon: <FaUserShield className="text-blue-500 text-4xl" />, 
    title: "Trusted & Verified Experts", 
    description: "Our professionals are background-checked and highly skilled."
  },
  {
    icon: <FaTools className="text-green-500 text-4xl" />, 
    title: "Wide Range of Services", 
    description: "From cleaning to repair, we cover all home service needs."
  },
  {
    icon: <FaClock className="text-red-500 text-4xl" />, 
    title: "On-Time Service", 
    description: "We value your time and ensure punctual service delivery."
  }
];

export default function PolicySection() {
  return (
    <div className="container mx-auto p-6 ">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 font-outfit ">Why <span className="text-primary">Chooses</span> Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-semibold">
        {policies.map((item, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-r bg-teal-400 text-white shadow-md rounded-lg p-6 flex flex-col items-center text-center space-y-4 hover:shadow-xl hover:bg-primary transition-all duration-300"
          >
            {item.icon}
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-white text-opacity-90">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}