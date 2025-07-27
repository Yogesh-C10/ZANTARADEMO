// src/components/ChatWidget.jsx
export default function ChatWidget() {
    return (
      <div className="fixed bottom-4 right-4">
        <iframe
          src="https://some-chatbot.com/embed?id=YOUR_ID"
          title="Chat"
          className="w-[350px] h-[450px] border rounded shadow-lg"
        />
      </div>
    );
  }
  