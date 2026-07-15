import mongoose from 'mongoose';

const qrRedirectSchema = new mongoose.Schema({
  route:                   { type: String, required: true, unique: true, index: true },
  product_type:            { type: String, required: true, index: true },
  company_name:            { type: String, default: 'QR Code Sign' },
  hardcoded_url:           { type: String, required: true },
  destination_url:         { type: String, required: true },
  redirect_delay_seconds:  { type: Number, default: 5, min: 0, max: 15 },
  display_message:         { type: String, default: 'Thanks for scanning! Auto redirecting to Google reviews…' },
  page_title:              { type: String, default: 'We appreciate your feedback!' },
  active:                  { type: Boolean, default: true },
  ownerId:                 { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  canEdit:                 { type: Boolean, default: true },
});

// Explicit collection name (3rd arg) — without this Mongoose would
// pluralize the model name to "qrcoderedirect1s", which would silently
// point at the wrong (empty) collection.
const QRRedirect = mongoose.models.QRcoderedirect1
  || mongoose.model('QRcoderedirect1', qrRedirectSchema, 'QRcoderedirect1');

export default QRRedirect;