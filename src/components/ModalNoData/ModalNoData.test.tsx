import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ModalNoData from './index';

test('renders modal with error message and close button', () => {
  const openModal = true;
  const setOpenModal = jest.fn();
  const error = 'Error message';
  const darkMode = false;

  const { getByAltText, getByText } = render(
    <ModalNoData openModal={openModal} setOpenModal={setOpenModal} error={error} darkMode={darkMode} />
  );

  const errorMessage = getByText(/Error al cargar la información/i);
  expect(errorMessage).toBeInTheDocument();

  const closeButton = getByText(/Cerrar/i);
  expect(closeButton).toBeInTheDocument();
});

test('clicking close button closes the modal', () => {
  const openModal = true;
  const setOpenModal = jest.fn();
  const error = 'Error message';
  const darkMode = false;

  const { getByText } = render(
    <ModalNoData openModal={openModal} setOpenModal={setOpenModal} error={error} darkMode={darkMode} />
  );

  const closeButton = getByText(/Cerrar/i);
  fireEvent.click(closeButton);

  expect(setOpenModal).toHaveBeenCalledWith(false);
});
