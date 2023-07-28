import { BlitzPage } from "@blitzjs/next"

import { useStringParam } from "@/utils/utils"

const BlogPost: BlitzPage = () => {
  const slug = useStringParam("slug")

  return (
    <div>
      <h1>blog post page</h1>
    </div>
  )
}

export default BlogPost
