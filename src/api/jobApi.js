// src/api/jobApi.js
import axios from "axios";

const ARBEITNOW_API = "https://arbeitnow.com/api/jobs";

export const fetchJobs = async () => {
  try {
    const response = await axios.get(ARBEITNOW_API);
    // The jobs array is typically under "data" (check API docs)
    return response.data.data || [];
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
};
