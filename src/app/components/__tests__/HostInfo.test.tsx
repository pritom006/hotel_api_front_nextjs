import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Provides additional matchers like toBeInTheDocument
import HostSection from '../HostInfo';

describe('HostSection', () => {
  const mockHostInfo = {
    name: 'John Doe',
    languages: [
      { id: 1, name: 'English' },
      { id: 2, name: 'French' },
    ],
    contact: 'john.doe@example.com',
  };

  it('renders the host name correctly', () => {
    render(<HostSection hostInfo={mockHostInfo} />);
    expect(screen.getByText(/Hosted by John Doe/i)).toBeInTheDocument();
  });

  it('renders all languages with correct formatting', () => {
    render(<HostSection hostInfo={mockHostInfo} />);
    expect(screen.getByText(/Languages:/i)).toBeInTheDocument();
    expect(screen.getByText('English,')).toBeInTheDocument();
    expect(screen.getByText('French')).toBeInTheDocument();
  });

  it('renders a contact link with the correct email', () => {
    render(<HostSection hostInfo={mockHostInfo} />);
    const contactLink = screen.getByRole('link', { name: /contact host/i });
    expect(contactLink).toHaveAttribute('href', 'mailto:john.doe@example.com');
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<HostSection hostInfo={mockHostInfo} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
