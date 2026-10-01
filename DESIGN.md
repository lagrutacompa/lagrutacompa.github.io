# Sistema vigente · 1 de octubre de 2026

El prototipo Umbral aprobado se aplica a Pedagogías, Investigaciones y sus 17 páginas interiores. Esta sección prevalece sobre el registro histórico que sigue. `umbral.css` y `umbral.js` contienen el sistema compartido: Jost para lectura (19 px escritorio / 17 px móvil), Bodoni para títulos, fondo claro #f8f6ef en Pedagogías y profundidad #15282c en Investigaciones. Márgenes de 28 px en móvil y ancho editorial de 1120 px; artículos de investigación de 760 px. Se conservan textos, medios y enlaces de las páginas interiores.

La cabecera integra el logo y un menú de tres puntos con nombre accesible; se elimina el rótulo visible «Índice». Pedagogías usa techo mineral con musgo, sol, liana que crece suavemente con el scroll y una base de roca y plantas. Investigaciones usa techo mineral con luces azules, gotas con adelantamiento leve exclusivamente por scroll y ondas de agua al final. Movimiento reducido desactiva los efectos. Ambos pies conservan Instagram y WhatsApp.

`editorial-type.css` comparte la tipografía con el catálogo de Creaciones y sus nueve páginas de obra, preservando sus composiciones, escenas e interacciones. El inicio y la experiencia de la vaca conservan su identidad.

Emergencia incorpora dos imágenes conceptuales generadas para la investigación sobre movimientos reaccionarios, nuevas derechas, masculinidades y manosfera: una escena de teléfono y sombras masculinas, y un símbolo de máscara fragmentada con perfiles en eco. La fotografía se identifica como conceptual en su página. Se actualiza únicamente el descriptor del catálogo; la revisión general de textos queda pendiente por decisión del usuario.

Verificación local: 29 rutas a 390 y 1440 px, menú con Escape, desplegables, recursos locales, desbordamiento y errores de JavaScript. Comparación de párrafos, subtítulos y pies de foto de las 17 páginas interiores contra la versión publicada anterior: conservados. Las integraciones externas (Instagram) no se verifican en esta prueba local.

---
name: La Gruta · Creaciones, Pedagogías e Investigaciones
description: Distinct theatrical worlds, warm paper learning pages and a dark research grotto.
colors:
  paper: "#f4eddf"
  warm-paper-wash: "#f0dfc0cf"
  ink: "#24251d"
  rust: "#93412b"
  moss: "#4d593b"
  link-hover: "#6b311f"
  research-cave: "#101b20"
  research-paper: "#f0e9da"
  research-focus: "#b5d4ce"
  research-current: "#8faaa9"
typography:
  display:
    fontFamily: "Georgia, serif"
    fontSize: "clamp(44px,6vw,80px)"
    fontWeight: 400
    lineHeight: 1.05
  headline:
    fontFamily: "Kaftan, Georgia, serif"
    fontSize: "clamp(35px,4vw,57px)"
    fontWeight: 400
    lineHeight: 1.06
  project-title:
    fontFamily: "Kaftan, Georgia, serif"
    fontSize: "clamp(42px,5vw,70px)"
    fontWeight: 400
    lineHeight: 1.05
  body:
    fontFamily: "'Courier Prime', monospace"
    fontSize: "18px"
    lineHeight: 1.6
  section-copy:
    fontFamily: "'Courier Prime', monospace"
    fontSize: "17px"
    lineHeight: 1.55
  research-display:
    fontFamily: "Georgia, serif"
    fontSize: "clamp(45px,5.8vw,85px)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-.025em"
  research-headline:
    fontFamily: "Kaftan, Georgia, serif"
    fontSize: "clamp(42px,4.5vw,64px)"
    fontWeight: 400
    lineHeight: 1.15
  navigation:
    fontFamily: "'Courier Prime', monospace"
    fontSize: "15px"
spacing:
  link-padding: "9px 0"
  offering-padding: "5px 0"
  disclosure-indent: "18px"
  section-padding: "42px 0"
components:
  text-link:
    textColor: "{colors.rust}"
    padding: "{spacing.link-padding}"
  text-link-hover:
    textColor: "{colors.link-hover}"
  offering-link:
    textColor: "{colors.ink}"
    padding: "{spacing.offering-padding}"
  ink-button:
    backgroundColor: "transparent"
    textColor: "{colors.rust}"
    padding: "10px 0"
  ink-button-hover:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
  mobile-navigation:
    backgroundColor: "{colors.paper}"
    padding: "20px"
---

# Design System: La Gruta · Creaciones, Pedagogías e Investigaciones

## Overview

**Creative North Star: "El libro pop-up de La Gruta"**

An artistic, poetic book made of warm matte paper, folded rocks and restrained vegetation. Documentary photographs and readable editorial text occupy the clear center; independently moving paper layers give the surrounding grotto depth.

The approved Pedagogías family uses the warm creation-paper texture across the 15 pages identified in PRODUCT.md. Investigaciones extends the paper world into a dark grotto, with nested cave arches, folded maps and quiet water. Nine approved work pages use works.css and works.js, each with its own visual identity. The shared site-refinements.css unifies navigation and social footers on the existing site surfaces; the paper and cave scenes remain scoped surface treatments. Pedagogías uses folded rocks with restrained moss, without a curtain or thick photographic frames.

**Key Characteristics:**
- Warm textured paper and dark ink.
- Folded rocks with restrained moss and plants.
- Documentary imagery with lightly torn contours.
- Quiet typographic links and readable editorial content.
- Independent decorative motion that respects reduced-motion preferences.
- A dark paper grotto for Investigaciones, with luminous paper text and water.

## Colors

Warm paper and dark ink establish the reading surface; rust signals interaction and moss belongs to the botanical world.

### Primary

- **Rust:** text links, current-navigation underline and focus indicators.

### Secondary

- **Moss:** the declared botanical accent; retain restrained moss in the supplied rock and plant imagery rather than applying a green wash to content.

### Investigaciones accents

- **Research focus:** pale water-green keyboard outlines on the dark surface.
- **Research current:** muted blue-green underline for the current navigation item.

### Neutral

- **Paper:** the inherited mobile-navigation surface.
- **Warm paper wash:** the final Pedagogías canvas combines this translucent wash with the existing paper texture at 950px scale, matching the warm creation-paper family.
- **Ink:** prose, offering links and disclosure markers.
- **Link hover:** deeper warm feedback for hovered anchors.
- **Research cave:** the dark Investigaciones canvas, with translucent dark gradients over the existing paper texture.
- **Research paper:** luminous body text and navigation on the cave surface.

## Typography

Georgia provides the uppercase Pedagogías hero. Kaftan, with Georgia and serif fallbacks, carries section headings and sentence-case project headings. Courier Prime provides prose, links, navigation and captions.

The frontmatter captures the desktop roles. Introductory copy is slightly larger (19px, line-height 1.45, maximum 45ch). Section copy stays within 46ch; project copy may reach 65ch. Project subheads use 34px with line-height 1.18. Language/culture pages retain their own heading hierarchy, including project headings scaled from 42px to 72px.

Investigaciones keeps Georgia for its uppercase hero, Kaftan for research headings and Courier Prime for text. Its base prose is 18px/1.55; research descriptions are 19px on desktop and 17px/1.5 on compact screens. At 650px, the hero title uses clamp(28px,7.4vw,46px) and research headings use 44px.

## Layout

The outer world is centered with a maximum width of 1800px. Header and reading column share a maximum width of 1140px. The final paper-depth.css override uses calc(100% - clamp(190px,23vw,330px)) above 650px and calc(100% - 80px) at 650px and below, reserving clear margins for the rocks. The learning sections use two equal columns with a 6% gap. Project details use a 1.15fr / .85fr grid, a 7% gap and a sticky portrait (top 35px).

Navigation changes at 1000px to a native disclosure menu. Compact layout overrides begin at 650px; the current paper-depth.css establishes 40px reading gutters. The inherited learning-section stacking rule starts at 600px; do not assume the 650px override changes every inherited layout rule. Project detail pages become a single flex column at 650px, with text before the portrait and footer last.

The shared centered footer uses 45px 0 65px padding and 35px top margin. The current paper scene repeats rear rocks along the world and places foreground rocks at content sections. Keep the reading gutter clear through the footer when editing long content.

Investigaciones has an 1800px outer world, a 78%-wide reading area capped at 1080px, and paired research rows with an 8% gap. Its hero is 650px tall on desktop and 470px on compact screens. Navigation switches to a native disclosure at 900px; rows stack at 650px, keeping the Portulanos and Emergencia titles before their illustrations. Compact research content and articles reserve 46px gutters. Research articles use width min(760px,calc(100% - 240px)), spacious 1.8-line-height prose and a linked return to Investigaciones. At 651–1000px, article and overview reading areas use calc(100% - 220px), preserving tablet margins; mobile articles retain calc(100% - 92px).

## Elevation & Depth

Depth comes from folded paper silhouettes, opacity and independent layers. Photos receive a quiet paper drop-shadow through their figure wrapper. The reusable paper shadow is 0 9px 12px #45392724; archive posts use 0 4px 6px #45392714. Mobile navigation uses 0 10px 28px #29251d24.

The active Pedagogías scene is paper-depth.css plus paper-depth.js, replacing the old popup-pedagogias.js scene. Rear and foreground containers use separate layers (z-index 1 and 3), ignore pointer input and are hidden from accessibility APIs. The final site-refinements.css override gives rear rocks opacity .92, brightness 1.04 and saturation .8. Scroll movement runs through requestAnimationFrame: rear rocks use speed .045, caps .08, near rocks .17, sparse section ferns .27. Displacement is clamped to ±75px on desktop and ±32px on mobile. Reduced motion disables transforms and smooth scrolling. Resizing and content-height changes rebuild the decorative layout.

Investigaciones uses three nested paper arches with scroll multipliers .045, .10 and .19, capped by an 850px scroll input. Folded maps exchange depth on hover, keyboard focus or button activation. Full-page research walls continue below the hero through research-strata.js: repeated rear and near rock-wall layers use speeds .065 and .19; tiny decorative edge glimmers use .25, all clamped to ±85px. The interval is 280px on desktop or 170px on mobile, beginning 450px down the page. Water is drawn on decorative hero and closing canvases, with stronger motion in the Emergencia hero; rendering pauses offscreen and when the document is hidden. Reduced motion holds the arches and water still and removes floating illustration animation and map transitions. Paper edges and translucent shadows create depth without moving the editorial text.

Independent background lights use two scroll speeds (.11 and .21), with gentle opacity animation over 5.7–8.6 seconds; they do not use rapid blinking. Decorative dripping pools draw falling drops and expanding rings through investigaciones.js, pausing when hidden or offscreen. Reduced motion leaves the lights static at .45 opacity and water as a static drawing. The latest full-frame Vozalvaje photographs use contain rather than a portrait crop; retain the original Michelled.nl signature on the additional practice image.

## Shapes

Use the established folded rock assets and organic plant silhouettes. Images and video use the assets/popup/photo-paper.webp alpha mask at 100% 100%, with no thick frame, background plate or direct image shadow. Preserve complete archival artwork where its existing component intentionally has no mask. Links and disclosures remain open typographic elements rather than pill-shaped controls.

## Components

### Text actions

Rust underlined links use a 5px underline offset and 1px underline thickness, with an optional 18px diagonal arrow. General text actions have at least 44px height; desktop offering links use 38px, increasing to 44px in compact layout. The ink-button variant is transparent and underlined with a 6px offset; hover changes its text to ink.

All anchors, summaries and buttons receive a 2px rust focus outline with 5px offset. Preserve visible focus and touch-action manipulation.

### Offering disclosures

Native details/summary controls expose the full lists of offerings. Summaries use Courier Prime at 16px/1.5 and no separator border. Lists indent by 18px. Keep the semantic open/closed behavior and links rather than substituting decorative cards.

### Navigation

Use the existing company logo, filtered green on Pedagogías and pale on the dark research surface. Principal navigation contains only Creaciones, Pedagogías and Investigaciones; the logo links home. Desktop Pedagogías links are quiet 15px text with a rust underline for the current page. Compact native disclosure controls show three dots within a 48px square target, keeping their accessible labels and skip links.

### Social footer

The shared footer centers only Instagram and WhatsApp icons. Pedagogías keeps its centered closing invitation above the icons. The compact Creaciones footer uses 44px link targets, a 20px gap and 25px icons, with 17px 0 25px padding and an 85px overlap over the landscape. Individual work pages use the same two social destinations with their own compact footer spacing.

### Documentary imagery

Use the supplied steps, voice and movement photographs and the restored founder photograph (assets/popup/fundador-640.webp and fundador-1440.webp) in the overview, with responsive sources and meaningful alternatives. Preserve the classroom video, native controls and documentary caption. Current language and workshop crops are intentionally portrait-oriented; read the final CSS overrides before changing their framing.

### Paper scene

Rear rocks repeat along both edges at a 430px desktop interval or 215px mobile interval. Foreground rocks align to content sections; smaller ferns appear at every other section. The rear layer uses assets/popup/rock-left.webp, while near rocks retain rocas-musgo.webp. Static rock lintels frame the ceiling and floor; world bottom padding is 90px, reduced to 65px on compact screens. Mobile ornaments shrink and move outward to preserve the reading gutter. All decorative images have empty alternatives and their containing scene has aria-hidden=true. Animate the scene layers, keeping editorial content stationary.

### Cultural illustrations

The Italian and French language-family pages use decorative tricolor ribbon fragments at the exterior margins. The final fragments are 430px wide on desktop and 310px on compact screens, rotated and mostly outside the reading column; tablet overrides move them farther outward. Decorative containers ignore pointer input and are hidden from assistive technology. Keep documentary photographs, archival artwork and the Pasteur proposal intact.

The listening manifesto uses a centered reading composition capped at 750px, with a 58ch inner text measure and generous vertical rhythm. Compact prose aligns left within that centered section.

### Investigaciones

The overview and three project articles use investigaciones.css, investigaciones.js, site-refinements.css, research-strata.js and the final subtle-water.css overrides. The real article routes are portulanos.html, voz-salvaje.html and emergencia.html. Linked overview titles lead to each article. Use the current speckled-floor cave, separate paper lake and rock assets, and rock-wall layers from assets/investigaciones; preserve the nested hero arches and interactive folded map. Literal crystal clusters are removed. Small blue-green speckles and edge glimmers provide the remaining points of light. Vozalvaje uses the brighter edited documentary photograph voz-visible.webp, preserving its descriptive alternative and a caption about shared voice/body practice. The Portulanos map stack is a real button with an accessible name and aria-pressed state; preserve hover, keyboard and click/tap activation. The hero arches and water canvases are decorative and hidden from assistive technology. Content illustrations keep descriptive alternatives. Dark navigation retains a skip link, current-page state, a native compact disclosure and a visible pale focus outline.

### Cave and lake links

The overview cave is a native link to voz-salvaje.html, with a descriptive accessible name. The cave-speckles.webp floor carries small blue-green lights; hover or keyboard focus raises their opacity and brightness and gently brightens the paper image over .55s. The article repeats the illustration as a non-link.

The overview Emergencia illustration is a native link to emergencia.html with three separate, aligned layers: paper-lake.webp, rock-left.webp and rock-right.webp. The paper lake remains still; the two rocks shift independently in opposite directions on link hover or keyboard focus over .7s. The composition keeps a 1.5 aspect ratio. The article repeats it as a non-interactive illustration. Reduced motion removes transitions and retains the resting rock transforms.

### Closing paper-water panorama

All four research pages end in cave-water-bottom.webp with a soft upper mask and a decorative water canvas (energy 1.2). The final panorama is 270px tall on desktop and 210px on compact screens. Its water canvas is 130px or 105px tall, raised 35px from the bottom; the centered social footer overlaps by 75px or 65px. The image and canvas are grouped in an aria-hidden container that ignores pointer input. Preserve footer readability and access over the panorama.

### Individual work identities

The nine approved pages are real site routes using works.css and works.js. Preserve their distinctive compositions and assets rather than applying the Pedagogías paper system to them:

| Route | Visual identity |
| --- | --- |
| pasolini.html | Pale editorial stage, restrained sans-serif title, monochrome stage photograph and an interactive speaker. |
| orestiada.html | Near-black stage, pale blue text and monumental Barlow Condensed title. |
| kairos.html | Warm chart-like paper, maritime blue, italic Bodoni title and drifting paper boats. |
| la-costra.html | Warm rough paper, dark ink and a burgundy layer revealed by a folding paper button. |
| la-cocina-obra.html | Warm kitchen paper, olive ink, brick-red condensed title and irregular photograph edge. |
| emergencia-obra.html | Dark blue-green, warm paper text, a Che scene and cutout research books. |
| i-giganti-della-montagna.html | Muted sage paper, botanical ink and a tilted documentary image. |
| questi-fantasmi.html | Cream paper, red condensed display type and the original poster. |
| ou-sont-les-enfants.html | Dark stage, warm gold lettering and documentary photography. |

Work stories are capped at 780px; desktop body copy uses Arial at 18px/1.8, with Georgia section headings. Shared work navigation switches to a native three-dot disclosure at 900px. Grids stack at 650px. Preserve current-page state, skip links, visible focus, native credit disclosures and contextual contact links.

Pasolini uses assets/obras/pasolini-escena.webp and a 1:55 audio excerpt at assets/obras/pasolini-audio.mp3. Audio starts only through user action: the speaker button toggles playback and synchronizes its pressed state and label with native controls. Status text reports playback/load errors. Keep the image fully visible and the player available.

Kairós boats use scroll drift capped at ±24px plus a gentle hover response; reduced motion removes the transforms. La Costra uses a real button that toggles aria-expanded to reveal the underlying paper; preserve keyboard activation and reduced-motion behavior. Emergencia uses assets/obras/books-cutout.webp with transparent cutout edges, alongside its documentary source image; preserve full book artwork and avoid replacing it with cards.

## Do's and Don'ts

### Do:
- Do preserve every offering and documentary element.
- Do keep text and contact links clear of decorative rocks and plants.
- Do use the approved folded rock assets and restrained botanical accents.
- Do respect reduced-motion preferences and visible keyboard focus.
- Do keep the warm paper treatment scoped to Pedagogías and the dark cave treatment scoped to Investigaciones, while preserving shared navigation and social-footer conventions.

### Don't:
- Don't reintroduce the curtain or thick photographic frames.
- Don't repeat Cocina photographs in place of the supplied documentary images.
- Don't animate the reading column with the decorative scene.
- Don't turn archival material into generic promotional cards.

## September 29 reading and collage revision
Work pages now share Kaftan display type and Courier Prime body type with the main site, keeping individual palettes and imagery. Kairós credits disclosure and Emergencia source-photo disclosure removed at user request. Pasolini audio subtitle removed. Costra paper fully clears the underlying phrase and resets on pointer exit, blur, or after a tapped reveal. Pedagogy stones are separated by larger vertical intervals and narrowed on small viewports; logo has reserved top clearance. More tricolor fragments accompany Italian and French pages. Research Emergencia title sits beside its art above mobile; Portulanos has interactive maps and an embedded Instagram publication. Nosotrxs and Manifiesto share nosotrxs.html: centered original manifesto, textured cave margins, original sea and a transparent photographic collage of the artists and dog in a paper boat. Reduced motion stops the boat.

## Organic cave apertures and company identity
Pedagogías and its subpages now open through a single generated limestone-paper cave aperture with centered title; tiled side stones and lintels are removed. Nosotrxs uses a new complete black-and-ivory cave opening with a transparent center, sized as a continuous page frame rather than fixed over reading text. The selected user-supplied manifesto introduces the company, its poetic stance, Valentina and Francisco, and representative projects. Nosotrxs is the fourth primary navigation entry, superseding the three-entry convention. La Costra paper moves outside its original container over the composition and returns. Emergencia work books rotate clockwise 90 degrees through CSS.

## September 29 crisp framing correction
Removed the stretched all-page Nosotrxs frame and opaque header label patches. A natural-proportion roof arch and separate native-aspect-ratio side stones replace it. Pedagogías uses a pointed layered paper arch with plants and independent stone/fern strata continuing to the footer. All decoration stays outside responsive reading gutters. Shared clean-caves.css/js scopes classes to avoid legacy left/right background styles.

## Ajustes de lectura y jerarquía · 1 octubre
Fotos del catálogo con altura automática, proporción 4:3 y máximo 460×345 px en escritorio. Lenguas vivas presenta la escucha como introducción y agrupa las propuestas bajo Italia y Francia, centrados y con mayor jerarquía. Jost se extiende a navegación y explicación de inicio, Nosotrxs y textos de la vaca; máquina de escribir para incisos breves y descriptores. La Cocina en el catálogo lleva directamente a la vaca. Libros de Emergencia girados 90° a la derecha mediante CSS. Iconos sociales compartidos en todas las páginas raíz, 24 px y área de interacción de 44 px. Verificación local en 390, 1011 y 1440 px.

## Objetos y archivo visual · 1 octubre
Portulanos abre sus dos mapas al hover y al foco; Vozalvaje emite ondas; Emergencia separa perfiles y máscara mediante un sprite transparente. Se respeta reduced-motion. El archivo de Lenguas vivas es una cuadrícula sin controles de carrusel. En móvil se conservan 32 px entre foto y texto y el rótulo de compañía tiene fondo oscuro para mantener contraste. Portulanos usa la foto de fichas enviada por el usuario, limpiada de controles mediante ImageGen. Los perfiles separados también derivan con ImageGen del símbolo existente. Recursos: portulanos-portada.webp y emergencia-profiles.webp. Verificado a 360, 390 y 1480 px, sin desbordes ni imágenes rotas.

## Revisión editorial y talleres reunidos · 1 octubre
Se aplicaron las correcciones de textos de Pedagogías, Nosotrxs, lenguas, investigaciones y obras. Talleres y Talleres empresariales reúnen nueve propuestas mediante anclas; las URLs anteriores redirigen a sus secciones. Cuerpo Contexto se resume desde la propuesta Reparar con los pies aportada por el usuario. Todas las páginas de Pedagogías cierran con Conversemos a WhatsApp. Emergencia distingue la investigación política de la obra. Se amplían galerías de Orestíada, Kairós, Pasolini, Giganti y teatro italiano. Kairós ofrece su dossier web. Aliadxs reúne once identidades originales. La fotografía de Canti deriva de la fotografía aportada, editada mediante ImageGen. QA: 21 páginas en 319, 718 y 1440 px; sin imágenes rotas ni desbordes.
