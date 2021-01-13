import Link from 'next/link';
import request  from '../components/request';

function AboutPage({
  about,
  error
}) {
  return <div>
    <h1>About page</h1>
    {error && <p>Error</p>}
    {about && (
      <>
        <p>Bonjour, je m'appelle {about.firstname} {about.lastname}</p>
        <p>Vous pouvez me contacter à cette adresse {about.email}</p>
        <Link href="/">Home Page</Link>
      </>
    )}

  </div>
}

export async function getStaticProps() {
  try {
    const res = await request('/api/about');
    const about = await res.json();
    return {
      props: {
        about
      }
    }
  } catch (err) {
    console.log(err);
    return {
      props: {
        error
      }
    }
  }

}

export default AboutPage