import { Typography } from '@mui/material'

export const Footer = () => {
  return (
    <footer className='footer'>
      <Typography>{new Date().getFullYear()}</Typography>
    </footer>
  )
}