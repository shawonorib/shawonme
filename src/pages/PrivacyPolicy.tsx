import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="bg-psyco-black-light py-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center text-psyco-green-DEFAULT hover:text-psyco-green-light transition-colors mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="glassmorphism p-8 md:p-12 space-y-8">
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We collect information that you provide directly to us, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Name and contact information when you fill out contact forms</li>
                <li>Email address for communication purposes</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you updates about services and projects</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>
              <p className="text-gray-300 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties. 
                We may share information with trusted service providers who assist us in operating our website, 
                conducting our business, or serving our users, as long as those parties agree to keep this 
                information confidential.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate security measures to protect your personal information. However, 
                no method of transmission over the Internet or electronic storage is 100% secure. While we 
                strive to use commercially acceptable means to protect your personal information, we cannot 
                guarantee its absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Cookies</h2>
              <p className="text-gray-300 leading-relaxed">
                Our website may use cookies to enhance user experience. You can choose to have your computer 
                warn you each time a cookie is being sent, or you can choose to turn off all cookies through 
                your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">7. Changes to This Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact Us</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <Link to="/contact" className="text-psyco-green-DEFAULT hover:text-psyco-green-light transition-colors">
                  our contact page
                </Link>
                .
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
