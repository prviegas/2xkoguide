  /* start of file
  File: src/components/importantMessage.js
  Purpose: Component to display Important Message across the site, such as maintenance notifications
  Properties:
    - Enable: Turns the site message on or off, so it is not always displayed
    - Message: The content of the message to be displayed
    - Type: The type of message, which can affect styling (info, warning, error)
  */
export const notification = {
  enabled: true, // ← toggle ON / OFF
  message: "🚧 Scheduled maintenance tonight at 10pm",
  type: "info" // info | warning | error
};
