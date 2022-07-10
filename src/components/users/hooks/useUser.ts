import { useQuery } from 'react-query'
import { axiosInstance } from '../../../axiosInstance'
import { IUsers } from '../../../types'
import { queryKeys } from '../../../reactquery/constants'

async function getUser(): Promise<IUsers[]> {
  const { data } = await axiosInstance.get('/users')

  return data
}

export const useUser = (): IUsers[] => {
  const fallBack: IUsers[] | undefined = []
  const { data = fallBack } = useQuery(queryKeys.users, getUser)

  return data
}
