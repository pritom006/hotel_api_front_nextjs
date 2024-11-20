import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Provides additional matchers like toBeInTheDocument
import AmenitiesList from '../AmenitiesList';

describe('AmenitiesList', () => {
  const mockAmenities = [
    'Parking',
    'Kitchen',
    'Washer',
    'Dryer',
    'Outdoor Space',
    'Barbecue grill',
    'WiFi', // More than 6 amenities
  ];

  it('renders amenities with the correct icons', () => {
    render(<AmenitiesList amenities={mockAmenities} />);

    // Check if the first 6 amenities are rendered with their icons
    expect(screen.getByText(/Parking/i)).toBeInTheDocument();
    expect(screen.getByText('🚗')).toBeInTheDocument();

    expect(screen.getByText(/Kitchen/i)).toBeInTheDocument();
    expect(screen.getByText('🍳')).toBeInTheDocument();

    expect(screen.getByText(/Washer/i)).toBeInTheDocument();
    expect(screen.getByText('🧺')).toBeInTheDocument();

    expect(screen.getByText(/Dryer/i)).toBeInTheDocument();
    expect(screen.getByText('👕')).toBeInTheDocument();

    expect(screen.getByText(/Outdoor Space/i)).toBeInTheDocument();
    expect(screen.getByText('🌳')).toBeInTheDocument();

    expect(screen.getByText(/Barbecue grill/i)).toBeInTheDocument();
    expect(screen.getByText('🔥')).toBeInTheDocument();
  });

  it('does not render more than 6 amenities', () => {
    render(<AmenitiesList amenities={mockAmenities} />);

    // Only the first 6 amenities should be rendered
    expect(screen.queryByText('WiFi')).not.toBeInTheDocument(); // 7th amenity should not be displayed
  });

  it('displays the "See all property amenities" link when there are more than 6 amenities', () => {
    render(<AmenitiesList amenities={mockAmenities} />);
    
    // Check if the link to see all amenities is displayed
    expect(screen.getByText(/See all property amenities/i)).toBeInTheDocument();
  });

  it('does not display the "See all property amenities" link when there are 6 or fewer amenities', () => {
    const fewAmenities = ['Parking', 'Kitchen', 'Washer', 'Dryer', 'Outdoor Space'];
    render(<AmenitiesList amenities={fewAmenities} />);
    
    // Check that the link is not displayed for fewer than 6 amenities
    expect(screen.queryByText(/See all property amenities/i)).not.toBeInTheDocument();
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<AmenitiesList amenities={mockAmenities} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
