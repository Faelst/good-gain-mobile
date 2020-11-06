import React from 'react'
import { TextInputProps } from 'react-native';

import { Container, SearchIcon, Input } from './styles'

interface SearchInputProps extends TextInputProps {}

const SearchInput: React.FC<SearchInputProps> = ({ ...props}) => {
  return (
    <Container>
      <SearchIcon />
      <Input {...props} placeholder='Pesquisar' />
    </Container>
  )
}

export default SearchInput