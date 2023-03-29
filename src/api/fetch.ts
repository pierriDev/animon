import {mainEndpoint} from '../constants/endpoint';
import {JWT} from '../constants/endpoint';

const optionsInterceptor = (options: any) => {
  const opt = {...options};
  opt.headers = {
    ...opt.headers,
    'Content-Type': 'application/json',
    Authorization: `Bearer ${JWT}`,
    // Add here any header that you need to be included with every request
  };
  return opt;
};

export const fetcher = (path: string, options?: any) =>
  fetch(`${mainEndpoint}${path}`, optionsInterceptor(options));

export default fetcher;