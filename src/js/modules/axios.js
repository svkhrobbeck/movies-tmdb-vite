import axios from "axios";
import { API_KEY, API_URL } from "./constants";

axios.defaults.baseURL = API_URL;
axios.defaults.params = { api_key: API_KEY };
