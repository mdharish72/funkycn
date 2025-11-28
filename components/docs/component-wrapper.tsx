"use client";

import React, { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { Check, Copy, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComponentWrapperProps {
  title: string;
  description: string;
  componentName: string;
  dependencies?: string;
  code: string;
  children: React.ReactNode;
}

export function ComponentWrapper({
  title,
  description,
  componentName,
  dependencies,
  code,
  children,
}: ComponentWrapperProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "cli" | "manual">("preview");
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const cliCommand = `npx funkycn add ${componentName}`;
  const installCommand = dependencies ? `npm install ${dependencies}` : "";

  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto py-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold font-display tracking-tight">{title}</h1>
        <p className="text-muted-foreground font-body text-lg">{description}</p>
      </div>

      <div className="flex flex-col border rounded-xl overflow-hidden bg-card shadow-sm">
        <div className="flex items-center border-b bg-muted/30 px-4">
          <button
            onClick={() => setActiveTab("preview")}
            className={cn(
              "px-4 py-3 text-sm font-medium border-b-2 transition-colors",
              activeTab === "preview"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            Preview
          </button>
          <button
            onClick={() => setActiveTab("cli")}
            className={cn(
              "px-4 py-3 text-sm font-medium border-b-2 transition-colors",
              activeTab === "cli"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            Installation (CLI)
          </button>
          <button
            onClick={() => setActiveTab("manual")}
            className={cn(
              "px-4 py-3 text-sm font-medium border-b-2 transition-colors",
              activeTab === "manual"
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            Manual
          </button>
        </div>

        <div className="p-0 bg-background min-h-[300px]">
          {activeTab === "preview" && (
            <div className="flex items-center justify-center p-10 min-h-[400px] w-full bg-dotted-spacing-4 bg-dotted-slate-200 dark:bg-dotted-slate-800">
              {children}
            </div>
          )}

          {activeTab === "cli" && (
            <div className="p-6 space-y-4">
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-sm text-muted-foreground">Run the following command:</h3>
                <div className="relative group">
                  <div className="bg-slate-950 text-slate-50 p-4 rounded-lg font-mono text-sm border border-slate-800 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-muted-foreground" />
                    {cliCommand}
                  </div>
                  <button
                    onClick={() => copyToClipboard(cliCommand)}
                    className="absolute right-2 top-2 p-2 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-300">
                  <strong>Note:</strong> This CLI command is a placeholder for the vibe. Please use the <strong>Manual</strong> tab to install components for now.
                </p>
              </div>
            </div>
          )}

          {activeTab === "manual" && (
            <div className="p-6 space-y-6">
              {dependencies && (
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm">1. Install dependencies</h3>
                  <div className="relative group">
                    <div className="bg-slate-950 text-slate-50 p-4 rounded-lg font-mono text-sm border border-slate-800">
                      {installCommand}
                    </div>
                    <button
                      onClick={() => copyToClipboard(installCommand)}
                      className="absolute right-2 top-2 p-2 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <h3 className="font-semibold text-sm">
                  {dependencies ? "2" : "1"}. Copy the source code to{" "}
                  <code className="bg-muted px-1 py-0.5 rounded text-xs">components/ui/{componentName}.tsx</code>
                </h3>
                <div className="relative rounded-lg overflow-hidden border border-border">
                  <div className="absolute right-4 top-4 z-10">
                    <button
                      onClick={() => copyToClipboard(code)}
                      className="p-2 rounded-md bg-slate-800 text-slate-400 hover:text-white transition-colors"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <Highlight theme={themes.vsDark} code={code} language="tsx">
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                      <pre
                        className={cn(className, "p-4 overflow-auto max-h-[500px] text-sm")}
                        style={style}
                      >
                        {tokens.map((line, i) => (
                          <div key={i} {...getLineProps({ line })}>
                            <span className="text-slate-600 select-none mr-4 w-6 text-right inline-block text-xs">
                              {i + 1}
                            </span>
                            {line.map((token, key) => (
                              <span key={key} {...getTokenProps({ token })} />
                            ))}
                          </div>
                        ))}
                      </pre>
                    )}
                  </Highlight>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

