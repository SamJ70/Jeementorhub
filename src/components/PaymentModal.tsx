import React from 'react';
import { X, Phone, Mail, Users, Camera } from 'lucide-react';
import { Plan } from '../types';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: Plan;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, plan }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md relative max-h-[90vh] flex flex-col">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black z-10"
        >
          <X size={24} />
        </button>
        
        <div className="overflow-y-auto p-8">
          <h2 className="text-2xl font-bold mb-6">Complete Payment</h2>
          
          <div className="text-center mb-6">
            <p className="text-lg mb-2">Selected Plan: <span className="font-bold">{plan.name}</span></p>
            <p className="text-2xl font-bold">₹{plan.price}</p>
          </div>

          <div className="mb-4">
            <img 
              src="src/qr code.jpg"
              alt="Payment QR Code"
              className="w-full max-w-[250px] mx-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg mb-6">
            <div className="flex items-center text-yellow-700 mb-2">
              <Camera className="w-5 h-5 mr-2" />
              <span className="font-semibold">Important!</span>
            </div>
            <p className="text-sm text-yellow-700">
              After completing the payment, please send a screenshot of your payment to <span className="font-semibold">8449044750</span> to confirm your enrollment.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="flex items-center text-green-600 mb-2">
              <Users className="w-5 h-5 mr-2" />
              <span className="font-semibold">What happens next?</span>
            </div>
            <p className="text-gray-600 text-sm">
              After payment, you'll be automatically added to your mentor's group where you'll receive:
            </p>
            <ul className="text-sm text-gray-600 mt-2 list-disc list-inside">
              <li>Direct access to your mentor</li>
              <li>Complete mentor details</li>
              <li>Study materials and resources</li>
              <li>Group discussion access</li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="text-center text-gray-600 font-medium">
              We are present IIT Roorkee students eager to meet you!
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-3">For any queries, contact us:</p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-700">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:samyak_j@me.iitr.ac.in" className="text-sm hover:underline">
                    samyak_j@me.iitr.ac.in
                  </a>
                </div>
                <div className="flex items-center text-gray-700">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">8449044750</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};