# Centre Dentaire Dalil — Dental Clinic Website

Static Next.js website for Centre Dentaire Dalil, Dr Houssam Eddine Dalil, chirurgien-dentiste in Taza, Maroc.

- Phone / WhatsApp: +212 666-161623 (wa.me/212666161623)
- Address: Résidence Salam, Avenue Allal Ben Abdellah, 3ème étage, Taza
- Coordinates (Google Maps, verified): 34.221255, -4.0067704
- Languages: French (default), Arabic (RTL), English
- Booking form opens WhatsApp with the form details prefilled in the selected language
- Social: Instagram (instagram.com/centre_dentaire_dalil) verified; Facebook links to a Facebook search, clearly marked as a placeholder (no verified page URL supplied)
- Before/after slider uses one composite photo, AFTER layer clipped on top of BEFORE, captioned as an illustrative example, not a patient of this clinic
- Chatbot: instant FAQ layer in French, Arabic and English, plus a guarded AI layer (GEMINI_API_KEY, server-side only). Prices and medical questions are deflected to WhatsApp.
- Logo: typographic gradient tooth mark + wordmark (no clinic logo file was supplied)
- Placeholders the clinic must still confirm: opening hours (shown as Lun–Sam 09:00–19:00), hero stats, testimonials, doctor portrait (about section uses a clinic interior photo)
- Build: pnpm install, then pnpm run build (static export in out/).
