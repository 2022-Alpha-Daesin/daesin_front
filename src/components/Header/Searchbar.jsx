import React from 'react';
import styled from 'styled-components';
import { Search } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const SearchBar = styled(Search)`
  margin: 5rem;
`;

const Searchbar = () => (
  <>
    <SearchBar />
  </>
);
export default Searchbar;
