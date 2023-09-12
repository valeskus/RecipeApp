import React from 'react';
import * as Redux from 'react-redux';

import { Button } from '../common/Button';
import { Input } from '../common/Input';
import { Select } from '../common/Select';
import './ProductForm.style.css';
import { ProductPostModel } from '../../stores/product/types';
import { postProducts } from '../../stores/product/productsSlice';
import { useGetProducts } from '../../stores/product/hooks';

export function ProductForm(): JSX.Element {
  const dispatch = Redux.useDispatch();

  const getProducts = useGetProducts();
  React.useEffect(() => {
    getProducts(dispatch);
  }, []);

  //TODO product state
  const product: ProductPostModel = {
    title: 'Arugula',
    kCal: 75,
    proteins: 16.7,
    carbs: 0,
    fats: 0.8,
    units: 'ml',
    translations: {
      ua: {
        title: 'Рукола',
      },
    },
  };

  const onSend = () => {
    if (!product) {
      return alert('Please,check data');
    }

    dispatch(postProducts(product));
  };

  return (
    <div className="productFormContainer">
      <Input label="Title :" type="text" placeholder="Title" onChange={() => { }} />
      <Input label="Title UA:" type="text" placeholder="Назва" onChange={() => { }} />
      <Input label="kCal :" type="number" placeholder="kCal" onChange={() => { }} />
      <Input label="Proteins :" type="number" placeholder="proteins" onChange={() => { }} />
      <Input label="Carbs :" type="number" placeholder="carbs" onChange={() => { }} />
      <Input label="Fats :" type="number" placeholder="fats" onChange={() => { }} />
      <Select label="Units:" placeholder="---" optionArray={['ml', 'g']} onChange={() => { }} />
      <Button title="Submit" onClick={onSend} />
    </div>
  );
}
