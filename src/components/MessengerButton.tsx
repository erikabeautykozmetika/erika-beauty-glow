import { MessageCircle } from "lucide-react";

const MESSENGER_URL = "https://m.me/erika.lorinc.5";

export function MessengerButton() {
  return (
    <a
      href={MESSENGER_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Írjon nekünk Messengeren"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-primary-foreground shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span className="hidden text-sm font-medium sm:inline">Messenger</span>
    </a>
  );
}
