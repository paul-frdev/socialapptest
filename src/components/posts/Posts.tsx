import { Box, Button } from '@mui/material';
import { useGlobalState } from '../../globalState';
import { BaseCard } from '../common/BaseCard';
import { usePosts } from './hooks/usePosts'

export const Posts = () => {
  const [, setOpenFormDialog] = useGlobalState('openFormDialog');
  const [currentPage, setCurrentPage] = useGlobalState('currentPage');
  const [maxPostPage] = useGlobalState('maxPostPage');
  const posts = usePosts();

  const handleClickOpen = () => {
    setOpenFormDialog(true);
  };

  return (
    <Box className='posts'>
      <Box className='posts-btns'>
        <Button className='posts-btns__post' variant="outlined" onClick={handleClickOpen}>
          Add a new Post
        </Button>
        <Box className='posts-btns__pagination'>
          <Button
            variant="outlined"
            disabled={currentPage <= 1}
            onClick={() => { setCurrentPage((prevValue) => prevValue - 1) }}
          >
            prev
          </Button>
          <span>{currentPage}</span>
          <Button
            variant="outlined"
            disabled={currentPage >= maxPostPage}
            onClick={() => { setCurrentPage((prevValue) => prevValue + 1) }}
          >
            next
          </Button>
        </Box>
      </Box>
      {
        posts && posts.map(post => (
          <BaseCard key={post.id} post={post} />
        ))
      }
    </Box >
  )
}