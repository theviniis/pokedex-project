import React from 'react';
import styled from 'styled-components';

const Sections = styled.ul`
  height: 100vh;
`;

const Section = styled.li`
  padding: 1.75rem 2rem;
  margin-bottom: 2rem;
  font-size: 1.25rem;
  font-weight: 600;
`;

const sections = [
  'Pokedex',
  'Moves',
  'Abilities',
  'Itens',
  'Location',
  'Type Charts',
];

const SidenavCard = () => {
  return (
    <Sections>
      {sections.map((section, index) => (
        <Section className='card' key={index}>
          {section}
        </Section>
      ))}
    </Sections>
  );
};

export default SidenavCard;
