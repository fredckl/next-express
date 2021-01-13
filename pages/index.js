import Link from 'next/link'

function HomePage() {
  return <div>
    Welcome to Next.js!
    <Link href="/about">About Page</Link>
  </div>
}

export default HomePage