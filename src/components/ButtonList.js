import React from 'react'
import Button from './Button';
// const list=["All","Gaming"];

function ButtonList() {
  return (
    <div className='flex'>
      <Button name="All"/>
      <Button  name="Gaming"/>
      <Button  name="Songs"/>
      <Button  name="Live"/>
      <Button  name="Soccer"/>
      <Button  name="Cricket"/>
      <Button name="Cooking" />
      <Button name="News" />
      <Button name="Valentines" />
      <Button name="Cooking" />
      <Button name="News" />
      <Button name="Valentines" />
    </div>
  )
}

export default ButtonList