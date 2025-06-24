import Link from 'next/link'

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
      <Link href="/" style={{ marginRight: '1rem' }}>Home</Link>
      <Link href="/about">About</Link>
    </nav>
  )
}
