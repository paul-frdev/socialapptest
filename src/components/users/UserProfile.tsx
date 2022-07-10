import { Avatar, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system'
import { NavLink, useParams } from 'react-router-dom'
import { useUser } from './hooks/useUser';


export const UserProfile = () => {
  const { id } = useParams();
  const users = useUser();

  const selectedUser = users.find(user => user.id === Number(id));

  return (
    <Box className='user-profile'>
      {selectedUser &&
        <Box className='user-profile__container'>
          <Box className='user-profile__info'>
            <Avatar sx={{ bgcolor: 'orange' }}>N</Avatar>
            <Typography><span>name:</span> {selectedUser.name}</Typography>
            <Typography><span>username:</span> {selectedUser.username}</Typography>
            <Typography><span>email:</span> {selectedUser.email}</Typography>
            <Typography><span>phone:</span> {selectedUser.phone}</Typography>
            <Typography><span>website:</span> {selectedUser.website}</Typography>
          </Box>
          <Box>
            <h3>address</h3>
            <Typography><span>city:</span> {selectedUser.address.city}</Typography>
            <Typography><span>street:</span> {selectedUser.address.street}</Typography>
            <Typography><span>suite:</span> {selectedUser.address.suite}</Typography>
            <Typography><span>zipcode:</span> {selectedUser.address.zipcode}</Typography>
          </Box>
          <Box>
            <h3>company</h3>
            <Typography><span>bs:</span> {selectedUser.company.bs}</Typography>
            <Typography><span>catchPhrase:</span> {selectedUser.company.catchPhrase}</Typography>
            <Typography><span>name:</span> {selectedUser.company.name}</Typography>
          </Box>
        </Box>
      }
      <NavLink className='user-profile__btn' to='/profiles'>Go back</NavLink>
    </Box>
  )
}