
import { useState } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface BreedEmotionInfo {
  breed: string;
  image: string;
  description: string;
  emotionalTraits: {
    [key: string]: string;
  };
  behavioralSigns: string[];
}

const breedEmotionData: BreedEmotionInfo[] = [
  {
    breed: "Labrador Retriever",
    image: "https://images.unsplash.com/photo-1579977456513-3d4daf9bafbf?q=80&w=600&auto=format&fit=crop",
    description: "Known for their friendly disposition and high emotional intelligence, Labradors are naturally expressive dogs.",
    emotionalTraits: {
      happiness: "Tail wagging in circular motion, relaxed mouth appearing to 'smile'",
      anxiety: "Paw licking, panting when not hot, pinned back ears",
      excitement: "Jumping, play bowing, 'zoomies' (running in circles)"
    },
    behavioralSigns: [
      "When happy, their entire body may wiggle along with their tail",
      "Direct eye contact with soft eyes indicates trust and affection",
      "May lean against humans when seeking comfort or reassurance"
    ]
  },
  {
    breed: "German Shepherd",
    image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?q=80&w=600&auto=format&fit=crop",
    description: "German Shepherds are highly attentive dogs with strong emotional bonds to their families.",
    emotionalTraits: {
      happiness: "Alert posture with relaxed ears, moderate tail wagging",
      anxiety: "Pacing, excessive shedding, whale eye (showing whites of eyes)",
      alertness: "Ears forward, focused gaze, tail raised but not stiff"
    },
    behavioralSigns: [
      "Head tilting indicates curiosity and active listening",
      "Will make strong eye contact when engaged with their humans",
      "May herd family members when feeling protective"
    ]
  },
  {
    breed: "French Bulldog",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=600&auto=format&fit=crop",
    description: "Despite limited facial expression capabilities due to their flat face, Frenchies communicate emotions through body language.",
    emotionalTraits: {
      happiness: "Play bowing, 'smiling' with open mouth, bouncy movement",
      anxiety: "Excessive yawning, hiding, flattened ears",
      contentment: "Slow blinking, soft snoring, relaxed body posture"
    },
    behavioralSigns: [
      "May 'talk' with various grunts and snorts to express excitement",
      "When happy, their compact body wiggles as they can't wag tail expressively",
      "Will seek physical contact when feeling insecure or anxious"
    ]
  },
  {
    breed: "Border Collie",
    image: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?q=80&w=600&auto=format&fit=crop",
    description: "Highly intelligent and sensitive, Border Collies have subtle and complex emotional communication.",
    emotionalTraits: {
      happiness: "Moderate tail wagging, attentive gaze, relaxed mouth",
      anxiety: "Crouching, excessive eye movements, lip licking",
      focus: "Characteristic intense stare, still body, slight forward lean"
    },
    behavioralSigns: [
      "May display the famous 'collie eye' when concentrating or anxious",
      "Expresses joy through precise, controlled movements rather than exuberant displays",
      "Uses subtle head movements and ear positions to communicate emotions"
    ]
  }
];

const BreedEmotionGuide = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedBreed, setExpandedBreed] = useState<string | null>(null);

  const filteredBreeds = breedEmotionData.filter(breed => 
    breed.breed.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleBreed = (breed: string) => {
    setExpandedBreed(expandedBreed === breed ? null : breed);
  };

  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4 font-montserrat">Breed-Specific Emotion Guide</h2>
          <p className="text-gray-700">
            Each dog breed has unique ways of expressing emotions. Learn how to read your specific breed's emotional cues.
          </p>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Search for a breed..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="space-y-4">
          {filteredBreeds.length > 0 ? (
            filteredBreeds.map(breed => (
              <Card key={breed.breed} className="overflow-hidden">
                <div
                  className="flex items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleBreed(breed.breed)}
                >
                  <div className="w-20 h-20 rounded-lg overflow-hidden mr-4 flex-shrink-0">
                    <img
                      src={breed.image}
                      alt={breed.breed}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="font-semibold text-lg text-gray-800">{breed.breed}</h3>
                    <p className="text-sm text-gray-600">{breed.description}</p>
                  </div>
                  
                  <div className="ml-4">
                    {expandedBreed === breed.breed ? (
                      <ChevronUp className="text-gray-400" size={20} />
                    ) : (
                      <ChevronDown className="text-gray-400" size={20} />
                    )}
                  </div>
                </div>
                
                {expandedBreed === breed.breed && (
                  <CardContent className="border-t border-gray-100 pt-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-800 mb-3">Emotional Traits</h4>
                        <div className="space-y-3">
                          {Object.entries(breed.emotionalTraits).map(([emotion, description]) => (
                            <div key={emotion} className="bg-gray-50 p-3 rounded-lg">
                              <span className="block text-sm font-medium text-purple-700 capitalize mb-1">{emotion}:</span>
                              <span className="text-sm text-gray-700">{description}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-800 mb-3">Behavioral Signs</h4>
                        <ul className="space-y-2">
                          {breed.behavioralSigns.map((sign, index) => (
                            <li key={index} className="flex items-start">
                              <span className="inline-block w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex-shrink-0 mr-2 text-xs flex items-center justify-center font-medium">
                                {index + 1}
                              </span>
                              <span className="text-sm text-gray-700">{sign}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500">No breeds found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BreedEmotionGuide;
