import { render, screen, fireEvent } from '@testing-library/react-native';
import { NativeAppEventEmitter } from 'react-native';
import  ItemData  from '../ItemData';

it('Check text on screen', () => {
  
  const { getByText } = render( <ItemData/> );
//   const test = screen.getByText('Try editing me! 🎉');
  getByText('First test screen! 🎉')
 
});