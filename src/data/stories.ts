export interface Choice {
  text: string;
  nextNodeId: string;
}

export interface StoryNode {
  id: string;
  title: string;
  text: string;
  illustrationPrompt: string;
  illustrationPreset: {
    emoji: string;
    bgColor: string;
    borderColor: string;
    textColor: string;
  };
  choices: Choice[];
  isEnding?: boolean;
  endingType?: 'victory' | 'defeat' | 'funny_trap';
}

export interface Story {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Fun';
  coverEmoji: string;
  startNodeId: string;
  nodes: Record<string, StoryNode>;
}

export const STORIES: Story[] = [
  {
    id: "jelly_flood_heroes",
    title: "Theo, William & Oliver and the Great Jelly Flood",
    description: "A wobbly machine floods the Penguinpower clubhouse with strawberry jelly! Can Theo, William and Oliver switch it off with Kanga, Rhino and Penguin — before the whole place turns to jam?",
    difficulty: "Easy",
    coverEmoji: "🍮",
    startNodeId: "start",
    nodes: {
      start: {
        id: "start",
        title: "Splashdown at Penguinpower!",
        text: "Theo, William, and Oliver zoomed their bikes down to the Penguinpower clubhouse by the river in Oxfordshire. Kanga, the super-genius kangaroo who says silly things, had built a giant wobbling machine. 'Behold, the JELLY-O-TRON 3000!' Kanga cheered. 'It makes any flavour of jelly, including invisible jelly, which is my favourite because you can't see it.' Penguin, the brave leader, waddled past and bumped the big red button with his flipper. The machine began to shake, bubble, and hum. Rhino licked his lips. Uh oh! What should the three heroes do first?",
        illustrationPrompt: "Three excited boys on bikes next to a giant humming jelly machine, with a proud kangaroo and a worried penguin in a clubhouse by a river.",
        illustrationPreset: {
          emoji: "🍓🤖🐧",
          bgColor: "bg-rose-50",
          borderColor: "border-rose-400",
          textColor: "text-rose-900"
        },
        choices: [
          { text: "Help Kanga switch the Jelly-o-Tron OFF!", nextNodeId: "jelly_lab" },
          { text: "Run outside to warn everyone with Penguin!", nextNodeId: "scout_field" }
        ]
      },
      jelly_lab: {
        id: "jelly_lab",
        title: "A Flood of Wibbly-Wobbly Jelly!",
        text: "Theo, William, and Oliver grabbed the giant lever together and PULLED. But instead of stopping, the Jelly-o-Tron went WHOOSH! A huge wave of strawberry jelly burst out of the doors! Oliver slid down a giant jelly hill on his bottom, giggling, 'WHEEEE!' A big splat of jam landed right on William's face, and he licked his lips. 'Yummy!' he laughed. Rhino tried to eat his way to the off-switch but only got a wobbly jelly hat. The glowing off-switch was all the way across a lake of jiggly jelly.",
        illustrationPrompt: "A boy sliding down a hill of red jelly, another with jam on his face, and a rhino wearing a jelly hat in a flooded clubhouse.",
        illustrationPreset: {
          emoji: "🌊🍓😂",
          bgColor: "bg-pink-50",
          borderColor: "border-pink-400",
          textColor: "text-pink-900"
        },
        choices: [
          { text: "Surf across on Waddle, the steel wrecking ball!", nextNodeId: "jelly_surf" },
          { text: "Build a bridge out of Rhino's sandwiches!", nextNodeId: "marsh_bridge" }
        ]
      },
      scout_field: {
        id: "scout_field",
        title: "Penguin's Big Warning",
        text: "Outside, the air began to shimmer and sparkle like a giant soap bubble. Penguin's eyes went wide. 'Oh no. Oh nooo. Here we go,' he groaned. 'LISTEN UP, everyone! We are walking straight into a DISTORTION FIELD! Remember the rules: stay VERY still, do NOT move, and whatever you do, do NOT say a single wor—' But right then Rhino's tummy rumbled like thunder, Oliver let out a tiny nervous giggle, and William... William did a little parp. The whole world went wibbly-wobbly!",
        illustrationPrompt: "A penguin holding up a flipper to warn three nervous boys as the air around them shimmers and sparkles like a bubble.",
        illustrationPreset: {
          emoji: "✨🐧🫧",
          bgColor: "bg-indigo-50",
          borderColor: "border-indigo-400",
          textColor: "text-indigo-900"
        },
        choices: [
          { text: "Freeze like statues and hold your breath!", nextNodeId: "distortion_zone" },
          { text: "Hold Rhino's nose so he can't sneeze!", nextNodeId: "distortion_zone" }
        ]
      },
      distortion_zone: {
        id: "distortion_zone",
        title: "Everything Goes BONKERS!",
        text: "Inside the distortion field, nothing was normal! William could not stop doing the can-can, kicking his legs and shouting 'OOH LA LA!' Theo floated up and walked upside-down on the ceiling, blowing giant rainbow bubbles out of his ears. Oliver tried to say 'help me' but it came out backwards as 'EM PLEH!' Each of Kanga's toes grew a tiny face, and one named Trevor politely asked for a cup of tea. Penguin wore a saucepan as a hat and proposed marriage to a cheese sandwich. 'STAY CALM,' Penguin burbled, 'it always ends in three... two...' Then FOUR shimmering exit doors appeared!",
        illustrationPrompt: "A wildly silly scene: a boy doing the can-can, a boy walking on the ceiling blowing bubbles, and a penguin wearing a saucepan hat, all inside a sparkly distortion field.",
        illustrationPreset: {
          emoji: "🌀🤸🫧",
          bgColor: "bg-fuchsia-50",
          borderColor: "border-fuchsia-400",
          textColor: "text-fuchsia-900"
        },
        choices: [
          { text: "Jump through the door shaped like a rocket!", nextNodeId: "jelly_surf" },
          { text: "Dive through the wobbly marshmallow door!", nextNodeId: "sticky_trap" }
        ]
      },
      jelly_surf: {
        id: "jelly_surf",
        title: "Waddle the Surfboard!",
        text: "Waddle, their round penguin friend made of solid Penguinpower steel, tucked in his head and legs and turned into a shiny surfboard. Theo, William, and Oliver hopped on and surfed across the jelly lake! 'COWABUNGA!' yelled Oliver. They whooshed past floating marshmallows and one very confused duck. Theo leaned left, William leaned right, and Oliver reached out as far as he could... and SLAPPED the off-switch! The Jelly-o-Tron burped one last bubble and went quiet. The three heroes had saved the clubhouse!",
        illustrationPrompt: "Three boys surfing across a lake of red jelly on a shiny metal penguin surfboard, reaching for a glowing switch.",
        illustrationPreset: {
          emoji: "🏄🐧🔴",
          bgColor: "bg-cyan-50",
          borderColor: "border-cyan-400",
          textColor: "text-cyan-900"
        },
        choices: [
          { text: "Celebrate with a giant jelly-and-ice-cream party!", nextNodeId: "victory_jelly" }
        ]
      },
      marsh_bridge: {
        id: "marsh_bridge",
        title: "The Soggy Sandwich Bridge",
        text: "Rhino, who loves sandwiches more than anything in the whole world, laid down slice after slice to build a bread bridge across the jelly. 'Do NOT eat the bridge,' Penguin warned firmly. Rhino nodded... and then ate the bridge. SPLOSH! Everyone tumbled into the wibbly jelly! They bobbed back up covered head to toe, looking exactly like three giant giggly gummy bears. Kanga laughed so hard his glasses fell off. 'Well,' said Kanga, 'at least we all match now!'",
        illustrationPrompt: "A rhino eating a bridge made of sandwich slices while three boys splash into red jelly, coming up looking like gummy bears.",
        illustrationPreset: {
          emoji: "🥪🐻🍓",
          bgColor: "bg-amber-50",
          borderColor: "border-amber-400",
          textColor: "text-amber-900"
        },
        choices: [
          { text: "Wobble to the off-switch as a team of gummy heroes!", nextNodeId: "victory_jelly" },
          { text: "Give up and have a cosy jelly nap!", nextNodeId: "soggy_defeat" }
        ]
      },
      victory_jelly: {
        id: "victory_jelly",
        title: "Heroes of the Jelly Flood!",
        text: "Theo, William, and Oliver switched off the Jelly-o-Tron just in time! Kanga invented giant sponges to clean up, and everyone scooped the leftover jelly into bowls with big wooden spoons. Mummy Penguin brought out cold ice cream and gave the three boys shiny gold medals. 'You are the bravest, cleverest readers in all of Oxfordshire!' she cheered. Rhino fell fast asleep in a warm puddle of strawberry jelly with a very happy smile. You saved the day! You are a reading superstar!",
        illustrationPrompt: "Three proud boys wearing gold medals, eating ice cream with the animal crew, and a rhino sleeping in a puddle of jelly.",
        illustrationPreset: {
          emoji: "🏆🍨🥳",
          bgColor: "bg-emerald-100",
          borderColor: "border-emerald-500",
          textColor: "text-emerald-950"
        },
        choices: [],
        isEnding: true,
        endingType: "victory"
      },
      sticky_trap: {
        id: "sticky_trap",
        title: "Stuck in the Marshmallow Door!",
        text: "The boys dived through the marshmallow door and got STUCK — completely covered in gooey, sticky marshmallow! They could only wiggle their eyebrows. 'Don't worry,' mumbled Kanga, 'I will munch you free!' He nibbled and gobbled until POP, all three popped out... but now they were covered head to toe in sticky kangaroo slobber! 'EWWWW!' they laughed, and all three ran and jumped straight into the river with an enormous SPLASH to wash it all off. Silly, sticky, and soaking wet — what a giggle! Want to try a different path?",
        illustrationPrompt: "Three boys covered in sticky marshmallow and kangaroo slobber, jumping into a river with a big splash while a kangaroo grins.",
        illustrationPreset: {
          emoji: "🍡😝💦",
          bgColor: "bg-orange-50",
          borderColor: "border-orange-400",
          textColor: "text-orange-900"
        },
        choices: [],
        isEnding: true,
        endingType: "funny_trap"
      },
      soggy_defeat: {
        id: "soggy_defeat",
        title: "The Great Jelly Nap",
        text: "The three heroes were far too giggly and far too wobbly to reach the switch, so they floated on their backs in the warm strawberry jelly and had a little rest instead. Rhino snored big pink bubbles. The Jelly-o-Tron kept whirring and filled the whole clubhouse right up to the roof! Mummy Penguin found them the next morning, floating and snoozing like happy jelly babies. 'Comfy, are we?' she giggled. You didn't stop the machine this time — but hop back in and give it another go!",
        illustrationPrompt: "Three boys floating and napping on their backs in a clubhouse filled to the roof with red jelly, with a snoring rhino.",
        illustrationPreset: {
          emoji: "😴🍮🫧",
          bgColor: "bg-rose-100",
          borderColor: "border-rose-400",
          textColor: "text-rose-950"
        },
        choices: [],
        isEnding: true,
        endingType: "defeat"
      }
    }
  },
  {
    id: "marshmallow_blizzard",
    title: "John, Liam & Theo and the Marshmallow Blizzard",
    description: "A marshmallow blizzard has buried the hill in sticky white fluff! Join John, Liam and Theo, Snow Leopard and the crew on a super-silly, super-speedy rescue to switch off the wobbly cloud machine!",
    difficulty: "Easy",
    coverEmoji: "🍡",
    startNodeId: "start",
    nodes: {
      start: {
        id: "start",
        title: "A Snowy Surprise!",
        text: "John, Liam, and Theo dragged their sledges up the big hill on a frosty Oxfordshire morning. But this snow was WHITE and SQUISHY and smelled just like... marshmallows! 'It is a MARSHMALLOW BLIZZARD!' announced Kanga, the super-genius kangaroo. 'Scientifically, that means the sky is having a pyjama party.' Rhino was already munching the hill. Then Snow Leopard, the coolest cat on the mountain, zoomed up on ice-skates. 'Careful, friends — a marshmallow blizzard makes everything super sticky and super silly!' What should the three heroes do?",
        illustrationPrompt: "Three boys with sledges on a hill of white marshmallow snow, a kangaroo explaining, a rhino eating snow, and a snow leopard on ice skates.",
        illustrationPreset: {
          emoji: "🍡❄️🐆",
          bgColor: "bg-sky-50",
          borderColor: "border-sky-400",
          textColor: "text-sky-900"
        },
        choices: [
          { text: "Build the world's fastest marshmallow sledge!", nextNodeId: "sledge_build" },
          { text: "Follow Snow Leopard to the warm cocoa cave!", nextNodeId: "cocoa_cave" }
        ]
      },
      sledge_build: {
        id: "sledge_build",
        title: "The Rocket Sledge!",
        text: "John, Liam, and Theo packed squishy marshmallow snow into a super-speedy sledge. Kanga strapped a fizzy-lemonade rocket engine to the back 'for science.' 'Three, two, one, WHOOSH!' They blasted down the hill so fast their cheeks wobbled like jelly! Theo steered, Liam ducked under a low snowy branch, and John spotted something ahead. 'A giant marshmallow ramp!' he yelled. 'Do we jump it?!'",
        illustrationPrompt: "Three boys riding a fast marshmallow sledge with a rocket on the back, zooming down a snowy hill toward a big ramp.",
        illustrationPreset: {
          emoji: "🛷🚀💨",
          bgColor: "bg-blue-50",
          borderColor: "border-blue-400",
          textColor: "text-blue-900"
        },
        choices: [
          { text: "JUMP the giant marshmallow ramp!", nextNodeId: "big_jump" },
          { text: "Swerve into the snowy forest to be safe!", nextNodeId: "forest_swerve" }
        ]
      },
      cocoa_cave: {
        id: "cocoa_cave",
        title: "Penguin's Big Warning",
        text: "Inside the cosy cave, the air suddenly began to shimmer and sparkle like fizzy lemonade. Penguin froze mid-sip of his cocoa. 'Oh no. Not again. Here we go,' he sighed. 'LISTEN UP, team! DISTORTION FIELD! Everybody stay still, keep quiet, and do NOT — I repeat, do NOT — do anything sil—' But right then Rhino did an enormous, echoing BURP that smelled of sandwiches. Liam snorted with laughter. And John did a tiny wiggly dance. The whole cave turned completely INSIDE OUT!",
        illustrationPrompt: "A penguin holding a cocoa mug and warning three boys in a glowing cave as the walls begin to shimmer and sparkle.",
        illustrationPreset: {
          emoji: "☕🐧✨",
          bgColor: "bg-indigo-50",
          borderColor: "border-indigo-400",
          textColor: "text-indigo-900"
        },
        choices: [
          { text: "Squeeze your eyes shut and count to three!", nextNodeId: "distortion_zone" },
          { text: "Grab Snow Leopard's fluffy tail and hold on!", nextNodeId: "distortion_zone" }
        ]
      },
      distortion_zone: {
        id: "distortion_zone",
        title: "Topsy-Turvy Tumble!",
        text: "The distortion field made EVERYTHING go bananas! John's shoes turned into two grumpy fish who argued about football. Liam could only speak in 'MOO' and floated up like a balloon. Theo did the can-can across the ceiling while blowing bubbles that popped into tiny rainbows. Kanga grew a second nose that whistled cheerful tunes, and Rhino's tummy turned into a drum kit. Penguin, wearing a teapot for a hat, hollered, 'STAY CALM, it ends in three... two... one—' POP! Everyone tumbled out in a giggly heap. Two glowing exit tunnels appeared ahead.",
        illustrationPrompt: "A silly distortion scene: a floating boy mooing, a boy doing the can-can on the ceiling blowing bubbles, shoes turned into fish, and a penguin in a teapot hat.",
        illustrationPreset: {
          emoji: "🌀🐟🫧",
          bgColor: "bg-fuchsia-50",
          borderColor: "border-fuchsia-400",
          textColor: "text-fuchsia-900"
        },
        choices: [
          { text: "Slide down the sparkly rainbow tunnel!", nextNodeId: "victory_snow" },
          { text: "Dive into the squishy marshmallow tunnel!", nextNodeId: "marsh_stuck" }
        ]
      },
      big_jump: {
        id: "big_jump",
        title: "Over the Marshmallow Moon!",
        text: "The rocket sledge hit the ramp and FLEW! John, Liam, and Theo soared high over the whole valley, high-fiving a very surprised owl on the way past. Down below, they spotted exactly where the blizzard was coming from — a giant wobbly cloud machine that Waddle had switched on by accidentally sitting on it! 'There it is!' cheered Theo. They landed with a soft FLOMP in a pile of marshmallow and rolled straight up to the machine's big off-button.",
        illustrationPrompt: "Three boys flying on a sledge over a snowy valley, high-fiving an owl, spotting a giant cloud machine with a round penguin on top.",
        illustrationPreset: {
          emoji: "🌙🦉🛷",
          bgColor: "bg-violet-50",
          borderColor: "border-violet-400",
          textColor: "text-violet-900"
        },
        choices: [
          { text: "Press the big OFF button together!", nextNodeId: "victory_snow" }
        ]
      },
      forest_swerve: {
        id: "forest_swerve",
        title: "The Giant Sticky Snowball",
        text: "They swerved into the forest, but the marshmallow snow stuck to the sledge and grew... and grew... and GREW! Soon John, Liam, and Theo were rolling inside a giant sticky snowball, bouncing off trees and laughing their socks off. 'This is the best worst idea EVER!' yelled Liam. The huge snowball finally rolled to a stop with a soft SPLAT right against Rhino's big tummy, and stuck there fast.",
        illustrationPrompt: "Three boys laughing inside a giant rolling marshmallow snowball, bouncing through a snowy forest toward a rhino.",
        illustrationPreset: {
          emoji: "⚪🌲😆",
          bgColor: "bg-teal-50",
          borderColor: "border-teal-400",
          textColor: "text-teal-900"
        },
        choices: [
          { text: "Ask Rhino to munch you free!", nextNodeId: "marsh_stuck" },
          { text: "Wiggle out and race to the cloud machine!", nextNodeId: "victory_snow" }
        ]
      },
      victory_snow: {
        id: "victory_snow",
        title: "Heroes of the Blizzard!",
        text: "John, Liam, and Theo switched off the wobbly cloud machine, and the marshmallow blizzard softened into a gentle sprinkle of sugar. Snow Leopard cheered, Kanga invented marshmallow ice-cream on the spot, and everyone toasted the leftovers over a cosy little fire. Mummy Penguin gave the three heroes shiny gold medals. 'The bravest, cleverest readers in all of Oxfordshire!' she beamed. Rhino, of course, ate the whole machine. You saved the day! You are a reading superstar!",
        illustrationPrompt: "Three proud boys with gold medals toasting marshmallows by a fire with the animal crew as gentle sugar snow falls.",
        illustrationPreset: {
          emoji: "🏆🔥🍡",
          bgColor: "bg-emerald-100",
          borderColor: "border-emerald-500",
          textColor: "text-emerald-950"
        },
        choices: [],
        isEnding: true,
        endingType: "victory"
      },
      marsh_stuck: {
        id: "marsh_stuck",
        title: "Sticky Marshmallow Muddle!",
        text: "John, Liam, and Theo got completely stuck in the squishy marshmallow — arms, legs, and even their noses! They could only blink. 'Hold still,' said Kanga, 'I will nibble you loose!' He munched and gobbled until POP, all three were free... but now they were covered head to toe in sticky kangaroo slobber! 'YUCK!' they giggled, and all three ran and jumped straight into the icy stream with a giant SPLASH to wash it all off. Sticky, silly, and soaking wet — what an adventure! Want to try a different path?",
        illustrationPrompt: "Three boys covered in sticky marshmallow and kangaroo slobber leaping into an icy stream while a kangaroo licks its lips.",
        illustrationPreset: {
          emoji: "🍡😝💦",
          bgColor: "bg-orange-50",
          borderColor: "border-orange-400",
          textColor: "text-orange-900"
        },
        choices: [],
        isEnding: true,
        endingType: "funny_trap"
      }
    }
  },
  {
    id: "sandwich_mystery",
    title: "The Mystery of the Missing Super-Sandwich",
    description: "Rhino's giant three-decker peanut butter, marshmallow, and steel-cheese sandwich has disappeared! Can the crew solve the mystery before Rhino's tummy rumbles the roof off?",
    difficulty: "Easy",
    coverEmoji: "🥪",
    startNodeId: "start",
    nodes: {
      start: {
        id: "start",
        title: "Disaster in the Kitchen!",
        text: "Rhino was crying so loud that his tears flooded the kitchen floor! 'My super-sandwich is GONE!' he sobbed. Penguin, the brave leader of the group, put on his detective hat. 'We will find it!' Penguin squawked. Kanga, who is a super-genius kangaroo but says silly things, looked under a coffee cup. 'Aha! Maybe the sandwich turned into a tiny butterfly and flew to Mars!' Kanga declared. Rhino sniffled and wiped his nose with a slice of bread. What should the crew do first?",
        illustrationPrompt: "A giant kangaroo looking under a tiny teacup with a magnifying glass, while a penguin wearing a Sherlock Holmes hat stands next to a crying rhino in a kitchen.",
        illustrationPreset: {
          emoji: "🕵️‍♂️🥪💧",
          bgColor: "bg-blue-50",
          borderColor: "border-blue-400",
          textColor: "text-blue-900"
        },
        choices: [
          { text: "Check inside Mummy Penguin's giant fridge!", nextNodeId: "fridge_check" },
          { text: "Crawl through the secret kitchen vent!", nextNodeId: "vent_crawl" }
        ]
      },
      fridge_check: {
        id: "fridge_check",
        title: "The Pickle Jar Trap!",
        text: "Penguin pulled open the giant silver fridge door. A blast of cold air hit their faces. Inside, they didn't see the sandwich. Instead, they saw Waddle, their round penguin friend! He was stuck inside a massive jar of pickles! 'I wanted to see if I could swim in pickle juice!' Waddle yelled, his voice echoing in the glass. Waddle is made of solid Penguinpower steel, so they call him Waddle Wrecking Ball! 'Get me out!' he squawked. Kanga tapped his chin. 'If we leave him there, he might turn into a delicious giant pickle-penguin!'",
        illustrationPrompt: "A perfectly round, shiny metallic penguin stuck inside a giant glass jar of green pickles inside a glowing white refrigerator.",
        illustrationPreset: {
          emoji: "🥒🐧🥶",
          bgColor: "bg-emerald-50",
          borderColor: "border-emerald-400",
          textColor: "text-emerald-900"
        },
        choices: [
          { text: "Let Waddle use his Wrecking Ball power to smash the jar!", nextNodeId: "waddle_smash" },
          { text: "Tickle Waddle to make him wiggle out of the jar!", nextNodeId: "waddle_tickle" }
        ]
      },
      vent_crawl: {
        id: "vent_crawl",
        title: "Squeezing into the Air Vent!",
        text: "The vent was dark, dusty, and smelled like old cheese. Penguin led the way because he can regenerate his feathers if they scrape off. Rhino squeezed in, but his big round tummy got stuck! 'Oh no! My tummy is trapped!' Rhino cried. 'And I haven't had a snack in five minutes!' Kanga tried to push him from behind. 'Rhino, if you wiggle your ears and sing the peanut butter song, you will slide like grease!' Kanga suggested. Suddenly, they heard a loud rustling deeper in the tunnels. It sounded like a sandwich-thief!",
        illustrationPrompt: "A happy rhino stuck halfway inside a square metal ventilation pipe, with a kangaroo pushing his feet and a penguin crawling ahead.",
        illustrationPreset: {
          emoji: "💨🦏🕳️",
          bgColor: "bg-amber-50",
          borderColor: "border-amber-400",
          textColor: "text-amber-900"
        },
        choices: [
          { text: "Go into Ghost Mode to float through the metal walls!", nextNodeId: "ghost_mode_vent" },
          { text: "Feed Rhino a tiny emergency cookie to make him happy!", nextNodeId: "vent_cookie" }
        ]
      },
      waddle_smash: {
        id: "waddle_smash",
        title: "Smash! Crash! SPLAT!",
        text: "Waddle grinned and wiggled his round steel tummy. 'WRECKING BALL ACTIVATED!' he screamed. With a giant BOOM, Waddle flexed and shattered the pickle jar into a million pieces. Pickles flew everywhere! One big green pickle landed right on Rhino's horn. 'Mmm, pickle snack!' Rhino said, munching happily. But the noise was so loud that it woke up Mummy Penguin! She marched in, waving a giant wooden spoon. 'Who made this pickle mess?!' she asked, her eyes glowing with mommy power. Waddle rolled behind Penguin to hide.",
        illustrationPrompt: "A round metallic penguin breaking out of a glass jar with pickles flying in the air, while an angry mother penguin holds a wooden spoon in the background.",
        illustrationPreset: {
          emoji: "💥🥒👩‍🍳",
          bgColor: "bg-red-50",
          borderColor: "border-red-400",
          textColor: "text-red-900"
        },
        choices: [
          { text: "Blame the pickle butterfly and run to the backyard!", nextNodeId: "backyard_run" },
          { text: "Help Mummy Penguin clean up the sticky pickle juice!", nextNodeId: "clean_up" }
        ]
      },
      waddle_tickle: {
        id: "waddle_tickle",
        title: "The Great Pickle Tickle!",
        text: "Kanga reached into the pickle jar and tickled Waddle's little steel feet. 'KILI KILI KILI!' Kanga chanted. Waddle began to laugh. He laughed so hard his steel body vibrated! 'AHA-HA-HA!' Waddle squawked. His laughing vibrations made the jar slippery with pickle juice. He popped out of the jar like a cork from a bottle! He flew through the air and landed directly in a mountain of dirty laundry that Mummy Penguin had just folded. 'Whoops!' squawked Waddle. In the laundry, they spotted something weird. A trail of crumbs!",
        illustrationPrompt: "A metal penguin popping out of a glass jar and landing in a pile of colourful, freshly folded laundry.",
        illustrationPreset: {
          emoji: "👉🧦😂",
          bgColor: "bg-pink-50",
          borderColor: "border-pink-400",
          textColor: "text-pink-900"
        },
        choices: [
          { text: "Follow the tasty trail of breadcrumbs!", nextNodeId: "follow_crumbs" },
          { text: "Search under Mummy Penguin's giant laundry pile!", nextNodeId: "laundry_search" }
        ]
      },
      ghost_mode_vent: {
        id: "ghost_mode_vent",
        title: "Spooky Ghost Mode!",
        text: "Penguin shouted, 'Things are too difficult! GHOST MODE, GO!' Instantly, the crew turned into glowing, see-through ghostly versions of themselves. They floated right out of the metal vent and fell through the ceiling, landing softly in Mummy Penguin's secret craft room. Standing in the corner was Surprise, who loved to jump out! 'SURPRISE!' she screamed, popping out of a big cardboard box wearing a fake mustache. Rhino gasped, 'A ghostly mustache monster!' Kanga tried to shake hands with the mustache box.",
        illustrationPrompt: "Glowing blue semi-transparent cartoon animals floating through a wooden ceiling, while a cute penguin with a fake mustache jumps out of a cardboard box.",
        illustrationPreset: {
          emoji: "👻🥸📦",
          bgColor: "bg-violet-50",
          borderColor: "border-violet-400",
          textColor: "text-violet-900"
        },
        choices: [
          { text: "Ask Surprise if she saw the sandwich thief!", nextNodeId: "ask_surprise" },
          { text: "Check the giant yarn basket in the craft room!", nextNodeId: "yarn_search" }
        ]
      },
      vent_cookie: {
        id: "vent_cookie",
        title: "The Power of the Chocolate Chip!",
        text: "Kanga reached into his pocket and pulled out a tiny, dusty chocolate chip cookie. He stuffed it into Rhino's mouth. Rhino's eyes lit up with joy! 'NOM NOM NOM!' he chewed. The cookie gave Rhino super sandwich-seeking strength! He pushed with his legs and popped through the vent hole like a rocket. But they slid down the pipe and went SPLAT into Mummy Penguin's massive baking flour bin! Now they all looked like fluffy white snowmen. Kanga laughed, 'Look! I am a kangaroo snowman! I can leap over the sun!'",
        illustrationPrompt: "Animal friends covered in white flour, looking like cute snowmen, laughing inside a giant kitchen pantry cupboard.",
        illustrationPreset: {
          emoji: "🍪☃️🌾",
          bgColor: "bg-stone-50",
          borderColor: "border-stone-400",
          textColor: "text-stone-900"
        },
        choices: [
          { text: "Sneeze from the flour and blow the door open!", nextNodeId: "sneeze_blast" },
          { text: "Sneak outside to shake off the white flour!", nextNodeId: "backyard_run" }
        ]
      },
      backyard_run: {
        id: "backyard_run",
        title: "The Squeaky Backyard Chase!",
        text: "The crew ran out into the bright, grassy backyard. There, they saw Cheeky, the cheeky penguin! He was wearing Rhino's super-sandwich like a silly hat! 'Look at me, I am the King of Sandwiches!' Cheeky giggled, dancing on a lawn chair. Rhino drooled, 'My crown! My delicious, peanut-butter crown!' Before they could grab him, Snow Leopard leaped over the garden fence! Snow Leopard is super powerful. 'I will catch that cheeky hat!' she roared playfully. Cheeky gasped and ran toward the garden tunnels!",
        illustrationPrompt: "A cheeky little penguin with a giant sandwich on his head, running away from a powerful, smiling white snow leopard in a sunny green garden.",
        illustrationPreset: {
          emoji: "🏃‍♂️👑🐆",
          bgColor: "bg-lime-50",
          borderColor: "border-lime-400",
          textColor: "text-lime-900"
        },
        choices: [
          { text: "Chase Cheeky into the underground rabbit tunnels!", nextNodeId: "rabbit_tunnels" },
          { text: "Let Waddle roll like a bowling ball to stop Cheeky!", nextNodeId: "waddle_bowling" }
        ]
      },
      clean_up: {
        id: "clean_up",
        title: "The Soap Bubble Explosion!",
        text: "They decided to clean up. Kanga got a bucket and dumped ten bottles of dish soap onto the floor. 'If a little soap is good, a lot of soap will make the kitchen shiny as a star!' Kanga shouted. He turned on the hot water. BOOF! A mountain of bubbles exploded from the sink! In two seconds, bubbles filled the room to the ceiling! Waddle swam through the bubbles like a submarine. Rhino tried to eat the bubbles. 'Yuck! Soap sandwiches!' he coughed. Suddenly, they floated out into the yard on a bubble wave!",
        illustrationPrompt: "A kitchen completely filled with massive soap bubbles, with cartoon animals floating on them out of a window.",
        illustrationPreset: {
          emoji: "🧼🫧🌊",
          bgColor: "bg-cyan-50",
          borderColor: "border-cyan-400",
          textColor: "text-cyan-900"
        },
        choices: [
          { text: "Ride the bubbles into the mysterious forest!", nextNodeId: "bubble_forest" },
          { text: "Pop the bubbles to find where Cheeky is hiding!", nextNodeId: "backyard_run" }
        ]
      },
      follow_crumbs: {
        id: "follow_crumbs",
        title: "The Trail of Tasty Clues!",
        text: "The trail of crumbs went down the hall, up the stairs, and straight into the attic. Rhino sniffed the ground like a vacuum cleaner. 'I smell peanut butter! And... steel-cheese!' he declared. In the dusty attic, they found a small wooden table. Sitting at the table was a tiny baby penguin named Pippin. He was holding a crayon, drawing a map of Penguinpower. Next to him was Rhino's sandwich, with only one tiny bite taken out of it! Pippin looked up, his big blue eyes wide. 'I just wanted to make a sandwich fort!' he peeped.",
        illustrationPrompt: "A cute tiny baby penguin sitting at a table with crayons, building a fort out of cardboard next to a giant sandwich.",
        illustrationPreset: {
          emoji: "🗺️👶🥪",
          bgColor: "bg-yellow-50",
          borderColor: "border-yellow-400",
          textColor: "text-yellow-900"
        },
        choices: [
          { text: "Share the giant sandwich with baby Pippin!", nextNodeId: "victory_ending_share" },
          { text: "Build an even bigger toy fort with Waddle's steel blocks!", nextNodeId: "fort_ending_victory" }
        ]
      },
      laundry_search: {
        id: "laundry_search",
        title: "The Laundry Mountain Trap!",
        text: "They climbed into the giant pile of laundry. It was so big it felt like climbing Mount Everest! Suddenly, the mountain began to slide! 'SOCKS SLIDE!' Waddle yelled. The clothes tumbled down, wrapping around them like warm cocoons. Rhino got stuck in a giant red sweater. Kanga had a sock on his nose. 'I am the sock-monster of Penguinpower!' Kanga mumbled. They were trapped in the warm, clean-smelling laundry! They couldn't move their legs. Oh no, is this the end of the search?",
        illustrationPrompt: "Cute animals tangled up in colorful clothes, sweaters, and socks, laughing but unable to move.",
        illustrationPreset: {
          emoji: "🧺🧦🕸️",
          bgColor: "bg-rose-50",
          borderColor: "border-rose-400",
          textColor: "text-rose-900"
        },
        choices: [
          { text: "Activate Ghost Mode to float out of the clothes!", nextNodeId: "ghost_mode_vent" },
          { text: "Wait for Mummy Penguin to come rescue you!", nextNodeId: "defeat_ending_socks" }
        ]
      },
      ask_surprise: {
        id: "ask_surprise",
        title: "Surprise's Big Secret!",
        text: "Surprise giggled and pulled off her fake mustache. 'I saw Cheeky!' she whispered loudly. 'He took the sandwich to the backyard to show the squirrels!' Rhino cheered, 'The squirrels will never eat my steel-cheese! It is too tough!' Penguin nodded, 'Let us go! Snow Leopard is waiting outside!' Kanga grabbed the cardboard mustache. 'I will wear this to trick the squirrels into thinking I am a wise grandpa kangaroo!' They marched to the backdoor, ready for action.",
        illustrationPrompt: "A kangaroo wearing a funny fake mustache leading a penguin and a rhino out of a modern kitchen door.",
        illustrationPreset: {
          emoji: "🥸🏃‍♂️🔑",
          bgColor: "bg-teal-50",
          borderColor: "border-teal-400",
          textColor: "text-teal-900"
        },
        choices: [
          { text: "Charge into the yard shouting 'Mustache Power!'", nextNodeId: "backyard_run" },
          { text: "Sneak into the bushes like silent green ninjas!", nextNodeId: "rabbit_tunnels" }
        ]
      },
      sneeze_blast: {
        id: "sneeze_blast",
        title: "The Mega Sneeze!",
        text: "Rhino's nose started to tickle from all the flour. 'Ah... ah...' he gasped. Penguin shook his head, 'Don't do it, Rhino!' 'ACHOO!!!' Rhino sneezed a sneeze so powerful it blew all the flour out of the pantry like a winter snowstorm! The blast blew open the kitchen door and launched the crew sliding across the slick wooden floor, straight out into the green yard. They landed in a soft bush right next to Cheeky! Cheeky looked very surprised. The sandwich flew off his head!",
        illustrationPrompt: "A massive, funny sneeze cloud blowing animals out of a pantry, with white flour flying like a blizzard.",
        illustrationPreset: {
          emoji: "🤧🌪️🌾",
          bgColor: "bg-indigo-50",
          borderColor: "border-indigo-400",
          textColor: "text-indigo-900"
        },
        choices: [
          { text: "Catch the flying sandwich mid-air!", nextNodeId: "catch_sandwich" },
          { text: "Wrestle Cheeky in the soft green grass!", nextNodeId: "backyard_run" }
        ]
      },
      catch_sandwich: {
        id: "catch_sandwich",
        title: "The Mid-Air Sandwich Catch!",
        text: "The giant three-decker sandwich was spinning in the air. Penguin spread his flippers, activated his regeneration boost, and jumped! But his flippers missed. Suddenly, Snow Leopard bounded off the fence, did a double backflip, and caught the sandwich perfectly in her soft paws! 'Got it!' she roared happily. Rhino cheered so hard his teeth chattered. 'My baby is safe!' he cried. But Cheeky snatched the marshmallow layer and ran! 'You can't have the sugar layer!' Cheeky teased.",
        illustrationPrompt: "A gorgeous white leopard catching a giant sandwich in mid-air above a beautiful green garden.",
        illustrationPreset: {
          emoji: "🤸‍♀️🥪🐆",
          bgColor: "bg-violet-50",
          borderColor: "border-violet-400",
          textColor: "text-violet-900"
        },
        choices: [
          { text: "Let Cheeky keep the marshmallow and eat the rest!", nextNodeId: "victory_ending_share" },
          { text: "Let Waddle chase Cheeky for the final layer!", nextNodeId: "waddle_bowling" }
        ]
      },
      waddle_bowling: {
        id: "waddle_bowling",
        title: "Waddle Wrecking Bowling Ball!",
        text: "Waddle tucked in his head and legs. He turned into a perfectly round, shiny steel bowling ball! 'STRIKE!' he squawked as he rolled. He zoomed across the grass, kicking up dirt, and rolled right between Cheeky's feet. Cheeky tripped and tumbled into Waddle's soft tummy with a soft 'OOF!' The sandwich layer popped into the air and landed perfectly back on Rhino's plate! 'Hooray!' they all cheered. Mummy Penguin came out with plates of fresh cookies. 'See? Sharing always wins!' she smiled.",
        illustrationPrompt: "A round metallic penguin rolling like a bowling ball under a funny running penguin, with cookies on a tray in the background.",
        illustrationPreset: {
          emoji: "🎳🍪💖",
          bgColor: "bg-amber-100",
          borderColor: "border-amber-400",
          textColor: "text-amber-950"
        },
        choices: [
          { text: "Have a giant backyard sandwich picnic!", nextNodeId: "victory_ending_share" }
        ]
      },
      victory_ending_share: {
        id: "victory_ending_share",
        title: "The Ultimate Picnic Victory!",
        text: "Rhino got his sandwich back, but he decided to share it! He cut it into small pieces. Penguin got the steel-cheese, Kanga got the crusts (and pretended they were boomerangs), Snow Leopard got the peanut butter, and Pippin got the fluffy marshmallows! Mummy Penguin brought out cold jugs of delicious milk. 'You are all such good readers and sharers!' she praised. They ate, laughed, and Rhino slept with a very full, very happy tummy. You solved the mystery! You are a reading superstar!",
        illustrationPrompt: "All the animal friends sitting on a red picnic blanket in a sunny garden, eating pieces of a giant sandwich and laughing.",
        illustrationPreset: {
          emoji: "🥳🥪🏆",
          bgColor: "bg-emerald-100",
          borderColor: "border-emerald-500",
          textColor: "text-emerald-950"
        },
        choices: [],
        isEnding: true,
        endingType: "victory"
      },
      fort_ending_victory: {
        id: "fort_ending_victory",
        title: "The Giant Toy Fort Masterpiece!",
        text: "They decided to build the biggest fort ever! Waddle used his steel body to carry giant wooden blocks. Kanga designed a tower that went sideways instead of up. 'If the roof is on the floor, the rain can't hit us!' Kanga explained. Pippin cheered and wore a bowl as a helmet. They sat in their giant sugar-block fort, eating sandwich slices and telling silly jokes. Mummy Penguin joined them and read them a story about the ancient penguins of Penguinpower. What an amazing day! You won!",
        illustrationPrompt: "A giant indoor fort made of cardboard boxes and colorful blocks, with a kangaroo, baby penguin, and rhino playing inside.",
        illustrationPreset: {
          emoji: "🏰🧸✨",
          bgColor: "bg-sky-100",
          borderColor: "border-sky-500",
          textColor: "text-sky-950"
        },
        choices: [],
        isEnding: true,
        endingType: "victory"
      },
      defeat_ending_socks: {
        id: "defeat_ending_socks",
        title: "The Sock Monster Trap!",
        text: "Mummy Penguin found them all tangled up in the laundry. 'Oh dear!' she giggled. 'You look like a big pile of clean socks!' She decided they were too cozy to move, so she tucked them all in for an afternoon nap right there in the warm clothes. Rhino fell asleep dreaming of a sandwich land where the rivers are made of jelly. Kanga snored with a green sock still on his nose. You got cozy but didn't find the sandwich! Try again and see if you can solve the mystery!",
        illustrationPrompt: "Animals sleeping soundly in a cozy, massive pile of laundry under a warm glowing light.",
        illustrationPreset: {
          emoji: "💤🧦🧸",
          bgColor: "bg-rose-100",
          borderColor: "border-rose-400",
          textColor: "text-rose-950"
        },
        choices: [],
        isEnding: true,
        endingType: "funny_trap"
      },
      rabbit_tunnels: {
        id: "rabbit_tunnels",
        title: "The Underground Slide!",
        text: "They jumped down the rabbit tunnel. It turned out to be a giant slide! 'WEEEEE!' Kanga screamed, holding his ears. They slid round and round in the dark. Rhino's tummy rumbled, making the tunnel shake like an earthquake. 'Is the tunnel hungry too?' Rhino asked. At the bottom, they slid right out into Mummy Penguin's secret food pantry! Cheeky was there, looking at a jar of strawberry jam. 'Double sandwich time!' Rhino cheered, grabbing Cheeky and the sandwich.",
        illustrationPrompt: "A happy rhino and kangaroo sliding down a slide inside a brown dirt tunnel with small lights.",
        illustrationPreset: {
          emoji: "🕳️🛝🍓",
          bgColor: "bg-orange-50",
          borderColor: "border-orange-400",
          textColor: "text-orange-900"
        },
        choices: [
          { text: "Make a super peanut butter jam sandwich!", nextNodeId: "victory_ending_share" }
        ]
      },
      yarn_search: {
        id: "yarn_search",
        title: "Tangled in Yarn!",
        text: "Kanga leaped into the giant yarn basket. 'I will search for clues!' he yelled. But he got tangled in sixty yards of fuzzy blue wool! Waddle tried to pull him out but got tangled too. Soon, they were a giant ball of wool rolling down the hallway! Mummy Penguin saw them and sighed, 'My knitting project is ruined!' She had to use her giant scissors to cut them free. The sandwich was nowhere to be found, but they did find some funny yarn hats!",
        illustrationPrompt: "A giant ball of blue yarn with cartoon animal limbs sticking out, rolling down a wooden hallway.",
        illustrationPreset: {
          emoji: "🧶🐈🙀",
          bgColor: "bg-stone-50",
          borderColor: "border-stone-400",
          textColor: "text-stone-900"
        },
        choices: [
          { text: "Put on the yarn hats and search the laundry!", nextNodeId: "laundry_search" }
        ]
      },
      bubble_forest: {
        id: "bubble_forest",
        title: "The Floating Bubble Forest!",
        text: "The giant bubbles carried them high over the garden fence and landed them gently in the Whispering Woods. The trees looked like giant broccoli stalks! Rhino gasped, 'Broccoli! The sandwich's worst enemy!' Suddenly, Snow Leopard emerged from the shadows. 'I heard a rumble! Was it Rhino's stomach or a wild bear?' Kanga shook his head, 'It was just my brain thinking about a genius way to fly!' Snow Leopard smiled and showed them a secret path made of stepping stones.",
        illustrationPrompt: "Stepping stones crossing a bubbling blue river in a forest of broccoli trees, with cartoon animals walking on them.",
        illustrationPreset: {
          emoji: "🌳🫧🥦",
          bgColor: "bg-emerald-50",
          borderColor: "border-emerald-400",
          textColor: "text-emerald-900"
        },
        choices: [
          { text: "Follow Snow Leopard's stepping stones to the treehouse!", nextNodeId: "follow_crumbs" }
        ]
      }
    }
  },
  {
    id: "tickle_monsters",
    title: "The Tickle Monsters of Penguinpower",
    description: "Cute, fluffy spaceships have landed! These silly monsters want to tickle everyone. Help Penguin, Kanga, Rhino, and Waddle save the town from tickle-attacks!",
    difficulty: "Medium",
    coverEmoji: "👾",
    startNodeId: "start",
    nodes: {
      start: {
        id: "start",
        title: "A Spaceship in the Backyard!",
        text: "A spaceship that looked like a giant purple marshmallow landed in the backyard with a soft 'SQUEAK!' The door opened and out popped three tiny, fuzzy creatures. They had orange fur, green boots, and held massive feather dusters! 'WE ARE THE TICKLE MONSTERS!' they squeaked. 'PREPARE TO LAUGH!' Penguin, the leader, stood tall. 'We must protect our ticklish ribs!' he cried. Kanga said, 'Don't worry! I have a genius plan! If we paint funny eyes on our tummies, they will think we are awake and get scared!' What should they do?",
        illustrationPrompt: "A cute purple spaceship shaped like a marshmallow on green grass, with three small orange furry monsters holding feather dusters.",
        illustrationPreset: {
          emoji: "🛸👾😂",
          bgColor: "bg-purple-50",
          borderColor: "border-purple-400",
          textColor: "text-purple-900"
        },
        choices: [
          { text: "Activate Ghost Mode to float invisibly past them!", nextNodeId: "ghost_sneak" },
          { text: "Send Waddle Wrecking Ball to smash their tickle weapons!", nextNodeId: "waddle_smash" }
        ]
      },
      ghost_sneak: {
        id: "ghost_sneak",
        title: "The Floating Ghost Mission!",
        text: "The crew held hands. 'GHOST MODE!' Penguin squawked. ZIP! They turned into glowing, blue ghosts. They floated right past the tickle monsters, who were busy dusting the lawn chair. But Rhino stopped. The smell of peanut butter was coming from inside the spaceship! 'A sandwich spaceship!' Rhino whispered. His ghost tummy let out a huge ghostly rumble: 'WUUUUU!' The tickle monsters stopped and looked around. 'Did a ghost just order a sandwich?' the lead monster asked. Kanga tried to float upside down.",
        illustrationPrompt: "Glowing cartoon ghost animals floating into a spaceship door, while furry monsters look around confused.",
        illustrationPreset: {
          emoji: "👻🛸🦏",
          bgColor: "bg-indigo-50",
          borderColor: "border-indigo-400",
          textColor: "text-indigo-900"
        },
        choices: [
          { text: "Float quickly into the spaceship control room!", nextNodeId: "control_room" },
          { text: "Accidentally spook them by shouting 'BOO-NOM-NOM!'", nextNodeId: "ghost_boo" }
        ]
      },
      waddle_smash: {
        id: "waddle_smash",
        title: "The Steel Smash Attack!",
        text: "Waddle tucked in his flippers. 'Wrecking ball style!' he cheered. He launched himself across the grass like a shining metal bullet! He rolled straight into the lead tickle monster's feather duster. CRASH! The feather duster exploded into a cloud of pink feathers! The monster fell back into a soft patch of clover, laughing hysterically. 'Oh no! My tickler!' the monster squeaked. But the other two monsters ran toward Waddle with giant feather-guns! 'Tickle beam ready!' they shouted.",
        illustrationPrompt: "A round steel penguin smashing into a feather duster, creating a cloud of pink feathers in a grassy yard.",
        illustrationPreset: {
          emoji: "🎳💥🪶",
          bgColor: "bg-pink-50",
          borderColor: "border-pink-400",
          textColor: "text-pink-900"
        },
        choices: [
          { text: "Call Snow Leopard to jump in with ice-shields!", nextNodeId: "snow_leopard_shield" },
          { text: "Cheeky does a cheeky dance to distract them!", nextNodeId: "cheeky_dance" }
        ]
      },
      control_room: {
        id: "control_room",
        title: "The Marshmallow Buttons!",
        text: "The spaceship's control room was made of candy! The steering wheel was a giant lollipop, and the buttons were soft marshmallows. Rhino sat in the pilot's chair and immediately ate the 'Launch' button. 'OM NOM NOM! Tastes like strawberry!' he mumbled. Suddenly, a siren went off: 'BEEP BEEP! BUTTON IN BELLY!' The spaceship started to shake and bounce like a rubber ball! Kanga grabbed the lollipop wheel. 'If I turn this to the left, we will fly to the moon and eat cheese!' Kanga yelled.",
        illustrationPrompt: "A rhino eating a pink marshmallow button on a spaceship control panel made of sweets and candy.",
        illustrationPreset: {
          emoji: "🎛️🍬🦏",
          bgColor: "bg-pink-50",
          borderColor: "border-pink-400",
          textColor: "text-pink-900"
        },
        choices: [
          { text: "Use Penguin's regeneration power to fix the button!", nextNodeId: "penguin_regenerate" },
          { text: "Hold on tight as the spaceship bounces out of control!", nextNodeId: "spaceship_bounce" }
        ]
      },
      ghost_boo: {
        id: "ghost_boo",
        title: "The Ghostly Giggle Fit!",
        text: "Rhino tried to shout a spooky ghost boo, but he sneezed instead! 'BOO-NOM-ACHOO!' The sneeze blew off their Ghost Mode, and they turned solid again. The tickle monsters spotted them! 'AHA! INTRUDERS!' they squeaked. They ran forward and tickled Rhino's ribs. Rhino collapsed into a pile of laughter. 'HA-HA-HA! STOP! MY SANDWICH IS JIGGLING!' Rhino roared. Kanga tried to protect him by putting a bucket over his own head. 'You can't tickle me, I am a metal trash can!' Kanga declared.",
        illustrationPrompt: "Three monsters tickling a laughing rhino on the grass, while a kangaroo with a red bucket on his head stands nearby.",
        illustrationPreset: {
          emoji: "😂🪶🪣",
          bgColor: "bg-yellow-50",
          borderColor: "border-yellow-400",
          textColor: "text-yellow-900"
        },
        choices: [
          { text: "Mummy Penguin rescues them with hot noodle soup!", nextNodeId: "mummy_soup_rescue" },
          { text: "Surprise jumps out of the bucket to scare the monsters!", nextNodeId: "surprise_scare" }
        ]
      },
      snow_leopard_shield: {
        id: "snow_leopard_shield",
        title: "Snow Leopard's Ice Wall!",
        text: "Snow Leopard leaped from the sky, roaring with freezing power! She slammed her paws onto the grass, and a giant wall of glittering blue ice rose up! The tickler beams hit the ice and bounced right back, tickling the monsters themselves! The monsters began to roll around on the floor, giggling. 'We are tickling ourselves! Save us!' they squeaked. Penguin laughed, 'Excellent shield, Snow Leopard!' Kanga licked the ice wall. 'Mmm, mint flavored ice cream!' Kanga said.",
        illustrationPrompt: "A beautiful white snow leopard creating a shiny blue ice wall on a green lawn, reflecting pink tickle lasers.",
        illustrationPreset: {
          emoji: "❄️🛡️🐆",
          bgColor: "bg-sky-50",
          borderColor: "border-sky-400",
          textColor: "text-sky-900"
        },
        choices: [
          { text: "Demand the monsters tell you where they came from!", nextNodeId: "monster_talk" },
          { text: "Invite the tickling monsters to a cookie feast!", nextNodeId: "victory_ending_feast" }
        ]
      },
      cheeky_dance: {
        id: "cheeky_dance",
        title: "The Silly Booty Dance!",
        text: "Cheeky ran out and stood between Waddle and the monsters. He did a hilarious dance, shaking his tail feathers and making funny faces. 'Look at my cheeky wiggle!' Cheeky sang. The monsters stopped. The dance was so funny that they forgot all about tickling! They lowered their guns and started dancing too! 'Wow, you have great moves!' the monsters squeaked. Kanga joined in, doing crazy kangaroo leaps. 'This is my genius dance of the stars!' Kanga shouted, landing headfirst in a bush.",
        illustrationPrompt: "A cute penguin doing a silly dance while little aliens imitate the moves and laugh in a grassy field.",
        illustrationPreset: {
          emoji: "🕺💃👾",
          bgColor: "bg-teal-50",
          borderColor: "border-teal-400",
          textColor: "text-teal-900"
        },
        choices: [
          { text: "Lead the dance line straight into the spaceship!", nextNodeId: "control_room" },
          { text: "Mummy Penguin arrives with baking trays of muffins!", nextNodeId: "victory_ending_feast" }
        ]
      },
      penguin_regenerate: {
        id: "penguin_regenerate",
        title: "Penguin's Glowing Spark!",
        text: "Penguin closed his eyes and concentrated. Since he is from Penguinpower, he has the special power to regenerate and fix things! His flippers began to glow with a bright, warm golden light. He touched the chewed control panel. ZIP-ZAP! A brand new pink marshmallow button grew back instantly! 'Wow!' Waddle squawked. 'You are a magic leader!' The spaceship stopped shaking and hovered gently. The pilot screen lit up, showing a map of the tickle planet, Penguinpower-Two!",
        illustrationPrompt: "A penguin with glowing golden flippers touching a high-tech candy control panel, making a marshmallow button grow.",
        illustrationPreset: {
          emoji: "✨🐧🎛️",
          bgColor: "bg-amber-50",
          borderColor: "border-amber-400",
          textColor: "text-amber-900"
        },
        choices: [
          { text: "Fly the spaceship to the Tickle Castle!", nextNodeId: "tickle_castle" },
          { text: "Press the red button to land the ship safely!", nextNodeId: "victory_ending_feast" }
        ]
      },
      spaceship_bounce: {
        id: "spaceship_bounce",
        title: "The Great Candy Bounce!",
        text: "The spaceship bounced up into the sky like a giant bouncy ball! 'WHEEE!' Waddle screamed, rolling around the ceiling. It bounced off a cloud, bounced off the chimney, and landed SPLAT in Mummy Penguin's giant baking bowl of chocolate cake batter! Cocoa splashed everywhere! Mummy Penguin looked at the spaceship, then at the animals covered in chocolate. 'My cake!' she gasped. Rhino licked his arm. 'Mmm, this is the best accident ever!' Kanga agreed, wearing a cake-batter hat.",
        illustrationPrompt: "A marshmallow spaceship stuck in a massive bowl of dark brown cake batter in a cozy kitchen.",
        illustrationPreset: {
          emoji: "🥣🍫🛸",
          bgColor: "bg-amber-100",
          borderColor: "border-amber-400",
          textColor: "text-amber-900"
        },
        choices: [
          { text: "Help bake a giant chocolate spaceship-cake!", nextNodeId: "victory_ending_feast" },
          { text: "Get stuck in the sticky chocolate mud!", nextNodeId: "defeat_ending_chocolate" }
        ]
      },
      mummy_soup_rescue: {
        id: "mummy_soup_rescue",
        title: "The Warm Noodle Shield!",
        text: "Mummy Penguin marched out carrying a giant steaming pot of her famous Penguinpower Noodle Soup. 'Nobody tickles my babies!' she yelled. She waved her ladle and handed bowls of soup to the tickle monsters. The warm, delicious smell filled the air. The monsters sniffled. They took a sip. 'Ooooh!' they squeaked. 'This is warmer than tickles! It makes our tummies feel cozy!' They dropped their feather dusters and sat on the grass, eating noodles with tiny spoons. Rhino joined them immediately.",
        illustrationPrompt: "A kind penguin mother serving steaming soup from a giant metal pot to small, happy furry monsters on grass.",
        illustrationPreset: {
          emoji: "🍜👩‍🍳👾",
          bgColor: "bg-orange-50",
          borderColor: "border-orange-400",
          textColor: "text-orange-900"
        },
        choices: [
          { text: "Eat soup and share story books with the monsters!", nextNodeId: "victory_ending_feast" }
        ]
      },
      surprise_scare: {
        id: "surprise_scare",
        title: "A Giant Surprise!",
        text: "Suddenly, the bucket on Kanga's head popped open. Surprise, who had been hiding in Kanga's pouch the whole time, jumped out! 'SURPRISE!!!' she screamed, throwing confetti in the air. The tickle monsters jumped ten feet into the air with a squeak! 'AAAH! A confetti explosion!' they cried. They scrambled back into their marshmallow spaceship, closed the door, and zoomed back into space, leaving a trail of purple smoke. Kanga cheered, 'I knew my genius pouch-monster would save the day!'",
        illustrationPrompt: "A penguin jumping out of a kangaroo pouch throwing colorful confetti, as fuzzy aliens run away toward their ship.",
        illustrationPreset: {
          emoji: "🎉🦘🐧",
          bgColor: "bg-yellow-50",
          borderColor: "border-yellow-400",
          textColor: "text-yellow-900"
        },
        choices: [
          { text: "Celebrate with a backyard dance party!", nextNodeId: "victory_ending_feast" }
        ]
      },
      tickle_castle: {
        id: "tickle_castle",
        title: "The Tickle Castle Vault!",
        text: "They flew the ship to the Tickle Castle in the sky! The castle was made of pink cotton candy. In the center was the Giant Tickle King, a monster as big as an elephant but fluffy like a cloud. 'Who dares enter my castle without laughing?' the King boomed. Rhino stepped forward, holding a sandwich. 'I dare! Because my mouth is too busy chewing to laugh!' The King stared at the sandwich. 'What is that magical brown thing? Can I have a bite?'",
        illustrationPrompt: "A giant, fluffy pink monster king sitting on a candy throne, looking with wide eyes at a rhino holding a sandwich.",
        illustrationPreset: {
          emoji: "🏰👑🥪",
          bgColor: "bg-fuchsia-50",
          borderColor: "border-fuchsia-400",
          textColor: "text-fuchsia-900"
        },
        choices: [
          { text: "Give the King a bite of Rhino's sandwich!", nextNodeId: "victory_ending_feast" },
          { text: "Waddle smashes the cotton candy throne!", nextNodeId: "wreck_castle_ending" }
        ]
      },
      victory_ending_feast: {
        id: "victory_ending_feast",
        title: "The Great Friendship Feast!",
        text: "The Tickle King loved the sandwich so much that he declared peace! 'Sandwiches are better than tickling!' he squeaked. Mummy Penguin arrived in her flying kitchen and baked a hundred peanut butter and marshmallow sandwiches for everyone. The monsters, the king, and the crew sat on fluffy clouds and ate together. Penguin got three golden stars for being a great leader, and Kanga got a crown for his silly jokes. You helped them read and saved the day! Amazing work!",
        illustrationPrompt: "Cute animals and alien monsters having a giant sandwich feast on a white cloud in a blue sky.",
        illustrationPreset: {
          emoji: "🎉⛅🥪",
          bgColor: "bg-sky-100",
          borderColor: "border-sky-500",
          textColor: "text-sky-950"
        },
        choices: [],
        isEnding: true,
        endingType: "victory"
      },
      wreck_castle_ending: {
        id: "wreck_castle_ending",
        title: "The Cotton Candy Collapse!",
        text: "Waddle Wrecking Ball got too excited! 'WRECKING BALL!' he squawked, rolling into the cotton candy walls. He smashed right through the main pillar! With a giant sticky squish, the entire Tickle Castle collapsed into a massive pile of sticky pink fluff. The crew was stuck! They looked like giant pink cotton-candy balls. Rhino opened his mouth and ate his way out. 'Mmm, strawberry castle!' he laughed. You got stuck in the candy, but it sure was delicious! Try again!",
        illustrationPrompt: "Animals trapped in sticky pink cotton candy fluff, looking like funny pink candy balls and laughing.",
        illustrationPreset: {
          emoji: "💥🍭🕸️",
          bgColor: "bg-fuchsia-100",
          borderColor: "border-fuchsia-400",
          textColor: "text-fuchsia-950"
        },
        choices: [],
        isEnding: true,
        endingType: "funny_trap"
      },
      defeat_ending_chocolate: {
        id: "defeat_ending_chocolate",
        title: "Stuck in the Cake Batter!",
        text: "The chocolate cake batter was too thick and sticky! The crew tried to pull their feet out, but they just got more stuck. Mummy Penguin shook her head. 'Since you are covered in cake, you must stay in the yard until the hose wash!' She turned on the sprinkler, and they got a cold, wet, but funny wash. Rhino fell asleep in a puddle, dreaming of a chocolate rainstorm. You didn't save the town from tickles, but you got a funny bath! Try again!",
        illustrationPrompt: "A rhino and a kangaroo getting washed with a garden sprinkler on green grass, looking wet but happy.",
        illustrationPreset: {
          emoji: "🚿🍫🦏",
          bgColor: "bg-amber-100",
          borderColor: "border-amber-400",
          textColor: "text-amber-950"
        },
        choices: [],
        isEnding: true,
        endingType: "defeat"
      },
      monster_talk: {
        id: "monster_talk",
        title: "The Alien Secret!",
        text: "The lead monster sniffled and wiped a tear. 'We are from Penguinpower-Two,' he explained. 'Our planet has no toys and no sandwiches. We only have feathers! We just wanted to make friends and hear you laugh!' Penguin felt soft in his heart. 'You don't need to tickle us to make us laugh! Kanga can just say a word, and we will laugh all day!' Kanga stood up and said, 'PICKLE-PANTS!' Everyone burst out laughing.",
        illustrationPrompt: "An alien monster looking sad, while a kangaroo stands on a chair pointing at his own pants and laughing.",
        illustrationPreset: {
          emoji: "👽👖😂",
          bgColor: "bg-teal-50",
          borderColor: "border-teal-400",
          textColor: "text-teal-900"
        },
        choices: [
          { text: "Invite them to stay for a backyard sandwich picnic!", nextNodeId: "victory_ending_feast" }
        ]
      }
    }
  },
  {
    id: "ghost_carnival",
    title: "Ghost Mode at the Haunted Carnival",
    description: "The roller coaster is running backward, and the popcorn is popping purple! Join Penguin, Rhino, and Snow Leopard as they use Ghost Mode to solve the carnival mystery!",
    difficulty: "Medium",
    coverEmoji: "🎡",
    startNodeId: "start",
    nodes: {
      start: {
        id: "start",
        title: "The Haunted Roller Coaster!",
        text: "The Penguinpower Carnival was full of flashing neon lights and the smell of hot cinnamon buns. But something was very wrong! The roller coaster tracks were glowing green, and the train was zooming backward! 'Spooky!' squawked Penguin, his crown slipping. Rhino was busy eating three hot dogs at once. 'Mmm, haunted hot dogs!' he mumbled. Suddenly, a little ghost with a neon-green sheet popped out of the ticket booth! 'Ooooo! Leave my carnival!' the ghost wailed. Kanga looked closer. 'Look! The ghost's sheet has a pocket! Maybe he has a sandwich in there!'",
        illustrationPrompt: "A neon green roller coaster running backward under a starry night sky, with a cute little cartoon ghost popping out.",
        illustrationPreset: {
          emoji: "🎡👻🎢",
          bgColor: "bg-slate-900",
          borderColor: "border-indigo-500",
          textColor: "text-indigo-200"
        },
        choices: [
          { text: "Activate GHOST MODE to talk to the ghost!", nextNodeId: "ghost_talk" },
          { text: "Ask Waddle Wrecking Ball to smash the control panel!", nextNodeId: "control_smash" }
        ]
      },
      ghost_talk: {
        id: "ghost_talk",
        title: "We Are Ghosts Too!",
        text: "The crew held hands. 'GHOST MODE!' Penguin squawked. A cool blue light wrapped around them, and they turned into friendly, glowing ghosts! They floated right up to the green ghost. 'Hello!' Kanga said, floating upside down. 'I am a ghost-kangaroo! I can leap through solid wood!' The green ghost gasped. 'Wow! You are very cool ghosts! I am not trying to be mean. I am just sad because nobody will play with me! Every time I try to ride the coaster, it runs away backward!' Rhino floated next to him. 'Do ghosts eat sandwiches?'",
        illustrationPrompt: "Cute glowing blue cartoon animal ghosts talking to a friendly little neon-green ghost in a carnival.",
        illustrationPreset: {
          emoji: "👻🤝💚",
          bgColor: "bg-slate-800",
          borderColor: "border-green-400",
          textColor: "text-green-200"
        },
        choices: [
          { text: "Help the green ghost ride the roller coaster!", nextNodeId: "coaster_ride" },
          { text: "Search the spooky Mirror Maze for clues!", nextNodeId: "mirror_maze" }
        ]
      },
      control_smash: {
        id: "control_smash",
        title: "Waddle's Steel Smash!",
        text: "Waddle Wrecking Ball got a wild look in his eyes. 'SMASH TIME!' he squawked. He rolled into a tight steel ball and launched himself at the main coaster controls. CRASH! The lever snapped, sparks flew like fireworks, and the glowing tracks turned bright purple! The roller coaster train stopped with a giant SQUEAK. But now, the cotton candy machine next to them started spinning super-fast, shooting giant pink sugar clouds into the air! Kanga cheered, 'Look! A sugar volcano!'",
        illustrationPrompt: "A shiny round steel penguin crashing into a control box with sparks flying, next to a spinning pink candy floss machine.",
        illustrationPreset: {
          emoji: "🎳💥🔌",
          bgColor: "bg-zinc-800",
          borderColor: "border-zinc-400",
          textColor: "text-zinc-200"
        },
        choices: [
          { text: "Ride the cotton candy clouds like a balloon!", nextNodeId: "candy_clouds" },
          { text: "Let Snow Leopard use her ice-claws to freeze the controls!", nextNodeId: "freeze_controls" }
        ]
      },
      coaster_ride: {
        id: "coaster_ride",
        title: "The Gravity-Defying Loop!",
        text: "They climbed into the front car of the roller coaster. Since they were still in Ghost Mode, they floated above the seats! The green ghost pulled the big lever. WHOOSH! The train shot forward, going up, down, and around in a massive loop-de-loop! Rhino's cheeks blew in the wind. 'WEEEEE!' he roared, holding onto a mustard bottle. Kanga yelled, 'If we go fast enough, we will loop right into tomorrow morning!' Suddenly, they saw a giant shadow on the tracks ahead! It was Waddle, stuck on a loop!",
        illustrationPrompt: "Animals riding a colorful roller coaster car looping in the air, with a round steel penguin stuck on the track ahead.",
        illustrationPreset: {
          emoji: "🎢💨🦏",
          bgColor: "bg-slate-950",
          borderColor: "border-pink-500",
          textColor: "text-pink-200"
        },
        choices: [
          { text: "Use Snow Leopard's super-strength to grab Waddle!", nextNodeId: "leopard_save" },
          { text: "Go full Ghost Mode to pass through Waddle safely!", nextNodeId: "pass_through_waddle" }
        ]
      },
      mirror_maze: {
        id: "mirror_maze",
        title: "The Maze of Funny Reflections!",
        text: "They entered the Mirror Maze. The walls were shiny glass. Kanga looked in a mirror and laughed. His reflection had a neck as long as a giraffe! 'Look, Penguin! I am a Kangaraffe! I can eat leaves from the highest clouds!' Rhino saw a mirror that made him look super skinny. 'Oh no! The mirror stole my sandwiches!' he cried. Suddenly, Cheeky jumped out from behind a mirror, wearing a funny clown nose. 'Cheeky!' Penguin squawked. 'Did you cause this green ghost mess?'",
        illustrationPrompt: "A kangaroo looking at a funny long-necked reflection in a wavy glass mirror inside a glowing neon maze.",
        illustrationPreset: {
          emoji: "🪞🤡🦘",
          bgColor: "bg-slate-900",
          borderColor: "border-purple-500",
          textColor: "text-purple-200"
        },
        choices: [
          { text: "Follow Cheeky's trail of clown noses!", nextNodeId: "clown_trail" },
          { text: "Shatter the illusion by singing a loud penguin song!", nextNodeId: "penguin_song" }
        ]
      },
      candy_clouds: {
        id: "candy_clouds",
        title: "The Sticky Sugar Flight!",
        text: "The pink cotton candy clouds carried them high into the night sky! They floated above the Ferris wheel. Rhino chewed on his cloud. 'Mmm, strawberry sky-boats!' he laughed. But the wind started blowing hard, carrying them toward the giant duck-pond at the edge of the park! Kanga tried to flap his ears like wings. 'If we sneeze together, the wind-power will blow us back!' Kanga suggested. Waddle rolled around inside the sticky pink cloud, looking like a pink steel ball.",
        illustrationPrompt: "Animals floating in the night sky on fluffy pink clouds, looking down at a brightly lit carnival.",
        illustrationPreset: {
          emoji: "☁️🍭🎡",
          bgColor: "bg-violet-950",
          borderColor: "border-pink-400",
          textColor: "text-pink-100"
        },
        choices: [
          { text: "Pop the cloud and slide down the Ferris wheel!", nextNodeId: "ferris_slide" },
          { text: "SPLAT into the giant water-duck pond!", nextNodeId: "duck_pond_ending" }
        ]
      },
      freeze_controls: {
        id: "freeze_controls",
        title: "The Ice-Frozen Carnival!",
        text: "Snow Leopard stepped forward, her white fur glowing. She blew a giant breath of freezing ice-air over the spinning cotton candy machine and the control box. WHOOSH! Everything froze instantly into a gorgeous, glittering ice castle! The sparks stopped, and the air smelled like cool mint. The green ghost clapped his hands. 'Wow! An ice park! I love ice!' Cheeky slid across the frozen ground on his tummy like a bobsled. 'Ice sliding!' Waddle cheered.",
        illustrationPrompt: "A white leopard breathing blue ice onto a carnival ride, turning it into a beautiful frozen ice structure.",
        illustrationPreset: {
          emoji: "❄️🏰🐆",
          bgColor: "bg-sky-950",
          borderColor: "border-sky-400",
          textColor: "text-sky-100"
        },
        choices: [
          { text: "Throw a frozen carnival ice-slide party!", nextNodeId: "victory_ending_carnival" }
        ]
      },
      leopard_save: {
        id: "leopard_save",
        title: "Snow Leopard's Flying Catch!",
        text: "Snow Leopard jumped from the ground, soaring fifty feet into the air! She grabbed Waddle with her soft paws just as the coaster train zoomed past. She landed gracefully on a giant pile of giant teddy bears in the prize booth. 'Got him!' she purred. Waddle giggled, 'That was better than a slide!' Rhino retrieved a giant blue teddy bear and tried to feed it a hot dog. Kanga clapped his hands. 'We are the kings of the teddy bears!' Mummy Penguin arrived with a bucket of hot popcorn.",
        illustrationPrompt: "A white leopard catching a steel penguin and landing on a huge pile of colorful stuffed teddy bears.",
        illustrationPreset: {
          emoji: "🐆🧸🎯",
          bgColor: "bg-slate-900",
          borderColor: "border-yellow-500",
          textColor: "text-yellow-200"
        },
        choices: [
          { text: "Celebrate with Mummy Penguin's sweet popcorn!", nextNodeId: "victory_ending_carnival" }
        ]
      },
      pass_through_waddle: {
        id: "pass_through_waddle",
        title: "The Ghostly Pass-Through!",
        text: "Penguin shouted, 'Keep Ghost Mode active!' They held on tight. The coaster train shot straight toward Waddle on the track. Instead of a crash, the train went POOF right through Waddle's steel body like a cool breeze! Waddle tickled as they passed through. 'Ooh-la-la!' Waddle giggled. The train slowed down and stopped perfectly at the station. The green ghost cheered, 'You did it! You solved the coaster mystery and made it safe!' Mummy Penguin clapped her flippers.",
        illustrationPrompt: "A glowing blue roller coaster train passing straight through a round steel penguin on a track.",
        illustrationPreset: {
          emoji: "👻🌀🛤️",
          bgColor: "bg-slate-950",
          borderColor: "border-teal-400",
          textColor: "text-teal-200"
        },
        choices: [
          { text: "Enjoy a safe, funny carnival party!", nextNodeId: "victory_ending_carnival" }
        ]
      },
      clown_trail: {
        id: "clown_trail",
        title: "The Cheeky Clown Show!",
        text: "They followed the trail of red clown noses out of the maze. It led them to the main stage. There, Cheeky was hosting a funny circus show for a crowd of squirrels and rabbits! He was juggling sandwiches while riding Waddle like a unicycle! 'Step right up!' Cheeky shouted. The green ghost floated onto the stage and began to dance. The crowd of animals cheered and threw confetti! Rhino ran onto the stage and caught a juggled sandwich in his mouth. 'NOM! Center stage!'",
        illustrationPrompt: "A penguin juggling sandwiches while riding a round metal penguin, with a green ghost dancing next to them.",
        illustrationPreset: {
          emoji: "🎪🤹‍♂️🐧",
          bgColor: "bg-slate-900",
          borderColor: "border-red-500",
          textColor: "text-red-200"
        },
        choices: [
          { text: "Join the circus and perform a grand reading show!", nextNodeId: "victory_ending_carnival" }
        ]
      },
      penguin_song: {
        id: "penguin_song",
        title: "The Squawking Penguin Opera!",
        text: "Penguin stood tall, cleared his throat, and sang a high-pitched Penguinpower opera song: 'SQUAWK-SQUAWK-YODEL-OM-NOM!' The sound was so funny and loud that the mirrors vibrated and slid open, revealing a secret door! Behind the door was Mummy Penguin, who had been setting up a surprise birthday party for the green ghost! 'Hooray!' Mummy Penguin said. 'You found the party room!' The green ghost gasped. 'A party? For ME?!' He began to dance with joy.",
        illustrationPrompt: "A penguin singing with wide open beak, while mirrors slide away revealing a beautiful birthday party table with a cake.",
        illustrationPreset: {
          emoji: "🎤🎂🐧",
          bgColor: "bg-slate-800",
          borderColor: "border-pink-500",
          textColor: "text-pink-200"
        },
        choices: [
          { text: "Blow out the candles on the ghost cake!", nextNodeId: "victory_ending_carnival" }
        ]
      },
      ferris_slide: {
        id: "ferris_slide",
        title: "The Great Ferris Wheel Slide!",
        text: "They popped their cotton candy cloud and dropped onto the top seat of the giant Ferris wheel. From there, they slid down the metal rails like a massive playground slide! 'WEEEEE!' Kanga cheered. They landed softly in Mummy Penguin's open arms. 'Oh my goodness!' she laughed, shaking the pink sugar out of their hair. She handed them hot cinnamon rolls. 'Here is some real food for my brave adventurers!' Rhino ate three rolls in one bite. 'Mmm, cinnamon! Saved my life!'",
        illustrationPrompt: "Animals sliding down the side of a giant, glowing blue Ferris wheel toward a mother penguin holding a tray of rolls.",
        illustrationPreset: {
          emoji: "🎡🛝🥐",
          bgColor: "bg-indigo-950",
          borderColor: "border-amber-400",
          textColor: "text-amber-100"
        },
        choices: [
          { text: "Have a delicious cinnamon roll feast!", nextNodeId: "victory_ending_carnival" }
        ]
      },
      victory_ending_carnival: {
        id: "victory_ending_carnival",
        title: "The Carnival Heroes!",
        text: "The green ghost was so happy to have friends that he turned the coaster green tracks back to safe gold. Mummy Penguin fed everyone hot cinnamon rolls, popcorn, and peanut butter sandwiches. The green ghost gave the crew a lifetime pass to the carnival! Kanga wore three giant teddy bears like a suit. 'I am the teddy bear king!' he shouted. You got five stars for your amazing reading skills! The carnival is saved, and everyone is laughing! The End!",
        illustrationPrompt: "A happy green ghost, a penguin with a crown, a kangaroo, and a white leopard holding teddy bears under carnival lights.",
        illustrationPreset: {
          emoji: "🎡🏆🍿",
          bgColor: "bg-slate-900",
          borderColor: "border-green-500",
          textColor: "text-green-200"
        },
        choices: [],
        isEnding: true,
        endingType: "victory"
      },
      duck_pond_ending: {
        id: "duck_pond_ending",
        title: "The Giant Duck Pond Splash!",
        text: "SPLAT! They fell right into the giant yellow plastic duck pond. Water splashed fifty feet into the air! Waddle floated on his back like a metal buoy. Rhino sat in the water, wearing a giant plastic duck on his head. 'I am a duck-rhino! Quack!' he roared happily. Mummy Penguin ran over with warm towels. 'Oh you silly billies!' she laughed. You got wet, but you had a great splash! Try again to see if you can solve the coaster mystery!",
        illustrationPrompt: "A rhino with a yellow rubber duck on his head sitting in a shallow carnival water pool, laughing.",
        illustrationPreset: {
          emoji: "🦆🌊🦏",
          bgColor: "bg-indigo-900",
          borderColor: "border-yellow-400",
          textColor: "text-yellow-100"
        },
        choices: [],
        isEnding: true,
        endingType: "funny_trap"
      }
    }
  },
  {
    id: "mountain_treasure",
    title: "Snow Leopard's Secret Mountain",
    description: "Snow Leopard has invited the crew to the frosty peak of Mount Penguinpower! But a playful marshmallow blizzard is coming, and Rhino keeps stopping for snacks!",
    difficulty: "Medium",
    coverEmoji: "🏔️",
    startNodeId: "start",
    nodes: {
      start: {
        id: "start",
        title: "The Cold Mountain Climb!",
        text: "The mountain was tall, covered in glittering blue ice and fluffy white snow. Snow Leopard stood on a rock, her tail waving. 'Come on, crew!' she called. 'The secret peak is just ahead!' Rhino chattered his teeth. 'Brrr! My toes are frozen! I need a double-decker peanut butter sandwich to warm them up!' Kanga jumped into a snowbank. 'If we leap like frogs, the wind can't catch us!' Kanga shouted. Suddenly, the wind started to howl: 'WHOOOO!' A fluffy white marshmallow blizzard was coming!",
        illustrationPrompt: "A kangaroo jumping in high snow on a beautiful blue ice mountain, with a white leopard standing on a peak.",
        illustrationPreset: {
          emoji: "🏔️❄️🦘",
          bgColor: "bg-blue-50",
          borderColor: "border-blue-400",
          textColor: "text-blue-900"
        },
        choices: [
          { text: "Slide down the Ice Slide to find shelter!", nextNodeId: "ice_slide" },
          { text: "Enter the mysterious Whispering Caves!", nextNodeId: "caves_enter" }
        ]
      },
      ice_slide: {
        id: "ice_slide",
        title: "The Super-Fast Glacier Slide!",
        text: "They jumped onto a smooth, curved glacier of blue ice. 'WEEEEE!' Penguin squawked, sliding on his round belly like a bobsled! Rhino sat behind him, holding a loaf of bread, sliding on his big bottom. Waddle tucked in and rolled like a steel marble, bouncing off the sides with a loud CLANG! They zoomed down the mountain, leaving a trail of sparkling ice-dust. But ahead, the slide split into two tunnels! One tunnel was lit by blue crystals, and the other smelled like hot chocolate!",
        illustrationPrompt: "Animals sliding fast down a curving blue ice slide on a snow-covered mountain, laughing.",
        illustrationPreset: {
          emoji: "🛝❄️🐧",
          bgColor: "bg-cyan-50",
          borderColor: "border-cyan-400",
          textColor: "text-cyan-900"
        },
        choices: [
          { text: "Go down the glowing Crystal Blue tunnel!", nextNodeId: "crystal_tunnel" },
          { text: "Follow the sweet smell of Hot Chocolate!", nextNodeId: "chocolate_tunnel" }
        ]
      },
      caves_enter: {
        id: "caves_enter",
        title: "The Caves of the Echoes!",
        text: "They stepped into the dark, cozy cave. The walls were made of dry brown rock. 'Hello!' Penguin shouted. 'HELLO-ELLO-LO!' the cave echoed back. Rhino giggled and yelled, 'I want a sandwich!' 'SANDWICH-WICH-CH!' the cave shouted. Rhino gasped, 'The cave wants a sandwich too! It is a sandwich-cave!' Kanga tried to build a small campfire out of icicles. 'If we rub these icicles together, we will get cold-fire!' Kanga explained. Suddenly, they saw a pair of glowing yellow eyes in the dark!",
        illustrationPrompt: "Cute animals inside a rocky dark cave looking at two glowing yellow cartoon eyes in the background.",
        illustrationPreset: {
          emoji: "🕳️🦇👀",
          bgColor: "bg-stone-100",
          borderColor: "border-stone-400",
          textColor: "text-stone-900"
        },
        choices: [
          { text: "Go into Ghost Mode to float invisibly past the eyes!", nextNodeId: "ghost_eyes" },
          { text: "Ask Waddle to smash a boulder to make a light!", nextNodeId: "waddle_light" }
        ]
      },
      crystal_tunnel: {
        id: "crystal_tunnel",
        title: "The Glowing Crystal Chamber!",
        text: "The crystal tunnel led to a massive, glowing blue room. Crystals as big as pine trees hung from the ceiling, shining like stars. Sitting on a crystal rock was a giant, friendly Yeti! He was wearing a tiny red woolly hat that barely fit his big head. 'Brrr!' the Yeti shivered. 'I lost my warm blanket!' Kanga hopped over. 'Don't worry, Mr. Yeti! I will build you a blanket out of kangaroo jokes!' Rhino reached into his backpack. 'Or... we can share a warm toasted cheese sandwich!'",
        illustrationPrompt: "A giant, friendly white furry Yeti monster wearing a tiny red beanie hat, sitting on glowing blue crystal rocks.",
        illustrationPreset: {
          emoji: "❄️👹💎",
          bgColor: "bg-sky-50",
          borderColor: "border-sky-400",
          textColor: "text-sky-900"
        },
        choices: [
          { text: "Give the Yeti a warm toasted sandwich!", nextNodeId: "toast_yeti" },
          { text: "Let Snow Leopard wrap the Yeti in her warm tail!", nextNodeId: "tail_yeti" }
        ]
      },
      chocolate_tunnel: {
        id: "chocolate_tunnel",
        title: "The Chocolate River!",
        text: "The tunnel opened up to a secret kitchen inside the mountain. There was Mummy Penguin, standing next to a steaming, bubbling river of real hot chocolate! 'Welcome, adventurers!' she smiled, waving her ladle. 'I knew you would be cold!' She handed them giant mugs with floating marshmallows as big as pillows. Rhino jumped right into a mug of cocoa! 'I am a marshmallow-rhino!' he cheered, munching on the foam. Waddle rolled into a chocolate fountain, getting covered in sweet brown cream.",
        illustrationPrompt: "A warm kitchen cave with a river of dark hot chocolate, with a rhino floating in a giant mug with marshmallows.",
        illustrationPreset: {
          emoji: "🍫☕👩‍🍳",
          bgColor: "bg-amber-100",
          borderColor: "border-amber-400",
          textColor: "text-amber-900"
        },
        choices: [
          { text: "Help Mummy Penguin bake mountain cookies!", nextNodeId: "victory_ending_mountain" },
          { text: "Roll down the cookie-dough hill with Waddle!", nextNodeId: "dough_slide" }
        ]
      },
      ghost_eyes: {
        id: "ghost_eyes",
        title: "The Ghostly Peek-a-Boo!",
        text: "The crew activated Ghost Mode! 'GHOSTS!' they squawked. They turned into blue glowing spirits and floated toward the glowing eyes. It wasn't a monster at all! It was Cheeky, wearing a spooky mask and holding a flashlight! 'AHA-HA!' Cheeky laughed. 'I got you!' Rhino, still a ghost, floated through Cheeky's chest. 'That tickles!' Cheeky giggled, dropping his flashlight. Behind Cheeky was a secret map of the mountain treasure!",
        illustrationPrompt: "A cheeky penguin holding a flashlight and looking surprised at cartoon animal ghosts floating around him in a cave.",
        illustrationPreset: {
          emoji: "👻🔦🐧",
          bgColor: "bg-zinc-800",
          borderColor: "border-zinc-500",
          textColor: "text-zinc-200"
        },
        choices: [
          { text: "Follow the treasure map to the Mountain Peak!", nextNodeId: "treasure_peak" },
          { text: "Float back outside to escape the dark cave!", nextNodeId: "ice_slide" }
        ]
      },
      waddle_light: {
        id: "waddle_light",
        title: "The Sparkling Light Show!",
        text: "Waddle Wrecking Ball rolled backward, then crashed into a giant glowing crystal boulder. CRASH! The boulder shattered into thousands of tiny, sparkling diamonds that floated in the air like stars, lighting up the entire cave. The yellow eyes belonged to a cute baby snow-leopard! She was cuddling a giant blue chest. 'You found my toy box!' she peeped. Snow Leopard purred and licked her baby sister's ears. Kanga danced, 'I am the diamond king of the cave!'",
        illustrationPrompt: "Sparkling diamond dust floating in a dark cave, illuminating a baby white leopard next to a big blue treasure chest.",
        illustrationPreset: {
          emoji: "💎🦁📦",
          bgColor: "bg-slate-800",
          borderColor: "border-blue-400",
          textColor: "text-blue-200"
        },
        choices: [
          { text: "Open the baby leopard's toy box!", nextNodeId: "open_box" }
        ]
      },
      toast_yeti: {
        id: "toast_yeti",
        title: "The Melting Cheese Miracle!",
        text: "Rhino pulled out his special toaster-sandwich and handed it to the Yeti. The Yeti took a big bite. 'MMM-NOM!' the Yeti chewed. The hot, gooey steel-cheese warmed up his tummy instantly! A big warm steam cloud puffed out of his ears. 'I am warm!' the Yeti roared with a happy smile. He was so happy that he gave the crew a ride on his big shoulders, carrying them straight up to the mountain summit through the marshmallow blizzard!",
        illustrationPrompt: "A giant white Yeti carrying a rhino and a penguin on his shoulders, walking happily through a soft white snowstorm.",
        illustrationPreset: {
          emoji: "👹🎒🦏",
          bgColor: "bg-blue-50",
          borderColor: "border-blue-400",
          textColor: "text-blue-900"
        },
        choices: [
          { text: "Plant the Penguinpower flag on the mountain peak!", nextNodeId: "victory_ending_mountain" }
        ]
      },
      tail_yeti: {
        id: "tail_yeti",
        title: "The Warm Leopard Hug!",
        text: "Snow Leopard stepped forward and wrapped her massive, fluffy white tail around the shivering Yeti like a warm winter scarf. 'Cozy leopard hug!' she purred. The Yeti stopped shivering and smiled. 'Thank you, pretty cat!' he said. To thank them, the Yeti pointed to a secret frozen doorway in the crystal wall. 'The treasure is behind that door!' he whispered. Waddle ran up, 'Let me smash it!'",
        illustrationPrompt: "A white leopard wrapping her long fluffy tail around a smiling white Yeti monster in a crystal cave.",
        illustrationPreset: {
          emoji: "🐆🧣👹",
          bgColor: "bg-sky-50",
          borderColor: "border-sky-400",
          textColor: "text-sky-900"
        },
        choices: [
          { text: "Let Waddle smash open the frozen doorway!", nextNodeId: "open_box" }
        ]
      },
      treasure_peak: {
        id: "treasure_peak",
        title: "The Mountain Summit Treasure!",
        text: "Following the map, they reached the very top of Mount Penguinpower. The sky was bright blue, and the stars were so close they looked like glowing toys. Sitting on a stone altar was the mountain treasure: a golden lunchbox! Rhino gasped and ran to open it. Inside, there was no gold or diamonds. Instead, there was a pile of infinite-fresh peanut butter, banana, and marshmallow sandwiches! 'THE HOLY GRAL OF SANDWICHES!' Rhino cheered, falling to his knees in happiness.",
        illustrationPrompt: "A golden lunchbox sitting on a stone altar on a mountain summit, shining light onto a happy, drooling rhino.",
        illustrationPreset: {
          emoji: "⛰️👑🥪",
          bgColor: "bg-indigo-50",
          borderColor: "border-indigo-400",
          textColor: "text-indigo-900"
        },
        choices: [
          { text: "Have the highest picnic in the world!", nextNodeId: "victory_ending_mountain" }
        ]
      },
      open_box: {
        id: "open_box",
        title: "The Box of Magic Toys!",
        text: "Waddle rolled and smashed the box open! Inside, there were dozens of magical toys that floated in the air: glowing space tops, bubble wands that painted the air, and a mini-zeppelin that flew by itself. Kanga grabbed a space top and tried to spin it on his nose. 'If I spin this fast enough, my nose will become a helicopter!' Kanga shouted. Snow Leopard and her baby sister laughed, chasing the floating bubbles. It was the best toy room ever!",
        illustrationPrompt: "Magical toys, spinning tops, and colorful bubble wands floating in the air of a cozy cave, with a kangaroo and leopards playing.",
        illustrationPreset: {
          emoji: "🧸🎈✨",
          bgColor: "bg-violet-50",
          borderColor: "border-violet-400",
          textColor: "text-violet-900"
        },
        choices: [
          { text: "Have a giant toy party with the Yeti and baby leopards!", nextNodeId: "victory_ending_mountain" }
        ]
      },
      dough_slide: {
        id: "dough_slide",
        title: "The Sticky Cookie Trap!",
        text: "Kanga and Waddle jumped onto the giant hill of cookie dough that Mummy Penguin had prepared. They started to slide, but the dough was super sticky! 'Oh no! Sticky dough!' Waddle squawked. They rolled and rolled, picking up sugar and sprinkles, until they were two giant, walking ginger-penguin cookies! Rhino saw them and chased them with a fork. 'Mmm, moving cookies!' he roared. They got stuck in the sweet, gooey dough and couldn't wiggle free!",
        illustrationPrompt: "A kangaroo and a steel penguin completely covered in cookie dough and colorful sugar sprinkles, looking like funny cookies.",
        illustrationPreset: {
          emoji: "🍪🤠🐧",
          bgColor: "bg-amber-100",
          borderColor: "border-amber-400",
          textColor: "text-amber-950"
        },
        choices: [
          { text: "Wait for Mummy Penguin to bake you out!", nextNodeId: "defeat_ending_dough" }
        ]
      },
      victory_ending_mountain: {
        id: "victory_ending_mountain",
        title: "The Mountain Kings and Queens!",
        text: "They had the ultimate sandwich and cookie picnic on the very peak of Mount Penguinpower! The Yeti, Snow Leopard's family, and the crew sat in a big circle. Mummy Penguin served hot cocoa, and everyone wore funny woolly hats. Kanga got a giant golden medal for being a silly genius, and Rhino got a trophy shaped like a sandwich. You read so well that you unlocked the peak! You got five stars! Fantastic job!",
        illustrationPrompt: "A happy group of animals and a giant Yeti sitting on a snow peak eating sandwiches and drinking cocoa under a sunny sky.",
        illustrationPreset: {
          emoji: "🏔️🏆🎉",
          bgColor: "bg-sky-100",
          borderColor: "border-sky-500",
          textColor: "text-sky-950"
        },
        choices: [],
        isEnding: true,
        endingType: "victory"
      },
      defeat_ending_dough: {
        id: "defeat_ending_dough",
        title: "The Great Cookie Nap!",
        text: "Mummy Penguin sighed and shook her head at her cookie-covered babies. 'Well, since you are already sweet, you can have a nap!' She wrapped them in warm kitchen towels and let them sleep by the warm oven. Rhino curled up next to the cookie tray and snored happily. You got sticky and sweet, but you didn't reach the summit treasure! Try again to see if you can make it to the top of Mount Penguinpower!",
        illustrationPrompt: "Animals wrapped in towels sleeping cozy next to a modern warm oven in a kitchen cave.",
        illustrationPreset: {
          emoji: "💤🍪👩‍🍳",
          bgColor: "bg-amber-50",
          borderColor: "border-amber-400",
          textColor: "text-amber-950"
        },
        choices: [],
        isEnding: true,
        endingType: "funny_trap"
      }
    }
  },
  {
    id: "kitchen_chaos",
    title: "Mummy Penguin's Secret Recipe",
    description: "Mummy Penguin is baking a 100-foot-tall cake for the Penguinpower Festival, but she needs the secret steel-sugar! Can the crew dig it up in time?",
    difficulty: "Fun",
    coverEmoji: "🎂",
    startNodeId: "start",
    nodes: {
      start: {
        id: "start",
        title: "The Big Festival Bake!",
        text: "Mummy Penguin was standing on a giant ladder, stirring a bowl of cake batter as big as a swimming pool! 'I need the magic steel-sugar from the underground mines!' she squawked. 'Without it, the cake will fall flat like a pancake!' Penguin stood tall. 'I will lead the sugar-quest!' Waddle rolled around, 'I love digging! My steel belly can break any rock!' Rhino was licking the cake-spoon. 'I will come to taste-test the sugar!' Kanga looked into a sugar-shaker. 'If we crawl into the shaker, we will grow tiny as ants and ride on sugar-bugs!' Kanga declared. How should they dig?",
        illustrationPrompt: "An enormous mother penguin on a tall ladder stirring a swimming-pool-sized mixing bowl in a warm kitchen.",
        illustrationPreset: {
          emoji: "🎂👩‍🍳🐧",
          bgColor: "bg-amber-50",
          borderColor: "border-amber-400",
          textColor: "text-amber-900"
        },
        choices: [
          { text: "Let Waddle roll like a drill down the Mine Shaft!", nextNodeId: "mine_drill" },
          { text: "Slide down the crazy Sugar Conveyor Belt!", nextNodeId: "conveyor_belt" }
        ]
      },
      mine_drill: {
        id: "mine_drill",
        title: "Waddle the Mega-Drill!",
        text: "Waddle Wrecking Ball tucked in his head, turned into a shiny steel ball, and started spinning super-fast. 'DRILL MODE ACTIVATED!' he screamed. With a loud ZZZT-BOOM, Waddle launched himself into the ground! He drilled a perfect round tunnel deep into the mountain, leaving a trail of sparkling sugar-crystals. Kanga and Penguin slid down behind him, holding their ears. Rhino slid on his belly, eating sugar-dust. 'Mmm, sweet snow!' Rhino cheered. Suddenly, they popped out into a glowing purple cave filled with sugar-crystals!",
        illustrationPrompt: "A round steel penguin spinning fast like a drill, creating a tunnel with sparkling sugar dust flying around.",
        illustrationPreset: {
          emoji: "🌀⛏️💎",
          bgColor: "bg-purple-50",
          borderColor: "border-purple-400",
          textColor: "text-purple-900"
        },
        choices: [
          { text: "Check the Sugar-Goblin's secret vaults!", nextNodeId: "goblin_vault" },
          { text: "Go into Ghost Mode to float through the crystal walls!", nextNodeId: "crystal_ghost" }
        ]
      },
      conveyor_belt: {
        id: "conveyor_belt",
        title: "The Wild Conveyor Ride!",
        text: "They jumped onto the sugar-factory conveyor belt. It was moving super-fast! They zoomed past giant marshmallow stamping machines and chocolate fountains. 'Hold on to your hats!' Penguin squawked, his crown sliding. Rhino stood under a chocolate fountain, opening his mouth wide. 'NOM NOM NOM! Liquid chocolate river!' he roared. Kanga tried to ride on a passing gingerbread man. 'If I press his button, he will turn into a rocket horse!' Kanga yelled. Ahead, the belt was heading straight into a giant dough-kneader!",
        illustrationPrompt: "Animals zooming on a fast conveyor belt in a colorful candy factory, with a chocolate waterfall in the background.",
        illustrationPreset: {
          emoji: "🎢🍫🏃‍♂️",
          bgColor: "bg-pink-50",
          borderColor: "border-pink-400",
          textColor: "text-pink-900"
        },
        choices: [
          { text: "Jump off the belt into the marshmallow pit!", nextNodeId: "marshmallow_pit" },
          { text: "Let Waddle smash the emergency stop button!", nextNodeId: "emergency_stop" }
        ]
      },
      goblin_vault: {
        id: "goblin_vault",
        title: "Meeting the Sugar-Goblin!",
        text: "In the center of the purple cave stood a tiny, green goblin wearing a sugar-cube crown. He was guarding a giant chest of glittering steel-sugar. 'Stop!' the goblin squeaked, waving a giant candy cane. 'Nobody takes my sugar unless they can answer my riddle!' Penguin nodded, 'We are ready!' Kanga stepped forward, 'I am a genius! Ask me!' The goblin grinned: 'What is round, made of metal, and loves to smash things?' Kanga tapped his chin. 'Is it a shiny metal orange?'",
        illustrationPrompt: "A tiny green sugar goblin with a sugar crown waving a candy cane in a glowing purple cavern.",
        illustrationPreset: {
          emoji: "👺👑🍬",
          bgColor: "bg-violet-50",
          borderColor: "border-violet-400",
          textColor: "text-violet-900"
        },
        choices: [
          { text: "Shout out the correct answer: 'Waddle Wrecking Ball!'", nextNodeId: "riddle_correct" },
          { text: "Let Waddle smash the goblin's candy cane!", nextNodeId: "goblin_smash" }
        ]
      },
      crystal_ghost: {
        id: "crystal_ghost",
        title: "The Ghostly Crystal Flight!",
        text: "The crew activated Ghost Mode! They turned into glowing blue spirits and floated right through a solid wall of purple sugar-crystal. On the other side, they found a secret cavern. Hanging from the ceiling was the Legendary Steel-Sugar Star! It shone so bright it made their eyes sparkle. But it was guarded by a sleeping sugar-dragon! The dragon was snoring, puffing out sweet strawberry-scented pink clouds. Rhino floated toward the dragon's nose, trying to sniff the sweet scent.",
        illustrationPrompt: "Glowing blue animal ghosts floating in a cavern near a sleeping pink cartoon dragon who is puffing heart-shaped clouds.",
        illustrationPreset: {
          emoji: "👻🐉✨",
          bgColor: "bg-fuchsia-50",
          borderColor: "border-fuchsia-400",
          textColor: "text-fuchsia-900"
        },
        choices: [
          { text: "Grab the sugar-star quietly in Ghost Mode!", nextNodeId: "grab_star_ghost" },
          { text: "Tickle the dragon's nose with a sugar-feather!", nextNodeId: "tickle_dragon" }
        ]
      },
      marshmallow_pit: {
        id: "marshmallow_pit",
        title: "The Soft Marshmallow Cushion!",
        text: "They leaped off the conveyor belt and landed PLOP in a massive pit filled with millions of soft, white mini-marshmallows! It felt like landing on a giant warm bed. Rhino lay on his back, throwing marshmallows into the air and catching them in his mouth. 'I am in marshmallow heaven!' he cheered. Cheeky was already there, throwing marshmallow snowballs at Waddle. Kanga tried to build a marshmallow kangaroo family. 'Look! They are my sweet kids! They don't jump, but they are very tasty!'",
        illustrationPrompt: "Cartoon animals playing happily in a giant swimming pool filled with white mini-marshmallows.",
        illustrationPreset: {
          emoji: "🏊‍♂️🤍🍡",
          bgColor: "bg-stone-50",
          borderColor: "border-stone-400",
          textColor: "text-stone-900"
        },
        choices: [
          { text: "Find the hidden sugar-key in the marshmallows!", nextNodeId: "find_key" },
          { text: "Eat so many marshmallows that you can't move!", nextNodeId: "defeat_ending_sugar" }
        ]
      },
      emergency_stop: {
        id: "emergency_stop",
        title: "Waddle's Steel Slam!",
        text: "Waddle rolled and slammed into the giant red emergency stop button on the wall. DING! The conveyor belt stopped instantly, launching Kanga and Penguin flying through the air! They did three flips and landed perfectly in a giant sack of sweet steel-sugar that sat on a forklift. 'Wow!' Penguin squawked, adjusting his crown. 'That is exactly what we needed!' Suddenly, the forklift started to roll down a ramp toward the kitchen! Kanga grabbed the wheel.",
        illustrationPrompt: "A kangaroo driving a yellow forklift carrying a giant sack of sugar, with a penguin holding on for dear life.",
        illustrationPreset: {
          emoji: "🚜🌾🐧",
          bgColor: "bg-yellow-50",
          borderColor: "border-yellow-400",
          textColor: "text-yellow-900"
        },
        choices: [
          { text: "Steer the forklift straight into the kitchen!", nextNodeId: "forklift_kitchen" }
        ]
      },
      riddle_correct: {
        id: "riddle_correct",
        title: "The Goblin's Happy Dance!",
        text: "Penguin squawked, 'The answer is Waddle Wrecking Ball!' The sugar-goblin's eyes lit up with joy. 'CORRECT!' he squeaked. He was so happy that he started doing a silly tap-dance on a sugar cube. He unlocked the chest and handed the crew a giant, sparkling crystal of steel-sugar. 'You are the smartest readers in Penguinpower!' the goblin praised. Snow Leopard leaped in, 'I will carry this heavy crystal! Let us run back to Mummy Penguin!'",
        illustrationPrompt: "A green goblin dancing on a sugar cube, while a white leopard carries a giant shiny purple crystal.",
        illustrationPreset: {
          emoji: "💃👹🔮",
          bgColor: "bg-purple-50",
          borderColor: "border-purple-400",
          textColor: "text-purple-900"
        },
        choices: [
          { text: "Race back to Mummy Penguin's kitchen!", nextNodeId: "forklift_kitchen" }
        ]
      },
      goblin_smash: {
        id: "goblin_smash",
        title: "Smashing the Candy Cane!",
        text: "Waddle got too excited and rolled right into the goblin's giant candy cane. CRASH! The candy cane broke into five pieces of sweet peppermint. The goblin gasped, 'My weapon!' But instead of getting angry, he picked up a piece and licked it. 'Mmm, peppermint!' he giggled. He opened the chest and handed them the sugar. 'You are very chaotic, but I like peppermint!' Rhino grabbed a piece of candy cane too. 'Peppermint sandwich!' he cheered.",
        illustrationPrompt: "A metal penguin next to a broken giant candy cane, with a little goblin eating a piece and smiling.",
        illustrationPreset: {
          emoji: "💥🍭👹",
          bgColor: "bg-red-50",
          borderColor: "border-red-400",
          textColor: "text-red-900"
        },
        choices: [
          { text: "Hurry back to Mummy Penguin with the sugar!", nextNodeId: "forklift_kitchen" }
        ]
      },
      grab_star_ghost: {
        id: "grab_star_ghost",
        title: "The Ghostly Heist!",
        text: "Floating silently, Penguin grabbed the glowing Steel-Sugar Star with his ghostly flippers. Since they were ghosts, the star became light as a feather! They floated right back through the crystal wall, leaving the dragon snoring happily. Once they were back in the tunnel, they deactivated Ghost Mode. The sugar-star was solid and sparkling in Penguin's hands! 'We got it!' Waddle squawked. 'Let's bake!'",
        illustrationPrompt: "A glowing blue penguin holding a bright golden star-shaped crystal, floating away from a sleeping pink dragon.",
        illustrationPreset: {
          emoji: "👻⭐🐧",
          bgColor: "bg-fuchsia-50",
          borderColor: "border-fuchsia-400",
          textColor: "text-fuchsia-900"
        },
        choices: [
          { text: "Run to the kitchen to bake the giant cake!", nextNodeId: "forklift_kitchen" }
        ]
      },
      tickle_dragon: {
        id: "tickle_dragon",
        title: "The Dragon's Sneeze!",
        text: "Kanga tried to be funny and tickled the sleeping dragon's nose with a sugar-crystal. 'ACHOO!!!' The dragon sneezed a giant pink blast of strawberry smoke! The smoke blew the crew right out of the cave and sent them sliding down the mountain, landing SPLAT on Mummy Penguin's kitchen patio! The sugar-star flew out of Kanga's hand and landed perfectly in Mummy Penguin's mixing bowl! Mummy Penguin laughed, 'What a fast delivery!'",
        illustrationPrompt: "A happy pink dragon sneezing strawberry smoke, sending animals sliding down a snowy hill toward a kitchen patio.",
        illustrationPreset: {
          emoji: "🤧🐉🥣",
          bgColor: "bg-pink-50",
          borderColor: "border-pink-400",
          textColor: "text-pink-900"
        },
        choices: [
          { text: "Help Mummy Penguin bake the final cake!", nextNodeId: "forklift_kitchen" }
        ]
      },
      find_key: {
        id: "find_key",
        title: "The Sugar Key Discovery!",
        text: "Rhino searched the marshmallow pit and found a glowing key made of solid chocolate! 'Look! Chocolate key!' he cheered. They used the key to open a secret cupboard, and inside was a sack of Mummy Penguin's steel-sugar! Waddle rolled under the sack and lifted it on his round metal back. 'Let's carry it home!' he squawked. Cheeky hopped on the sack, waving a flag. 'To the kitchen!' they cheered.",
        illustrationPrompt: "A rhino holding a brown chocolate key, with a steel penguin carrying a giant white sack on his back.",
        illustrationPreset: {
          emoji: "🔑🍫🦏",
          bgColor: "bg-amber-50",
          borderColor: "border-amber-400",
          textColor: "text-amber-900"
        },
        choices: [
          { text: "Drive the sugar sack home on the forklift!", nextNodeId: "forklift_kitchen" }
        ]
      },
      forklift_kitchen: {
        id: "forklift_kitchen",
        title: "The Great Cake Assembly!",
        text: "They arrived in the kitchen with the steel-sugar. Mummy Penguin dumped it into the swimming-pool-sized bowl and stirred with a giant paddle. Instantly, the batter rose and baked into a magnificent 100-foot-tall cake! The cake had layers of chocolate, peanut butter, and marshmallow, decorated with glowing sugar stars. Waddle rolled around the base, putting on frosting. Kanga wore a giant strawberry on his head. 'I am the strawberry king of the festival!' Kanga laughed.",
        illustrationPrompt: "All the animal friends decorating a massive, beautiful multi-tiered cake that goes up to the ceiling in a kitchen.",
        illustrationPreset: {
          emoji: "🎂🍓✨",
          bgColor: "bg-pink-50",
          borderColor: "border-pink-400",
          textColor: "text-pink-900"
        },
        choices: [
          { text: "Eat the giant festival cake with all of Penguinpower!", nextNodeId: "victory_ending_cake" }
        ]
      },
      victory_ending_cake: {
        id: "victory_ending_cake",
        title: "The Sweetest Festival Victory!",
        text: "The Penguinpower Festival was a massive success! The entire town came to eat Mummy Penguin's giant cake. The cake was so delicious that it made everyone sing and dance. Waddle got a crown made of chocolate, Kanga got a medal for his funny strawberry hat, and Rhino ate forty pieces of cake! Penguin stood tall and squawked, 'We are the best readers and cake-bakers in the world!' You got five stars for your excellent reading! You won! The End!",
        illustrationPrompt: "A huge crowd of animals and monsters dancing around a giant cake in a beautiful sunny town square.",
        illustrationPreset: {
          emoji: "🥳🎂🏆",
          bgColor: "bg-pink-100",
          borderColor: "border-pink-500",
          textColor: "text-pink-950"
        },
        choices: [],
        isEnding: true,
        endingType: "victory"
      },
      defeat_ending_sugar: {
        id: "defeat_ending_sugar",
        title: "The Marshmallow Sleepover!",
        text: "Rhino and Waddle ate so many marshmallows that their tummies were completely round! They couldn't move or wiggle. They lay in the marshmallow pit, rubbing their tummies and snoring. 'Cozy... sugar... nap...' Rhino mumbled. Mummy Penguin had to come and tuck them in with marshmallow blankets. You got too full to finish the cake! Try again to see if you can help Mummy Penguin bake the 100-foot cake!",
        illustrationPrompt: "Cute animals sleeping on top of a mountain of soft white marshmallows under warm glowing lights.",
        illustrationPreset: {
          emoji: "💤🤍🍡",
          bgColor: "bg-stone-100",
          borderColor: "border-stone-400",
          textColor: "text-stone-950"
        },
        choices: [],
        isEnding: true,
        endingType: "funny_trap"
      }
    }
  },
  {
    id: "spacetime_emulator",
    title: "Kanga, Rhino, Penguin and the Space-Time Emulator",
    description: "Kanga has built a Space-Time Emulator out of recycled boxes, a bicycle bell, and a banana. When Waddle licks it, the crew is sucked into a wild choose-your-own-adventure through pancake dimensions, goblin castles, and marshmallow armies!",
    difficulty: "Fun",
    coverEmoji: "🌀",
    startNodeId: "start",
    nodes: {
      start: {
        id: "start",
        title: "Kanga's Space-Time Emulator",
        text: "Kanga had built many strange inventions: a sandwich catapult, a biscuit-powered scooter, and a sock-firing bedroom-tidier. But this time, Kanga had built something truly amazing! In the middle of Mummy Penguin’s living room stood a huge wobbling machine made from cardboard boxes, silver foil, bottle tops, string, a bicycle bell, and a suspicious banana. A sign on the front said: KANGA’S SPACE-TIME EMULATOR - DO NOT KICK - DO NOT LICK. Rhino stared at it. 'Can it send us to a dimension where snacks are free?' he asked. 'Possibly,' Kanga said. Suddenly, Waddle licked the machine! A tiny crack appeared in the cardboard. DING-DING-DING! The banana began spinning! Kanga gulped: 'Oh. That's not ideal.' What should they do?",
        illustrationPrompt: "A cartoon kangaroo showing a funny cardboard space machine with a bicycle bell and a spinning banana on top to a round rhino, a penguin, and a shiny metallic penguin.",
        illustrationPreset: {
          emoji: "🌀🍌🔔",
          bgColor: "bg-indigo-50",
          borderColor: "border-indigo-400",
          textColor: "text-indigo-900"
        },
        choices: [
          { text: "Try to fix the crack with sticky tape!", nextNodeId: "node_2" },
          { text: "Press the big red button!", nextNodeId: "node_3" },
          { text: "Let Rhino 'improve' the machine!", nextNodeId: "node_4" }
        ]
      },
      node_2: {
        id: "node_2",
        title: "The Shiny Silver Potato",
        text: "Kanga grabbed a roll of sticky tape and wrapped it around the crack. Soon the whole machine looked like a shiny silver potato! 'There,' said Kanga. 'Fixed.' The emulator hummed. The lights flashed. The banana spun faster. Mummy Penguin peered over the sofa. 'Why is the banana doing that?' 'That's how you know it's working,' said Kanga. Suddenly, three glowing doors appeared in the middle of the living room: a red door, a green door, and a blue door! 'There were not three doors in my living room a minute ago,' Mummy Penguin muttered. Which door should they open?",
        illustrationPrompt: "A cardboard machine completely wrapped in shiny silver duct tape resembling a potato, with three colorful glowing doors (red, green, blue) appearing next to it.",
        illustrationPreset: {
          emoji: "🥔🚪🚪🚪",
          bgColor: "bg-slate-50",
          borderColor: "border-slate-400",
          textColor: "text-slate-900"
        },
        choices: [
          { text: "Open the red door!", nextNodeId: "node_5" },
          { text: "Open the green door!", nextNodeId: "node_6" },
          { text: "Open the blue door!", nextNodeId: "node_7" }
        ]
      },
      node_3: {
        id: "node_3",
        title: "Implosion and Vortex!",
        text: "Kanga pressed the big red button. The Space-Time Emulator made a noise like a washing machine full of spoons! The living room stretched. The sofa bent. Mummy Penguin's fish tank floated upside down! 'This is not ideal!' shouted Penguin. 'This is very slightly ideal!' shouted Kanga. CRRRRRRACK! The emulator imploded like a cardboard sandwich and sucked everyone into a swirling tunnel of space-time. Ahead of them were three spinning tunnels. One smelled like syrup, one smelled like smoke and goblins, and one smelled like wet socks and marshmallows. Which tunnel do they choose?",
        illustrationPrompt: "Funny cute animals spinning inside a colorful swirling space-time vortex tunnel with floating stars, clocks, and bananas.",
        illustrationPreset: {
          emoji: "🌪️🌀🌀",
          bgColor: "bg-violet-50",
          borderColor: "border-violet-400",
          textColor: "text-violet-900"
        },
        choices: [
          { text: "Tunnel One (smells like syrup)", nextNodeId: "node_8" },
          { text: "Tunnel Two (smells like smoke and goblins)", nextNodeId: "node_9" },
          { text: "Tunnel Three (smells like wet socks and marshmallows)", nextNodeId: "node_10" }
        ]
      },
      node_4: {
        id: "node_4",
        title: "The Worst Dimension",
        text: "Rhino cracked his knuckles. 'Stand back,' he said. 'I know exactly how to improve this.' Rhino kicked the machine! There was a pause. Then the emulator made a tiny polite cough and swallowed everyone! They landed back in Mummy Penguin’s kitchen, but the sink was piled high with dirty dishes. A glowing message appeared in the air: YOU MAY NOT CONTINUE THE ADVENTURE UNTIL THE DISHES ARE DONE. Waddle ate the sponge! After they washed every plate, bowl, and spoon, the sink began to glow. The emulator reappeared inside the washing-up bowl, still cracked. 'Good news. We’re back where we started,' Kanga smiled. What now?",
        illustrationPrompt: "A funny rhino and penguin washing a giant pile of cartoon plates in a sparkling clean kitchen sink, with a metal penguin eating a green sponge.",
        illustrationPreset: {
          emoji: "🍽️🧼🧽",
          bgColor: "bg-sky-50",
          borderColor: "border-sky-400",
          textColor: "text-sky-900"
        },
        choices: [
          { text: "Press the big red button!", nextNodeId: "node_3" },
          { text: "Try sticky tape after all!", nextNodeId: "node_2" }
        ]
      },
      node_5: {
        id: "node_5",
        title: "The Chore Bedroom",
        text: "They opened the red door and stepped through. Immediately, they found themselves in Mummy Penguin’s bedroom! The bed was an absolute disaster. Blankets and pillows everywhere, and one sock stuck to the wall! A glowing message appeared: YOU MAY NOT CONTINUE UNTIL THE BED HAS BEEN CLEANED. They made the bed, folded blankets, and fluffed pillows. Rhino tried to polish a duvet while Waddle lay down and refused to move for seven minutes! When the bed was perfect, a portal opened under the pillow, making slurping noises. What should they do?",
        illustrationPrompt: "A messy bedroom with animal friends folding colorful blankets and putting pillows neatly on a huge bed.",
        illustrationPreset: {
          emoji: "🛏️🧹🧦",
          bgColor: "bg-fuchsia-50",
          borderColor: "border-fuchsia-400",
          textColor: "text-fuchsia-900"
        },
        choices: [
          { text: "Jump into the pillow portal!", nextNodeId: "node_11" },
          { text: "Refuse and go back through the red door.", nextNodeId: "node_2" }
        ]
      },
      node_6: {
        id: "node_6",
        title: "The Bendy Distortion Tunnel",
        text: "They opened the green door. Behind it was a long bendy tunnel full of floating question marks. 'This looks suspicious,' said Penguin. 'This looks educational,' said Kanga. 'This looks like it needs snacks,' said Rhino. They stepped inside. The tunnel twisted left, right, up, down, sideways, and in one direction nobody had a name for. Then everything began to wobble! Kanga’s tail looked like a trumpet, Rhino’s horn turned into a spoon, and Penguin’s flippers were briefly made of jelly. Kanga gasped: 'Oh no. We’re entering a distortion field!'",
        illustrationPrompt: "A bendy tunnel filled with colorful glowing question marks, with distorted-looking cartoon animals walking through it.",
        illustrationPreset: {
          emoji: "❓🌀🪀",
          bgColor: "bg-lime-50",
          borderColor: "border-lime-400",
          textColor: "text-lime-900"
        },
        choices: [
          { text: "Continue into the distortion field!", nextNodeId: "node_12" }
        ]
      },
      node_7: {
        id: "node_7",
        title: "The Glowing Recycling Bin",
        text: "They opened the blue door and stepped into Mummy Penguin’s garden. Everything looked normal. Too normal! Then the wheelie bin opened by itself! A glowing message appeared: YOU MAY NOT CONTINUE UNTIL THE TRASH HAS BEEN TAKEN OUT. Rhino groaned: 'Why does space-time care so much about chores?' They took out the trash and sorted recycling. Kanga rescued four cardboard boxes because they looked 'scientifically important.' When they were finished, the recycling bin began to glow and a portal opened inside it! Waddle jumped in, and everyone followed!",
        illustrationPrompt: "A bright green glowing recycling bin in a green backyard, with animal friends jumping happily inside.",
        illustrationPreset: {
          emoji: "♻️🪴🗑️",
          bgColor: "bg-teal-50",
          borderColor: "border-teal-400",
          textColor: "text-teal-900"
        },
        choices: [
          { text: "Jump into the recycling portal!", nextNodeId: "node_10" }
        ]
      },
      node_8: {
        id: "node_8",
        title: "The Golden Pancake Land",
        text: "They landed in a golden land that smelled delicious! The sky was butter, the rivers syrup, and the ground was one giant pancake! Rhino fell to his knees: 'I have found my people.' Suddenly, a huge machine rolled over the hill with a sign: PANCAKE STANDARDISER - ANYTHING BIGGER THAN A PANCAKE WILL BE MADE PANCAKE-SHAPED. It rolled straight over Kanga! FLUMP! Kanga was now completely flat. Rhino picked him up: 'Frisbee!' and threw Pancake Kanga across the syrup river. Then the machine rolled toward Waddle, but CLANG! The machine broke when it hit Waddle's steel body! The whole land began to crack and melt! They saw three escape routes:",
        illustrationPrompt: "A happy flat pancake-shaped kangaroo flying across a river of maple syrup in a land made of pancakes and butter.",
        illustrationPreset: {
          emoji: "🥞🍯🧈",
          bgColor: "bg-amber-50",
          borderColor: "border-amber-400",
          textColor: "text-amber-900"
        },
        choices: [
          { text: "Slide down the syrup slide!", nextNodeId: "node_13" },
          { text: "Crawl through the pancake tunnel!", nextNodeId: "node_14" },
          { text: "Float up in the butter balloon!", nextNodeId: "node_15" }
        ]
      },
      node_9: {
        id: "node_9",
        title: "Minions of the Goblin Planet",
        text: "They landed on a dark green planet under a purple sky. In the distance stood a castle shaped like an enormous angry face. 'I'm guessing this is not the snack dimension,' Penguin swallowed. A group of goblin minions marched toward them with minion guns! A loud voice boomed: 'I AM THE GREEN GOBLIN! ALL VISITORS WILL BECOME MY MINIONS!' But a minion front whispered, 'Actually, we don't like working for him. He makes us polish his throne and sings his own non-rhyming theme tune!' Kanga looked at Penguin. Rhino looked for biscuits. What should they do?",
        illustrationPrompt: "Funny little green goblins with tiny space helmets holding funny bubble guns under a purple sky with a crazy-faced castle.",
        illustrationPreset: {
          emoji: "👺🔫🏰",
          bgColor: "bg-purple-50",
          borderColor: "border-purple-400",
          textColor: "text-purple-900"
        },
        choices: [
          { text: "Challenge the Green Goblin directly!", nextNodeId: "node_16" },
          { text: "Help the minions rebel!", nextNodeId: "node_17" },
          { text: "Sneak into the goblin castle kitchen!", nextNodeId: "node_18" },
          { text: "Ask the minions for snacks first!", nextNodeId: "node_30" }
        ]
      },
      node_10: {
        id: "node_10",
        title: "Bouncy Marshmallow Land",
        text: "They landed in a marshmallow wonderland! The mountains, trees, and clouds were made of soft white marshmallows. Even the road was marshmallow, making walking very bouncy! 'This is lovely,' said Penguin. Suddenly, hundreds of tiny marshmallow people popped out wearing tiny helmets and holding tiny marshmallow spears! 'INTRUDERS!' squeaked the marshmallow chief. 'GET THEM!' Rhino blinked: 'They're adorable.' A marshmallow spear bounced harmlessly off his knee. The marshmallow army charged! What should they do?",
        illustrationPrompt: "Hundreds of cute little white marshmallow characters with tiny spears and helmets chasing animal friends down a pink bouncy road.",
        illustrationPreset: {
          emoji: "🍡⛰️🛡️",
          bgColor: "bg-rose-50",
          borderColor: "border-rose-400",
          textColor: "text-rose-900"
        },
        choices: [
          { text: "Try to explain that they are friendly!", nextNodeId: "node_19" },
          { text: "Bounce away down the marshmallow road!", nextNodeId: "node_20" },
          { text: "Let Rhino handle the marshmallow army!", nextNodeId: "node_21" }
        ]
      },
      node_11: {
        id: "node_11",
        title: "Infinite Silver Corridor",
        text: "They landed in a shiny silver corridor that stretched forever. At the end were two big signs. One said: SAFE WAY HOME. The other said: DEFINITELY NOT A DISTORTION FIELD. Penguin folded his flippers: 'That second sign is obviously lying.' Kanga agreed: 'Definitely!' But Rhino pointed at it: 'But it says definitely not.' Mummy Penguin covered his eyes. Which way should they go?",
        illustrationPrompt: "A futuristic metallic silver corridor with two giant glowing arrows pointing left and right under funny signs.",
        illustrationPreset: {
          emoji: "🥈🪞🛸",
          bgColor: "bg-neutral-100",
          borderColor: "border-neutral-400",
          textColor: "text-neutral-900"
        },
        choices: [
          { text: "Follow the sign for the SAFE WAY HOME!", nextNodeId: "node_22" },
          { text: "Go to the DEFINITELY NOT A DISTORTION FIELD!", nextNodeId: "node_12" }
        ]
      },
      node_12: {
        id: "node_12",
        title: "The Crazy Distortion Field!",
        text: "The distortion field swallowed them! Everything stretched like melted cheese. Penguin tried to speak, but said: 'Hey Kanga, I’ve never noticed that you have a foot where your nose is meant to be!' Kanga answered: 'Penguin, why are you wearing a dumb doggo costume?' Rhino tried to say 'Stop shouting!' but said: 'Why do I look like I’m wearing a polka-dot bikini?' Kanga's toes each got their own tiny face and one called Trevor waved! Penguin wore a pilot hat, and Mummy Penguin proposed to a cheese wardrobe! Waddle sparkled like a disco ball. The field shook and four exits appeared!",
        illustrationPrompt: "Distorted animals with funny faces, a pilot hat, a polka-dot bikini, and tiny faces on toes floating in a colorful abstract dream world.",
        illustrationPreset: {
          emoji: "🤪👙🧀",
          bgColor: "bg-yellow-50",
          borderColor: "border-yellow-400",
          textColor: "text-yellow-900"
        },
        choices: [
          { text: "Jump through the pancake-shaped exit!", nextNodeId: "node_8" },
          { text: "Jump through the goblin-helmet exit!", nextNodeId: "node_9" },
          { text: "Jump through the Mummy Penguin door exit!", nextNodeId: "node_22" },
          { text: "Stay in the distortion field a little longer...", nextNodeId: "node_29" }
        ]
      },
      node_13: {
        id: "node_13",
        title: "The Sticky Syrup Slide",
        text: "They slid down a giant syrup slide! It was fast, extremely sticky, and completely uncontrolled. Pancake Kanga accidentally stuck right onto Rhino's face halfway down! 'I can't see!' shouted Rhino. 'You're using me as a mask!' shouted Kanga. They shot off the end of the slide, flying through the air, and landed splat inside a glowing portal! A sign flashed past: NEXT STOP: GOBLIN PLANET!",
        illustrationPrompt: "A group of cute animals sliding down a huge river of dark golden syrup, splashing and laughing.",
        illustrationPreset: {
          emoji: "🛝🍯🍁",
          bgColor: "bg-amber-100",
          borderColor: "border-amber-500",
          textColor: "text-amber-950"
        },
        choices: [
          { text: "Land on the Goblin Planet!", nextNodeId: "node_9" }
        ]
      },
      node_14: {
        id: "node_14",
        title: "The Delicious Pancake Tunnel",
        text: "They crawled through a narrow pancake tunnel. The walls smelled incredibly delicious. Rhino couldn't resist and took one giant bite! Oh no! The tunnel rumbled. 'Do not eat the emergency exit!' Penguin screamed. Too late! The tunnel collapsed and launched them into space-time. They splatted into Mummy Penguin’s bathroom, where the bath was full of socks! A message read: SORT THE SOCKS TO CONTINUE. After sorting them, one sock glowed and opened a portal. Waddle jumped in!",
        illustrationPrompt: "A funny rhino taking a big bite out of a pancake wall inside a warm golden tunnel.",
        illustrationPreset: {
          emoji: "🚇🥞🧦",
          bgColor: "bg-orange-50",
          borderColor: "border-orange-400",
          textColor: "text-orange-900"
        },
        choices: [
          { text: "Jump in after Waddle!", nextNodeId: "node_12" }
        ]
      },
      node_15: {
        id: "node_15",
        title: "The Melting Butter Balloon",
        text: "They climbed into a floating butter balloon. It floated high up into the melting yellow butter sky. 'This is very peaceful,' Mummy Penguin sighed. Suddenly, POP! The balloon popped! They fell through a crack in the pancake sky and landed right back in Mummy Penguin's kitchen. The dirty dishes were back! A message appeared: YOU ESCAPED TOO SOON. DO THE DISHES AGAIN. 'Nooooooo!' Rhino cried. Once they finished, the sink portal reopened, smelling of goblin smoke.",
        illustrationPrompt: "A cute round yellow balloon made of butter floating in a yellow sky, popping with a flash.",
        illustrationPreset: {
          emoji: "🎈🧈🍳",
          bgColor: "bg-yellow-100",
          borderColor: "border-yellow-500",
          textColor: "text-yellow-950"
        },
        choices: [
          { text: "Jump into the smelly sink portal!", nextNodeId: "node_9" }
        ]
      },
      node_16: {
        id: "node_16",
        title: "Showdown with the Green Goblin!",
        text: "The crew marched to the Green Goblin’s castle. The Goblin appeared on a balcony wearing a giant cape. 'You dare challenge me?' he roared. 'Yes, and your minions don't like you!' Kanga shouted. A minion held a sign: NO WE DON'T! The Goblin fired a minion gun at them. Kanga and Penguin ducked, but the blast hit Rhino! Green smoke cleared, revealing Rhino wearing... a tiny goblin hat. 'That's it?' Rhino blinked. The gun didn't work on him! Rhino charged, and the Goblin tripped into a laundry basket! The minions cheered!",
        illustrationPrompt: "A funny rhino wearing a tiny green goblin hat charging at a green goblin who is falling backward into a wicker laundry basket.",
        illustrationPreset: {
          emoji: "🦏👒🧺",
          bgColor: "bg-green-50",
          borderColor: "border-green-400",
          textColor: "text-green-900"
        },
        choices: [
          { text: "Celebrate victory with the minions!", nextNodeId: "node_23" }
        ]
      },
      node_17: {
        id: "node_17",
        title: "The Minion Rebellion!",
        text: "Kanga whispered to the minions, 'What if you just stopped obeying him?' The minions gasped. 'We can do that?' Penguin nodded: 'You are your own minions!' One shouted: 'NO MORE THRONE POLISHING!' Another: 'NO MORE THEME SONG!' They stormed the castle! The Goblin ran out in his slippers. 'What is the meaning of this?' 'You're fired!' squeaked the chief. Waddle picked up the Green Goblin and dropped him into a giant bin marked OLD VILLAINS! The lid shut, and the minions cheered!",
        illustrationPrompt: "Dozens of happy little goblin minions lifting a penguin and kangaroo in celebration inside a castle courtyard.",
        illustrationPreset: {
          emoji: "✊👿🗑️",
          bgColor: "bg-emerald-100",
          borderColor: "border-emerald-500",
          textColor: "text-emerald-950"
        },
        choices: [
          { text: "Celebrate victory with the minions!", nextNodeId: "node_23" }
        ]
      },
      node_18: {
        id: "node_18",
        title: "The Green Soup Catapult!",
        text: "They sneaked into the castle kitchen and found giant pots of smelly green soup. 'The Green Goblin makes us eat this every day,' a chef goblin whispered. Penguin tasted a drop and his face turned inside out! Kanga grabbed cardboard trays from the recycling bin and built a soup-launching catapult in eleven seconds! 'FIRE!' Kanga yelled. Splash! Green soup covered the throne room. The Green Goblin slipped, slid, and crashed into his gun machine, which exploded into harmless bubbles. The minions cheered!",
        illustrationPrompt: "A funny catapult made of cardboard launching green soup over a golden throne room, making a goblin slide.",
        illustrationPreset: {
          emoji: "☄️🍲🏰",
          bgColor: "bg-lime-100",
          borderColor: "border-lime-500",
          textColor: "text-lime-950"
        },
        choices: [
          { text: "Celebrate victory with the minions!", nextNodeId: "node_23" }
        ]
      },
      node_19: {
        id: "node_19",
        title: "Useless Intruders!",
        text: "Penguin stepped forward. 'We come in peace!' The marshmallow chief narrowed his eyes: 'Do you come with hot chocolate?' 'No,' said Penguin. The marshmallow people gasped. 'No hot chocolate? Then you are useless!' they squeaked. The army charged again! Rhino whispered: 'I still think they're cute.' Kanga saw a glowing marshmallow archway: 'Run!'",
        illustrationPrompt: "An angry little marshmallow chief holding a tiny white spear, standing in front of an army of marshmallows.",
        illustrationPreset: {
          emoji: "🍡😠☕",
          bgColor: "bg-rose-100",
          borderColor: "border-rose-500",
          textColor: "text-rose-950"
        },
        choices: [
          { text: "Run through the marshmallow archway!", nextNodeId: "node_20" }
        ]
      },
      node_20: {
        id: "node_20",
        title: "Bouncing Chase!",
        text: "They bounced down the marshmallow road. Boing! Boing! Boing! The marshmallow army bounced after them: Boing-boing-boing! Rhino laughed so hard he could barely run: 'This is the least scary chase ever!' At the end of the road were two glowing portals. One smelled like syrup, and one smelled like goblin smoke. Which one do they jump into?",
        illustrationPrompt: "Animals bouncing happily on a soft pink road while puffy marshmallow men bounce behind them under a purple cloud sky.",
        illustrationPreset: {
          emoji: "🏃‍♂️🍡🌀",
          bgColor: "bg-pink-50",
          borderColor: "border-pink-400",
          textColor: "text-pink-900"
        },
        choices: [
          { text: "Jump into the Pancake Portal!", nextNodeId: "node_8" },
          { text: "Jump into the Goblin Smoke Portal!", nextNodeId: "node_9" }
        ]
      },
      node_21: {
        id: "node_21",
        title: "Smuggling Cute Marshmallows",
        text: "Rhino stepped in front of the marshmallow army. He opened his mouth and roared: 'BOO!' The entire marshmallow army fainted! Except two tiny marshmallow people who looked impressed: 'You are mighty!' 'You are bouncy!' Rhino secretly hid them in his backpack. Penguin noticed: 'Rhino, did you smuggle marshmallow people?' 'No,' Rhino said. His backpack squeaked: 'Yes he did.' Penguin sighed: 'That is definitely going to be a problem in another story.' A portal opened!",
        illustrationPrompt: "A happy rhino looking back at his backpack where two tiny cute marshmallow men are peeking out waving.",
        illustrationPreset: {
          emoji: "🦏🎒🍡",
          bgColor: "bg-amber-100",
          borderColor: "border-amber-500",
          textColor: "text-amber-950"
        },
        choices: [
          { text: "Step into the portal!", nextNodeId: "node_12" }
        ]
      },
      node_22: {
        id: "node_22",
        title: "Back to the Living Room",
        text: "They stepped through Mummy Penguin's front door and fell onto the sofa. The fish tank was normal and the recycling bin only glowed slightly. Kanga's Space-Time Emulator stood in the room, smoking gently. 'Well, that was a successful test,' Kanga said. Penguin stared: 'Successful? Rhino has syrup on his ear, Mummy Penguin has marshmallow fluff in his feathers, and Waddle is sparkling!' Suddenly, the machine coughed out a goblin helmet, a pancake, and a tiny spear. A button flashed: COMPLETE ADVENTURE PROPERLY. Press it?",
        illustrationPrompt: "Animal friends resting on a green sofa, looking tired and messy, next to a smoking cardboard box.",
        illustrationPreset: {
          emoji: "🏡🛋️💨",
          bgColor: "bg-teal-100",
          borderColor: "border-teal-500",
          textColor: "text-teal-950"
        },
        choices: [
          { text: "Yes, finish the adventure properly!", nextNodeId: "node_9" },
          { text: "No, unplug the machine immediately!", nextNodeId: "node_24" }
        ]
      },
      node_23: {
        id: "node_23",
        title: "Minion Victory Feast!",
        text: "The minions threw a huge party with music, dancing, and victory biscuits! Rhino wiped a tear: 'This is the greatest planet.' Kanga studied the broken minion guns: 'I think I can repair the emulator with these!' 'No!' Penguin and Mummy Penguin yelled. But Kanga had already started! Using a goblin battery, a pancake spring, marshmallow string, and Waddle’s disco sparkle, Kanga rebuilt the emulator. It looked worse, but it worked. A portal opened, showing Mummy Penguin’s living room!",
        illustrationPrompt: "A huge party with cute little green minions holding plates of chocolate cookies and dancing with a metallic penguin.",
        illustrationPreset: {
          emoji: "🥳🍪⚡",
          bgColor: "bg-indigo-100",
          borderColor: "border-indigo-500",
          textColor: "text-indigo-950"
        },
        choices: [
          { text: "Jump through the portal back home!", nextNodeId: "node_25" }
        ]
      },
      node_24: {
        id: "node_24",
        title: "The Chore Trap!",
        text: "Mummy Penguin unplugged the Space-Time Emulator. The lights went out and the banana stopped spinning. Then a glowing message appeared on the wall: ADVENTURE ENDED EARLY. EVERYONE MUST NOW TIDY THE LIVING ROOM. Rhino dropped to the floor: 'Not another chore dimension!' They tidied up, folding blankets, scraping syrup off the ceiling, and removing a goblin helmet from the lamp. Mummy Penguin smiled: 'At least nothing else happened.' But Rhino's backpack wriggled... You ended early but got stuck with chores! Try again to get the real ending!",
        illustrationPrompt: "Animal friends sweeping the floor and wiping the windows of a living room while looking exhausted.",
        illustrationPreset: {
          emoji: "🧹🧼🗑️",
          bgColor: "bg-zinc-100",
          borderColor: "border-zinc-400",
          textColor: "text-zinc-950"
        },
        choices: [],
        isEnding: true,
        endingType: "defeat"
      },
      node_25: {
        id: "node_25",
        title: "The Rise of the Marshmallow People!",
        text: "They landed in Mummy Penguin’s living room in a heap, all back to normal size and shape! Mummy Penguin looked at the bent, smoking emulator covered in syrup and marshmallow fluff. 'We learned something important today,' he said. 'Yes, Kanga shouldn't build machines out of cardboard,' Penguin said. Rhino's backpack wriggled and two tiny marshmallow people popped out! One threw a spear at a grape, the other built a fort under the sofa! Kanga got his notebook and wrote: THE RISE OF THE MARSHMALLOW PEOPLE! You read the whole story perfectly! You got 5 stars! You won!",
        illustrationPrompt: "A happy group of animals high-fiving in a cozy living room while two tiny marshmallow men build a fort with cushions on the floor.",
        illustrationPreset: {
          emoji: "🏆✨🏰",
          bgColor: "bg-emerald-100",
          borderColor: "border-emerald-500",
          textColor: "text-emerald-950"
        },
        choices: [],
        isEnding: true,
        endingType: "victory"
      },
      node_26: {
        id: "node_26",
        title: "Marshmallows Rule the Sofa!",
        text: "Rhino’s backpack bounced and two tiny marshmallow people popped out with a flag that said: THIS SOFA IS OURS NOW! Rhino smiled: 'We made friends.' One marshmallow person threw a tiny spear at a grape and cheered as it rolled off! Mummy Penguin sighed the longest sigh in history. Kanga wrote: NEXT INVENTION: MARSHMALLOW TRANSLATOR. Penguin shook his head: 'This is why we can’t have normal adventures.' You found the sneaky marshmallow ending! Try again to find other wacky paths in space-time!",
        illustrationPrompt: "Two tiny marshmallows sitting on top of a green sofa cushion holding a funny flag, with a rhino smiling sheepishly next to them.",
        illustrationPreset: {
          emoji: "🛋️⛳🍡",
          bgColor: "bg-orange-100",
          borderColor: "border-orange-500",
          textColor: "text-orange-950"
        },
        choices: [],
        isEnding: true,
        endingType: "funny_trap"
      },
      node_27: {
        id: "node_27",
        title: "King Rhino of Pancake Land!",
        text: "Rhino stood on a blueberry hill wearing Pancake Kanga as a cape. 'I declare myself King Rhino the First!' he announced and the pancakes cheered! But the Pancake Standardiser repaired itself and rolled toward them! Rhino grabbed Kanga: 'Emergency frisbee!' and threw Kanga, who knocked the machine into a sticky syrup lake. Everyone was stuck in syrup for twelve minutes! When they escaped, a glowing message said: NICE TRY. BACK TO THE MAIN ADVENTURE.",
        illustrationPrompt: "A funny rhino wearing a flat kangaroo as a cape, standing on a golden pancake hill, laughing.",
        illustrationPreset: {
          emoji: "👑🥞🦏",
          bgColor: "bg-yellow-100",
          borderColor: "border-yellow-500",
          textColor: "text-yellow-950"
        },
        choices: [
          { text: "Go back to the syrup slide!", nextNodeId: "node_13" }
        ]
      },
      node_28: {
        id: "node_28",
        title: "The Great Crumb Nightmare!",
        text: "Suddenly, everything went white! Kanga, Rhino, Penguin, Waddle, and Mummy Penguin appeared in a perfectly clean room with one tiny crumb. A message appeared: REMOVE THE CRUMB. Penguin swept it, but another appeared! Rhino took that one, but two more appeared! 'This is a chore trap!' Kanga cried. Waddle sneezed and ten thousand crumbs appeared! Everyone screamed! A portal opened: PROMISE TO CONTINUE THE ADVENTURE AND YOU MAY LEAVE. They promised!",
        illustrationPrompt: "Animal friends panicking in a glowing white room covered in tiny brown crumbs as a metallic penguin sneezes.",
        illustrationPreset: {
          emoji: "😱🍪🧺",
          bgColor: "bg-neutral-50",
          borderColor: "border-neutral-400",
          textColor: "text-neutral-900"
        },
        choices: [
          { text: "Promise to continue and escape!", nextNodeId: "node_3" }
        ]
      },
      node_29: {
        id: "node_29",
        title: "Lost in the Distortion Field!",
        text: "The distortion field became stronger! Penguin tried to say 'We need to leave!' but said 'I am a sandwich with opinions!' Kanga said 'My elbow has written a novel about soup!' Rhino tried to say 'I'm hungry!' but said 'I challenge the moon to a dance battle!' The moon appeared and danced, and Rhino lost! Waddle sparkled so brightly that the distortion field got embarrassed, coughed politely, and spat them out!",
        illustrationPrompt: "A funny rhino doing a breakdance battle with a smiling cartoon moon in the night sky.",
        illustrationPreset: {
          emoji: "🕺🌕🪐",
          bgColor: "bg-indigo-950",
          borderColor: "border-indigo-400",
          textColor: "text-indigo-200"
        },
        choices: [
          { text: "Get spat out into Pancake Land!", nextNodeId: "node_8" }
        ]
      },
      node_30: {
        id: "node_30",
        title: "Pre-Victory Biscuits!",
        text: "The minion chief looked serious: 'We can offer you victory biscuits, but only after victory.' Rhino folded arms: 'I would like pre-victory biscuits.' The minions whispered: 'That is unusual. Bold. Possibly wise.' The Green Goblin yelled from the balcony: 'Nobody gets biscuits until I say so!' Every minion gasped. The rebellion began instantly! Apparently, biscuits were the final straw!",
        illustrationPrompt: "A group of green minions gasping in surprise while a rhino crosses his arms demanding cookies.",
        illustrationPreset: {
          emoji: "😠🍪👿",
          bgColor: "bg-emerald-50",
          borderColor: "border-emerald-400",
          textColor: "text-emerald-900"
        },
        choices: [
          { text: "Help the minions rebel!", nextNodeId: "node_17" }
        ]
      }
    }
  }
];
