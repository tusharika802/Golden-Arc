import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const ChatFloat = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleClick = () => {
    if (isAuthenticated) {
      navigate("/chat");
    } else {
      navigate("/auth?tab=signin");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-24 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-bounce-in group"
      aria-label="Chat with Aryam"
    >
      <MessageCircle className="w-7 h-7 relative z-10" />
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
    </button>
  );
};

export default ChatFloat;




