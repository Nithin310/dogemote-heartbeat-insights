
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl overflow-hidden shadow-xl">
          <div className="p-8 md:p-12 text-center md:text-left md:flex items-center justify-between">
            <div className="md:max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white font-montserrat mb-4">
                Ready to understand your dog better?
              </h2>
              <p className="text-purple-100 text-lg mb-8 md:mb-0">
                Upload a photo now and discover what your furry friend is feeling.
                Our AI will analyze their emotions and health indicators in real-time.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link 
                to="/analysis" 
                className="inline-flex items-center bg-white text-purple-700 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Try it now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
