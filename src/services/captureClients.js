import axios from "axios";
import baseUrl from "../utils/BaseUrl";
import API from "../utils/Index";

const CaptureClients = () => {
  const CreateCaptureClient = async (data) => {
    console.log(data);

    await axios.post(`${baseUrl}${API.sentEmails.root}`, data);
  };

  return {
    CreateCaptureClient,
  };
};

export default CaptureClients;
