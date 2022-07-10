import { Route, Routes } from 'react-router-dom'
import { Posts } from '../posts/Posts'
import { UserProfile } from '../users/UserProfile'
import { Users } from '../users/Users'
import { Home } from './Home'

export const Routers = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='posts' element={<Posts />} />
      <Route path='profiles' element={<Users />} />
      <Route path='profiles/:id' element={<UserProfile />} />
    </Routes>
  )
}