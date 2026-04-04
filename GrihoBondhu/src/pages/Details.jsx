import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import clean from "../assets/clean_1.jpg";
import plumbing from "../assets/plum_1.jpg";
import car from "../assets/car_1.jpg";
import pest from "../assets/pest_1.jpg";
import clean1 from "../assets/clean_2.jpg";

// ✅ API instance
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:4000",
});

const services = [
  {
    id: 1,
    name: "Home Cleaning",
    category: "Home Cleaning",
    description: "Professional home cleaning services.",
    rating: 4.8,
    image: clean,
    price: { regular: 20, standard: 35, premium: 50 },
  },
  {
    id: 2,
    name: "Plumbing Repair",
    category: "Plumbing",
    description: "Expert plumbing repair services.",
    rating: 4.7,
    image: plumbing,
    price: { regular: 25, standard: 40, premium: 60 },
  },
  {
    id: 3,
    name: "Car Engine Repair",
    category: "Car Repair",
    description: "Reliable car repair services.",
    rating: 4.9,
    image: car,
    price: { regular: 30, standard: 50, premium: 70 },
  },
  {
    id: 4,
    name: "Pest Control",
    category: "Pest Control",
    description: "Safe pest control services.",
    rating: 4.6,
    image: pest,
    price: { regular: 15, standard: 30, premium: 45 },
  },
  {
    id: 5,
    name: "Kitchen Cleaning",
    category: "Home Cleaning",
    description: "Professional kitchen cleaning.",
    rating: 4.8,
    image: clean1,
    price: { regular: 20, standard: 35, premium: 50 },
  },
];

const ServiceDetailsPage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const service = services.find(
    (s) => s.id === parseInt(serviceId)
  );

  const [reviews, setReviews] = useState([]);
  const [loadingReviews, setLoadingReviews] = useState(true);

  const [review, setReview] = useState({
    name: "",
    rating: "",
    comment: "",
  });

  // ✅ Fetch reviews
  const fetchReviews = async () => {
    try {
      setLoadingReviews(true);
      const res = await API.get(`/api/reviews/${serviceId}`);
      setReviews(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load reviews!");
    } finally {
      setLoadingReviews(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchReviews();
  }, [serviceId]);

  // ✅ Submit review
  const handleSubmitReview = async (e) => {
    e.preventDefault();

    try {
      await API.post("/api/reviews", {
        serviceId: service.id,
        name: review.name,
        rating: Number(review.rating),
        comment: review.comment,
      });

      toast.success("Review submitted 🎉");

      setReview({ name: "", rating: "", comment: "" });
      fetchReviews();

    } catch (err) {
      console.error(err);
      toast.error("Failed to submit review!");
    }
  };

  if (!service) {
    return <div className="text-center mt-20">Service not found!</div>;
  }

  const relatedServices = services.filter(
    (s) =>
      s.category === service.category && s.id !== service.id
  );

  return (
    <div className="min-h-screen p-6 mt-20">
      <div className="bg-white p-6 rounded-lg shadow">

        {/* TITLE */}
        <h1 className="text-3xl font-bold">{service.name}</h1>

        {/* MAIN */}
        <div className="mt-6 flex flex-col md:flex-row gap-6">
          <img
            src={service.image}
            alt={service.name}
            className="w-full md:w-1/3 rounded-lg shadow"
          />

          <div>
            <p className="text-gray-600">{service.description}</p>
            <p className="mt-3 text-yellow-500 font-semibold">
              ⭐ {service.rating}
            </p>

            <h2 className="mt-4 text-xl font-semibold">Pricing</h2>
            <ul className="mt-2 space-y-1">
              <li>Regular: ৳{service.price.regular}</li>
              <li>Standard: ৳{service.price.standard}</li>
              <li>Premium: ৳{service.price.premium}</li>
            </ul>

            <button
              onClick={() =>
                navigate(`/booking/${service.id}`, {
                  state: { service },
                })
              }
              className="mt-5 bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600"
            >
              Book Now
            </button>
          </div>
        </div>

        {/* REVIEWS */}
        <h3 className="mt-8 text-xl font-semibold">
          Customer Reviews
        </h3>

        {loadingReviews ? (
          <p className="mt-2 text-gray-500">Loading reviews...</p>
        ) : reviews.length > 0 ? (
          <ul className="mt-4 space-y-3">
            {reviews.map((rev, i) => (
              <li key={i} className="border p-3 rounded-lg">
                <p className="font-semibold">
                  {rev.name} ⭐ {rev.rating}
                </p>
                <p className="text-gray-600">{rev.comment}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-gray-500">
            No reviews yet.
          </p>
        )}

        {/* REVIEW FORM */}
        <h3 className="mt-8 text-xl font-semibold">
          Leave a Review
        </h3>

        <form
          onSubmit={handleSubmitReview}
          className="mt-4 space-y-3 max-w-sm"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={review.name}
            onChange={(e) =>
              setReview({ ...review, name: e.target.value })
            }
            className="w-full p-2 border rounded"
            required
          />

          <input
            type="number"
            min="1"
            max="5"
            placeholder="Rating (1-5)"
            value={review.rating}
            onChange={(e) =>
              setReview({ ...review, rating: e.target.value })
            }
            className="w-full p-2 border rounded"
            required
          />

          <textarea
            placeholder="Your Review"
            value={review.comment}
            onChange={(e) =>
              setReview({ ...review, comment: e.target.value })
            }
            className="w-full p-2 border rounded"
            required
          />

          <button className="bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600">
            Submit Review
          </button>
        </form>

        {/* RELATED */}
        <h3 className="mt-8 text-xl font-semibold">
          Related Services
        </h3>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-4">
          {relatedServices.map((s) => (
            <div
              key={s.id}
              onClick={() => navigate(`/details/${s.id}`)}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg cursor-pointer"
            >
              <img
                src={s.image}
                alt={s.name}
                className="w-full h-40 object-cover rounded"
              />
              <h4 className="text-lg font-semibold mt-3">
                {s.name}
              </h4>
              <p className="text-gray-600 text-sm">
                {s.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ServiceDetailsPage;