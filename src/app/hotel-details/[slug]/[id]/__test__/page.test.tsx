import { render, screen, waitFor } from '@testing-library/react';
import HotelDetailsPage from '../page';
import axios from 'axios';
import { useParams } from 'next/navigation';
import '@testing-library/jest-dom'; // Provides additional matchers like toBeInTheDocument

// Mocking the `axios` library
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Mocking `useParams` from `next/navigation`
jest.mock('next/navigation', () => ({
  useParams: jest.fn(),
}));

describe('HotelDetailsPage', () => {
  beforeEach(() => {
    // Mock the useParams to provide a valid hotel_id as a string
    (useParams as jest.Mock).mockReturnValue({ id: '1' });
  });

  afterEach(() => {
    jest.clearAllMocks(); // Ensure mocks are cleared after each test
  });

  it('shows loading state initially', () => {
    render(<HotelDetailsPage />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('displays hotel details when data is fetched', async () => {
    // Mocking Axios response with valid hotel data
    mockedAxios.get.mockResolvedValueOnce({
      data: {
        hotel_id: 'h0f7',
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
      status: 200,
      statusText: 'OK',
      headers: {},
      config: { url: 'http://localhost:8080/hotel/h0f7' },
    });

    render(<HotelDetailsPage />);

    // Wait for the data to load and the component to re-render
    await waitFor(() => {
      expect(screen.getByText('Test Hotel')).toBeInTheDocument();
      expect(
        screen.getByText(/A great hotel for testing purposes/i)
      ).toBeInTheDocument();
    });

    // Additional checks
    expect(screen.getByText('123 Test Street')).toBeInTheDocument();
    expect(screen.getByText('WiFi')).toBeInTheDocument();
    expect(screen.getByText('Parking')).toBeInTheDocument();
  });

  it('handles API errors gracefully', async () => {
    // Mock Axios to simulate an API error
    mockedAxios.get.mockRejectedValueOnce(new Error('API Error'));

    render(<HotelDetailsPage />);

    // Ensure loading state is shown initially
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    // Wait for the component to handle the error
    await waitFor(() => {
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
      expect(screen.queryByText('Test Hotel')).not.toBeInTheDocument();
    });
  });
});
