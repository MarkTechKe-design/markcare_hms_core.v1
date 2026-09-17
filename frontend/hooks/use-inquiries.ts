"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getInquiries,
  getInquiryById,
  updateInquiryStatus,
  type InquiryStatus,
  type QueryInquiryParams,
} from "@/services/inquiry-service";

export function useInquiries(params?: QueryInquiryParams) {
  return useQuery({
    queryKey: ["inquiries", params],
    queryFn: () => getInquiries(params),
    refetchInterval: 30000,
  });
}

export function useInquiryDetail(id: number | null) {
  return useQuery({
    queryKey: ["inquiry", id],
    queryFn: () => (id ? getInquiryById(id) : null),
    enabled: Boolean(id),
  });
}

export function useUpdateInquiryStatus() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, status }: { id: number; status: InquiryStatus }) =>
      updateInquiryStatus(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["inquiries"] });
      queryClient.invalidateQueries({ queryKey: ["inquiry"] });
    },
  });
}
