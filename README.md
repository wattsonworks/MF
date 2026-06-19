# מיכל פיטנס סטודיו — Michal Fitness Studio

A modern, multi-page marketing site for **Michal Fitness Studio**, a women's fitness
studio in Safed (קניון שערי העיר, הגדוד השלישי, צפת). Hebrew, RTL, mobile-first.

Built to replace the old single-scroll "digital business card" at
`keter-card.co.il/michal-fitness-studio/` with a real, conversion-focused website.

## Pages
| File | עמוד |
|------|------|
| `index.html` | בית — hero, about, classes teaser, why-us, trial offer, reviews, location |
| `classes.html` | השיעורים — all 7 class types in detail |
| `schedule.html` | לוח אימונים — how to book via Boost + app download |
| `pricing.html` | מחירון — intro offers + full monthly ladder (259–739₪) |
| `gallery.html` | גלריה — photo masonry (lightbox) + testimonials |
| `faq.html` | שאלות ותשובות — accordion + FAQPage schema |
| `contact.html` | צרי קשר — map, directions, click-to-call, vCard |

## Stack
Static HTML/CSS/JS — no build step. Google Fonts (Heebo + Assistant).
SEO: per-page meta, Open Graph, `HealthClub` + `FAQPage` JSON-LD, Google Maps embed.

## Key business data
- **Phone / WhatsApp:** 054-344-9212 / wa.me/972543449212
- **Instagram:** @michal_fitness_studio · **Facebook:** /m.r.f.077
- **Booking:** Boost app (boostapp.co.il)
- **Pricing (per official June-2026 flyer):** single trial 50₪ · trial card 119₪ (3 entries / 2 weeks) · monthly 259/379/469/559/649/739₪ for 1–6×/week

## Deploy (GitHub Pages)
```
git push -u origin main
# then enable Pages: Settings → Pages → Deploy from branch → main / root
```
Live URL: https://wattsonworks.github.io/MF/
