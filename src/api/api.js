import axios from "axios";

export const API = axios.create({ baseURL: "https://c-suite-server.onrender.com/test" });

export const getQuestions = async () => {
  try {
    const { data } = await API.get("/questions");
    return data[0];
  } catch (error) {
    console.log(error);
  }
};

export const submitAnswer = async (answer) => {
    console.log("sent")
  try {
    const { data } = await API.post("/answer",answer);
    return data;
  } catch (err) {
    console.log(err);
  }
};
