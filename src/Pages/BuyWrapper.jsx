import React from 'react'
import { useParams } from 'react-router-dom';
import Buy from './Buy';

function BuyWrapper() {
  const { id } = useParams();
  return (<Buy coin={id} />)
}

export default BuyWrapper