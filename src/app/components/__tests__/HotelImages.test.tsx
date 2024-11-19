import { render, screen } from '@testing-library/react';
import HotelImages from '../HotelImages';

describe('HotelImages Component', () => {
  const mockImages: string[] = [
    'https://via.placeholder.com/800x600?text=Image+1',
    'https://via.placeholder.com/800x600?text=Image+2',
  ];

  it('renders all images passed as props', () => {
    render(<HotelImages images={mockImages} />);

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(mockImages.length);
  });

  it('displays images with correct alt attributes', () => {
    render(<HotelImages images={mockImages} />);

    mockImages.forEach((_, index) => {
      expect(screen.getByAltText(`Hotel image ${index + 1}`)).toBeInTheDocument();
    });
  });
});
