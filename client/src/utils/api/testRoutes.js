import axios from "axios";

export const testGET = async() => {
  const res = await axios.get("/api/test");
  console.log(res.data)
};

export const testPOST = async() => {
  const res = await axios.post("/api/test");
  console.log(res.data)
};

