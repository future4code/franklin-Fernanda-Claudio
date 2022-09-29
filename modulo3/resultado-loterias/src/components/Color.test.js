import { render, screen } from 'test-utils';

import Color from './Color';

describe('Component screens/Colors', () => {
  it.skip('should message loteria', () => {
    render(<Color />);
    const linkElement = screen.getByText(/MEGA-SENA/i);
    expect(linkElement).toBeInTheDocument();
  });
});
