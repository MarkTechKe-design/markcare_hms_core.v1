"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SettingsManager } from "@/components/settings/settings-manager";
import { MarketingCmsEditor } from "@/components/platform/marketing-cms-editor";

export default function PlatformSettingsPage() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="marketing-cms" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="marketing-cms">Marketing & Media CMS</TabsTrigger>
          <TabsTrigger value="governance">System Governance</TabsTrigger>
        </TabsList>

        <TabsContent value="marketing-cms" className="mt-6">
          <MarketingCmsEditor />
        </TabsContent>

        <TabsContent value="governance" className="mt-6">
          <SettingsManager title="Platform Settings" badge="Governance Runtime" />
        </TabsContent>
      </Tabs>
    </div>
  );
}
