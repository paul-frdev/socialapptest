import { useMutation, useQueryClient } from 'react-query'
import { axiosInstance } from '../../../axiosInstance'
import { IPost } from '../../../types'
import { queryKeys } from '../../../reactquery/constants'

export const useCreateNewPost = () => {
  const queryClient = useQueryClient()

  return useMutation(
    async (postValues: IPost) => {
      // ('postValues', postValues)

      const { data } = await axiosInstance.post('/posts', {
        body: JSON.stringify(postValues),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      return data
    },
    {
      onSuccess: (addedPost) => {
        queryClient.setQueryData(queryKeys.posts, (currentPosts: unknown) => [
          ...currentPosts as any[],
          addedPost,
        ])
      },
    },
  )
}
