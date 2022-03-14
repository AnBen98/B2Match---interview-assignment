import axios from "axios";

const getConfig = () => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: token,
    },
  };
  return config;
};

export async function getJokes(url) {
  const response = await axios.get(url);
  console.table(response.data);

  return response.data.value;
}
