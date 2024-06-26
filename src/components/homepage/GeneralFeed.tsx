import { db } from '@/lib/db'
import PostFeed from '@/components/PostFeed'
import { INFINITE_SCROLL_PAGINATION_RESULTS } from '@/config'

const GeneralFeed = async () => {
  //fetch posts
  const posts = await db.post.findMany({
    orderBy: {
      createdAt: 'desc', //recent added on top
    },
    include: {
      votes: true,
      author: true,
      comments: true,
      community: true,
    },
    take: INFINITE_SCROLL_PAGINATION_RESULTS, // 4 to demonstrate infinite scroll, should be higher in production
  })

  return <PostFeed initialPosts={posts} />
}

export default GeneralFeed
