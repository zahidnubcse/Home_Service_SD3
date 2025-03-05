import { useState } from "react";
import { XIcon } from "@heroicons/react/outline";

const EMISection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-6 flex justify-center mt-0">
      <div
        onClick={toggleModal}
        className="w-full max-w-6xl mx-auto p-6 flex items-center justify-between bg-orange-400 text-white rounded-2xl shadow-lg cursor-pointer relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/confetti.png')] bg-cover opacity-20"></div>
        <div className="relative z-60">
          <h2 className="text-2xl font-bold">EMI Available🎉</h2>
          <p className="text-lg font-semibold">Buy now, pay later in Installments</p>
          <p className="text-sm">For any service greater than BDT 5,000</p>
        </div>
        <span className="text-6xl font-bold opacity-20">%</span>
        <span className="absolute bottom-2 right-4 text-xs">T&C apply</span>
      </div>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="p-6 w-[800px] max-h-[80vh] overflow-y-auto text-center shadow-xl rounded-xl bg-white relative">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            >
              <XIcon className="w-6 h-6" />
            </button>

            <h2 className="text-xl font-bold mb-4">EMI Payment Details</h2>
            
            <h3 className="text-lg font-semibold mb-4">EMI Plans by Midland Bank Ltd:</h3>
            <table className="table-auto w-full mb-6">
              <thead>
                <tr>
                  <th className="border-b px-4 py-2">Months</th>
                  <th className="border-b px-4 py-2">Monthly EMI</th>
                  <th className="border-b px-4 py-2">Total Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b px-4 py-2">3 Months</td>
                  <td className="border-b px-4 py-2">3.00%</td>
                  <td className="border-b px-4 py-2">Minimum 5,000 - Above</td>
                </tr>
                <tr>
                  <td className="border-b px-4 py-2">6 Months</td>
                  <td className="border-b px-4 py-2">4.50%</td>
                  <td className="border-b px-4 py-2">Minimum 5,000 - Above</td>
                </tr>
                <tr>
                  <td className="border-b px-4 py-2">9 Months</td>
                  <td className="border-b px-4 py-2">6.50%</td>
                  <td className="border-b px-4 py-2">Minimum 5,000 - Above</td>
                </tr>
                <tr>
                  <td className="border-b px-4 py-2">12 Months</td>
                  <td className="border-b px-4 py-2">8.50%</td>
                  <td className="border-b px-4 py-2">Minimum 5,000 - Above</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-lg font-semibold mb-4">How EMI Works</h3>
            <p className="text-gray-600 mb-4">
              EMI (Equated Monthly Installment) is one of the payment methods for online purchasing, 
              available only for customers using accepted Credit Cards on Sheba.xyz. 
              EMI allows customers to pay for services in equal monthly installments. 
              Sheba.xyz provides up to 12 months of EMI options for services worth BDT 5,000 or more.
            </p>
            <p className="text-gray-600 mb-4">
              Customers wishing to use EMI must have a Credit Card from one of the banks listed on the payment page. 
              EMI charges may vary based on promotional offers. Additional convenience fees may apply if you extend your EMI period.
            </p>

            <h3 className="text-lg font-semibold mb-4">Participating Banks</h3>
            <ul className="list-disc text-left pl-6 mb-4">
              <li>Midland Bank Ltd</li>
              <li>Islami Bank</li>
              <li>Brac Bank</li>
              <li>Dhaka Bank</li>
              <li>IFIC Bank</li>
            </ul>

            <h3 className="text-lg font-semibold mb-4">Terms and Conditions</h3>
            <p className="text-gray-600 mb-4">
              - Upon completing the purchase on Sheba.xyz, the full amount will be charged to your credit card. 
              <br />
              - Sign and submit the EMI form within 3 working days to Sheba.xyz.
              <br />
              - The bank will handle the EMI processing, and your credit limit will be reduced by the outstanding EMI amount.
            </p>

            <button
              onClick={toggleModal}
              className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EMISection;
