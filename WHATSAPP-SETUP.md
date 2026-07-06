# WhatsApp Integration Setup

## Configuration

To configure the WhatsApp number for enrollment form submissions:

1. Open `components/ui/enrollment-form.tsx`
2. Find the line with `const whatsappNumber = "YOUR_WHATSAPP_NUMBER";`
3. Replace `YOUR_WHATSAPP_NUMBER` with your actual WhatsApp number

### Format

The WhatsApp number should be in international format without spaces, dashes, or the `+` symbol:

- ✅ Correct: `911234567890` (for +91 1234567890)
- ✅ Correct: `14155552671` (for +1 415 555 2671)
- ❌ Wrong: `+91 1234567890`
- ❌ Wrong: `+1-415-555-2671`

### Example

```typescript
// For India (+91)
const whatsappNumber = "919876543210";

// For USA (+1)
const whatsappNumber = "14155552671";

// For UK (+44)
const whatsappNumber = "447700900123";
```

## How It Works

When a user clicks "Start Learning" and fills out the form:

1. A popup dialog appears with fields for Name, Email, and Phone
2. User fills in their details
3. On submit, the form data is formatted into a WhatsApp message
4. WhatsApp opens in a new tab with the pre-filled message
5. The message includes:
   - Name
   - Email
   - Phone number

## Testing

To test the integration:

1. Click the "Start Learning" button on the hero section
2. Fill in the form with test data
3. Click "Send to WhatsApp"
4. Verify that WhatsApp opens with the correct message format

## Message Format

The WhatsApp message will look like this:

```
*New Enrollment Request*

*Name:* John Doe
*Email:* john@example.com
*Phone:* +91 1234567890
```
