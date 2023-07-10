import { createFetcher } from 'src/libs/fetcher';

export default createFetcher(process.env.NEXT_PUBLIC_API_URL!);
