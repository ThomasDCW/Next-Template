import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { getItems } from '@/redux/items/items.saga.actions';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, []);

  const items = useSelector((state: RootState) => state.items.allItems);

  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      {/*all the items from jsonplaceholder*/}
      {items.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
}
