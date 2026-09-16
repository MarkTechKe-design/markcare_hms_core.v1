export interface InquiryPayload {
  name: string;
  email: string;
  phone: string;
  organization: string;
  type: 'DEMO_REQUEST' | 'GENERAL_CONTACT' | 'TECHNICAL_OVERVIEW';
  facilityType?: string;
  message: string;
}

export interface InquiryResponse {
  success: boolean;
  referenceId: string;
  receivedAt: string;
  message: string;
}

export async function submitInquiry(payload: InquiryPayload): Promise<InquiryResponse> {
  const res = await fetch('/api/inquiries', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => null);

  if (!res.ok || !data?.success) {
    const errorMsg = data?.message
      ? (Array.isArray(data.message) ? data.message.join(', ') : data.message)
      : 'Failed to submit inquiry.';
    throw new Error(errorMsg);
  }

  return data;
}
