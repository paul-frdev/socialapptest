import { useMutation, useQuery, useQueryClient } from 'react-query'
import { axiosInstance } from '../../../axiosInstance'
import { IPost } from '../../../types'
import { queryKeys } from '../../../reactquery/constants'
import { useGlobalState } from '../../../globalState'
import { useEffect } from 'react'

const getPosts = async (pageNum: number): Promise<IPost[]> => {
  const { data } = await axiosInstance.get(`/posts/?_limit=10&_page=${pageNum}`)

  return data
}

export const usePosts = (): IPost[] => {
  const fallback = []
  const [currentPage] = useGlobalState('currentPage')
  const [maxPostPage] = useGlobalState('maxPostPage')
  const queryClient = useQueryClient()
  const { data = fallback } = useQuery(
    [queryKeys.posts, currentPage],
    () => getPosts(currentPage),
    {
      staleTime: 2000,
      keepPreviousData: true,
    },
  )

  useEffect(() => {
    if (currentPage < maxPostPage) {
      const nextPage = currentPage + 1

      queryClient.prefetchQuery([queryKeys.posts, nextPage], () => getPosts(nextPage))
    }
  }, [currentPage, queryClient])

  return data
}
