# Farduus Forever ❤️ — Premium Romantic Love Letter Web App

> **“Hal Qalbi, Hal Jacayl, Hal Mustaqbal. ❤️”**  
> A bespoke digital love gift and letter dedicated to my beloved girlfriend, **Farduus Xuseen**.

---

## 🌹 Overview

**Farduus Forever ❤️** is a production-grade luxury romantic web application crafted in 2026. Designed with an editorial aesthetic, cinematic twilight palettes, glassmorphism, fluid physics-based micro-interactions, and responsive typography, this platform houses an authentic, verbatim love letter written in Somali alongside deeply personal interactive features.

---

## 🎨 Visual Design — 2026 Luxury Romantic

* **Midnight Navy (`#080B20`)**: Deep twilight backdrop providing contrast and emotional intimacy.
* **Romantic Rose (`#FF6B9A`)**: Passionate, vibrant pink accent for glowing hearts and primary actions.
* **Soft Blush (`#FFD5E2`)**: Delicate, gentle blush for highlights and typography.
* **Lavender (`#B9A6FF`)**: Ethereal twilight tone for secondary accents and aurora gradients.
* **Warm Gold (`#FFD89A`)**: Golden glow inspired by sunset horizon rays.
* **Pure White (`#FFFFFF`)**: Crisp headings and starfield particles.

---

## 💌 Core Experiences & Features

### 1. The Opening Surprise (Welcome Envelope)
* Full-screen cinematic greeting:
  * *“Asc, Gacaliso Farduus ❤️”*
  * *“Waxaan kuu diyaariyey wax yar oo qalbigayga ka yimid…”*
* Animated 3D glowing envelope sealed with an interactive heart wax seal (*“Fur Warqadda Jacaylkayga 💌”*).
* On interaction: The flap rotates 180° in 3D perspective, revealing the love letter and a glowing heart, triggering multi-point romantic confetti bursts, initiating ambient music, and smoothly transitioning into the main letter.
* Prominent skip button (*“Ka bood hordhaca ➔”*) for instant access.

### 2. Cinematic Hero Section
* Romantic twilight sunset horizon with couple silhouette gazing toward the stars.
* Main heading: **“I Love You, Farduus ❤️”**
* Subtitle: *“Adiga ayaa qalbigayga ku leh meel aan qof kale buuxin karin.”*
* Glowing animated CTA *“Akhri Farriintayda 💌”* smoothly scrolls to the letter card.

### 3. The Complete Love Letter (Verbatim Somali)
* Displayed verbatim without altering a single word or paragraph:
  * **Salutation**: *Dear Gacaliso,*
  * **Paragraph 1**: *Lagayaba Yaaba inaan kaso habsamaya inaan noqdo jacylkaagi koobad...*
  * **Paragraph 2**: *Gacaliso Qof, shay iyo wakhtigu toona ma badalayo inaan kujeclahay wali aan kujeclandoono...*
  * **Paragraph 3**: *Gacaliso waad iga fogtahay lakin waxan waheshada sowradada...*
  * **Paragraph 4**: *Gacaliso ma ogtahay jacaylka dunida ugu quruxda badan...*
  * **Paragraph 5**: *Gacaliso Waxaynu wada qorsheesanay wax badan...*
  * **Sign-off**: *To: Farduus Xuseen*
* Frosted glass parchment with warm gold corner filigree.
* Floating margin hearts and glowing handwritten script signature (*Farduus Xuseen ❤️*).
* Interactive controls: Copy letter to clipboard and *“Akhri Farriinta Mar Kale 🔄”*.

### 4. Our Love Journey (Love Counter)
* Configurable `relationshipStartDate` setting in `lib/love-content.ts`.
* Per requirements, until a start date is set, it displays:  
  *“Quruxda jacaylkeennu waxay ku jirtaa maalin kasta oo aynu wadaagno. ❤️”*
* Interactive date picker allowing Farduus to enter an anniversary date to see real-time ticking days, hours, minutes, and seconds.

### 5. Reasons I Love You (3D Flip Cards)
* Interactive 3D cards that flip 180° when clicked or pressed:
  1. *“Waxaad tahay farxaddayda.”*
  2. *“Waxaad tahay qofka aan ku kalsoonahay.”*
  3. *“Waan jeclahay sida aad noloshayda u qurxiso.”*
  4. *“Waxaan jeclahay daacadnimadaada iyo naxariistaada.”*
  5. *“Waxaan jeclahay inaan kula wadaago riyooyinkayga.”*

### 6. Open When... (Digital Love Notes)
* Dedicated digital envelopes for emotional moments:
  * *“Fur marka aad ii xiisto.”*
  * *“Fur marka aad murugaysan tahay.”*
  * *“Fur marka aad faraxsan tahay.”*
  * *“Fur marka aad rabto inaad ogaato sida aan kuu jeclahay.”*
* Opens an affectionate Somali modal note with glowing heart animations and comforting words.

### 7. A Wish for Our Future
* Twilight sunset panorama with two silhouettes holding hands toward the horizon.
* Displays the heartfelt prayer:  
  *“Gacaliso, waxaan rajaynayaa in mustaqbalkeennu noqdo mid jacayl, daacadnimo, farxad iyo is-garab-istaag ku dhisan. Ilaahay ha inoo fududeeyo kheyrka aan wada rajaynayno. ❤️”*

### 8. Special Surprise Button
* Interactive glowing button: *“Wax kale ayaan kuu hayaa ❤️”*.
* Triggers a multi-stage heart particle shower and reveals:  
  *“Farduus, haddii aan mar kale dooran lahaa, qalbigaygu weli adiga ayuu kuu soo noqon lahaa. Waxaad tahay qof aan si gaar ah u jeclahay.”*

### 9. Web Audio Romantic Music Player
* Synthesized Web Audio API romantic chord progression (Cmaj7 - G/B - Am9 - Fmaj7) that requires zero external network dependencies and never breaks or 404s.
* Controls: Play/Pause, Mute/Unmute, Volume Slider, and active Visualizer equalizer bars.
* Fully respects user interaction policies (no unwanted audio autoplay).

### 10. Final Romantic Scene
* Emotional closing reflections:  
  *“Farduus Xuseen ❤️”*  
  *“Ma garanayo dhammaan waxa mustaqbalku inoo hayo, balse waxaan rajaynayaa inaan kula wadaago maalmo qurux badan, farxad iyo jacayl daacad ah.”*  
  *“Waxaad tahay qof qalbigayga meel gaar ah ku leh.”*  
  *“Waan ku jeclahay, Gacaliso. ❤️”*  
  *“Forever in My Heart — To: Farduus Xuseen 💌”*

### 11. Shareable Web App
* Native Web Share API integration with Clipboard fallback (*“Share This Love 💌”*).
* Dynamic OpenGraph generator (`app/opengraph-image.tsx`), custom heart favicon (`app/icon.svg`), responsive viewport, and custom 404 page.

---

## 🛠️ Tech Stack

* **Framework**: Next.js 14 App Router
* **Language**: TypeScript
* **Styling**: Tailwind CSS
* **Animations**: Framer Motion & Canvas Confetti
* **Audio Engine**: Web Audio API (ambient romantic piano/harp synthesis)
* **Icons**: Lucide React
* **Deployment**: Vercel

---

## 🚀 Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

4. Production build:
   ```bash
   npm run build
   npm run start
   ```

---

## 🌐 Deploy to Vercel

### Option 1: Automatic GitHub Deploy
1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Framework preset: **Next.js**.
4. Click **Deploy**.

### Option 2: Vercel CLI
```bash
npx vercel
```
Follow the interactive prompt to link your project and deploy directly.
