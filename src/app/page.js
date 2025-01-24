import Results from '@/components/Results';

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  // Sačekaj da se searchParams učita
  const genre = searchParams?.genre || 'fetchTrending';

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3${
        genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`
      }?api_key=${API_KEY}&language=en-US&page=1`,
      { next: { revalidate: 10000 } }
    );

    if (!res.ok) {
      throw new Error('Nije uspelo preuzimanje podataka');
    }

    const data = await res.json();
    const results = data.results;

    return (
      <div>
        <Results results={results} />
      </div>
    );
  } catch (error) {
    console.error(error);
    return (
      <div>
        <p>Došlo je do greške pri učitavanju podataka. Pokušajte ponovo kasnije.</p>
      </div>
    );
  }
}