import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NavBar from "./index";

test("renders navbar with dark mode toggle", () => {
  const darkMode = false;
  const setDarkMode = jest.fn();

  const { getByAltText } = render(
    <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
  );

  const logo = getByAltText(/openweathermap/i);
  expect(logo).toBeInTheDocument();

  const toggleIcon = getByAltText(/mode/i);
  expect(toggleIcon).toBeInTheDocument();
});

test("clicking toggle button toggles dark mode", () => {
  const darkMode = false;
  const setDarkMode = jest.fn();

  const { getByAltText } = render(
    <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
  );

  const toggleIcon = getByAltText(/mode/i);
  fireEvent.click(toggleIcon);

  expect(setDarkMode).toHaveBeenCalledWith(true);
});
