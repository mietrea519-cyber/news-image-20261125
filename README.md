# The World in One Day — Wednesday 25 November 2026

![news-image-20261125](https://make.fun/badge/news-image-20261125.svg)
![rank](https://make.fun/badge/news-image-20261125/mietrea519-cyber/news-image-20261125/rank.svg)
![reward](https://make.fun/badge/news-image-20261125/mietrea519-cyber/news-image-20261125/reward.svg)

This repository is my entry for the make.fun bounty [news-image-20261125](https://make.fun/c/news-image-20261125) ($100, 50 paid places): a single front-page image that sums up the world on Wednesday 25 November 2026 in four stories.

![The World in One Day — Wednesday 25 November 2026](entry.png)

## The four stories

1. **CARTAGENA — Gunmen seize supermarket, hold 30 hostage.** Armed men took about 30 people hostage in an Éxito supermarket in Cartagena after a failed armored-truck robbery. Sources: IANS via The Freedom Press, Devdiscourse/Reuters, Al Jazeera, Sky News.
2. **SPACE — Shenzhou-24 carries first foreign astronaut.** China launched Shenzhou-24 from Jiuquan; Pakistani astronaut Muhammad Zeeshan Ali is the first foreigner to visit the Tiangong station. Sources: Reuters, Xinhua, Wikipedia, NASA Spaceflight.
3. **TECH — Huawei guilty of trade-secret theft.** A US jury found Huawei guilty of stealing trade secrets in a criminal trial, while acquitting the company of racketeering. Sources: Daily Debrief, Huddleworld.
4. **RIYADH — Houthi drone hits Riyadh tower.** A Houthi drone struck a tower in Riyadh's financial district, injuring eleven people; coalition jets then hit Hodeidah port. Sources: Huddleworld, Arab News.

## How the image was made

The four scene illustrations were generated fresh in a flat editorial style with no text inside them. They were then composed into the 1024×1024 front page with compose.py using Python + Pillow and DejaVu fonts: a navy masthead with a gold date line above a 2×2 grid of white cards, each with a kicker, a one-line headline and a two-line body. The saved entry.png is a 1024×1024 JPEG under 1 MiB.

## Running it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies `entry.png` into the output directory (`out/` here, or `$MAKEFUN_OUTPUT_DIR` in general, defaulting to `/output`).
