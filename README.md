# Medieval Courtesan

A choice-driven RPG set in a medieval kingdom. Rise through the Courtesan's Guild from a lowly Initiate in the port of Saltmere to Guild Master in the capital, or find another way out before the life breaks you.

All characters are adults. The game contains mature themes.

## Play

- **Android:** download the latest APK from the repository's **Releases** page and install it. It runs fully offline.
- **Browser:** open `index.html` in any modern browser, or enable GitHub Pages (Settings → Pages → deploy from `main`, root folder) and play at `https://unregisteredmusket.github.io/Brothel-Sim/`. After one visit, the web version also works offline.

## The climb

- **Seven guild ranks:** Initiate, Companion, Consort, Favored, Celebrated, Paragon, Guild Master.
- **Standing** is your guild score. Good performances, courtships and quests raise it; poor performances, public snubs, failed quests and unpaid dues lower it.
- **Rank trials.** Each promotion needs enough Standing, level and fame, then a trial: an observed encounter or a courtship before the council's envoy. Promotions pay a purse and grant an attribute increase.
- **Demotion and expulsion.** Fall too far below your rank's threshold and you're demoted. Fall below −25 as an Initiate and the guild strikes you from its rolls: game over.
- **Six cities,** each unlocked by rank: Saltmere (port), Ashford (wool town), Varenne (bankers), Lysmoor (cathedral city), Aurelle (royal court), and Valcourt (the capital and Guild Hall). Each has its own clientele, tastes, lodging costs, NPCs and quests. Travel costs coin and a night on the road.
- **Ironman mode** (optional): one life, no reloading, and the save is deleted on a loss.

## Courtship

Charm promising clients in taprooms; from Consort, attend salons; from Celebrated, attend court. Each courtship is a few exchanges: pick a tone (Flatter, Wit, Coy, Bold, Listen) against the other person's hidden personality. Read them first with Insight to learn what they love and hate. Win and you can accept a lucrative private invitation or seek their patronage; fail badly and the whole room sees the snub.

## Quests

Two side quests in every city, with no central plot. They use scripted dialogue scenes, special clients and courtships. Rewards include coin, Standing, fame, techniques and allies.

## Endings

- **Guild Master:** pass the final two-part trial before the Guild Council in Valcourt.
- **Retirement:** reach Consort and save 1500 coin (1000 with the Freedom motive), debt-free.
- **Sir Edric:** win his heart, then win over his proud mother.
- **Marlow:** buy out your contract and plead your case, or slip away by night and risk being caught.
- **Losses:** expulsion from the guild, or burnout (trauma or health).

## Encounters

Clients have requests, likes, dislikes and a hidden temperament. Encounters run up to five rounds; every option shows its success chance. Varying techniques builds rhythm, repetition loses effect, and trouble can break out afterward.

## Character creation

Ten short steps with a live character sheet and a Back button on every step: name and gender, looks and build, difficulty, path and specialty, a 27-point attribute buy, background (each with a hook), motivation, strengths, flaws and a feat, then a review with Ironman toggle. Or roll a random life, or start in one tap as The Socialite, The Survivor or The Mistress of Rope.

## Writing your own narration

Encounter descriptions live in `narration.js`. To add your own lines without touching the game:

1. Copy `narration.custom.template.js` to `narration.custom.js` and fill in any lists. Your lines are added to the built-in ones, or replace them for a technique with `replace: true`.
2. Open `checker.html` in a browser. It assembles every combination of lines and flags broken tokens, verb-agreement errors, wrong pronouns, capitalization and more.

The header of `narration.js` documents the tokens (`{client}`, `{they}`, `{s}`, `{are}`…) and pose tags. Players can switch between full and brief narration in the Journal tab.

## Building the Android app

`.github/workflows/android.yml` builds the APK on every push to `main` and publishes it as a release. The Android project in `android/` is a thin offline WebView wrapper around the game files.
