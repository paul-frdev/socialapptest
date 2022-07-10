import { useState, CSSProperties } from 'react';
import { useIsFetching } from 'react-query';
import FadeLoader from 'react-spinners/FadeLoader';

export const Loading = () => {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState('#000');
  const isFetching = useIsFetching()

  const override: CSSProperties = {
    display: isFetching ?'block' : 'none',
    margin: '0 auto',
    borderColor: 'red',
    top: '100px',
    width: '150px'
  };
  
  return (
    <FadeLoader
      color={color}
      loading={loading}
      cssOverride={override}
    />
  )
}