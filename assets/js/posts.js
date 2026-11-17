/* ==========================================================
   THE POST LIST
   Every published post gets one entry here. The homepage
   ("Latest posts") and the Explore page read from this list,
   so adding an entry is all it takes to show a new post.

   Newest post goes at the TOP.

   Fields:
     title    – the question or headline
     url      – where the post file lives, e.g. "posts/why-coffee-wakes-you-up.html"
     track    – "everyday" (things in daily life) or "deep" (tougher concepts)
     emoji    – one emoji for the card
     summary  – one or two sentences
     date     – "YYYY-MM-DD"
     minutes  – reading time in minutes

   Example (remove the // at the start of each line to use it):

   {
     title: "Why does coffee wake you up?",
     url: "posts/why-coffee-wakes-you-up.html",
     track: "everyday",
     emoji: "☕",
     summary: "Caffeine sneaks into the parking spot your brain saves for its 'I'm tired' molecule.",
     date: "2026-11-20",
     minutes: 5
   },
   ========================================================== */

window.POSTS = [
  {
    title: "Does your body reach equilibrium when you die?",
    url: "posts/does-your-body-reach-equilibrium-when-you-die.html",
    track: "deep",
    emoji: "⚖️",
    summary: "Your cells run reactions nonstop, and chemistry says reactions settle into balance. So when does your body get there? Is it after death?",
    date: "2026-11-17",
    minutes: 9
  }
];
