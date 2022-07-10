import { IPost, IUsers } from './../types/index'
import { createGlobalState } from 'react-hooks-global-state'

interface InitialState {
  posts: IPost[]
  users: IUsers[]
  newFormValues: IPost

  openFormDialog: boolean
  currentPage: number
  maxPostPage: number
}

const { setGlobalState, useGlobalState } = createGlobalState<InitialState>({
  posts: [],
  users: [],
  openFormDialog: false,
  currentPage: 1,
  maxPostPage: 10,
  newFormValues: {
    title: '',
    body: '',
  },
})

export { setGlobalState, useGlobalState }
