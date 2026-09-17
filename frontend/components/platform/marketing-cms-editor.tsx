"use client";

import * as React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Check, Loader2, Save, Globe, UploadCloud, RefreshCw, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { apiFetch } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface SettingItem {
  id: number;
  settingKey: string;
  settingValue: string;
  description: string;
}

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "speglp6u";
const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "markcare_cms";

export function MarketingCmsEditor() {
  const queryClient = useQueryClient();
  const [formValues, setFormValues] = React.useState<Record<string, string>>({});
  const [uploadingKey, setUploadingKey] = React.useState<string | null>(null);
  const [savedKey, setSavedKey] = React.useState<string | null>(null);

  const { data: settings = [], isLoading, refetch } = useQuery<SettingItem[]>({
    queryKey: ["admin-marketing-settings"],
    queryFn: () => apiFetch("/settings/category/PUBLIC_MARKETING"),
  });

  React.useEffect(() => {
    if (settings.length > 0) {
      const initial: Record<string, string> = {};
      settings.forEach((s) => {
        initial[s.settingKey] = s.settingValue || "";
      });
      setFormValues(initial);
    }
  }, [settings]);

  const updateMutation = useMutation({
    mutationFn: ({ key, value }: { key: string; value: string }) =>
      apiFetch(`/settings/key/${key}/value`, {
        method: "PATCH",
        body: JSON.stringify({ value }),
      }),
    onSuccess: (_, vars) => {
      queryClient.invalidateQueries({ queryKey: ["admin-marketing-settings"] });
      queryClient.invalidateQueries({ queryKey: ["public-settings"] });
      setSavedKey(vars.key);
      setTimeout(() => setSavedKey(null), 2500);
    },
  });

  const handleFileUpload = async (key: string, file: File) => {
    try {
      setUploadingKey(key);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", UPLOAD_PRESET);

      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");
      const data = await res.json();
      const secureUrl = data.secure_url;

      setFormValues((prev) => ({ ...prev, [key]: secureUrl }));
      await updateMutation.mutateAsync({ key, value: secureUrl });
    } catch (err) {
      console.error(err);
      alert("Failed to upload media to Cloudinary.");
    } finally {
      setUploadingKey(null);
    }
  };

  const handleManualSave = (key: string) => {
    updateMutation.mutate({ key, value: formValues[key] ?? "" });
  };

  if (isLoading) {
    return (
      <div className="flex h-48 items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-primary" />
      </div>
    );
  }

  const mediaKeys = settings.filter(
    (s) =>
      (s.settingKey.startsWith("SCREENSHOT_") || s.settingKey.startsWith("HERO_")) &&
      s.settingKey !== "BRAND_LOGO_URL" &&
      s.settingKey !== "BRAND_FAVICON_URL"
  );
  const contactKeys = settings.filter((s) => s.settingKey.startsWith("CONTACT_"));

  return (
    <div className="space-y-8">
      {/* Overview Banner */}
      <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-bold text-foreground">Marketing & Public CMS Configuration</h2>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Drop brand logos, high-resolution screenshots, and background video directly to publish live across the enterprise.
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={() => refetch()}>
          <RefreshCw className="mr-2 h-4 w-4" />
          Refresh
        </Button>
      </div>

      {/* 1. Brand Identity & Favicon Section */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-xs space-y-4">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Institutional Brand Identity & Favicon
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Drop brand logos and tab icons to synchronize identity across navigation bars, footers, login auth portals, and browser tabs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Logo Dropzone */}
          <div className="flex items-center gap-4 rounded-xl border border-border/70 p-4 bg-muted/20">
            <div className="relative size-20 shrink-0 overflow-hidden rounded-xl border-2 border-dashed border-border bg-muted/40 flex items-center justify-center">
              {formValues["BRAND_LOGO_URL"] && uploadingKey !== "BRAND_LOGO_URL" ? (
                <Image
                  src={formValues["BRAND_LOGO_URL"]}
                  alt="Brand Logo"
                  fill
                  sizes="80px"
                  className="object-contain p-1.5"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-1">
                  {uploadingKey === "BRAND_LOGO_URL" ? (
                    <Loader2 className="size-5 animate-spin text-primary" />
                  ) : (
                    <>
                      <ShieldCheck className="size-5 text-muted-foreground/60" />
                      <span className="text-[9px] text-muted-foreground mt-0.5">Default Icon</span>
                    </>
                  )}
                </div>
              )}

              <label className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/0 opacity-0 transition-all hover:bg-black/50 hover:opacity-100">
                <span className="text-[9px] font-bold text-white px-2 py-0.5 rounded bg-black/70">Upload</span>
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/svg+xml,image/webp"
                  className="hidden"
                  disabled={uploadingKey === "BRAND_LOGO_URL"}
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) handleFileUpload("BRAND_LOGO_URL", f);
                  }}
                />
              </label>
            </div>

            <div className="flex-1 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-primary">BRAND_LOGO_URL</span>
                {savedKey === "BRAND_LOGO_URL" && (
                  <span className="flex items-center text-[11px] font-semibold text-emerald-600">
                    <Check className="mr-1 size-3" /> Saved
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1.5">
                <Input
                  value={formValues["BRAND_LOGO_URL"] ?? ""}
                  onChange={(e) => setFormValues((p) => ({ ...p, BRAND_LOGO_URL: e.target.value }))}
                  placeholder="https://.../logo.png"
                  className="font-mono text-xs h-8"
                />
                <Button
                  size="sm"
                  className="h-8 px-2"
                  onClick={() => handleManualSave("BRAND_LOGO_URL")}
                  disabled={updateMutation.isPending}
                >
                  <Save className="size-3.5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Favicon Dropzone */}
          <div className="flex items-center gap-4 rounded-xl border border-border/70 p-4 bg-muted/20">
            <div className="relative size-20 shrink-0 overflow-hidden rounded-xl border-2 border-dashed border-border bg-muted/40 flex items-center justify-center">
              {formValues["BRAND_FAVICON_URL"] && uploadingKey !== "BRAND_FAVICON_URL" ? (
                <Image
                  src={formValues["BRAND_FAVICON_URL"]}
                  alt="Browser Favicon"
                  fill
                  sizes="80px"
                  className="object-contain p-2"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-center p-1">
                  {uploadingKey === "BRAND_FAVICON_URL" ? (
                    <Loader2 className="size-5 animate-spin text-primary" />
                  ) : (
                    <>
                      <Globe className="size-5 text-muted-foreground/60" />
                      <span className="text-[9px] text-muted-foreground mt-0.5">Favicon</span>
                    </>
                  )}
                </div>
              )}

              <label className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/0 opacity-0 transition-all hover:bg-black/50 hover:opacity-100">
                <span className="text-[9px] font-bold text-white px-2 py-0.5 rounded bg-black/70">Upload</span>
                <input
                  type="file"
                  accept="image/x-icon,image/png,image/svg+xml,image/webp"
                  className="hidden"
                  disabled={uploadingKey === "BRAND_FAVICON_URL"}
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (f) handleFileUpload("BRAND_FAVICON_URL", f);
                  }}
                />
              </label>
            </div>

            <div className="flex-1 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold text-primary">BRAND_FAVICON_URL</span>
                {savedKey === "BRAND_FAVICON_URL" && (
                  <span className="flex items-center text-[11px] font-semibold text-emerald-600">
                    <Check className="mr-1 size-3" /> Saved
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1.5">
                <Input
                  value={formValues["BRAND_FAVICON_URL"] ?? ""}
                  onChange={(e) => setFormValues((p) => ({ ...p, BRAND_FAVICON_URL: e.target.value }))}
                  placeholder="https://.../favicon.ico"
                  className="font-mono text-xs h-8"
                />
                <Button
                  size="sm"
                  className="h-8 px-2"
                  onClick={() => handleManualSave("BRAND_FAVICON_URL")}
                  disabled={updateMutation.isPending}
                >
                  <Save className="size-3.5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Media & Screenshots Section */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Workspace Screenshots & Hero Media
        </h3>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {mediaKeys.map((item) => {
            const currentValue = formValues[item.settingKey] || "";
            const isUploading = uploadingKey === item.settingKey;
            const isJustSaved = savedKey === item.settingKey;

            return (
              <div key={item.settingKey} className="flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-card shadow-xs">
                <div className="relative aspect-video w-full border-b border-border bg-muted/40 overflow-hidden">
                  {currentValue && !isUploading ? (
                    <div className="relative h-full w-full">
                      {item.settingKey.includes("VIDEO") || currentValue.endsWith(".mp4") || currentValue.endsWith(".webm") ? (
                        <video
                          src={currentValue}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <Image
                          src={currentValue}
                          alt={item.description}
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="object-cover object-top"
                        />
                      )}
                    </div>
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center p-4 text-center">
                      <UploadCloud className="h-8 w-8 text-muted-foreground/60" />
                      <span className="mt-2 text-xs text-muted-foreground">No media uploaded</span>
                    </div>
                  )}

                  {isUploading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-xs">
                      <Loader2 className="h-6 w-6 animate-spin text-primary" />
                      <span className="ml-2 text-xs font-semibold">Uploading to CDN...</span>
                    </div>
                  )}

                  <label className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/0 opacity-0 transition-all hover:bg-black/40 hover:opacity-100">
                    <span className="rounded-lg bg-background/90 px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm">
                      Drop or Click to Upload
                    </span>
                    <input
                      type="file"
                      accept="image/*,video/mp4"
                      className="hidden"
                      disabled={isUploading}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileUpload(item.settingKey, file);
                      }}
                    />
                  </label>
                </div>

                <div className="space-y-3 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-primary">{item.settingKey}</span>
                    {isJustSaved && (
                      <span className="flex items-center text-xs font-semibold text-emerald-600">
                        <Check className="mr-1 h-3.5 w-3.5" /> Saved
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">{item.description}</p>

                  <div className="flex items-center gap-2">
                    <Input
                      value={currentValue}
                      onChange={(e) =>
                        setFormValues((prev) => ({ ...prev, [item.settingKey]: e.target.value }))
                      }
                      placeholder="https://..."
                      className="font-mono text-[11px] h-8"
                    />
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-8 px-2"
                      onClick={() => handleManualSave(item.settingKey)}
                      disabled={updateMutation.isPending}
                    >
                      <Save className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Public Contact Channels */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Public Contact Channels
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {contactKeys.map((item) => {
            const isSaving = updateMutation.isPending && updateMutation.variables?.key === item.settingKey;
            const isJustSaved = savedKey === item.settingKey;

            return (
              <div key={item.settingKey} className="rounded-xl border border-border bg-card p-4 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-primary">{item.settingKey}</span>
                  <Badge variant="outline" className="text-[10px]">PUBLIC</Badge>
                </div>
                <p className="text-xs text-muted-foreground">{item.description}</p>
                <div className="flex items-center gap-2">
                  <Input
                    value={formValues[item.settingKey] ?? ""}
                    onChange={(e) =>
                      setFormValues((prev) => ({ ...prev, [item.settingKey]: e.target.value }))
                    }
                    className="text-xs"
                  />
                  <Button
                    size="sm"
                    disabled={isSaving}
                    onClick={() => handleManualSave(item.settingKey)}
                    className="text-xs shrink-0"
                  >
                    {isSaving ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                    <span className="ml-1.5">{isJustSaved ? "Saved" : "Save"}</span>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
