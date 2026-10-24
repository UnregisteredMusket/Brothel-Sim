/*
  YOUR CUSTOM NARRATION — Medieval Courtesan
  ------------------------------------------
  1. Copy this file and name the copy  narration.custom.js  (same folder as index.html).
  2. Write lines into any list below. Leave lists you don't need empty.
  3. Open  checker.html  in your browser to test every combination of your lines.

  By default your lines are ADDED to the built-in ones. To use ONLY your lines for
  one technique, add  replace: true  to that technique, e.g.
      missionary: { replace: true, start: [...], success: [...], ... }

  Tokens (full list at the top of narration.js):
    {name} you   {client}/{Client} the client   {they} {them} {their} {themself}
    {s} {es} {are}  verb agreement after {they}:  "{they} want{s}"  "{they} {are}"
    {move} the technique name
  A line may be  { t: "text", not: ["away"] }  to skip it during poses tagged
  away (facing away), bound (wrists tied) or notouch (client may not touch).

  How a turn is built: start (on switching) + success/fail/repeat line
  (+ "liked" line on success) + a reaction line. "focus" is used for Push harder.
*/
window.NARRATION_CUSTOM = {
  techniques: {
    "missionary": { start: [], success: [], fail: [], repeat: [], focus: [] },
    "cowgirl": { start: [], success: [], fail: [], repeat: [], focus: [] },
    "reverse_cowgirl": { start: [], success: [], fail: [], repeat: [], focus: [] },
    "doggy_style": { start: [], success: [], fail: [], repeat: [], focus: [] },
    "spooning": { start: [], success: [], fail: [], repeat: [], focus: [] },
    "standing": { start: [], success: [], fail: [], repeat: [], focus: [] },
    "69": { start: [], success: [], fail: [], repeat: [], focus: [] },
    "lotus": { start: [], success: [], fail: [], repeat: [], focus: [] },
    "pretzel_dip": { start: [], success: [], fail: [], repeat: [], focus: [] },
    "coital_alignment_techniq": { start: [], success: [], fail: [], repeat: [], focus: [] },
    "leapfrog": { start: [], success: [], fail: [], repeat: [], focus: [] },
    "scissoring": { start: [], success: [], fail: [], repeat: [], focus: [] },
    "tabletop": { start: [], success: [], fail: [], repeat: [], focus: [] },
    "side_by_side_face-to-fac": { start: [], success: [], fail: [], repeat: [], focus: [] },
    "bondage": { start: [], success: [], fail: [], repeat: [], focus: [] },
    "spanking": { start: [], success: [], fail: [], repeat: [], focus: [] },
    "roleplay": { start: [], success: [], fail: [], repeat: [], focus: [] },
    "sensory_deprivation": { start: [], success: [], fail: [], repeat: [], focus: [] },
    "temperature_play": { start: [], success: [], fail: [], repeat: [], focus: [] },
    "dominance_and_submission": { start: [], success: [], fail: [], repeat: [], focus: [] },
    "praise_kink": { start: [], success: [], fail: [], repeat: [], focus: [] },
    "dirty_talk": { start: [], success: [], fail: [], repeat: [], focus: [] },
    "voyeurism": { start: [], success: [], fail: [], repeat: [], focus: [] },
    "exhibitionism": { start: [], success: [], fail: [], repeat: [], focus: [] },
    "foot_fetish": { start: [], success: [], fail: [], repeat: [], focus: [] },
    "impact_play": { start: [], success: [], fail: [], repeat: [], focus: [] }
  },
  reactions: {
    low:  { success: [], fail: [] },
    mid:  { success: [], fail: [] },
    high: { success: [], fail: [] }
  },
  liked: [],
  disliked: [],
  finish: { success: [], fail: [] },
  open: { street: [], brothel: [], manager: [] }
};
