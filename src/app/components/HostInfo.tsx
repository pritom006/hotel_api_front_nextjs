import React from 'react';

interface Language {
  id: number;
  name: string;
}

interface HostInformation {
  name: string;
  languages: Language[];
  contact: string;
}

interface HostSectionProps {
  hostInfo: HostInformation;
}

const HostSection: React.FC<HostSectionProps> = ({ hostInfo }) => {
  return (
    <div className="max-w-7xl mx-auto px-8 font-sans">
      <section className="border-t border-b border-gray-200 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-900">
              About the host
            </h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-20">
              Send a message
            </h3>
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-8">
            <div className="flex items-center">
              <span className="text-2xl text-gray-900">
                Hosted by {hostInfo.name}
              </span>
            </div>

            <div className="space-y-2">
              <div className="text-2xl text-gray-900">
                Languages:
              </div>
              <div className="flex flex-wrap gap-2">
                {hostInfo.languages.map((lang, index) => (
                  <span key={lang.id} className="text-sm text-gray-600">
                    {lang.name}
                    {index < hostInfo.languages.length - 1 && ","}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={`mailto:${hostInfo.contact}`}
              className="inline-block bg-gray-100 text-blue-600 px-4 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors text-center"
            >
              Contact host
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HostSection;
