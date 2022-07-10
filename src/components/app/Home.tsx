import { Box } from '@mui/material'
import SocialImage from '../../images/social.jpeg';

export const Home = () => {
  return (
    <Box className='home'>
      <img className='home__img' src={SocialImage} alt='imagebg' />
    </Box>
  )
}