# PHB media inventory

All media used by the site is local. The application does not hotlink runtime images or audio.

## Active meme viewer

- 13 recognizable classic meme templates from the supplied asset pack
- 3 licensed local cat GIFs
- 2 Pandey-exclusive photo reactions
- 18 total selectable entries across five categories

The supplied downloader successfully retrieved 36 unique classic-template files into `memes/classic/`. Thirteen were curated into the active experience; the rest remain available locally without crowding the viewer.

The asset pack supplied no downloadable files for the requested Michael Scott/Jim/Dwight or Mr. Bean reactions. They are intentionally omitted rather than replaced with misleading lookalikes. Confused Math Lady, Pop Cat, Keyboard Cat, Crying Cat, Side Eye Cat, and Smudge were also not present as verified authentic files.

Classic templates were retrieved from the URLs in `pandey_meme_asset_pack/meme_manifest.json`. Recognizability does not imply that the underlying characters or source photography are freely licensed; review rights before public/commercial deployment.

## Cat media

| Local file | Creator / source | License |
|---|---|---|
| `walking-cat.gif` | Sheilagraber, Wikimedia Commons | CC BY-SA 3.0 |
| `licking-kitty.gif` | Miranda, Wikimedia Commons | CC BY-SA 2.5 / GFDL |
| `running-cat.gif` | -SkyStar-, Wikimedia Commons | CC BY-SA 2.0 |
| `cat-cube.gif` | DevinToaster, Wikimedia Commons | CC BY-SA 4.0 |
| `easter-cat.gif` | Mark Baluk, Wikimedia Commons | CC BY-SA 3.0 / GFDL |
| `felix-celebration.gif` | Pat Sullivan (1919), Wikimedia Commons | Public domain in the US |
| `neko-sleep.gif` | Neko animation, Wikimedia Commons | 3-clause BSD |

## Audio

Eight of the nine local clips are wired into the experience. Sound is off by default. Reaction clips never overlap, and the background music ducks beneath them before fading back up.

| Local file | Source / license | Active |
|---|---|---|
| `carefree-kevin-macleod.ogg` | “Carefree” by Kevin MacLeod, Wikimedia Commons, CC BY 3.0 | Yes — looping background music |
| `error-buzzer.ogg` | Wikimedia Commons, public-domain dedication | Yes |
| `cat-meow.opus` | Wikimedia Commons, CC BY-SA 3.0 | Yes |
| `comedy-sting.ogg` | Wikimedia Commons, public-domain dedication | Yes |
| `agogo-impact.ogg` | Wikimedia Commons, public-domain dedication | Yes |
| `applause.ogg` | Wikimedia Commons / Freesound, CC BY 3.0 | Yes |
| `cartoon-laugh.ogg` | Wikimedia Commons / Freesound, CC0 1.0 | Yes |
| `celebration-fanfare.ogg` | Kevin MacLeod / Wikimedia Commons, CC BY 3.0 | Yes |
| `cartoon-rattle.ogg` | Wikimedia Commons, public-domain dedication | No |

The files in `public/meme-library/` are unused legacy AI parody assets retained from an earlier version. They are not part of the rebuilt meme viewer.

Music attribution: “Carefree” Kevin MacLeod (incompetech.com), downloaded from Wikimedia Commons and licensed under [Creative Commons Attribution 3.0](https://creativecommons.org/licenses/by/3.0/). No changes were made to the recording.
