import {prisma} from '../prisma/lib/prisma';

export default function Home({posts}) {
  return (
    <>
      <ul> 
        {posts.map(post => (
          <li key={post.id}>{post.nome}</li>
          ))}
  </ul>
    </>
  )
}
export const getServerSideProps = async ({ req }) => {
  const posts = await prisma.users.findMany()
  return { 
    props: { posts } 
  }
}