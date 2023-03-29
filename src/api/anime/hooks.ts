

import {useQuery, useMutation} from 'react-query';
import {getAllAnime} from './requests';
// import {searchAnime} from './requests';

export const useAllAnime = () => useMutation(getAllAnime);
// export const useSearchAllAnime = () => useMutation(searchAnime);