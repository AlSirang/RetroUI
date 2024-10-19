"use client";

import {
  Accordion,
  Avatar,
  Badge,
  Button,
  Tabs,
  TabsContent,
  TabsPanels,
  TabsTrigger,
  TabsTriggerList,
} from "@/packages/ui";
import React from "react";

export default function page() {
  return (
    <div className="container max-w-6xl mx-auto space-y-6">
      <div className="space-x-4">
        <Button>Default Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="link">Link Button</Button>
      </div>
      <div className="space-x-4">
        <Badge>Badge</Badge>
        <Badge variant="success">Badge</Badge>
        <Badge variant="error">Badge</Badge>
        <Badge variant="filled">Badge</Badge>
      </div>

      <div className="flex items-center space-x-4">
        <Avatar>
          <Avatar.Image src="/images/avatar.jpeg" alt="Arif Logs" />
          <Avatar.Fallback>AH</Avatar.Fallback>
        </Avatar>

        <Avatar className="rounded-none">
          <Avatar.Image src="/images/avatar.jpeg" alt="Arif Logs" />
          <Avatar.Fallback>AH</Avatar.Fallback>
        </Avatar>

        <Avatar className="rounded-none h-20 w-20">
          <Avatar.Image src="/images/avatar.jpeg" alt="Arif Logs" />
          <Avatar.Fallback>AH</Avatar.Fallback>
        </Avatar>
      </div>
      <div>
        <Tabs>
          <TabsTriggerList>
            <TabsTrigger>Tab 1</TabsTrigger>
            <TabsTrigger>Tab 2</TabsTrigger>
            <TabsTrigger>Tab 3</TabsTrigger>
          </TabsTriggerList>
          <TabsPanels>
            <TabsContent>Content 1</TabsContent>
            <TabsContent>Content 2</TabsContent>
            <TabsContent>Content 3</TabsContent>
          </TabsPanels>
        </Tabs>
      </div>

      <div>
        <Accordion type="single" collapsible>
          <Accordion.Item value="item-1">
            <Accordion.Header>Head...</Accordion.Header>
            <Accordion.Content>Content...</Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
