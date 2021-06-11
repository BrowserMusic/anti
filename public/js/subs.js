const elem = $('#content-subs')
const fxs = ['drop']

const show = (ms, fx) => new Promise(resolve => elem.show(fx, ms, resolve))
const hide = (ms, fx) => new Promise(resolve => elem.hide(fx, ms, resolve))

const texts = [
  'You took a picture of me. My t shirt above my tits, no bra. Pantihoes down, panties down, skirt up.',
  "I had a rash for a few days on one of my buttcheeks, down to my leg. I got scared. You told me it was nothing.",
  "(Or maybe I didn't tell you, and you didn't say anything).",
  'You touched me by the lake too.',
  'Water seemed to turn you on.',
  'Or maybe it was me.',
  '(You called yourself the femme foutain, cause when you cum it pours)',
  'What was I doing with a tight skirt in a forest? We walked for hours.',
  'And hours and hours.',
  'We heard people coming, and I was there, half naked, in a strange position.',
  "You liked the picture. I didn't. I looked weird, my face too happy to be sexy.",
  "If I had a superpower it would be",
  "to decide when to know, and when to not know.",
  "I read religious texts. Their oxymoron nature with their determination, their confidence intoxicates me.",
  "Most of the times I don't feel human.",
  "It's a nice feeling. Eventually I come back to the duties, and the roll that being a human entails.",
  "I am asked to explain, if possible, without contradictions.",
  "Maybe in another moment in time I would have been an Oracle.",
  "I am not a believer, anyways.",
  "Why does my perception change when I am having a panic attack?",
  "I read",
  "Panic attacks are not dangerous.",
  "Panic attacks will not make you go crazy.",
  "Panic attacks will not cause heart attacks.",
  "They are just a sudden burst of intense energy that can feel extremely uncomfortable.",
  "The majority of the 13 symptoms of panic attack are physiological:",
  "shortness of breath,",
  "heart racing,",
  "dizziness,",
  "chest pain,",
  "sweating,",
  "hot flashes,",
  "trembling,",
  "choking,",
  "nausea and numbness.",
  "Only three are psychological:",
  "feeling of unreality,",
  "fear of losing control",
  "and fear of dying.",
  "I wouldn’t say I fear",
  "I would say I just feel unreal, out of control and dying",
  "and it feels great.",
  "I found videos of the forest, and you never appeared.",
  "It's just your laugh.",
  "I deleted all visions of you. The sound remains.",
  "I deleted all visions of you,",
  "the sound remains."
];

start_subs = function() {
  (async () => {
      while (texts.length) {
          await hide(5000, fxs[0])
          elem.text(texts.shift())
          await show(5000, fxs[0])
      }
  })()
}
