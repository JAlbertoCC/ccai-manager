//importacion de funciones necesarias para las pruebas
import { render, screen } from '@testing-library/react';
//componente a probar
import App from './App';
//prueba
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
