
import { SmilePlus, Activity, HeartPulse, BrainCircuit } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-montserrat">Our Features</h2>
          <p className="text-lg text-gray-700">
            DogEmote AI offers a comprehensive suite of tools to help you understand your furry friend better than ever before.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="feature-card-content p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-purple-100 rounded-xl mr-4">
                  <SmilePlus className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="font-montserrat text-xl font-semibold">Real-Time Emotion Analysis</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Our advanced AI detects a range of emotions including happiness, sadness, fear, surprise, and more. Each emotion comes with a confidence score to help you understand the reliability of the analysis.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">Happiness</span>
                    <span className="text-green-600 font-medium">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 font-medium">Anxiety</span>
                    <span className="text-yellow-600 font-medium">15%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "15%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="feature-card-content p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-xl mr-4">
                  <Activity className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="font-montserrat text-xl font-semibold">Mood & Activity Insights</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Understand your dog's current mood and activity level. Our AI assesses playfulness, alertness, relaxation, and more based on visual cues in the image.
              </p>
              <div className="space-y-4 text-sm">
                <div className="flex items-center">
                  <span className="text-gray-700 font-medium w-24">Energy</span>
                  <div className="flex-1 mx-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  <span className="text-blue-600 font-medium">High</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-700 font-medium w-24">Playfulness</span>
                  <div className="flex-1 mx-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <span className="text-purple-600 font-medium">Very High</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="feature-card-content p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-100 rounded-xl mr-4">
                  <HeartPulse className="h-7 w-7 text-red-600" />
                </div>
                <h3 className="font-montserrat text-xl font-semibold">Health Indicator Alerts</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Our AI can spot potential health concerns through visual cues, providing early warnings for issues that might require veterinary attention.
              </p>
              <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                <p className="text-sm text-gray-700 flex items-center">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                  <span className="font-medium">Important:</span>
                  <span className="ml-1">
                    While our AI can detect visual indicators, always consult with a veterinarian for proper diagnosis and treatment.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="feature-card-content p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-xl mr-4">
                  <BrainCircuit className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="font-montserrat text-xl font-semibold">Explainable AI</h3>
              </div>
              <p className="text-gray-700 mb-6">
                We don't just provide results - we explain them. Understand why our AI made specific assessments about your dog's emotions and health.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm italic text-gray-600">
                  "Rex appears happy (92% confidence) based on relaxed ears, open mouth with tongue visible, and bright eyes. His playful posture and alert gaze suggest high energy levels."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
