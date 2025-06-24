export default async function About() {
   const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    cache: 'no-store', // like getServerSideProps (no caching)
  })
  const posts = await res.json()

  return (
    <div>
      <h1>SSR Data (App Router)</h1>
      <ul>
        {posts.slice(10,50 ).map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}