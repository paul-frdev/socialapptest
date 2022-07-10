import { Box } from '@mui/material';
import { BaseCard } from '../common/BaseCard';
import { useUser } from './hooks/useUser'


export const Users = () => {
  const users = useUser();

  return (
    <Box className='users'>
      {users && users.map((user) => (
        <BaseCard key={user.id} user={user} />
      ))}
    </Box>
  )
}