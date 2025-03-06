import React from 'react';

const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center mt-4 p-6">
      <p className="text-3xl font-bold font-outfit text-gray-800">Subscribe now & <span className='text-primary'>get 20% off</span></p>
      <p className="text-gray-600 mt-3">
        Stay updated with our latest offers and exclusive deals. Subscribe now to never miss out!
        Stay updated with our latest offers and exclusive deals. Subscribe now to never miss out!      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded-lg"
      >
        <input
          className="w-full sm:flex-1 outline-none p-3"
          type="email"
          placeholder="Enter your e-mail"
          required
        />
        <button
          type="submit"
          className="bg-primary text-white text-lg px-10 py-4 rounded-lg hover:opacity-90 transition"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
