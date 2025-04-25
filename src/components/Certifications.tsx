import React from 'react';

const Certifications: React.FC = () => {
  const certificationImages = [
    {
      src: '/Ai.png',
      alt: 'Java Using DSA - CipherSchools',
      link: 'https://www.coursera.org/account/accomplishments/certificate/UXK9DCKP7RS3',
    },
    {
      src: '/FundaNet.png',
      alt: 'Programming in C++ - Coursera',
      link: 'https://www.coursera.org/account/accomplishments/verify/GVNCX7P5HECU?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course',
    },
    {
      src: '/c3.png',
      alt: 'HTML, CSS, and JavaScript for Web Developers - Coursera',
      link: '#',
    },
    {
      src: 'c4.png',
      alt: '',
      link: 'https://www.coursera.org/account/accomplishments/verify/ZAEM4X2YFXKU',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title mb-10 text-3xl font-bold text-center">Certifications</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          {certificationImages.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={cert.src}
                alt={cert.alt}
                className="w-full h-[400px] object-contain bg-white p-4"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;