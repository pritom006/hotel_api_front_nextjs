import { render, screen } from '@testing-library/react';
import HotelDetailsPage from '../page';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('HotelDetailsPage', () => {
  it('shows loading state initially', () => {
    render(<HotelDetailsPage />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('displays hotel details when data is fetched', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        hotel_id: '1',
        title: 'Test Hotel',
        description: 'A great hotel for testing purposes.',
        guest_count: 4,
        bedroom_count: 2,
        bathroom_count: 1,
        amenities: ['WiFi', 'Parking'],
        host_information: { name: 'John Doe', contact: 'john@example.com' },
        address: '123 Test Street',
        latitude: 0,
        longitude: 0,
        images: ['https://via.placeholder.com/800x600'],
        rooms: [],
      },
    });

    await act(async () => {
      render(<HotelDetailsPage />);
    });

    expect(screen.getByText('Test Hotel')).toBeInTheDocument();
    expect(screen.getByText(/A great hotel for testing purposes/i)).toBeInTheDocument();
  });
});
