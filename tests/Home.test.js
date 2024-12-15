import React from 'react';
import { render } from '@testing-library/react-native';
import Home from '../Home'; 
import { TemaContext } from '../context/TemaContext'; 


const mockNavigation = {
  navigate: jest.fn(),
};


const temaMock = {
  temaEscuro: false, 
};

describe('Home Component', () => {
  it('deve exibir a lista de categorias corretamente', () => {
    const { getByText } = render(
      <TemaContext.Provider value={temaMock}>
        <Home navigation={mockNavigation} />
      </TemaContext.Provider>
    );

    
    expect(getByText('Salgados')).toBeTruthy();
    expect(getByText('Bebidas')).toBeTruthy();
    expect(getByText('Sobremesas')).toBeTruthy();
    expect(getByText('Saladas')).toBeTruthy();
    expect(getByText('Promoção')).toBeTruthy();
  });
});
