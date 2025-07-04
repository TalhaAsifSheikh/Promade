import React from 'react';
import styled from 'styled-components';

const WorkSection = styled.section`
  padding: 120px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #000000;
  margin: 0 auto;
  max-width: 900px;
  box-sizing: border-box;

  @media (max-width: 900px) {
    max-width: 100vw;
    padding: 60px 16px;
  }
  @media (max-width: 600px) {
    padding: 40px 8px;
    max-width: 100vw;
    overflow-x: hidden;
  }
`;

const Title = styled.h2`
  font-family: 'instrument serif', serif;
  font-size: 56px;
  font-weight: 500;
  font-style: italic;
  color: white;
  margin: 0 0 4px 0;
  text-align: center;
`;

const Description = styled.p`
  font-family: 'Satoshi', sans-serif;
  font-size: 20px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  max-width: 600px;
  margin: 0 0 64px 0;
`;

const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 80px 20px;
  max-width: 801px;
  width: 100%;
  box-sizing: border-box;
  padding-left: 8px;
  padding-right: 8px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px 0;
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
  }
  @media (max-width: 600px) {
    gap: 32px 0;
  }
`;

const WorkItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 24px 0;
  width: 100%;
`;

const WorkImageContainer = styled.a`
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 24px;
  width: 390px;
  height: 390px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: block;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;

  @media (max-width: 900px) {
    width: 340px;
    height: 340px;
  }
  @media (max-width: 600px) {
    width: 90vw;
    max-width: 320px;
    height: 90vw;
    max-height: 320px;
    margin-bottom: 12px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const WorkImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const WorkInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 8px;
`;

const WorkText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WorkTitle = styled.h3`
  font-family: 'Satoshi', sans-serif;
  font-size: 24px;
  font-weight: 500;
  color: white;
  margin: 0 0 4px 0;
  transition: color 0.2s ease;
  text-align: center;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: #ccc;
    }
  }

  @media (max-width: 600px) {
    font-size: 16px;
    text-align: center;
  }
`;

const WorkCategory = styled.p`
  font-family: 'Satoshi', sans-serif;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 14px;
    text-align: center;
  }
`;

const ArrowIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #1a1a1a;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.25s cubic-bezier(0.4,0,0.2,1), transform 0.25s cubic-bezier(0.4,0,0.2,1);
  margin: 12px auto 0 auto;

  svg {
    width: 20px;
    height: 20px;
    color: white;
  }

  ${WorkItem}:hover &,
  ${WorkImageContainer}:hover + ${WorkInfo} & {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 900px) {
    opacity: 1;
    transform: translateY(0);
  }
`;

const workData = [
  {
    image: '/Work/zakatapp.png',
    title: 'Wealth Purifying App (Zakat)',
    category: 'UI/UX Design, Mobile App',
    url: '/projects/wealth-purifying-app',
    isExternal: false
  },
  {
    image: '/Work/connflow.png',
    title: 'Connflow',
    category: 'UI/UX Design, UX Research, SaaS',
    url: 'https://connflow.cloud/',
    isExternal: true
  },
  {
    image: '/Work/pepsi.png',
    title: 'Pepsi Co (Haidiri Beverages)',
    category: 'UI/UX Design, Visual Design, Website',
    url: 'https://www.pepsiislamabad.com/',
    isExternal: true
  },
  {
    image: '/Work/smartinn.png',
    title: 'Smartinn',
    category: 'UI/UX Design, E-commerce',
    url: 'https://smartinn.ae/',
    isExternal: true
  },
];

const Work = () => {
  return (
    <WorkSection>
      <Title>High Quality Work</Title>
      <Description>How we helped others succeed.</Description>
      <WorkGrid>
        {workData.map((item, index) => (
          <WorkItem key={index}>
            <WorkImageContainer 
              href={item.url} 
              {...(item.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <WorkImage src={item.image} alt={item.title} />
            </WorkImageContainer>
            <WorkInfo>
              <WorkText>
                <WorkTitle>
                  <a 
                    href={item.url} 
                    {...(item.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {item.title}
                  </a>
                </WorkTitle>
                <WorkCategory>{item.category}</WorkCategory>
              </WorkText>
              <ArrowIcon>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </ArrowIcon>
            </WorkInfo>
          </WorkItem>
        ))}
      </WorkGrid>
    </WorkSection>
  );
};

export default Work;