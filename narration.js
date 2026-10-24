/*
  NARRATION INDEX — Medieval Courtesan
  ------------------------------------
  Every line the game uses to describe an encounter lives here, so you can
  rewrite, add or remove lines without touching game logic.

  HOW A TURN IS BUILT
    1. start     If you switched into a technique, its "start" line sets the pose.
    2. main      The technique's own success / fail / repeat line.
                 "Push harder" uses the technique's "focus" line on success.
                 Tease, Pull back and Command use the approaches lists.
                 Techniques without their own lines fall back to skills[skill].
    2b. high     On a success once the client is close (high band), a technique's
                 "high" line replaces its success line.
    3. pref      If the client loves the technique, an extra "liked" line follows.
                 If they dislike it, a "disliked" line replaces the success line.
    4. reaction  reactions[low|mid|high][success|fail], by how close they are.
  A line never repeats until the rest of its list has been used.

  Every technique in INDEX (index.html) has its own entry below, written to
  match its pose and setting, so lines never contradict each other (no "the
  bed creaks" against a wall, no "face to face" from behind). Fallback and
  reaction lines are deliberately pose-neutral so they fit after anything.

  POSE TAGS
    A technique can list tags (e.g. tags: ["bound"]). Any line written as
    { t: "text", not: ["bound"] } is skipped while a technique with that tag
    is in use. Tags in use: away (facing away), bound (wrists tied),
    notouch (client may not touch).

  TOKENS
    {name}    your character's name
    {client}  the client: "Marlow", "your client", "the patron"
    {Client}  same, capitalized — use at the start of a sentence
    {they} {them} {their} {themself}   client pronouns (capitalize for sentence starts)
    {s}       verb ending after {they}:  "{they} want{s}"  → "he wants"
    {es}      for -es verbs:             "{they} blush{es}" → "he blushes"
    {are}     "{they} {are}"             → "she is"
    {move}    the current technique's name
    {other}   in group encounters, another guest's name
    {garment} {lower} {lace}   the client's clothes: gown / skirts / bodice laces,
                               or shirt / breeches / doublet laces
  Tips: make {client} the subject when the verb ends in -es ("{client}
  watches"), and use a pronoun ({They}) for reaction lines, since the
  main line has usually just named the client.
*/
window.NARRATION = {

  /* Opening line when an encounter begins, by where you work. */
  open: {
    street: [
      "You lead {client} through a low doorway into a rented room that smells of tallow and rain. The bed is narrow, but it's enough.",
      "Behind a curtain in the back of a cookshop, on a cot heaped with blankets, {client} watches you loosen your laces one by one.",
      "Up a crooked stair to a room with one candle. {Client} shuts the door, and the noise of the street falls away."
    ],
    brothel: [
      "Your room upstairs is warm and lamplit. {Client} lingers in the doorway until you draw {them} in by the hand.",
      "You pour two cups of wine and let {client} watch you take your time with the first sip.",
      "The parlor's music drifts up through the floorboards as you close the door and turn to face {client}."
    ],
    manager: [
      "The best room in the house: silk hangings, a fire laid, a bed wide enough to get lost in. {Client} looks at you as if you are the finest thing in it.",
      "You receive {client} yourself, as the house's finest guests are received — slowly, and with all your attention.",
      "Candles, scented oil, a door that locks. {Client} has paid for the best, and you intend to give it."
    ]
  },

  /* Added to the opening if you sized the client up. */
  temperament: {
    nervous: ["{They} {are} all fumbling hands and quick breaths. You'll have to be patient.", "{They} can't quite meet your eyes, though {they} can't stop looking."],
    demanding: ["{They} tell{s} you exactly what {they} want{s}, and how, and for how long.", "{They} watch{es} you like a buyer at market, waiting to be impressed."],
    generous: ["{They} {are} easy to like: a warm laugh, gentle hands, a purse that clinks.", "{They} kiss{es} your knuckles as if you were nobility."],
    dangerous: ["There's something hungry and unsteady in how {they} look{s} at you. Keep your wits.", "{Their} smile doesn't reach {their} eyes."],
    ordinary: []
  },

  /* One entry per technique id in INDEX. Lists: start, success, fail, repeat, focus. */
  techniques: {
    /* ---------- Positions ---------- */
    missionary: {
      start: ["You draw {client} down onto the bed with you, face to face, close enough to share breath."],
      success: [
        "You wrap your legs around {client} and pull {them} closer, and {their} breath stutters against your neck.",
        "Face to face, you hold {client}'s gaze and set a slow, deep rhythm. {They} can't look away.",
        "You meet every movement, fingers sliding down {client}'s back, and {they} groan{s} into your shoulder.",
        "You arch up to meet {client}, and the two of you find a long, rolling rhythm that rocks the old bed frame.",
        "{Client} buries {their} face in your neck, breathing your name between kisses."
      ],
      high: [
        "You hold {client} close as {they} tremble{s} against you, every movement slow and certain, drawing {them} to the edge.",
        "Skin slick and breath ragged, {client} clings to you as the rhythm builds past bearing."
      ],
      fail: [
        "You bump noses, then elbows, and the moment fizzles into awkward laughter.",
        "{Client} keeps glancing away, and whatever was building between you cools."
      ],
      repeat: ["The same slow sway again. Comfortable, but {client} is drifting."],
      focus: ["You lock your ankles behind {client} and pull {them} deeper into the rhythm, and {they} gasp{s} against your mouth."]
    },
    cowgirl: {
      start: ["You push {client} back onto the pillows and climb astride, taking the reins."],
      success: [
        "You rock your hips slowly, then faster, watching every flicker of pleasure cross {client}'s face.",
        "Hands braced on {client}'s chest, you set the pace, and {they} {are} only too glad to let you.",
        "You lean down to kiss {client} without breaking rhythm, and {they} moan{s} into your mouth.",
        "You roll your hips in a slow figure of eight, and {client}'s hands tighten on your thighs.",
        "You lean back, braced on {client}'s knees, and {they} can't take {their} eyes off you."
      ],
      high: [
        "You ride {client} with long, deliberate strokes, holding {them} at the brink until {they} beg{s}.",
        "{Client} arches beneath you, gasping, as you quicken toward the end."
      ],
      fail: [
        "You lose your balance and nearly topple off the bed. {Client} laughs, but it isn't the laugh you wanted.",
        "Your thighs burn and your rhythm stutters. {Client} shifts beneath you, waiting."
      ],
      repeat: ["The same ride again. {Client} lies back like someone watching a play {they} already know{s}."],
      focus: ["You ride {client} hard and unrelenting, and {they} grip{s} your hips as if to hold on."]
    },
    reverse_cowgirl: {
      tags: ["away"],
      start: ["You settle astride {client} facing away, giving {them} a view to remember."],
      success: [
        "You roll your hips in slow circles, and {client}'s hands find your waist.",
        "You glance back over your shoulder and catch {client} biting {their} lip.",
        "{Client} traces the line of your spine as you move, and {their} breath grows ragged.",
        "You sway forward and back, unhurried, and hear {client}'s breath catch behind you.",
        "{Client}'s fingers trail up your back as you set a lazy, rocking pace."
      ],
      high: [
        "You quicken, and behind you {client} gives up any hope of staying quiet.",
        "{Client} grips your hips, breathless, as you carry {them} toward the edge."
      ],
      fail: [
        "With your back to {client}, you misjudge what {they} want{s}, and the rhythm falters.",
        "An awkward angle, a grimace behind you. You both pause to adjust."
      ],
      repeat: ["The view is lovely, but {client} has seen it now."],
      focus: ["You lean forward and quicken, and behind you {client} gives up any pretense of composure."]
    },
    doggy_style: {
      tags: ["away"],
      start: ["You turn onto your hands and knees and glance back over your shoulder at {client}."],
      success: [
        "{Client} grips your hips and finds an easy rhythm behind you, and you push back to meet it.",
        "You arch your back, and {client} lets out a low, rough sound.",
        "The headboard knocks softly against the wall in time with you both.",
        "{Client}'s hands slide up your spine as you rock back together, slow and deep.",
        "You glance back and catch {client} watching you with open hunger."
      ],
      high: [
        "The rhythm grows urgent, the bed creaking in protest, and {client} groans your name.",
        "{Client} holds your hips tight as the two of you race toward the finish."
      ],
      fail: [
        "The angle is wrong, and you both have to stop and shuffle on the mattress.",
        "{Client} loses the rhythm behind you, and the moment slackens."
      ],
      repeat: ["The same again from behind. {Client}'s grip has grown lazy."],
      focus: ["You brace against the headboard and push back hard, and {client} can only hold on."]
    },
    spooning: {
      tags: ["away"],
      start: ["You curl together on your sides, {client}'s arm around you, slow and lazy and close."],
      success: [
        "You move together in a slow, rocking sway, {client}'s breath warm against your neck.",
        "{Client} presses kisses along your shoulder as you rock back against {them}.",
        "Unhurried and close, you lace your fingers with {client}'s and feel {them} shudder.",
        "{Client} murmurs into your hair as you rock together, lazy and warm.",
        "You reach back to pull {client} closer, and {their} breath shivers against your ear."
      ],
      high: [
        "Wrapped together, you move faster, and {client}'s arm tightens around your waist.",
        "{Client} presses {their} lips to your shoulder to muffle a cry."
      ],
      fail: [
        "It's so warm and lazy that {client} nearly dozes off.",
        "An arm goes numb under you, and you have to stop and untangle."
      ],
      repeat: ["Cozy, but the same slow sway is lulling {client} more than thrilling {them}."],
      focus: ["You press back against {client} and quicken the sway, and {their} arm tightens around you."]
    },
    standing: {
      start: ["{Client} presses you back against the wall, and the room tilts."],
      success: [
        "You hook a leg around {client}'s hip and hold on, the wall cool at your back.",
        "{Client} braces one hand beside your head, trembling with effort and want.",
        "Plaster at your back and {client} against you, the urgency of it leaves you both gasping.",
        "You lock your arms around {client}'s neck, and {they} lift{s} you higher against the wall.",
        "The wall at your back and {client} against you, every movement is sharp and close."
      ],
      high: [
        "{Client} braces against the wall, trembling, as you both teeter on the edge.",
        "You cling to {client}, legs locked, as the rhythm turns desperate."
      ],
      fail: [
        "Your foot slips on the floorboards, and you both stagger.",
        "{Client}'s arms tire, and the moment sags with them."
      ],
      repeat: ["Against the wall again. {Client}'s legs are tiring, and so is the novelty."],
      focus: ["You wrap both legs around {client} and hold on, and the wall takes the weight of it."]
    },
    "69": {
      start: ["You turn about on the bed so that you're each giving and taking at once."],
      success: [
        "Giving and taking at once, you feel every sigh of {client}'s echoed in your own body.",
        "{Client}'s hands clutch at your thighs as you both lose yourselves in it.",
        "You find a shared rhythm, and {client}'s muffled sounds tell you everything.",
        "You lose track of who is giving and who is taking, and neither of you minds.",
        "{Client}'s soft, muffled sounds spur you on."
      ],
      high: [
        "{Client} shudders against you, unable to keep any rhythm of {their} own.",
        "You feel {client} tremble and redouble your attention."
      ],
      fail: [
        "It's harder to concentrate than it looks, and you both lose the thread.",
        "Someone's knee goes where it shouldn't. You both stop, wincing."
      ],
      repeat: ["The novelty fades, and {client} grows distracted."],
      focus: ["You give it everything you have, and {client} has to stop and simply hold on."]
    },
    lotus: {
      start: ["You settle into {client}'s lap, legs wrapped around {them}, foreheads almost touching."],
      success: [
        "You rock slowly in {client}'s lap, breathing in time, closer than close.",
        "{Client} holds you tight, and you feel {their} heart racing against yours.",
        "Foreheads together, you move as one, and {client} whispers your name.",
        "You wrap yourself around {client} and sway, slow as a tide.",
        "Forehead to forehead, you share one breath between you."
      ],
      high: [
        "{Client} holds you so tightly you can feel every shiver run through {them}.",
        "You rock faster in {client}'s lap, and {they} whisper{s} your name like a prayer."
      ],
      fail: [
        "Your legs cramp, and you have to shift out of {client}'s lap.",
        "It's too slow to build anything, and {client} grows restless."
      ],
      repeat: ["The same embrace again. Tender, but {client} wants more now."],
      focus: ["You grip {client}'s shoulders and rock harder in {their} lap, and {they} cling{s} to you."]
    },
    pretzel_dip: {
      start: ["You tangle your legs with {client}'s at an angle that makes {them} grin in surprise."],
      success: [
        "The angle is unusual and wonderful, and {client} groans in surprised delight.",
        "Limbs tangled, you find a slow rhythm, and {client} grips the sheets.",
        "{Client} laughs breathlessly. {They} never knew it could feel like this.",
        "The tangled angle sends a shiver through {client} that you feel in your own bones.",
        "You shift your hips a fraction, and {client} gasps aloud."
      ],
      high: [
        "{Client} grips the sheets with both hands, lost entirely.",
        "Limbs tangled, you push {client} right to the brink."
      ],
      fail: [
        "The tangle becomes a knot, and you both have to laugh your way out of it.",
        "A cramp seizes your calf at the worst possible moment."
      ],
      repeat: ["The surprise has worn off, and now it's merely awkward."],
      focus: ["You lean into the angle and quicken, and {client} has to bite the pillow."]
    },
    coital_alignment_techniq: {
      start: ["You shift your hips just so, slow and grinding, and {client}'s eyes widen."],
      success: [
        "Slow, grinding, close: you barely move, and {client} comes undone anyway.",
        "You press together and rock instead of thrust, and {client} gasps at how much that matters.",
        "The tiny, deliberate movements build and build, and {client}'s breath stutters.",
        "You keep the pressure steady and the pace slow, and {client}'s breathing turns ragged.",
        "Every small, grinding movement draws another soft sound from {client}."
      ],
      high: [
        "{Client} clutches at your back, trembling, as the slow grind builds to something unbearable.",
        "You barely move at all, and still {client} is undone."
      ],
      fail: [
        "The movements are too subtle, and {client} isn't sure anything is happening.",
        "You lose the angle, and it all goes slack."
      ],
      repeat: ["{Client} wants something bolder than the same slow grind."],
      focus: ["You press closer and grind with real intent, and {client} clutches at your back."]
    },
    leapfrog: {
      tags: ["away"],
      start: ["You sink down onto your elbows, hips raised, and let {client} come to you."],
      success: [
        "Cheek against the sheets, you arch and push back, and {client} lets out a low groan.",
        "{Client} finds the angle at once, and the sounds {they} make{s} are worth everything.",
        "You clutch the pillow as {client} finds a rhythm behind you.",
        "You push back against {client}, and {they} moan{s} low in {their} throat.",
        "Cheek on the pillow, you smile at the sounds {client} is making."
      ],
      high: [
        "{Client} loses all rhythm behind you, gasping, holding on.",
        "You grip the pillow as {client} surges toward the end."
      ],
      fail: [
        "Your elbows ache, and the pillow keeps slipping.",
        "{Client} can't find the angle, and the moment cools."
      ],
      repeat: ["The same position again, and {client}'s focus drifts."],
      focus: ["You bury your face in the pillow and push back hard, and {client} groans aloud."]
    },
    scissoring: {
      start: ["You twine your legs with {client}'s and press close, rocking together."],
      success: [
        "You rock against each other, hips rolling, and {client} lets out a long, shaky breath.",
        "Legs entwined, you find a grinding rhythm that has {client} clutching at the sheets.",
        "Slick skin and steady pressure: {client}'s head tips back as you move together.",
        "You rock together in a steady, grinding rhythm, breath matching breath.",
        "{Client} hooks a leg tighter around yours, pulling you closer."
      ],
      high: [
        "You grind harder, and {client} shudders, crying out softly.",
        "{Client} clutches at your knee, trembling on the brink."
      ],
      fail: [
        "The angle won't hold, and you keep slipping apart.",
        "It's more effort than pleasure, and you're both breathing hard for the wrong reasons."
      ],
      repeat: ["Pleasant, but repetitive. {Client} wants something new."],
      focus: ["You press harder and grind faster, and {client} cries out."]
    },
    tabletop: {
      start: ["You perch on the edge of the table, pull {client} between your knees, and sweep the cups aside."],
      success: [
        "The table creaks under you as {client} leans in, and a cup rolls off onto the floor.",
        "You lock your ankles behind {client} and draw {them} close, and {they} moan{s} into your hair.",
        "Leaning back on your hands, you watch {client} lose {themself} completely.",
        "{Client} kisses you hard, and the table rocks beneath you both.",
        "You pull {client} close by the collar, and {they} laugh{s} breathlessly against your mouth."
      ],
      high: [
        "The table thumps against the wall in time with you, and {client} doesn't care who hears.",
        "{Client} braces on the table's edge, trembling, nearly undone."
      ],
      fail: [
        "The table wobbles alarmingly, and you both freeze.",
        "A splinter, a spilled cup, and the moment's gone."
      ],
      repeat: ["The table again. {Client} glances longingly toward the bed."],
      focus: ["You grip the table's edge and pull {client} in hard, and the whole table rattles."]
    },
    "side_by_side_face-to-fac": {
      start: ["Lying face to face, you hook a leg over {client}'s hip and pull {them} in."],
      success: [
        "Side by side and nose to nose, you move together, slow and close.",
        "You trade lazy kisses as you rock together, and {client} sighs against your lips.",
        "{Client}'s hand slides down your back, pulling you closer with every movement.",
        "Lazy and close, you trade slow kisses between slow movements.",
        "{Client} traces the curve of your hip as you rock together."
      ],
      high: [
        "{Client} pulls you tight, breathing hard against your lips.",
        "Face to face, you watch {client} come apart."
      ],
      fail: [
        "Your hip goes numb, and you have to roll over.",
        "It's too gentle to build anything, and {client} grows restless."
      ],
      repeat: ["Sweet, but {client} has had enough of sweet."],
      focus: ["You pull {client} tight against you and quicken, and {they} gasp{s} against your lips."]
    },

    /* ---------- Advanced techniques (unlocked by skill) ---------- */
    butterfly: {
      start: ["You lie back at the very edge of the bed and lift your hips, and {client} steps in close to hold you there."],
      success: [
        "{Client} holds your hips raised, and every slow movement lands exactly where it should.",
        "You hook your heels over {client}'s shoulders, and {they} groan{s} at the angle.",
        "Suspended between the bed and {client}'s hands, you sway together in a slow rhythm.",
        "{Client} can't look away from you, laid out and arching beneath {them}."
      ],
      fail: ["Your hips slip from {client}'s grip, and you both have to start again.", "The edge of the bed is narrower than you thought."],
      repeat: ["The same raised angle again, and {client}'s arms are tiring."],
      focus: ["You arch higher and pull {client} in hard, and {they} cry{es} out."],
      high: ["{Client} trembles, holding you up as the rhythm carries you both to the brink.", "You arch against {client}'s hands, and {they} gasp{s}, nearly undone."]
    },
    the_throne: {
      start: ["You settle {client} in the high-backed chair like royalty and kneel before {them}."],
      success: [
        "Enthroned and helpless, {client} grips the carved arms of the chair.",
        "You take your time, and {client}'s head tips back against the chair.",
        "{Client} runs trembling fingers through your hair.",
        "You glance up, and the look on {client}'s face is worth every coin."
      ],
      fail: ["The chair creaks and wobbles, and the spell breaks.", "You lose the thread, and {client} shifts restlessly on {their} throne."],
      repeat: ["The same devotion again, and {client}'s attention wanders."],
      focus: ["You give {client} your whole attention, and {they} clutch{es} the chair for dear life."],
      high: ["{Client} grips the chair until {their} knuckles whiten, gasping.", "On {their} throne, {client} is undone and utterly at your mercy."]
    },
    slow_burn: {
      start: ["You warm scented oil between your palms and begin a long, slow massage."],
      success: [
        "Your hands work the tension from {client}'s shoulders, then wander lower.",
        "{Client} melts into the sheets under your patient touch.",
        "Every slow stroke builds something {client} can't name.",
        "You draw lazy patterns across {client}'s skin, and {they} sigh{s} deeply."
      ],
      fail: ["The oil has gone cold, and {client} shivers for the wrong reasons.", "You press a knot too hard, and {client} winces."],
      repeat: ["The same slow strokes again, and {client} is drifting toward sleep."],
      focus: ["You stop being patient, and {client} gasps at the change."],
      high: ["After so long a burn, {client} is trembling at the slightest touch.", "{Client} arches into your hands, begging you to finish what you started."]
    },
    anal: {
      tags: ["away"],
      start: ["You take your time preparing, unhurried and careful, until {client} is ready."],
      success: [
        "Slow, careful and close, you find a rhythm that leaves {client} breathless.",
        "{Client} sighs and relaxes into it, trusting you completely.",
        "You move with patience, and {client} murmurs for more.",
        "{Client}'s fingers knot in the sheets as you ease into a steady pace."
      ],
      fail: ["You rush it, and {client} tenses. You stop and start again more gently.", "{Client} isn't ready, and you ease off at once."],
      repeat: ["The same slow rhythm, and {client} wants a change."],
      focus: ["You quicken carefully, and {client} cries out into the pillow."],
      high: ["{Client} trembles, pressing back toward you, close to the edge.", "Slow and deep, you carry {client} right to the brink."]
    },
    bridge: {
      start: ["You arch your back into a high bridge, and {client} stares in astonishment before joining you."],
      success: [
        "It takes strength and balance, and {client} is breathless at the sight of you.",
        "Arched and taut, you move in long, deliberate waves.",
        "{Client} holds your waist, marveling at what your body can do.",
        "Every muscle trembles, and so does {client}."
      ],
      fail: ["Your arms give way, and you collapse in a heap of sheets.", "You can't hold the arch, and the moment tumbles."],
      repeat: ["Impressive, but {client} has seen it now."],
      focus: ["You hold the arch and push harder, and {client} gasps aloud."],
      high: ["You hold the bridge through shaking arms, and {client} is undone beneath you.", "{Client} clings to your waist, trembling on the edge."]
    },
    tantric_union: {
      start: ["You sit facing {client}, legs entwined, and slow your breathing until it matches {their} own."],
      success: [
        "Breath for breath, you move so slowly it hardly seems like moving at all.",
        "You hold {client}'s gaze, and the world narrows to the two of you.",
        "Every small movement sends a long, rolling shiver through {client}.",
        "Time stretches. {Client} has never felt anything like this."
      ],
      fail: ["Your breathing falls out of step, and the stillness turns awkward.", "{Client} can't keep still, and the moment scatters."],
      repeat: ["Even this can grow familiar, and {client}'s mind wanders."],
      focus: ["You deepen every breath and every movement, and {client} shudders."],
      high: ["The stillness breaks like a wave, and {client} trembles in your arms.", "Wrapped together, breathing as one, you carry {client} over the edge of something vast."]
    },

    /* ---------- Kinks ---------- */
    bondage: {
      tags: ["bound"],
      start: ["You bind {client}'s wrists with a silk cord, checking that each knot is snug but kind."],
      success: [
        "You tighten the last knot and trail a fingertip down {client}'s bound arms. {They} shiver{s}.",
        "Bound and helpless, {client} strains against the silk — not to escape, but for more.",
        "You take your time with {client}, who can do nothing but feel it.",
        "You circle {client} slowly, letting {them} feel your eyes on every inch.",
        "A fingertip along a bound wrist makes {client} shiver."
      ],
      high: [
        "Bound and helpless, {client} strains toward your touch, begging softly.",
        "You take {client} to the edge and hold {them} there, bound and trembling."
      ],
      fail: [
        "A knot slips loose, and the spell breaks.",
        "{Client} tenses against the cords. Too tight — you loosen them at once and start over."
      ],
      repeat: ["The ropes have lost their novelty."],
      focus: ["You draw the cords tighter and take full command, and {client} trembles under your hands."]
    },
    spanking: {
      start: ["You draw {client} across your lap with a promise in your voice."],
      success: [
        "The first crisp smack makes {client} gasp. The second makes {them} beg.",
        "You alternate sharp swats with gentle strokes, and {client} squirms in delight.",
        "{Client} pushes back into your hand, wanting more.",
        "You keep a steady rhythm, and {client}'s skin warms beneath your palm.",
        "{Client} gasps at each swat and asks for another."
      ],
      high: [
        "{Client} squirms across your lap, flushed and pleading.",
        "With every stroke {client} comes closer to falling apart."
      ],
      fail: [
        "Too hard, too soon. {Client} yelps, and you ease off at once.",
        "Your rhythm is off, and it stings more than it thrills."
      ],
      repeat: ["The same swats again, and {client}'s squirming slows."],
      focus: ["You find a quick, steady rhythm, and {client} loses all composure across your lap."]
    },
    roleplay: {
      start: ["Tonight you are someone else entirely, and {client} is only too happy to play along."],
      success: [
        "You stay perfectly in character, and {client} falls deeper into the fantasy.",
        "You improvise a line that makes {client} flush scarlet with delight.",
        "The game takes on a life of its own, and {client} is utterly lost in it.",
        "You lean into the fantasy, and {client} follows you deeper into it.",
        "{Client} plays along breathlessly, eyes bright."
      ],
      high: [
        "The fantasy reaches its peak, and {client} is utterly lost in it.",
        "{Client} forgets where the game ends and the night begins."
      ],
      fail: [
        "You forget your part, and {client}'s illusion cracks.",
        "{Client} feeds you a line you don't understand, and the scene stalls."
      ],
      repeat: ["The same scene again, and {client} already knows how it ends."],
      focus: ["You commit to the role completely, and {client} forgets there was ever anything else."]
    },
    sensory_deprivation: {
      start: ["You tie a soft blindfold over {client}'s eyes. Now {they} can only feel."],
      success: [
        "Blindfolded, {client} gasps at every unexpected touch.",
        "You let the silence stretch, then brush your lips across {client}'s neck. {They} jump{s}, then melt{s}.",
        "Every sensation is sharper in the dark, and {client} trembles at the lightest touch.",
        "You let a long silence fall, and {client} quivers, waiting.",
        "Each touch lands where {client} least expects it."
      ],
      high: [
        "Blind and breathless, {client} trembles at your lightest touch.",
        "{Client} gasps at every brush of your fingers, utterly undone."
      ],
      fail: [
        "{Client} grows uneasy in the dark and tugs at the blindfold.",
        "You knock over a cup, and the suspense breaks."
      ],
      repeat: ["{Client} has learned to anticipate you, and the surprise is gone."],
      focus: ["You keep {client} guessing with touch after touch, and {they} can't catch {their} breath."]
    },
    temperature_play: {
      start: ["A chilled cup of wine in one hand and a warm candle in the other, you let {client} wonder which comes first."],
      success: [
        "A drop of warm wax, then the chill of the cup: {client} gasps at the contrast.",
        "You trace a cold fingertip along a warm path, and {client} shivers all over.",
        "{Client} never knows which sensation is coming next, and {they} love{s} it.",
        "Warm breath follows cold wine along {client}'s collarbone.",
        "{Client} shivers and flushes in the same moment."
      ],
      high: [
        "Hot and cold, hot and cold: {client} can't stop trembling.",
        "{Client} arches toward the next sensation, begging for it."
      ],
      fail: [
        "The wax is too hot, and {client} flinches. You stop and soothe it at once.",
        "The cup has gone tepid, and the contrast falls flat."
      ],
      repeat: ["Hot, then cold, then hot again. {Client} knows the pattern now."],
      focus: ["You trade warm and cold faster and faster, and {client} can't stop shivering."]
    },
    dominance_and_submission: {
      start: ["You tell {client} to kneel, and {they} obey{s}."],
      success: [
        "You give an order, and {client} obeys with a shiver of pleasure.",
        "{Client} kneels at your feet, waiting on your every word.",
        "You decide when {client} may touch you, and when {they} may not. {They} love{s} every rule.",
        "You tilt {client}'s chin up with one finger, and {they} obey{s} without a word.",
        "{Client} waits on your command, breath shallow."
      ],
      high: [
        "\"Now,\" you say, and {client} falls apart at your word.",
        "{Client} trembles at your feet, wanting nothing but your next command."
      ],
      fail: [
        "{Client} breaks a rule, and you can't decide what to do about it.",
        "Your voice wavers, and {client} senses it."
      ],
      repeat: ["The same commands again. {Client} follows along without really feeling it."],
      focus: ["You tighten every rule and give no quarter, and {client} surrenders completely."]
    },
    praise_kink: {
      start: ["You murmur how good {client} is being, and watch {them} glow."],
      success: [
        "\"Such a good one,\" you murmur, and {client} glows.",
        "You praise every little thing {client} does, and {they} blush{es} to the roots of {their} hair.",
        "{Client} hangs on your every word of approval.",
        "\"Perfect,\" you whisper, and {client} melts.",
        "Every word of praise makes {client} flush deeper."
      ],
      high: [
        "You tell {client} exactly how wonderful {they} {are}, and {they} come{s} apart.",
        "{Client} hangs on your voice, trembling with every compliment."
      ],
      fail: [
        "The praise sounds rehearsed, and {client} hears it.",
        "You overdo it, and {client} laughs awkwardly."
      ],
      repeat: ["The same compliments again, and {client} has stopped believing them."],
      focus: ["You heap on praise, low and certain, and {client} melts under it."]
    },
    dirty_talk: {
      start: ["You lean close and whisper exactly what you're going to do, in exactly the words {client} hoped to hear."],
      success: [
        "You whisper what you mean to do next, and {client} groans at the thought.",
        "Your words paint pictures that make {client} flush and squirm.",
        "Every whispered promise lands, and {client} is nearly undone by words alone.",
        "You murmur a promise in {client}'s ear, and {they} shiver{s}.",
        "Your low voice paints a picture that leaves {client} breathless."
      ],
      high: [
        "You whisper exactly what comes next, and {client} can't hold back any longer.",
        "{Client} is undone by your words alone."
      ],
      fail: [
        "You trip over a word and ruin the mood.",
        "{Client} finds it more funny than thrilling."
      ],
      repeat: ["{Client} has heard all your best lines now."],
      focus: ["You hold nothing back, and {client} is breathless at what you're saying."]
    },
    voyeurism: {
      tags: ["notouch"],
      start: ["You undress slowly in the candlelight while {client} watches from the chair, forbidden to touch."],
      success: [
        "You take your time undressing, letting {client} drink in every inch.",
        "{Client} grips the arms of the chair, forbidden to touch and aching to.",
        "You put on a show by candlelight, and {client} can't tear {their} eyes away.",
        "You move slowly in the candlelight, and {client} forgets to breathe.",
        "{Client} leans forward in the chair, rapt."
      ],
      high: [
        "{Client} grips the chair, trembling, forbidden to touch and nearly undone by it.",
        "You hold {client}'s gaze until {they} can't bear another moment."
      ],
      fail: [
        "You catch your sleeve on a hook, and the show turns comic.",
        "{Client} grows restless watching and wants to join."
      ],
      repeat: ["{Client} has seen this show before."],
      focus: ["You make the show bolder and slower, and {client} is gripping the chair white-knuckled."]
    },
    exhibitionism: {
      start: ["You leave the shutters open a crack, and {client} shivers at the thought of being seen."],
      success: [
        "Footsteps pass in the hall outside, and {client} shivers with the thrill of it.",
        "The risk of being seen makes every touch electric.",
        "{Client} gasps at the thought of who might be watching.",
        "Voices drift up from the street, and {client} shivers with the thrill of it.",
        "The open shutter makes every sound feel dangerous."
      ],
      high: [
        "{Client} bites back a cry, thrilled and terrified at who might hear.",
        "The risk of being seen pushes {client} right to the edge."
      ],
      fail: [
        "A real face appears at the shutter, and the mood shatters.",
        "{Client} grows genuinely nervous about being caught."
      ],
      repeat: ["The thrill of being seen wears thin."],
      focus: ["You throw the shutters wider, and {client} trembles at the daring of it."]
    },
    foot_fetish: {
      start: ["You stretch a bare foot into {client}'s lap and watch {their} breath catch."],
      success: [
        "You trace your bare foot along {client}'s thigh, and {they} let{s} out a shaky breath.",
        "{Client} cradles your foot like something precious.",
        "You tease {client} with a pointed toe, and {they} groan{s} with longing.",
        "You stretch languidly, and {client} follows every movement of your ankle.",
        "{Client} presses a kiss to the arch of your foot."
      ],
      high: [
        "You tease {client} until {they} {are} trembling with want.",
        "{Client} is breathless at your feet, utterly devoted."
      ],
      fail: [
        "You press a little too hard, and {client} winces.",
        "Your foot is cold, and {client} yelps."
      ],
      repeat: ["{Client} has had {their} fill of feet for now."],
      focus: ["You give {client} exactly the attention {they} crave{s}, and {they} can barely stand it."]
    },
    impact_play: {
      start: ["You test a leather strap against your palm. {Client} flinches at the sound, then smiles."],
      success: [
        "The strap lands crisply, and {client} lets out a sharp, delighted gasp.",
        "You find a steady rhythm with the strap, and {client} sinks into it.",
        "Each measured stroke leaves {client} trembling and wanting the next.",
        "The strap falls in a slow, steady rhythm, and {client} sinks into it.",
        "{Client} braces for each stroke, then sighs into it."
      ],
      high: [
        "Each stroke draws a sharper gasp from {client}, closer and closer to the edge.",
        "{Client} trembles beneath the strap, begging for the next."
      ],
      fail: [
        "A stroke lands wrong, and you stop to check on {client} at once.",
        "You hesitate too long, and the anticipation fizzles."
      ],
      repeat: ["The same strokes in the same rhythm, and {client} has gone numb to it."],
      focus: ["You lay the strokes on quicker and surer, and {client} cries out with each one."]
    }
  },

  /* Pose-neutral fallbacks for any technique without its own lines. */
  skills: {
    vaginal: {
      success: ["You find an easy rhythm, and {client} sinks into it with you.", "You move together, slow and then less slow.", "You set the pace, and {client} follows gladly."],
      fail: ["You can't find the rhythm, and {client} shifts, distracted.", "Your body is willing, but your timing is off, and {client} notices."],
      repeat: ["The same rhythm again, and {client}'s attention starts to wander."]
    },
    oral: {
      success: ["You take your time, attentive and unhurried, and {client}'s fingers tighten in the sheets.", "Slow, then deliberate: {client} lets out a low, helpless sound."],
      fail: ["You lose the thread, and {client} tenses instead of melting.", "{Client} shifts away with a small, polite noise. Not quite right."],
      repeat: ["{Client} knows this trick now, and it has lost its edge."]
    },
    manual: {
      success: ["Your hands are clever and unhurried, and {client} shivers at every movement.", "Warm oil and sure hands: {client} goes loose and pliant beneath your touch."],
      fail: ["Your hands are cold, or clumsy, or both. {Client} flinches.", "{Client} squirms away from a touch that tickles more than it thrills."],
      repeat: ["The same caress again, and {client}'s skin stops prickling at it."]
    },
    kink: {
      success: ["You take control, and {client} surrenders to it with a shaky breath.", "You make {client} wait, and the waiting is the whole point."],
      fail: ["Your command comes out uncertain, and the spell breaks.", "You misjudge it, and {client} pulls back. You check in and ease off."],
      repeat: ["{Client} knows what's coming now, and the thrill has dulled."]
    },
    performance: {
      success: ["You put on a show, and {client} can't look anywhere else.", "A slow smile, a low voice, a well-timed pause: {client} is captivated."],
      fail: ["You slip out of character, and {client} sees the seams.", "{Client} isn't buying it tonight."],
      repeat: ["You've played this scene already, and {client} knows the lines."]
    },
    _default: {
      success: ["It works, and {client} melts a little more."],
      fail: ["It doesn't land, and {client} shifts, distracted."],
      repeat: ["The same again, and {client} is growing bored of it."]
    }
  },

  /* The general approaches in the encounter menu. Kept pose-neutral. */
  approaches: {
    tease: {
      success: [
        { t: "You draw back just as {client} leans in, laughing softly, and {they} groan{s}.", not: ["bound", "away"] },
        { t: "A trailing fingertip, a whisper against {client}'s ear: {they} shiver{s} from head to toe.", not: ["notouch"] },
        "You make {client} wait, and wait, and the waiting does half your work for you."
      ],
      fail: [
        "You tease a moment too long, and {client} grows impatient.",
        "{Client} misses the game entirely and just looks puzzled."
      ]
    },
    focus: {
      success: ["You stop holding back, and {client} cries out.", "You give {client} everything at once, and {they} come{s} apart at the seams."],
      fail: ["You push too hard, too fast, and {client} winces.", "All that effort, and it lands wrong. You're breathing hard for nothing."]
    },
    recover: {
      success: [
        "You slow everything down and let yourself breathe.",
        "You trade urgency for stillness for a moment, and {client} doesn't seem to mind at all.",
        { t: "A sip of wine, a lazy kiss, a moment to gather yourself.", not: ["notouch", "away"] }
      ],
      fail: ["You try to slow down, but your nerves won't settle.", "The pause stretches into awkwardness."]
    },
    command: {
      success: [
        "\"Still,\" you say, and {client} goes perfectly still, waiting on your word.",
        "You set the pace and dare {client} to keep it. {They} can't, and {they} love{s} that {they} can't.",
        "One look from you, and {client} is yours to direct."
      ],
      fail: ["Your command falls flat, and {client} hesitates.", "{Client} pushes back on your order, and you lose the thread."]
    }
  },

  /* Undressing. Tokens {garment}, {lower}, {lace} match the client's clothes
     (gown, skirts, bodice laces / shirt, breeches, doublet laces). */
  undress: {
    slow: {
      success: [
        "You take your time with {client}'s {lace}, one tie at a time, and {they} shiver{s} with anticipation.",
        "You ease {client}'s {garment} from {their} shoulders, kissing each inch you uncover.",
        "Slowly, deliberately, you peel away {client}'s clothes until nothing is left between you."
      ],
      fail: ["A knot in {client}'s {lace} defeats your fingers, and the moment fumbles.", "You tug at the wrong tie, and {client} laughs nervously."]
    },
    rush: {
      success: [
        "Too impatient to wait, you push {client}'s {lower} out of the way with a wicked grin, leaving {them} bare to you.",
        "You haul {client}'s {lower} aside in one motion, and {they} gasp{s} at your hurry.",
        "No time for laces: you shove the fabric aside, and {client} doesn't object in the least."
      ],
      fail: ["The fabric snags and bunches, and you both have to stop and untangle it.", "You yank too hard, and something tears. {Client} isn't pleased."]
    },
    self: {
      success: [
        "You let your clothes fall away one piece at a time, and {client} can't look anywhere else.",
        "You step out of your clothes and stand unhurried in the candlelight while {client} stares.",
        "You undress for {client} slowly, savoring every second of {their} attention."
      ],
      fail: ["A stubborn lace spoils the show.", "You stumble stepping out of your clothes, and the mood wobbles."]
    }
  },

  /* Group encounters. {client} is the partner you're focused on; {other} is another guest. */
  group: {
    open: [
      "{Client} and {other} arrive together, sharing a look that says they've planned this.",
      "Two of them and one of you. {Client} grins, {other} blushes, and you lock the door behind them.",
      "You lead {client} and {other} upstairs, one hand in each of theirs."
    ],
    spill: [
      "{Other} watches, breath quickening.",
      "{Other} reaches for you too, unwilling to be left out.",
      "{Other} presses close, kissing your shoulder.",
      "Across the bed, {other} sighs at the sight."
    ],
    together: {
      success: [
        "You draw {client} and {other} together and give them both your attention at once.",
        "Hands, lips and laughter: for a moment, you all move as one.",
        "You weave between them, and both {client} and {other} sigh your name."
      ],
      fail: ["You try to please everyone at once and end up pleasing no one.", "Someone's elbow, someone's knee, and the moment tangles."]
    },
    finish: {
      success: ["The room is warm and tangled and quiet at last, everyone smiling.", "They leave arm in arm, glowing, promising to come back together."],
      partial: ["Some of them leave glowing; the rest, less so.", "Not everyone got what they came for, and everyone knows it."],
      fail: ["They dress in awkward silence, avoiding each other's eyes.", "It was more tangle than triumph. They leave unsatisfied."]
    }
  },

  /* liked:    added after a technique's success line when the client loves it.
     disliked: REPLACES the success line when the client dislikes the technique,
               so a lukewarm reaction never follows a glowing one. Must stand alone. */
  /* Reactions to your body, when a client has a taste for one part of it (Body step in creation).
     like: you're what they wanted. dislike: you're the opposite. Keyed by body part, with general as a fallback.
     Shown once when the encounter opens, and again when you undress for them. */
  body: {
    like: {
      general: ["{Client} looks you over slowly, and plainly likes what {they} see{s}.", "{They} can't quite hide how pleased {they} {are} with you."],
      hairLen: ["{Client} winds a lock of your hair around {their} fingers, delighted.", "{They} keep{s} reaching to touch your hair, as if {they} can't help it."],
      bust: ["{Client}'s gaze keeps drifting to your chest, and {they} make{s} no effort to hide it.", "{They} trace{s} the curve of your bust with a look of open admiration."],
      chest: ["{Client} lays a palm flat on your chest and leaves it there, admiring.", "{They} run{s} an appreciative hand across your chest."],
      rear: ["{Client}'s hand finds the curve of your backside and lingers there, very pleased.", "{They} watch{es} you walk across the room with undisguised appreciation."],
      thighs: ["{Client} rests a hand on your thigh and squeezes, approving.", "{Their} eyes trail down the length of your legs and stay there."],
      grooming: ["{Client} trails an approving hand down past your navel and smiles.", "{They} murmur{s} that you are exactly how {they} like."],
      endowment: ["When your clothes fall away, {client}'s breath catches, and a slow, delighted grin follows.", "{Client} looks down, then back up at you, eyes bright with anticipation."]
    },
    dislike: {
      general: ["{Client} looks you over and seems, for a moment, faintly disappointed.", "{They} hide{s} a flicker of disappointment, but you see it."],
      hairLen: ["{Client} glances at your hair and {their} smile cools a degree."],
      bust: ["{Client}'s glance settles on your chest a moment, and something in {their} expression dims.", "{They} look{s} at your figure as if comparing it to someone else's."],
      chest: ["{Client} looks at your chest and you can tell it isn't what {they} pictured."],
      rear: ["{Client} gives your figure an appraising look that falls just short of approval."],
      thighs: ["{Client}'s eyes pass over your legs without lingering."],
      grooming: ["{Client} pauses, a little surprised, and you sense it isn't how {they} prefer."],
      endowment: ["{Client} looks you over once your clothes are off and hesitates, recalculating.", "There's a beat of uncertainty on {client}'s face as the last layer falls away."]
    }
  },

  /* Reactions to your skill with a technique. master: success with Expert or Master mastery.
     novice: a failure with a technique you have little experience in. */
  mastery: {
    master: ["{Client} gasps that {they} {are} in the hands of an expert.", "{They} can tell you have done this a hundred times, and {they} adore{s} you for it.", "{Client} breaks off, breathless, to ask where you learned that.", "Your practiced ease leaves {client} speechless."],
    novice: ["Your inexperience shows, and {client} notices.", "{Client} gently corrects you, and the moment loses some of its heat.", "You fumble, and {they} {are} too polite to say anything."]
  },

  liked: ["It's exactly what {they} hoped for.", "{Their} whole body answers you.", "{They} murmur{s} your name.", "\"Yes, that,\" {they} breathe{s}."],
  disliked: [
    "{Client} goes along with it, but it's clearly not {their} favorite.",
    "It works well enough, though {client} would plainly rather something else.",
    "{Client} tolerates it, but only just. You can feel {them} holding back."
  ],

  /* How the client is doing after the turn, by satisfaction band and outcome. */
  reactions: {
    low: {
      success: ["It's a good start.", "{They} smile{s} into the moment.", "{They} {are} beginning to relax into it.", "{They} let{s} out a small, pleased sigh."],
      fail: ["{They} {are} still waiting to be won over.", "{Their} breathing hasn't changed."]
    },
    mid: {
      success: ["{Their} breath comes faster now.", "{They} {are} flushed and wide-eyed.", "A flush is rising on {their} skin.", { t: "{Their} hands have stopped being polite.", not: ["bound", "notouch"] }, "{They} {are} well past pretending to be composed."],
      fail: ["{They} {are} still warm, but the heat is fading.", "{They} wait{s} for you to find your way back."]
    },
    high: {
      success: ["{They} {are} trembling on the edge.", "{They} can barely breathe.", { t: "{They} {are} gasping now, clinging to you.", not: ["bound", "notouch"] }, "{They} won't last much longer.", "Every breath {they} take{s} is a plea."],
      fail: ["{They} {are} still close, but the moment wobbles.", "{They} hover{s} on the edge, waiting."]
    }
  },

  /* Closing line on the results screen. Never used if trouble broke out. */
  finish: {
    success: [
      "{Client} sprawls spent and smiling, in no hurry to move.",
      "Afterward, {client} laughs softly, dazed, and kisses your hand.",
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
