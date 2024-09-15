import axios, {AxiosError, AxiosResponse} from "axios";

//Interface untuk tipe respons dari OpenWeather Api
interface WeatherResponse {
    main: {
        temp: number;
        pressure: number;
        humidity: number;
    };
    weather: Array<{
        description: string;
        icon: string;
    }>;
    name: string; //Nama kota
}

// Fungsi untuk hit API openweathermap
async function fetchWeather(city: string): Promise<void> {
    const apiKey: string = "YOUR_API_KEY";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    try {
        //Permintaan GET ke API OpenWeatherMap
        const response: AxiosResponse = await axios.get(url);

        //Print all response dalam JSON avoid circular error
        console.log("Response status : ", response.status);
        console.log("Response headers : ", response.headers);
        console.log("Response data in JSON : ", JSON.stringify(response.data, null, 2));

        //Berikut deserialisasi ke interface WeatherResponse
        const weatherData: WeatherResponse = response.data;

        //Mengakses data dari response
        const { temp, pressure, humidity } = weatherData.main;
        const description = weatherData.weather[0].description;
        const cityName = weatherData.name;

        console.log(`Cuaca di ${cityName}`);
        console.log(`Suhu : ${temp}°C`);
        console.log(`Tekanan : ${pressure} hPa`);
        console.log(`Kelembaban : ${humidity}%`);
        console.log(`Deskripsi : ${description}`);
    } catch (error: unknown) {
        //Pastikan error adalah AxiosError untuk mengakses detailnya
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            console.error("Error message", axiosError.message);

            //Jika ada response dari server, kita bisa akses status code dan pesan errornya
            if (axiosError.response) {
                console.error("Status code : ", axiosError.response.status);
                console.error("Error response data : ", axiosError.response.data);
            } else {
                console.error("No response from server");
            }
        } else {
            console.error("Unexpected error :", error);
        }
    }
}

fetchWeather("Jakarta");