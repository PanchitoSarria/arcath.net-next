import {GetServerSidePropsContext} from 'next'
import {asyncMap} from '@arcath/utils/lib/functions/async-map'
import {replaceProperty} from '@arcath/utils/lib/functions/replace-property'
import {pick} from '@arcath/utils/lib/functions/pick'

import {getPosts} from '../../../lib/data/posts'
import {PostData, POST_FIELDS} from '../../posts'

export async function getServerSideProps({
  res,
  params
}: GetServerSidePropsContext<{skip: string}>) {
  const {skip} = params

  const posts = await asyncMap(
    await getPosts({skip: parseInt(skip), limit: 5}),
    async (post): Promise<PostData> => {
      return replaceProperty(pick(await post.data, POST_FIELDS), 'date', date =>
        date.toISOString()
      )
    }
  )

  res.end(JSON.stringify(posts))
  return {props: {}}
}

export default function NullPage() {
  return 'null'
}
