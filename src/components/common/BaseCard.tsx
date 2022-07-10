import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {
  Box,
  CardActionArea,
  CardHeader
} from '@mui/material';
import { IPosts as PostType, IUser as UserType } from '../types';
import { NavLink } from 'react-router-dom';

interface BaseCardProps {
  post?: PostType,
  user?: UserType
}

export const BaseCard = ({ post, user }: BaseCardProps) => {

  return (
    <Card
      className={`base-card ${post ? 'base-card--post' : 'base-cart--user'}`}
      sx={{ maxWidth: `${post ? '1000px' : '350px'}` }}
    >
      {post ?
        <>
          <CardHeader
            title='Post'
          /><CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {post.title}
              </Typography>
              <Typography paragraph variant="body2" color="text.secondary">
                {post.body}
              </Typography>
            </CardContent>
          </CardActionArea>
        </>
        :
        <>
          <CardHeader
            title={user.name}
            subheader={user.phone} />
          <CardContent className='cart-content'>
            <Box className='cart-content__text'>
              <Typography>
                <span>City:</span> {user.address.city}
              </Typography>
              <Typography >
                <span>Street</span>:  {user.address.street}
              </Typography>
              <Typography>
                <span>Address:</span>  {user.address.suite}
              </Typography>
              <Typography>
                <span>ZipCode:</span>  {user.address.zipcode}
              </Typography>
              <Typography>
                <span>WebSite:</span>   {user.website}
              </Typography>
              <Typography>
                <span>Username:</span>  {user.username}
              </Typography>
              <Typography>
                <span> Company -</span>
                Bs: {user.company.bs}
              </Typography>
              <Typography>
                CatchPhrase:  {user.company.catchPhrase}
              </Typography>
              <Typography>
                Name: {user.name}
              </Typography>
            </Box>
            <NavLink className='base-card__nav' to={`${user.id}`} >More info</NavLink>
          </CardContent>
        </>
      }
    </Card>
  );
}