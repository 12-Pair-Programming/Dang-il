import React, { useState } from 'react';
import Table from '@/shared/Table/table';
import Button from '@/shared/Button/Button';

const TableComponent = () => {

  const [disabled, setDisabled] = useState(false);
  const handleClick = () => {
    console.log('클릭되었습니다.');
    setDisabled(!disabled);
  }
  return (
    <>
      <Table />
      <Button size='large' color='none' onClick={handleClick} content='빈배경큰버튼' disabled={disabled}/>
      <Button size='large' color='colored' onClick={handleClick} content='꽉찬배경큰버튼' disabled={disabled} />
      <Button size='medium' color='none' onClick={handleClick} content='빈배경중간버튼' />
      <Button size='medium' color='colored' onClick={handleClick} content='꽉찬배경중간버튼' />
      <Button size='small' color='none' onClick={handleClick} content='빈배경작은버튼' />
      <Button size='small' color='colored' onClick={handleClick} content='꽉찬배경작은버튼' />
    </>
  );
};

export default TableComponent;
