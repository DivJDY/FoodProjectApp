// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import { render } from "@testing-library/react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

// 👇️ wrap component that uses useLocation in Router

test("renders react component", async () => {
  render(
    <Router>
      <App />
    </Router>
  );

  // your tests...
});
