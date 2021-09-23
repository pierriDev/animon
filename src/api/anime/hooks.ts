import {useQuery, useMutation} from 'react-query';
import {getAllAnime} from './requests';
import {searchAnime} from './requests';

// export const useGetAllAnime = (page_number: any) => useQuery('getAllAnime', getAllAnime(page_number));
export const useAllAnime = () => useMutation(getAllAnime);
export const useSearchAllAnime = () => useMutation(searchAnime);

