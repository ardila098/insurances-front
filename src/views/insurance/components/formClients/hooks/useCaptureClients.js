import CaptureClients from "../../../../../services/captureClients";

const useCaptureClients = () => {
  const { CreateCaptureClient } = CaptureClients();

  const addEmailClient = async (formData) => {
    await CreateCaptureClient(formData);
  };

  return {
    addEmailClient,
  };
};

export default useCaptureClients;
