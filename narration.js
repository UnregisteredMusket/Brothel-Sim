/*
  NARRATION INDEX — Medieval Courtesan
  ------------------------------------
  Every line the game uses to describe an encounter lives here, so you can
  rewrite, add or remove lines without touching game logic.

  HOW LINES ARE CHOSEN (each turn):
    1. A technique line:  techniques[id] → skills[skill] → skills._default
       picked from the "success", "fail" or "repeat" list.
       (Approaches like Tease or Push harder use approaches[kind] instead.)
    2. A preference line if the client loves or dislikes what you did.
    3. A reaction line from reactions.low / mid / high, by how close they are.
  The engine never repeats a line until the rest of its list has been used.

  TOKENS you can use in any line:
    {name}    your character's name
    {client}  the client ("Marlow", "your client", "the patron")
    {Client}  same, capitalized
    {they} {them} {their} {themself} {They} {Their}   the client's pronouns
    {s}       verb ending after {they}: "{they} want{s}" → "he wants"
    {are}     "{they} {are}" → "she is"
    {move}    the technique's name, e.g. "Lotus"

  To add a line, add a string to any list. To add special lines for one
  technique, add an entry under techniques with its id (see INDEX in
  index.html for ids) and any of: start, success, fail.
*/
window.NARRATION = {

  /* Opening line when an encounter begins, by where you work. */
  open: {
    street: [
      "You lead {client} through a low doorway into a rented room that smells of tallow and rain. The bed is narrow, but it's enough.",
      "Behind a curtain in the back of a cookshop, {client} watches you loosen your laces one by one.",
      "Up a crooked stair to a room with one candle. {Client} shuts the door, and the noise of the street falls away."
    ],
    brothel: [
      "Your room upstairs is warm and lamplit. {Client} lingers in the doorway until you draw {them} in by the hand.",
      "You pour two cups of wine and let {client} watch you take your time with the first sip.",
      "The parlor's music drifts up through the floorboards as you close the door and turn to face {client}."
    ],
    manager: [
      "The best room in the house: silk hangings, a fire laid, a bed wide enough to get lost in. {Client} looks at you as if you are the finest thing in it.",
      "You receive {client} yourself, as the house's finest are received — slowly, and with all your attention.",
      "Candles, scented oil, a door that locks. {Client} has paid for the best, and you intend to give it."
    ]
  },

  /* A second opening line by client temperament, used if you sized them up. */
  temperament: {
    nervous: ["{Client} is all fumbling hands and quick breaths. You'll have to be patient.", "{They} can't quite meet your eyes, though {they} can't stop looking."],
    demanding: ["{Client} tells you exactly what {they} want{s}, and how, and for how long.", "{Client} watches you like a buyer at market, waiting to be impressed."],
    generous: ["{Client} is easy to like: warm laugh, gentle hands, a purse that clinks.", "{Client} kisses your knuckles as if you were nobility."],
    dangerous: ["There's something hungry and unsteady in how {client} looks at you. Keep your wits.", "{Client}'s smile doesn't reach {their} eyes."],
    ordinary: []
  },

  /* Lines by skill, used when a technique has no lines of its own. */
  skills: {
    vaginal: {
      success: [
        "You find an easy, rolling rhythm, and {client} sinks into it with you.",
        "You move together, slow and then less slow, the bed creaking in time.",
        "You hold {their} gaze as you move, and {client} forgets whatever {they} meant to say.",
        "Skin to skin and breath to breath, you set the pace and {client} follows gladly.",
        "You arch, shift your weight, and draw a long, unguarded sigh out of {client}."
      ],
      fail: [
        "You can't find the rhythm. The bed creaks at the wrong moments and {client} shifts, distracted.",
        "An elbow, a knee, a tangle of sheets. The moment slips away from both of you.",
        "You move, but {client} is somewhere else entirely — you can feel {them} drifting.",
        "Your body is willing, but your timing is off, and {client} notices."
      ],
      repeat: [
        "The same rhythm again. {Client}'s attention starts to wander.",
        "{Client} has had enough of this pace — {they} want{s} something new.",
        "Familiar and predictable. Pleasant, but {client} is no longer surprised."
      ]
    },
    oral: {
      success: [
        "You take your time, attentive and unhurried, and {client}'s fingers tighten in the sheets.",
        "Lips and breath and patience — {client} lets out a low, helpless sound.",
        "You tease until {client} is near begging, then give {them} exactly what {they} wanted.",
        "Slow, then deliberate. {Client}'s head falls back against the pillow."
      ],
      fail: [
        "You lose the thread and {client} tenses instead of melting.",
        "Too fast, then too careful. {Client} is more amused than undone.",
        "{Client} shifts away with a small, polite noise. Not quite right."
      ],
      repeat: [
        "{Client} knows this trick now. It has lost its edge.",
        "The same again — {client} sighs, but not the good kind of sigh."
      ]
    },
    manual: {
      success: [
        "Your hands are clever and unhurried, and {client} follows every movement with a shiver.",
        "You knead, stroke and linger exactly where {client} wants it most.",
        "Warm oil, sure hands — {client} goes loose and pliant beneath your touch.",
        "Fingertips trailing, then pressing. {Client} catches {their} breath and doesn't let it go."
      ],
      fail: [
        "Your hands are cold, or clumsy, or both. {Client} flinches.",
        "You press too hard and {client} winces instead of sighing.",
        "{Client} squirms away from a touch that tickles more than it thrills."
      ],
      repeat: [
        "The same caress again. {Client}'s skin stops prickling at it.",
        "Your hands fall into a routine, and {client} can tell."
      ]
    },
    kink: {
      success: [
        "You take control, and {client} surrenders to it with a shaky breath.",
        "You set the rules in a low voice, and {client} hangs on every one.",
        "Every knot, every command, every pause lands exactly as you intended. {Client} trembles.",
        "You make {client} wait — and the waiting is the whole point. {They} love{s} it."
      ],
      fail: [
        "Your command comes out uncertain, and the spell breaks.",
        "{Client} laughs at the wrong moment. Whatever you were building is gone.",
        "You misjudge it, and {client} pulls back, uneasy. You check in and ease off."
      ],
      repeat: [
        "{Client} knows what's coming now, and the thrill has dulled.",
        "The same game again. {Client} plays along, but the edge is gone."
      ]
    },
    performance: {
      success: [
        "You put on a show, and {client} can't look anywhere else.",
        "Every glance and whisper is perfectly placed. {Client} hangs on your words.",
        "You play the part so well {client} forgets it's a part at all.",
        "A slow smile, a low voice, a well-timed pause. {Client} is utterly captivated."
      ],
      fail: [
        "You slip out of character and {client} sees the seams.",
        "The words come out wrong, and {client} gives an awkward laugh.",
        "{Client} isn't buying it tonight."
      ],
      repeat: [
        "You've played this scene already. {Client} knows the lines.",
        "The same performance again, and {client}'s attention drifts."
      ]
    },
    _default: {
      success: ["It works. {Client} melts a little more.", "You find what {client} needs and give it."],
      fail: ["It doesn't land. {Client} shifts, distracted.", "Not quite. You'll have to try something else."],
      repeat: ["The same again — {client} is growing bored of it."]
    }
  },

  /* Technique-specific lines. "start" plays when you switch into it. */
  techniques: {
    missionary: { start: ["You draw {client} down over you, face to face, close enough to share breath."] },
    cowgirl: { start: ["You push {client} back onto the pillows and climb astride, taking the reins."] },
    reverse_cowgirl: { start: ["You settle astride {client} facing away, giving {them} a view to remember."] },
    doggy_style: { start: ["You turn onto your hands and knees and glance back over your shoulder at {client}."] },
    spooning: { start: ["You curl together on your sides, {client}'s arm around you, slow and lazy and close."] },
    standing: { start: ["{Client} presses you back against the wall, and the room tilts."] },
    "69": { start: ["You turn about on the bed so that you're each giving and taking at once."] },
    lotus: { start: ["You settle into {client}'s lap, legs wrapped around {them}, foreheads almost touching."] },
    pretzel_dip: { start: ["You tangle your legs with {client}'s at an angle that makes {them} grin in surprise."] },
    coital_alignment_techniq: { start: ["You shift your hips just so, slow and grinding, and {client}'s eyes widen."] },
    leapfrog: { start: ["You sink down onto your elbows, hips raised, and let {client} come to you."] },
    scissoring: { start: ["You twine your legs with {client}'s and press close, rocking together."] },
    tabletop: { start: ["You perch on the edge of the table, pull {client} between your knees, and sweep the cups aside."] },
    "side_by_side_face-to-fac": { start: ["Lying face to face, you hook a leg over {client}'s hip and pull {them} in."] },
    bondage: { start: ["You bind {client}'s wrists with a silk cord, checking each knot is snug but kind."] },
    spanking: { start: ["You draw {client} across your lap with a promise in your voice."] },
    roleplay: { start: ["Tonight you are someone else entirely, and {client} is only too happy to play along."] },
    sensory_deprivation: { start: ["You tie a soft blindfold over {client}'s eyes. Now {they} can only feel."] },
    temperature_play: { start: ["A chilled cup of wine in one hand and a warm candle in the other — you let {client} wonder which comes first."] },
    dominance_and_submission: { start: ["You tell {client} to kneel, and {they} obey{s}."] },
    praise_kink: { start: ["You murmur how good {client} is being, and watch {them} glow."] },
    dirty_talk: { start: ["You lean close and whisper exactly what you're going to do, in exactly the words {client} hoped to hear."] },
    voyeurism: { start: ["You undress slowly in the candlelight while {client} watches from the chair, forbidden to touch."] },
    exhibitionism: { start: ["You leave the shutters open a crack, and {client} shivers at the thought of being seen."] },
    foot_fetish: { start: ["You stretch out a bare foot into {client}'s lap and watch {their} breath catch."] },
    impact_play: { start: ["You test a leather strap against your palm. {Client} flinches at the sound, then smiles."] }
  },

  /* The general approaches from the encounter menu. */
  approaches: {
    tease: {
      success: [
        "You draw back just as {client} leans in, laughing softly, and {they} groan{s}.",
        "A trailing fingertip, a whisper against {their} ear — {client} shivers from head to toe.",
        "You make {client} wait, and wait, and the waiting does half your work for you."
      ],
      fail: [
        "You tease a moment too long, and {client} gets impatient.",
        "{Client} misses the game entirely and just looks puzzled."
      ]
    },
    focus: {
      success: [
        "You throw yourself into {move}, all heat and intent, and {client} cries out.",
        "No more playing. You give {client} everything at once, and {they} come{s} apart at the seams.",
        "You quicken, deepen, press — and {client} can barely keep up."
      ],
      fail: [
        "You push too hard, too fast, and {client} winces.",
        "All that effort, and it lands wrong. You're breathing hard for nothing."
      ]
    },
    recover: {
      success: [
        "You slow everything down, rest your forehead against {client}'s, and breathe.",
        "You trade urgency for stillness for a moment. {Client} doesn't seem to mind at all.",
        "A sip of wine, a lazy kiss, a moment to gather yourself."
      ],
      fail: [
        "You try to slow down, but your nerves won't settle.",
        "The pause stretches into awkwardness."
      ]
    },
    command: {
      success: [
        "\"Still,\" you say, and {client} goes perfectly still, waiting on your word.",
        "You set the pace and dare {client} to keep it. {They} can't, and {they} love{s} that {they} can't.",
        "One look from you and {client} is yours to direct."
      ],
      fail: [
        "Your command falls flat and {client} hesitates, unsure.",
        "{Client} pushes back on your order, and you lose the thread."
      ]
    }
  },

  /* When the client especially loves or dislikes what you did. */
  liked: [
    "It's exactly what {they} hoped for.",
    "{Their} whole body answers you.",
    "{They} murmur{s} your name like a prayer.",
    "\"Yes — that,\" {they} breathe{s}."
  ],
  disliked: [
    "It's not really to {their} taste.",
    "{Client} goes along with it, but only just.",
    "You can feel {them} holding back."
  ],

  /* How the client is responding, by how close they are to satisfied. */
  reactions: {
    low: [
      "{Their} breathing is still even.",
      "{They} {are} enjoying {themself}, but there's a long way to go.",
      "{Client} is warming up, slowly."
    ],
    mid: [
      "{Their} breath comes faster now.",
      "{Client}'s hands have stopped being polite.",
      "A flush is rising on {their} skin.",
      "{They} {are} well past pretending to be composed."
    ],
    high: [
      "{They} {are} trembling on the edge.",
      "{Client} is gasping, clinging to you.",
      "{They} won't last much longer.",
      "Every breath {they} take{s} is a plea."
    ]
  },

  /* Closing line for the results screen (never used if trouble broke out). */
  finish: {
    success: [
      "{Client} lies spent and smiling, tangled in your sheets.",
      "Afterward, {client} laughs softly, dazed, and kisses your shoulder.",
      "{They} take{s} a long time to find the strength to dress.",
      "{Client} dresses slowly, still glowing, and promises to come back."
    ],
    fail: [
      "{Client} dresses in silence, unsatisfied.",
      "{They} leave{s} with a tight smile and an air of disappointment.",
      "It ends with a shrug and the rustle of clothes being gathered."
    ]
  }
};
