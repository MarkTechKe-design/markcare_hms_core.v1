import { apiFetch } from "@/lib/api";

export type InquiryStatus =
  | "NEW"
  | "IN_REVIEW"
  | "CONTACTED"
  | "QUALIFIED"
  | "CLOSED";

export interface InquiryRecord {
  id: number;
  referenceId: string;
  type: string;
  name: string;
  email: string;
  phone: string;
  organization: string;
  facilityType?: string | null;
  message: string;
  status: InquiryStatus;
  createdAt: string;
  updatedAt: string;
}

export interface QueryInquiryParams {
  page?: number;
  limit?: number;
  status?: string;
  type?: string;
  search?: string;
}

export interface InquiriesResponse {
  data: InquiryRecord[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export function getInquiries(params?: QueryInquiryParams) {
  const searchParams = new URLSearchParams();
  if (params?.page) searchParams.set("page", String(params.page));
  if (params?.limit) searchParams.set("limit", String(params.limit));
  if (params?.status && params.status !== "ALL") searchParams.set("status", params.status);
  if (params?.type && params.type !== "ALL") searchParams.set("type", params.type);
  if (params?.search) searchParams.set("search", params.search.trim());

  const queryStr = searchParams.toString();
  const endpoint = queryStr ? `/inquiries?${queryStr}` : "/inquiries";

  return apiFetch<InquiriesResponse>(endpoint, { method: "GET" });
}

export function getInquiryById(id: number) {
  return apiFetch<InquiryRecord>(`/inquiries/${id}`, { method: "GET" });
}

export function updateInquiryStatus(id: number, status: InquiryStatus) {
  return apiFetch<InquiryRecord>(`/inquiries/${id}/status`, {
    method: "PATCH",
    body: JSON.stringify({ status }),
  });
}
