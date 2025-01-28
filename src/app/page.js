import Results from '@/components/Results';
import { Suspense } from 'react';

const API_KEY = process.env.API_KEY;

// Simulate a delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';

  try {
    // Simulate a delay of 500ms
    await delay(500);

    // Fetch data based on the genre
    const res = await fetch(
      `https://api.themoviedb.org/3${
        genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
      }?api_key=${API_KEY}&language=en-US&page=1`,
      { next: { revalidate: 10000 } } // Revalidate data every 10 seconds
    );

    // Check if the response is OK
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    // Parse the JSON data
    const data = await res.json();
    const results = data.results;

    return (
      <div>
        <Suspense fallback={<p>Loading...</p>}>
          <Results results={results} />
        </Suspense>
      </div>
    );
  } catch (error) {
    // Handle errors gracefully
    console.error(error);
    return (
      <div>
        <h1>Error</h1>
        <p>Failed to load data. Please try again later.</p>
      </div>
    );
  }
}