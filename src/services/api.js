import axios from "axios";

const baseURL = "https://api.mangadex.org/";

const apiClient = axios.create({
  baseURL: baseURL,
  timeout: 10000,
});

export async function fetchMangas(params = {}) {
  console.log('ta >>>');
  const response = await apiClient.get("manga", {
    params: {
      // limit: 90,
      // "translatedLanguage[]": "pt-br",
      // ...params,
    }
  });
  console.log('response >>> : ', response.data);
  return response.data;
}
