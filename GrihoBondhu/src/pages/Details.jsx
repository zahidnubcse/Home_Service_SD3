import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import clean from "../assets/clean_1.jpg";
import plumbing from "../assets/plum_1.jpg";
import car from "../assets/car_1.jpg";
import pest from "../assets/pest_1.jpg";
import clean1 from "../assets/clean_2.jpg";

const services = [
  { id: 1, name: "Home Cleaning", category: "Home Cleaning", description: "Professional home cleaning services.", rating: 4.8, image: clean, price: { regular: 20, standard: 35, premium: 50 } },
  { id: 2, name: "Plumbing Repair", category: "Plumbing", description: "Expert plumbing repair services.", rating: 4.7, image: plumbing, price: { regular: 25, standard: 40, premium: 60 } },
  { id: 3, name: "Car Engine Repair", category: "Car Repair", description: "Reliable car repair services.", rating: 4.9, image: car, price: { regular: 30, standard: 50, premium: 70 } },
  { id: 4, name: "Pest Control", category: "Pest Control", description: "Safe pest control services.", rating: 4.6, image: pest, price: { regular: 15, standard: 30, premium: 45 } },
  { id: 5, name: "Kitchen Cleaning", category: "Home Cleaning", description: "Professional home cleaning services.", rating: 4.8, image: clean1, price: { regular: 20, standard: 35, premium: 50 } },
];

const ServiceDetailsPage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = services.find((service) => service.id === parseInt(serviceId));
  const [reviews, setReviews] = useState([]);
  const [review, setReview] = useState({ name: "", rating: "", comment: "" });

  if (!service) {
    return <div>Service not found!</div>;
  }

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (review.name && review.rating && review.comment) {
      setReviews([...reviews, review]);
      setReview({ name: "", rating: "", comment: "" });
    }
  };

  const relatedServices = services.filter(
    (relatedService) => relatedService.category === service.category && relatedService.id !== service.id
  );

  return (
    <div className="min-h-screen p-6 mt-20">
      <div className="bg-white p-6 rounded-lg">
        <h1 className="text-3xl font-bold">{service.name}</h1>

        <div className="mt-4 mb-6 flex flex-col md:flex-row">
          <img src={service.image} alt={service.name} className="w-full md:w-1/3 h-auto object-contain rounded-lg shadow-lg mb-6 md:mb-0 md:mr-6" />
          <div>
            <p className="text-gray-600">{service.description}</p>
            <p className="mt-4 text-yellow-500 font-semibold">⭐ {service.rating}</p>
            <h2 className="mt-4 text-2xl font-semibold">Price</h2>
            <ul className="mt-2">
              <li>Regular: ৳{service.price.regular}</li>
              <li>Standard: ৳{service.price.standard}</li>
              <li>Premium: ৳{service.price.premium}</li>
            </ul>
            <button onClick={() => navigate(`/booking/${service.id}`, { state: { service } })} className="mt-4 bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition duration-300">Book Now</button>
          </div>
        </div>

        <h3 className="mt-6 text-xl font-semibold">Customer Reviews</h3>
        <ul className="mt-4">
          {reviews.length > 0 ? (
            reviews.map((rev, index) => (
              <li key={index} className="border-b py-2">
                <p className="font-bold">{rev.name} - ⭐ {rev.rating}</p>
                <p>{rev.comment}</p>
              </li>
            ))
          ) : (
            <p>No reviews yet. Be the first to review!</p>
          )}
        </ul>

        <h3 className="mt-6 text-xl font-semibold">Leave a Review</h3>
        <form onSubmit={handleSubmitReview} className="mt-4 space-y-4 w-80">
          <input type="text" placeholder="Your Name" value={review.name} onChange={(e) => setReview({ ...review, name: e.target.value })} className="w-full p-2 border rounded" required />
          <input type="number" placeholder="Rating (1-5)" min="1" max="5" value={review.rating} onChange={(e) => setReview({ ...review, rating: e.target.value })} className="w-full p-2 border rounded" required />
          <textarea placeholder="Your Review" value={review.comment} onChange={(e) => setReview({ ...review, comment: e.target.value })} className="w-full p-2 border rounded" required></textarea>
          <button type="submit" className="bg-teal-500 text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition duration-300">Submit Review</button>
        </form>

        <h3 className="mt-6 text-xl font-semibold">Related Services</h3>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-4">
          {relatedServices.map((relatedService) => (
            <div key={relatedService.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-primary cursor-pointer" onClick={() => navigate(`/details/${relatedService.id}`)}>
              <img src={relatedService.image} alt={relatedService.name} className="w-full h-40 object-cover rounded-lg" />
              <h4 className="text-xl font-semibold mt-4">{relatedService.name}</h4>
              <p className="text-gray-600">{relatedService.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
