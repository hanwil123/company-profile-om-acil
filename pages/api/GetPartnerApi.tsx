import axios from "axios";

interface Partner {
  id: number;
  name: string;
  email: string;
  foto: string;
  description?: string;
}

export async function GetPartnerApi(): Promise<Partner[]> {
  try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      const STORAGE_URL = process.env.NEXT_PUBLIC_MYBACKEND_URL + '/storage'; //      console.log(STORAGE_URL)
      if (!API_URL) {
          throw new Error('API URL is not configured');
      }

      const response = await axios.get(`${API_URL}`);
      
      if (response.status === 200) {
        // Transform data untuk memastikan URL foto lengkap
        const partners = response.data.map((partner: Partner) => ({
          ...partner,
          foto: `${STORAGE_URL}/${partner.foto}`,
        }));
        return partners;
      }
      
      throw new Error('Invalid data format received from API');

  } catch (error) {
      if (axios.isAxiosError(error)) {
          throw new Error(`Failed to fetch partners: ${error.message}`);
      }
      throw error;
  }
}
