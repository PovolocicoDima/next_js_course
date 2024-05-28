import React from 'react';
import { notFound } from 'next/navigation';

interface Props {
  params: { id: number };
}

const UserPage = ({ params: { id } }: Props) => {
  if (id > 10) notFound();

  return (
    <div className='grid h-[214px] w-[592px] grid-cols-[1.3fr,1fr,1fr] grid-rows-[1fr,1fr] gap-0 bg-slate-700 md:grid-cols-[1fr,1fr] lg:grid-cols-[1.5fr,1fr,1fr]'>
      <div className='border'>Block 1</div>
      <div className='border'>Block 2</div>
      <div className='border'>Block 3</div>
      <div className='border'>Block 4</div>
      <div className='border'>Block 5</div>
      <div className='border'>Block 6</div>
    </div>
  );
};

export default UserPage;
