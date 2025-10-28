import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TermsOfService = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="glassmorphism p-8 md:p-12 space-y-8">
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by the terms and 
                provisions of this agreement. If you do not agree to these terms, please do not use this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Permission is granted to temporarily view the materials on this website for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
                and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or public display</li>
                <li>Attempt to decompile or reverse engineer any software on this website</li>
                <li>Remove any copyright or proprietary notations from the materials</li>
                <li>Transfer the materials to another person or mirror the materials on any other server</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. Services</h2>
              <p className="text-gray-300 leading-relaxed">
                This website provides information about web development services. All service agreements and 
                project terms are established on a case-by-case basis and may differ from the general 
                information provided on this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Disclaimer</h2>
              <p className="text-gray-300 leading-relaxed">
                The materials on this website are provided on an 'as is' basis. We make no warranties, expressed 
                or implied, and hereby disclaim and negate all other warranties including, without limitation, 
                implied warranties or conditions of merchantability, fitness for a particular purpose, or 
                non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Limitations</h2>
              <p className="text-gray-300 leading-relaxed">
                In no event shall we or our suppliers be liable for any damages (including, without limitation, 
                damages for loss of data or profit, or due to business interruption) arising out of the use or 
                inability to use the materials on this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. Accuracy of Materials</h2>
              <p className="text-gray-300 leading-relaxed">
                The materials appearing on this website could include technical, typographical, or photographic 
                errors. We do not warrant that any of the materials on this website are accurate, complete, or 
                current. We may make changes to the materials at any time without notice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">7. Links</h2>
              <p className="text-gray-300 leading-relaxed">
                We have not reviewed all of the sites linked to this website and are not responsible for the 
                contents of any such linked site. The inclusion of any link does not imply endorsement by us. 
                Use of any linked website is at the user's own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. Modifications</h2>
              <p className="text-gray-300 leading-relaxed">
                We may revise these terms of service at any time without notice. By using this website, you are 
                agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">9. Governing Law</h2>
              <p className="text-gray-300 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with applicable laws, 
                and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-4">10. Contact Information</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at{" "}
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

export default TermsOfService;
