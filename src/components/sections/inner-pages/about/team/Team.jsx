import React from 'react';

const teamMembers1 = [
  {
    name: 'Subhadeep Naskar',
    role: 'Founder & CEO',
    image: 'assets/img/team7.jpeg',
    affiliations: [
      { logo: 'assets/img/th-4/tl1.png', alt: 'MGSM' },
      { logo: 'assets/img/th-4/tl8.png', alt: 'Indian Oil' },
      { logo: 'assets/img/th-4/tl3.png', alt: 'Ipsos' },
    ],
  },
  {
    name: 'Nilabh Chaturvedy',
    role: 'Co-Founder & CTO',
    image: 'assets/img/team6.jpeg',
    affiliations: [
      { logo: 'assets/img/th-4/tl4.png', alt: 'Purdue University' },
      { logo: 'assets/img/th-4/tl5.png', alt: 'Lenovo' },
    ],
  }
];

const teamMembers2 = [
  {
    name: 'Saptarshi Banerjee',
    role: 'Product Manager',
    image: 'assets/img/team3.jpeg', // Replace with actual image path
    affiliations: [
      { logo: 'assets/img/th-4/tl9.png', alt: 'ESSEC' },
      { logo: 'assets/img/th-4/tl6.png', alt: 'TotalEnergies' },
    ],
  },
  {
    name: 'Alankrita Bhalotia',
    role: 'Finance Officer',
    image: 'assets/img/team2.jpeg', // Replace with actual image path
    affiliations: [
      { logo: 'assets/img/th-4/tl1.png', alt: 'MGSM' },
      { logo: 'assets/img/th-4/tl0.png', alt: 'RBS' },
    ],
  },
  {
    name: 'Kalyan Bhattacharya',
    role: 'Honorary Advisor',
    image: 'assets/img/team1.jpeg', // Replace with actual image path
    affiliations: [
      { logo: 'assets/img/th-4/tl7.png', alt: 'Affiliation' }, // Replace with actual path
    ],
  },
];

const Team = () => {
  return (
    <div className="bg-black p-8 md:p-20 justify-center items-center md:-mt-6 mb-40 md:mb-40">
      <h4 className='jos font-body mb-6 text-[24px] md:text-[50px] leading-none text-white -top-10 text-center'>Protectors of Orbyte AI
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-xl mx-auto pb-4">
        {teamMembers1.map((member, index) => (
          <div key={index} className="bg-[#121316] rounded-[25px] shadow-lg flex flex-col md:flex-row">
            <div className="bg-[#121316] p-4 rounded-t-[25px] md:rounded-[25px]">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-auto md:w-40 md:h-40 object-cover bg-[#661AFF] rounded-[15px] mx-auto"
              />
            </div>
            <div className="flex-1 p-6 text-center md:text-left">
              <div className="text-white text-lg md:text-xl font-body mb-2">{member.name}</div>
              <div className="text-gray-400 mb-4 md:mb-[60px] text-sm">{member.role}</div>
              <div className="flex justify-center md:justify-start items-center mt-4 space-x-3">
                {member.affiliations.map((affiliation, i) => (
                  <img
                    key={i}
                    src={affiliation.logo}
                    alt={affiliation.alt}
                    className="h-6 md:h-8 w-auto"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
        {teamMembers2.map((member, index) => (
          <div key={index} className="bg-[#121316] rounded-[25px] shadow-lg flex flex-col md:flex-row">
            <div className="bg-[#121316] p-4 rounded-t-[25px] md:rounded-[25px]">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-auto md:w-40 md:h-40 object-cover bg-[#CBA1F5] rounded-[15px] mx-auto"
              />
            </div>
            <div className="flex-1 p-6 text-center md:text-left">
              <div className="text-white text-lg md:text-xl font-body mb-2">{member.name}</div>
              <div className="text-gray-400 mb-4 md:mb-[30px] text-sm">{member.role}</div>
              <div className="flex justify-center md:justify-start items-center mt-0 space-x-3">
                {member.affiliations.map((affiliation, i) => (
                  <img
                    key={i}
                    src={affiliation.logo}
                    alt={affiliation.alt}
                    className="h-6 md:h-8 w-auto"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
