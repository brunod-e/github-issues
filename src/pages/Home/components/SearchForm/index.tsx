import { SearchFormContainer } from './styles';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

interface SearchFormProps {
  issuesLength: number;
  getIssues: (query?: string) => void;
}

const querySchema = z.object({
  query: z.string(),
});

type SearchFormQuery = z.infer<typeof querySchema>;

export const SearchForm = ({ issuesLength, getIssues }: SearchFormProps) => {
  const { register, handleSubmit } = useForm<SearchFormQuery>({
    resolver: zodResolver(querySchema),
  });

  const handleSearchIssues = async (data: SearchFormQuery) => {
    await getIssues(data.query);
  };

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <header>
        <h3>Publicações</h3>
        <span>{issuesLength} publicações</span>
      </header>
      <input type='text' placeholder='Buscar issues' {...register('query')} />
    </SearchFormContainer>
  );
};
