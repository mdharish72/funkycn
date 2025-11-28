"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `To roast or not to roast, that is the question. Whether 'tis nobler in the mind to suffer the slings and arrows of outrageous cringe, or to take arms against a sea of bad takes, and by opposing end them?`;

export default function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}

