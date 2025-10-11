// HomePage.tsx
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="home-page">
      <button
        onClick={() => router.push('/report')}
        className="btn-primary"
      >
        Get Your Website's Report Card
      </button>
    </div>
  );
}
