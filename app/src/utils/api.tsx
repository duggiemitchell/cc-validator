export const BASE_URL = "http://localhost:3001";

export const validateMutation = async (cardNumber: number[]) => {
  const result = await fetch(`${BASE_URL}/validate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(cardNumber),
  });
  const isValid = await result.json();

  return isValid;
};
