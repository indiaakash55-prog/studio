"use client";

import { Button } from "./ui/button";
import { Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type ShareButtonProps = {
  textToShare: string;
};

export function ShareButton({ textToShare }: ShareButtonProps) {
  const { toast } = useToast();

  const shareOnWhatsApp = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(textToShare)}`;
    
    if (isMobile) {
      window.location.href = url;
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }

    toast({
      title: "Ready to Share!",
      description: "Your WhatsApp tab is open.",
    });
  };

  return (
    <Button onClick={shareOnWhatsApp} size="icon" aria-label="Share on WhatsApp">
      <Share2 />
    </Button>
  );
}
