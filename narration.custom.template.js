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
    {move} the technique name   {other} the other guest in a group encounter
    {garment} {lower} {lace}  the client's clothes (gown/skirts/bodice laces or shirt/breeches/doublet laces)
  A line may be  { t: "text", not: ["away"] }  to skip it during poses tagged
  away (facing away), bound (wrists tied) or notouch (client may not touch).

  How a turn is built: start (on switching) + success/fail/repeat line
  (+ "liked" line on success) + a reaction line. "focus" is used for Push harder.
  "high" replaces the success line once the client is close to the edge.
*/
window.NARRATION_CUSTOM = {
  techniques: {
    "missionary": { start: [], success: [], fail: [], repeat: [], focus: [], high: [] },
    "cowgirl": { start: [], success: [], fail: [], repeat: [], focus: [], high: [] },
    "reverse_cowgirl": { start: [], success: [], fail: [], repeat: [], focus: [], high: [] },
    "doggy_style": { start: [], success: [], fail: [], repeat: [], focus: [], high: [] },
    "spooning": { start: [], success: [], fail: [], repeat: [], focus: [], high: [] },
    "standing": { start: [], success: [], fail: [], repeat: [], focus: [], high: [] },
    "69": { start: [], success: [], fail: [], repeat: [], focus: [], high: [] },
    "lotus": { start: [], success: [], fail: [], repeat: [], focus: [], high: [] },
    "pretzel_dip": { start: [], success: [], fail: [], repeat: [], focus: [], high: [] },
    "coital_alignment_techniq": { start: [], success: [], fail: [], repeat: [], focus: [], high: [] },
    "leapfrog": { start: [], success: [], fail: [], repeat: [], focus: [], high: [] },
    "scissoring": { start: [], success: [], fail: [], repeat: [], focus: [], high: [] },
    "tabletop": { start: [], success: [], fail: [], repeat: [], focus: [], high: [] },
    "side_by_side_face-to-fac": { start: [], success: [], fail: [], repeat: [], focus: [], high: [] },
    "bondage": { start: [], success: [], fail: [], repeat: [], focus: [], high: [] },
    "spanking": { start: [], success: [], fail: [], repeat: [], focus: [], high: [] },
    "roleplay": { start: [], success: [], fail: [], repeat: [], focus: [], high: [] },
    "sensory_deprivation": { start: [], success: [], fail: [], repeat: [], focus: [], high: [] },
    "temperature_play": { start: [], success: [], fail: [], repeat: [], focus: [], high: [] },
    "dominance_and_submission": { start: [], success: [], fail: [], repeat: [], focus: [], high: [] },
    "praise_kink": { start: [], success: [], fail: [], repeat: [], focus: [], high: [] },
    "dirty_talk": { start: [], success: [], fail: [], repeat: [], focus: [], high: [] },
    "voyeurism": { start: [], success: [], fail: [], repeat: [], focus: [], high: [] },
    "exhibitionism": { start: [], success: [], fail: [], repeat: [], focus: [], high: [] },
    "foot_fetish": { start: [], success: [], fail: [], repeat: [], focus: [], high: [] },
    "impact_play": { start: [], success: [], fail: [], repeat: [], focus: [], high: [] },
    "slow_burn": { start: [], success: [], fail: [], repeat: [], focus: [], high: [] },
    "the_throne": { start: [], success: [], fail: [], repeat: [], focus: [], high: [] },
    "butterfly": { start: [], success: [], fail: [], repeat: [], focus: [], high: [] },
    "anal": { start: [], success: [], fail: [], repeat: [], focus: [], high: [] },
    "bridge": { start: [], success: [], fail: [], repeat: [], focus: [], high: [] },
    "tantric_union": { start: [], success: [], fail: [], repeat: [], focus: [], high: [] }
  },
  reactions: {
    low:  { success: [], fail: [] },
    mid:  { success: [], fail: [] },
    high: { success: [], fail: [] }
  },
  liked: [],
  disliked: [],
  finish: { success: [], fail: [] },
  open: { street: [], brothel: [], manager: [] },
  undress: { slow: { success: [], fail: [] }, rush: { success: [], fail: [] }, self: { success: [], fail: [] } },
  group: { open: [], spill: [], together: { success: [], fail: [] }, finish: { success: [], partial: [], fail: [] } },
  body: {
    like:    { general: [], hairLen: [], bust: [], chest: [], rear: [], thighs: [], grooming: [], endowment: [] },
    dislike: { general: [], hairLen: [], bust: [], chest: [], rear: [], thighs: [], grooming: [], endowment: [] }
  },
  mastery: { master: [], novice: [] }
};
