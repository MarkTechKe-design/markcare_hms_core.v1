"use client";

import * as React from "react";
import {
  Building2,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Filter,
  Inbox,
  Loader2,
  Mail,
  MessageSquare,
  Phone,
  RefreshCw,
  Search,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  useInquiries,
  useUpdateInquiryStatus,
} from "@/hooks/use-inquiries";
import {
  type InquiryRecord,
  type InquiryStatus,
} from "@/services/inquiry-service";

const STATUS_FILTERS: { label: string; value: string }[] = [
  { label: "All Inquiries", value: "ALL" },
  { label: "New", value: "NEW" },
  { label: "In Review", value: "IN_REVIEW" },
  { label: "Contacted", value: "CONTACTED" },
  { label: "Qualified", value: "QUALIFIED" },
  { label: "Closed", value: "CLOSED" },
];

const STATUS_CONFIG: Record<
  InquiryStatus,
  { label: string; badgeClass: string }
> = {
  NEW: {
    label: "New",
    badgeClass: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  },
  IN_REVIEW: {
    label: "In Review",
    badgeClass: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  },
  CONTACTED: {
    label: "Contacted",
    badgeClass: "bg-purple-500/10 text-purple-600 border-purple-500/20",
  },
  QUALIFIED: {
    label: "Qualified",
    badgeClass: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  },
  CLOSED: {
    label: "Closed",
    badgeClass: "bg-muted text-muted-foreground border-border",
  },
};

function formatDate(dateStr: string) {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return dateStr;
  }
}

export default function PlatformInquiriesPage() {
  const [search, setSearch] = React.useState("");
  const [activeSearch, setActiveSearch] = React.useState("");
  const [selectedStatus, setSelectedStatus] = React.useState("ALL");
  const [page, setPage] = React.useState(1);
  const [inspectingId, setInspectingId] = React.useState<number | null>(null);

  const {
    data: response,
    isLoading,
    isRefetching,
    refetch,
  } = useInquiries({
    page,
    limit: 15,
    status: selectedStatus === "ALL" ? undefined : selectedStatus,
    search: activeSearch || undefined,
  });

  const updateStatusMutation = useUpdateInquiryStatus();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    setActiveSearch(search.trim());
  };

  const handleStatusChange = async (id: number, newStatus: InquiryStatus) => {
    await updateStatusMutation.mutateAsync({ id, status: newStatus });
  };

  const inquiries = response?.data || [];
  const meta = response?.meta || { total: 0, page: 1, limit: 15, totalPages: 1 };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <section className="border border-border bg-card p-6 shadow-sm">
        <Badge className="rounded-md bg-accent text-module">
          Commercial Intake
        </Badge>
        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-border bg-surface-2 text-module">
              <Inbox className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#07345f]">
                Inquiry Management Desk
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Hospital onboarding requests, product inquiries, and facility lead triage.
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => refetch()}
            disabled={isLoading || isRefetching}
            className="self-start sm:self-center"
          >
            <RefreshCw
              className={`mr-2 h-4 w-4 ${isRefetching ? "animate-spin" : ""}`}
            />
            Refresh
          </Button>
        </div>
      </section>

      {/* Control Bar: Search & Status Tabs */}
      <section className="flex flex-col gap-4 rounded-xl border border-border bg-card p-4 shadow-sm md:flex-row md:items-center md:justify-between">
        <form
          onSubmit={handleSearchSubmit}
          className="flex w-full items-center gap-2 md:max-w-md"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by facility, contact, email, reference..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <Button type="submit" size="sm">
            Search
          </Button>
          {activeSearch && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => {
                setSearch("");
                setActiveSearch("");
                setPage(1);
              }}
            >
              Clear
            </Button>
          )}
        </form>

        <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
          <Filter className="mr-1 h-3.5 w-3.5 text-muted-foreground" />
          {STATUS_FILTERS.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => {
                setSelectedStatus(f.value);
                setPage(1);
              }}
              className={`rounded-lg px-2.5 py-1 text-xs font-medium transition-colors ${
                selectedStatus === f.value
                  ? "bg-primary text-primary-foreground font-semibold"
                  : "bg-surface-2 text-muted-foreground hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* Main Inquiry List */}
      <section className="space-y-3">
        {isLoading ? (
          <div className="flex h-48 items-center justify-center rounded-xl border border-border bg-card">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
          </div>
        ) : inquiries.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card py-16 text-center">
            <Inbox className="h-10 w-10 text-muted-foreground/50" />
            <h3 className="mt-3 text-base font-semibold">No inquiries found</h3>
            <p className="mt-1 max-w-sm text-sm text-muted-foreground">
              {activeSearch || selectedStatus !== "ALL"
                ? "Try adjusting your search criteria or status filter."
                : "Commercial inquiries submitted through the portal will appear here."}
            </p>
          </div>
        ) : (
          inquiries.map((inquiry) => {
            const isExpanded = inspectingId === inquiry.id;
            const statusConfig =
              STATUS_CONFIG[inquiry.status] || STATUS_CONFIG.NEW;

            const sanitizedPhone = inquiry.phone.replace(/[^0-9]/g, "");
            const whatsappNumber = sanitizedPhone.startsWith("0")
              ? "254" + sanitizedPhone.slice(1)
              : sanitizedPhone;
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              `Hello ${inquiry.name}, regarding your inquiry ${inquiry.referenceId} for ${inquiry.organization} on MarkCare HMS...`
            )}`;

            return (
              <div
                key={inquiry.id}
                className="overflow-hidden rounded-xl border border-border bg-card transition-shadow hover:shadow-md"
              >
                <div className="flex flex-col gap-4 p-5 lg:flex-row lg:items-center lg:justify-between">
                  {/* Inquiry Header Info */}
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-primary">
                        {inquiry.referenceId}
                      </span>
                      <Badge
                        variant="outline"
                        className={`text-[11px] ${statusConfig.badgeClass}`}
                      >
                        {statusConfig.label}
                      </Badge>
                      <Badge variant="secondary" className="text-[11px]">
                        {inquiry.type}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-muted-foreground shrink-0" />
                      <h2 className="text-base font-semibold text-foreground">
                        {inquiry.organization}
                      </h2>
                      {inquiry.facilityType && (
                        <span className="text-xs text-muted-foreground">
                          • {inquiry.facilityType}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1 font-medium text-foreground">
                        {inquiry.name}
                      </span>
                      <a
                        href={`mailto:${inquiry.email}`}
                        className="flex items-center gap-1 hover:text-primary transition-colors"
                      >
                        <Mail className="h-3 w-3" />
                        {inquiry.email}
                      </a>
                      <a
                        href={`tel:${inquiry.phone}`}
                        className="flex items-center gap-1 hover:text-primary transition-colors"
                      >
                        <Phone className="h-3 w-3" />
                        {inquiry.phone}
                      </a>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(inquiry.createdAt)}
                      </span>
                    </div>
                  </div>

                  {/* Actions & Lifecycle Progression */}
                  <div className="flex flex-wrap items-center gap-2 pt-2 lg:pt-0">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-600 transition-colors hover:bg-emerald-500/20"
                    >
                      <MessageSquare className="h-3.5 w-3.5" />
                      WhatsApp Lead
                    </a>

                    <select
                      value={inquiry.status}
                      disabled={updateStatusMutation.isPending}
                      onChange={(e) =>
                        handleStatusChange(
                          inquiry.id,
                          e.target.value as InquiryStatus
                        )
                      }
                      className="h-8 rounded-lg border border-border bg-surface-2 px-2.5 text-xs font-medium text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="NEW">Status: New</option>
                      <option value="IN_REVIEW">Status: In Review</option>
                      <option value="CONTACTED">Status: Contacted</option>
                      <option value="QUALIFIED">Status: Qualified</option>
                      <option value="CLOSED">Status: Closed</option>
                    </select>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        setInspectingId(isExpanded ? null : inquiry.id)
                      }
                      className="text-xs"
                    >
                      {isExpanded ? "Hide Note" : "Read Message"}
                    </Button>
                  </div>
                </div>

                {/* Collapsible Message Details */}
                {isExpanded && (
                  <div className="border-t border-border bg-surface-2/40 p-5">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Client Facility Inquiry Message
                    </h4>
                    <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-foreground/90">
                      {inquiry.message}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3 text-[11px] text-muted-foreground">
                      <span>Database ID: #{inquiry.id}</span>
                      <span>Last Updated: {formatDate(inquiry.updatedAt)}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </section>

      {/* Pagination Controls */}
      {meta.totalPages > 1 && (
        <section className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-sm">
          <span className="text-xs text-muted-foreground">
            Showing Page <strong className="text-foreground">{meta.page}</strong> of{" "}
            <strong className="text-foreground">{meta.totalPages}</strong> ({meta.total} inquiries)
          </span>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={meta.page <= 1 || isLoading}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage((p) => Math.min(meta.totalPages, p + 1))}
              disabled={meta.page >= meta.totalPages || isLoading}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </section>
      )}
    </div>
  );
}
