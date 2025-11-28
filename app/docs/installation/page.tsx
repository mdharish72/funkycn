"use client";

import React from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { useState } from "react";

export default function InstallationPage() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const initCommand = "npx funkycn init";

  return (
    <div className="flex flex-col gap-8 max-w-3xl">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold font-display tracking-tight">Installation</h1>
        <p className="text-xl text-muted-foreground font-body">
          How to install dependencies and structure your app.
        </p>
      </div>

      <div className="space-y-6">
        <div className="p-6 rounded-xl border-2 border-border comic-shadow-2 bg-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center comic-shadow-2 border-2 border-border">
              <Terminal className="w-5 h-5 text-primary-foreground" />
            </div>
            <h2 className="text-xl font-bold font-display">Automatic Installation</h2>
          </div>
          
          <p className="mb-6 text-muted-foreground">
            Run the init command to set up your project with FunkyCN configuration.
          </p>

          <div className="relative group">
            <div className="bg-slate-950 text-slate-50 p-4 rounded-lg font-mono text-sm border border-slate-800 flex items-center gap-2">
              <span className="text-green-400">$</span>
              {initCommand}
            </div>
            <button
              onClick={() => copyToClipboard(initCommand)}
              className="absolute right-2 top-2 p-2 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 rounded-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-300">
              <strong>Note:</strong> The CLI is currently in development. Please follow the manual installation steps for now.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold font-display">Manual Installation</h2>
          <p className="text-muted-foreground">
            Add the following CSS variables to your <code className="bg-muted px-1 py-0.5 rounded text-sm">globals.css</code> file to enable the FunkyCN theme.
          </p>
          
          <div className="relative rounded-lg overflow-hidden border border-border bg-slate-950">
            <pre className="p-4 text-sm text-slate-50 overflow-x-auto">
              <code>{`@layer base {
  :root {
    --background: 45 60% 95%;
    --foreground: 20 14.3% 4.1%;
    --card: 0 0% 100%;
    --card-foreground: 20 14.3% 4.1%;
    --popover: 0 0% 100%;
    --popover-foreground: 20 14.3% 4.1%;
    --primary: 24 95% 53%;
    --primary-foreground: 60 9.1% 97.8%;
    --secondary: 60 4.8% 95.9%;
    --secondary-foreground: 24 9.8% 10%;
    --muted: 60 4.8% 95.9%;
    --muted-foreground: 25 5.3% 44.7%;
    --accent: 60 4.8% 95.9%;
    --accent-foreground: 24 9.8% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 60 9.1% 97.8%;
    --border: 20 5.9% 90%;
    --input: 20 5.9% 90%;
    --ring: 20 14.3% 4.1%;
    --radius: 0.5rem;
  }
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

