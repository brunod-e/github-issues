import { SearchFormContainer } from './styles';

export const SearchForm = () => {
  return (
    <SearchFormContainer>
      <header>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </header>
      <input type='text' placeholder='Buscar transações' />
    </SearchFormContainer>
  );
};
