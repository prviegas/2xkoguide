  /* start of file
  File: src/components/ImportantMessageBar.jsX
  Purpose: 
  -Imports formatting and message for the bar
  -Displays the Important Message bar if enabled
  */
import "./importantMessageFormat.css";
import { notification } from "./ImportantMessage.js";

export default function NotificationBar() {
  if (!notification.enabled) return null;

  return (
    <div className={`notification-bar ${notification.type}`}>
      {notification.message}
    </div>
  );
}
