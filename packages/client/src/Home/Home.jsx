import React, { useCallback, useState } from 'react';
import { styled } from '@material-ui/core/styles';


import { AppBar } from '../AppBar';
import { CatGrid } from './CatGrid'



const HomeContainer = styled('div')({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column'
});

const Home = () => {
  const [selectedCats, setSelectedCats] = useState({})

  const cartCallback = useCallback((cat) => {
    setSelectedCats((sCats) => {
      return {
        ...sCats,
        ...{ [cat.id]: cat }
      }
    })
    return
  }, [])

  const clearCart = useCallback(() => {
    setSelectedCats({})
  }, [])

  return (
    <HomeContainer>
      <AppBar clearCart={clearCart} selectedCats={selectedCats} cartCallback={cartCallback} />
      <CatGrid cartCallback={cartCallback} />
    </HomeContainer>
  );
}

export default Home;
