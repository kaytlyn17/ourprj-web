import type {
  ContactPayload,
  ContactResponse,
} from "@/types/contact";


const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "";


export async function submitContact(
  payload: ContactPayload
): Promise<ContactResponse> {

  const response = await fetch(
    `${API_BASE_URL}/api/v1/contact`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  if (!response.ok) {
    throw new Error(
      `Contact submission failed: ${response.status}`
    );
  }

  return response.json();
}