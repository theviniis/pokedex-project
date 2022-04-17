import React from 'react';
import styled from 'styled-components';
// import { Card } from '../styles/styles';
import Card from './Card';

const Sections = styled.ul`
  height: 100%;
  padding: 2rem 0;
`;

const Section = styled(Card)`
  padding: 1.75rem 2rem;
  margin-bottom: 2rem;
  font-size: 1.25rem;
  font-weight: 600;
  ${(props) => console.log(props)}
`;

const sections = [
  'Pokedex',
  'Moves',
  'Abilities',
  'Itens',
  // 'Location',
  // 'Type Charts',
];

const SidenavCard = () => {
  return (
    <Sections>
      {sections.map((section, index) => (
        <Section key={index}>{section}</Section>
      ))}
    </Sections>
  );
};

export default SidenavCard;
