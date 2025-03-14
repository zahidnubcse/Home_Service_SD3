import { useNavigate } from "react-router-dom";

const ServiceCategories = () => {
  const navigate = useNavigate(); // Hook to navigate

  const categories = [
    { name: "Home Cleaning", icon: "🧹" },
    { name: "Plumbing", icon: "🔧" },
    { name: "Car Repair", icon: "🚗" },
    { name: "Home Security", icon: "🔒" },
    { name: "Electrical Services", icon: "⚡" },
    { name: "Painting", icon: "🎨" },
    { name: "Appliance Repair", icon: "🔌" },
    { name: "Pest Control", icon: "🐜" },
    { name: "Gardening", icon: "🌿" },
    { name: "Moving & Shifting", icon: "📦" },
    { name: "Interior Design", icon: "🏠" },
    { name: "Carpet Cleaning", icon: "🛋️" },
  ];

  const handleCategoryClick = (categoryName) => {
    navigate(`/services?category=${encodeURIComponent(categoryName)}`);
  };
  

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        Explore Our <span className="text-primary">Providing Services</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-0">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(category.name)}
            className="flex flex-col items-center p-4 bg-teal-100 rounded-xl shadow-md hover:shadow-lg transition-all hover:bg-primary cursor-pointer"
          >
            <span className="text-4xl">{category.icon}</span>
            <h3 className="mt-2 text-lg font-semibold">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCategories;
