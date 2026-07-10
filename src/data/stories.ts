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
        text: "Theo, William, and Oliver zoomed to the Penguinpower clubhouse, where silly super-genius Kanga had built a giant machine. 'Behold, the JELLY-O-TRON 3000!' Kanga cheered. Penguin, the brave leader, bumped the big red button, and it began to shake and hum while Rhino licked his lips. What should the heroes do first?",
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
        text: "Theo, William, and Oliver grabbed the lever and PULLED. But the Jelly-o-Tron went WHOOSH, and a wave of strawberry jelly burst out! Oliver slid down a jelly hill while William licked jam off his face. Rhino munched at it, but the glowing off-switch was across the jiggly jelly lake.",
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
        text: "Outside, the air began to shimmer, and Penguin's eyes went wide. 'LISTEN UP! We are walking into a DISTORTION FIELD — stay VERY still and do NOT make a sou—' But right then Rhino's tummy rumbled, Oliver giggled, and William did a little parp. The whole world went wibbly-wobbly!",
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
        text: "Inside the distortion field, nothing was normal! William did the can-can shouting 'OOH LA LA!' while Theo walked upside-down and Oliver's 'help me' came out backwards as 'EM PLEH!' Kanga's toes grew tiny faces, and Penguin proposed marriage to a cheese sandwich. 'STAY CALM,' Penguin burbled, 'it ends in three... two...' — then FOUR exit doors appeared!",
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
        text: "Waddle, their friend made of solid Penguinpower steel, tucked in his head and legs and became a surfboard. Theo, William, and Oliver surfed across the jelly lake. 'COWABUNGA!' yelled Oliver, and he SLAPPED the off-switch! The Jelly-o-Tron went quiet, and the heroes had saved the clubhouse!",
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
        text: "Rhino, who loves sandwiches, laid slices down to build a bridge over the jelly. 'Do NOT eat the bridge,' Penguin warned. Rhino nodded... then ate it, and SPLOSH — everyone bobbed up like three giggly gummy bears! 'At least we all match now!' laughed Kanga.",
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
        text: "Theo, William, and Oliver switched off the Jelly-o-Tron! Kanga made sponges to scoop up the jelly, and Rhino fell asleep in a warm jelly puddle. Mummy Penguin gave the boys shiny gold medals and cheered, 'You are the bravest readers in Oxfordshire!' You are a reading superstar!",
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
        text: "The boys dived through the marshmallow door and got STUCK! 'Don't worry, I will munch you free!' mumbled Kanga, nibbling until POP. Now they were covered in sticky kangaroo slobber, so they jumped into the river with a SPLASH. 'EWWWW!' they laughed. Want to try a different path?",
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
        text: "The heroes were too giggly to reach the switch, so they floated for a rest. Rhino snored pink bubbles while the Jelly-o-Tron filled the clubhouse to the roof! Mummy Penguin found them snoozing like jelly babies. You didn't stop the machine — but hop back in and give it another go!",
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
        text: "John, Liam, and Theo hauled their sledges up the frosty hill. But the snow was white, squishy, and smelled like marshmallows! 'It is a MARSHMALLOW BLIZZARD!' cheered Kanga, the super-genius kangaroo. Rhino munched happily as Snow Leopard skated up. 'Careful, friends — everything is super sticky and super silly!' What should the heroes do?",
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
        text: "John, Liam, and Theo packed a super-speedy marshmallow sledge. Kanga strapped on a fizzy-lemonade rocket 'for science.' 'Three, two, one, WHOOSH!' They zoomed down so fast their cheeks wobbled like jelly! 'A giant marshmallow ramp!' yelled John. 'Do we jump it?!'",
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
        text: "In the cosy cave, the air shimmered and sparkled. Penguin froze mid-sip of his cocoa. 'Oh no. DISTORTION FIELD! Do NOT do anything sil—' But Rhino did a giant sandwich BURP, Liam snorted, and John wiggled a dance. The whole cave turned INSIDE OUT!",
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
        text: "The distortion field made EVERYTHING go bananas! John's shoes became two grumpy fish, and Liam floated up saying 'MOO.' Theo can-canned on the ceiling, Kanga grew a second nose, and Rhino's tummy became a drum kit. Penguin, in a teapot hat, yelled, 'STAY CALM — POP!' Everyone tumbled out giggling as two glowing tunnels appeared.",
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
        text: "The sledge hit the ramp and FLEW! John, Liam, and Theo soared high, high-fiving a surprised owl. Below they spotted the blizzard's cause — a wobbly cloud machine Waddle had switched on by sitting on it! 'There it is!' cheered Theo. They landed FLOMP by the off-button.",
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
        text: "They swerved into the forest, but the marshmallow snow grew and GREW! Soon John, Liam, and Theo rolled inside a giant sticky snowball, bouncing and giggling. 'Best worst idea EVER!' yelled Liam. It stopped SPLAT against Rhino's tummy and stuck fast.",
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
        text: "John, Liam, and Theo switched off the cloud machine, and the blizzard softened into sugar. Snow Leopard cheered and Kanga invented marshmallow ice-cream! Mummy Penguin gave the heroes shiny gold medals. 'The bravest readers in Oxfordshire!' she beamed. Rhino ate the whole machine. You are a reading superstar!",
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
        text: "John, Liam, and Theo got stuck in the squishy marshmallow — arms, legs, and noses! 'Hold still, I will nibble you loose!' said Kanga. He munched until POP, they were free... but covered in sticky kangaroo slobber! 'YUCK!' they giggled, then jumped into the icy stream with a giant SPLASH. Want to try a different path?",
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
    id: "pikachu_mystery",
    title: "Theo, William & Oliver and the Missing Pikachu Card",
    description: "Kanga's shiny illustrated Pikachu card has vanished overnight! Help Theo, William and Oliver — with Kanga, Rhino and Penguin — solve the mystery, find the card, and unlock a secret magic-word prize!",
    difficulty: "Easy",
    coverEmoji: "⚡",
    startNodeId: "start",
    nodes: {
      start: {
        id: "start",
        title: "The Missing Card!",
        text: "Kanga zoomed in, waving his arms. 'DISASTER! My shiny illustrated Pikachu card has VANISHED! It was here last night, and now it's GONE!' Theo, William, and Oliver popped on their detective hats. 'Let's crack this case!' squawked Penguin. Where should the three heroes look first?",
        illustrationPrompt: "A panicked kangaroo waving his arms in a clubhouse while three boys in detective hats and a penguin look determined.",
        illustrationPreset: {
          emoji: "⚡🔎🐧",
          bgColor: "bg-yellow-50",
          borderColor: "border-yellow-400",
          textColor: "text-yellow-900"
        },
        choices: [
          { text: "Search Kanga's messy invention shed!", nextNodeId: "shed_search" },
          { text: "Ask Rhino what he ate last night!", nextNodeId: "rhino_ask" }
        ]
      },
      shed_search: {
        id: "shed_search",
        title: "The Invention Shed",
        text: "The heroes tiptoed into Kanga's messy shed. Gadgets bleeped, and a trail of tiny yellow sparkles led two different ways. In the corner, a little robot vacuum beeped and wobbled, looking VERY guilty.",
        illustrationPrompt: "A cluttered inventor's shed with beeping gadgets, a sparkly trail on the floor, and a guilty-looking little robot vacuum.",
        illustrationPreset: {
          emoji: "🛠️✨🤖",
          bgColor: "bg-lime-50",
          borderColor: "border-lime-400",
          textColor: "text-lime-900"
        },
        choices: [
          { text: "Peek inside the sneaky robot vacuum!", nextNodeId: "vacuum_open" },
          { text: "Follow the sparkly trail!", nextNodeId: "sparkle_trail" }
        ]
      },
      rhino_ask: {
        id: "rhino_ask",
        title: "Rhino's Big Burp",
        text: "Rhino scratched his tummy. 'I ate eleven sandwiches last night... and maybe something a bit sparkly?' He BURPED, and a bubblegum wrapper floated out — but no card. He did remember seeing it shining down by the river. But the sky was turning a very funny colour.",
        illustrationPrompt: "A big rhino burping out a gum wrapper while three boys watch, with a strange shimmering colour in the sky behind them.",
        illustrationPreset: {
          emoji: "🦏💨🫧",
          bgColor: "bg-orange-50",
          borderColor: "border-orange-400",
          textColor: "text-orange-900"
        },
        choices: [
          { text: "Race down to the river!", nextNodeId: "river_hunt" },
          { text: "Wait — what's that shimmer?", nextNodeId: "distortion_warning" }
        ]
      },
      sparkle_trail: {
        id: "sparkle_trail",
        title: "The Sparkly Trail",
        text: "The trail of sparkles led out the window and up a tall oak tree. At the very top sat a cheeky magpie's nest, glittering with stolen treasure. Something bright yellow was poking out of it!",
        illustrationPrompt: "A trail of sparkles leading up a tall oak tree to a magpie nest full of shiny objects with something yellow poking out.",
        illustrationPreset: {
          emoji: "✨🌳🐦",
          bgColor: "bg-emerald-50",
          borderColor: "border-emerald-400",
          textColor: "text-emerald-900"
        },
        choices: [
          { text: "Climb up to the magpie's shiny nest!", nextNodeId: "magpie_nest" }
        ]
      },
      vacuum_open: {
        id: "vacuum_open",
        title: "The Sneaky Robot Vacuum",
        text: "The robot vacuum rattled and wobbled like it was hiding a secret. Was the card stuck deep inside its dusty tummy? Or had it zoomed off somewhere even shinier?",
        illustrationPrompt: "A wobbling round robot vacuum with three curious boys leaning in close to inspect it.",
        illustrationPreset: {
          emoji: "🤖💨🔦",
          bgColor: "bg-slate-50",
          borderColor: "border-slate-400",
          textColor: "text-slate-900"
        },
        choices: [
          { text: "Tip the vacuum out and search the dust!", nextNodeId: "gum_trap" },
          { text: "Chase what it spat out the window!", nextNodeId: "magpie_nest" }
        ]
      },
      distortion_warning: {
        id: "distortion_warning",
        title: "Penguin's Big Warning",
        text: "The air began to shimmer like fizzy lemonade. 'Oh no. Here we go,' groaned Penguin. 'DISTORTION FIELD! Everyone FREEZE, stay quiet, and do NOT say a wor—' But Rhino burped, William giggled, and Oliver did a tiny wiggle. The whole world went wibbly-wobbly!",
        illustrationPrompt: "A penguin holding up a flipper to warn three boys as the air around them shimmers and sparkles.",
        illustrationPreset: {
          emoji: "🌀🐧✨",
          bgColor: "bg-indigo-50",
          borderColor: "border-indigo-400",
          textColor: "text-indigo-900"
        },
        choices: [
          { text: "Try SO hard to stay still!", nextNodeId: "distortion_zone" },
          { text: "Hold hands and stick together!", nextNodeId: "distortion_zone" }
        ]
      },
      distortion_zone: {
        id: "distortion_zone",
        title: "Everything Goes Wobbly!",
        text: "Inside the field, nothing was normal! William did the can-can on a lily pad, Theo floated up blowing rainbow bubbles, and Oliver's words came out backwards as 'PLEH!' Kanga's ears swapped places and Rhino honked like a goose. Then POP — the field spat them all out right beside a sparkly magpie's nest!",
        illustrationPrompt: "A silly scene of a boy doing the can-can, a boy floating and blowing bubbles, and a kangaroo with swapped ears inside a sparkly distortion field.",
        illustrationPreset: {
          emoji: "🌀🤸🫧",
          bgColor: "bg-fuchsia-50",
          borderColor: "border-fuchsia-400",
          textColor: "text-fuchsia-900"
        },
        choices: [
          { text: "Peek inside the sparkly nest!", nextNodeId: "magpie_nest" }
        ]
      },
      river_hunt: {
        id: "river_hunt",
        title: "Down by the River",
        text: "Down by the river, a cheeky magpie flapped past with something shiny in its beak. It swooped up to a nest packed with sparkly treasure. 'That thief!' gasped Theo. 'It took your card, Kanga!'",
        illustrationPrompt: "A magpie flying over a river with a shiny card in its beak toward a treasure-filled nest, with three boys pointing below.",
        illustrationPreset: {
          emoji: "🏞️🐦⚡",
          bgColor: "bg-cyan-50",
          borderColor: "border-cyan-400",
          textColor: "text-cyan-900"
        },
        choices: [
          { text: "Follow the magpie up to its nest!", nextNodeId: "magpie_nest" }
        ]
      },
      magpie_nest: {
        id: "magpie_nest",
        title: "The Magpie's Treasure",
        text: "Inside the nest sat buttons, bottle-tops, a bent spoon, and — YES! — Kanga's shiny illustrated Pikachu card! The magpie tilted its head and gave a cheeky squawk. How should the heroes get the card back?",
        illustrationPrompt: "A magpie nest full of shiny buttons and spoons with a bright yellow card in the middle, and three boys reaching toward it.",
        illustrationPreset: {
          emoji: "🪺⚡✨",
          bgColor: "bg-teal-50",
          borderColor: "border-teal-400",
          textColor: "text-teal-900"
        },
        choices: [
          { text: "Trade the magpie a shiny bottle cap for it!", nextNodeId: "victory_card" },
          { text: "Just grab the card and run!", nextNodeId: "splash_trap" }
        ]
      },
      victory_card: {
        id: "victory_card",
        title: "Mystery Solved!",
        text: "The magpie loved the shiny bottle cap and traded it happily. Theo, William, and Oliver lifted up Kanga's Pikachu card — SAVED! Then the card gave a magical GLOW and showed three secret magic words, just for brave readers who solve the whole mystery. The words are: DADDY ROCKS ALL WEEK LONG! Say them out loud to Theo's Daddy to win a REAL Pokemon pack — or a yummy ice cream! You cracked the case! You are a reading superstar!",
        illustrationPrompt: "Three cheering boys holding up a glowing yellow card with a happy kangaroo, penguin and rhino celebrating around them.",
        illustrationPreset: {
          emoji: "🏆⚡🍦",
          bgColor: "bg-yellow-100",
          borderColor: "border-yellow-500",
          textColor: "text-yellow-950"
        },
        choices: [],
        isEnding: true,
        endingType: "victory"
      },
      gum_trap: {
        id: "gum_trap",
        title: "A Mountain of Gum!",
        text: "They tipped out the vacuum and WHOOSH — out came a mountain of chewed bubblegum, fluff, and one very surprised beetle! There was no Pikachu card in there at all. Now everyone was stuck to the floor by their sticky shoes. 'Well,' said Kanga, 'that was scientifically disgusting.' No card this time — try a different path to find it!",
        illustrationPrompt: "Three boys and a kangaroo stuck to the floor beside a huge pile of chewed bubblegum and a surprised beetle.",
        illustrationPreset: {
          emoji: "🫧🪲🦶",
          bgColor: "bg-pink-100",
          borderColor: "border-pink-400",
          textColor: "text-pink-950"
        },
        choices: [],
        isEnding: true,
        endingType: "funny_trap"
      },
      splash_trap: {
        id: "splash_trap",
        title: "Splash!",
        text: "The boys grabbed for the card, but the magpie SQUAWKED and they all tumbled — SPLASH — into the cold river! They bobbed up with weeds on their heads and a little fish in Oliver's pocket. The magpie flapped away, still holding the shiny card. So close! Jump back in and try a cleverer way!",
        illustrationPrompt: "Three boys splashing into a river with weeds on their heads while a magpie flies away with a shiny card.",
        illustrationPreset: {
          emoji: "💦🐟🐦",
          bgColor: "bg-blue-100",
          borderColor: "border-blue-400",
          textColor: "text-blue-950"
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
        text: "Rhino cried so hard his tears flooded the kitchen! 'My super-sandwich is GONE!' he sobbed. Penguin, the brave leader, put on his detective hat. 'We will find it!' Kanga, the silly-genius kangaroo, peeked under a cup. 'Maybe it flew to Mars as a butterfly!' he said.",
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
        text: "Penguin pulled open the giant fridge. No sandwich inside, just Waddle, their round steel penguin, stuck in a jar of pickles! 'I wanted to swim in pickle juice!' Waddle yelled. They call him Waddle Wrecking Ball because he is solid steel. 'Get me out!' he squawked. Kanga grinned, 'Or he might turn into a pickle-penguin!'",
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
        text: "The vent was dark, dusty, and smelled like old cheese. Penguin led, since he can regrow his feathers. But Rhino's tummy got stuck! 'I'm trapped, and I haven't had a snack in five minutes!' he cried. Kanga said, 'Wiggle your ears and sing the peanut butter song!' Then they heard rustling deep in the tunnels. A sandwich-thief!",
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
        text: "Waddle wiggled his steel tummy. 'WRECKING BALL ACTIVATED!' he screamed. With a giant BOOM, he shattered the pickle jar to bits! One pickle landed on Rhino's horn. 'Mmm, snack!' Rhino munched. But the noise woke Mummy Penguin! She marched in waving a wooden spoon. 'Who made this pickle mess?!' Waddle hid behind Penguin.",
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
        text: "Kanga reached in and tickled Waddle's steel feet. 'KILI KILI KILI!' Waddle laughed so hard his steel body buzzed! The jar got slippery and he popped out like a cork! He flew through the air and landed in Mummy Penguin's freshly folded laundry. 'Whoops!' Then they spotted something weird, a trail of crumbs!",
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
        text: "Penguin shouted, 'GHOST MODE, GO!' They turned into see-through ghosts and floated out of the vent, landing in Mummy Penguin's craft room. 'SURPRISE!' screamed Surprise, popping from a box in a fake mustache. 'A ghostly mustache monster!' gasped Rhino. Kanga tried to shake hands with the box.",
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
        text: "Kanga pulled a tiny, dusty chocolate chip cookie from his pocket and popped it in Rhino's mouth. 'NOM NOM NOM!' It gave Rhino super sandwich-seeking strength! He rocketed through the vent, and they all slid SPLAT into Mummy Penguin's flour bin. Now they looked like fluffy snowmen! Kanga laughed, 'I am a kangaroo snowman!'",
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
        text: "The crew ran into the grassy backyard. There was Cheeky the cheeky penguin, wearing Rhino's super-sandwich like a hat! 'I am the King of Sandwiches!' he giggled. 'My peanut-butter crown!' Rhino drooled. Then super-powerful Snow Leopard leaped the fence. 'I will catch that hat!' she roared. Cheeky gasped and ran for the garden tunnels!",
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
        text: "They started to clean up. Kanga dumped ten bottles of dish soap on the floor. 'A lot of soap makes the kitchen shiny as a star!' he said, turning on the hot water. BOOF! Bubbles filled the whole room! Rhino nibbled one. 'Yuck, soap sandwiches!' Then a bubble wave floated them out into the yard!",
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
        text: "The crumb trail led down the hall, up the stairs, and into the attic. Rhino sniffed like a vacuum. 'I smell peanut butter and steel-cheese!' At a little table sat a baby penguin named Pippin, drawing a map of Penguinpower. Beside him was Rhino's sandwich, one bite gone! 'I just wanted a sandwich fort!' Pippin peeped.",
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
        text: "They climbed the giant laundry pile, as tall as Mount Everest! Suddenly it began to slide. 'SOCKS SLIDE!' yelled Waddle. The clothes wrapped around them like cozy cocoons. Rhino got stuck in a red sweater, and Kanga wore a sock on his nose. 'I am the sock-monster of Penguinpower!' They couldn't move. Is this the end?",
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
        text: "Surprise pulled off her fake mustache. 'I saw Cheeky! He took the sandwich to the backyard to show the squirrels!' Rhino cheered, 'They can't eat my steel-cheese, it's too tough!' 'Snow Leopard waits outside!' said Penguin. Kanga grabbed the mustache. 'Now I'm a wise grandpa kangaroo!' They marched off.",
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
        text: "Rhino's nose tickled from the flour. 'Ah... ah...' 'Don't do it, Rhino!' begged Penguin. 'ACHOO!!!' The mega sneeze blew flour everywhere like a snowstorm! It banged the kitchen door open and slid the crew out into the yard. They landed in a bush beside Cheeky, and the sandwich flew off his head!",
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
        text: "The three-decker sandwich spun in the air. Penguin used his regeneration boost and jumped, but missed! Then Snow Leopard bounded off the fence, backflipped, and caught it in her paws. 'Got it!' Rhino cheered, teeth chattering, 'My baby is safe!' But Cheeky grabbed the marshmallow layer and ran. 'You can't have the sugar layer!'",
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
        text: "Waddle tucked in his head and legs and became a shiny steel bowling ball. 'STRIKE!' he squawked, rolling across the grass right between Cheeky's feet. Cheeky tripped and bonked into Waddle's tummy with an 'OOF!' The sandwich popped up and landed on Rhino's plate! 'Hooray!' Mummy Penguin brought cookies. 'Sharing always wins!'",
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
        text: "Rhino got his sandwich back and shared it! Penguin got the steel-cheese, Kanga got the crusts (great boomerangs!), Snow Leopard got the peanut butter, and Pippin got the marshmallows. Mummy Penguin poured cold milk. 'You are all wonderful sharers!' Rhino fell asleep with a happy tummy. You solved the mystery! You are a reading superstar!",
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
        text: "They built the biggest fort ever! Waddle carried wooden blocks with his steel body, and Kanga made a tower that went sideways. 'If the roof is on the floor, rain can't hit us!' Pippin cheered in a bowl helmet. They ate sandwich slices and told jokes while Mummy Penguin read about the penguins of Penguinpower. You won!",
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
        text: "Mummy Penguin found them all tangled in the laundry. 'You look like a big pile of clean socks!' she giggled. They were too cozy to move, so she tucked them in for a nap. Rhino dreamed of jelly rivers, and Kanga snored with a sock on his nose. You got cozy but never found the sandwich! Try again!",
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
        text: "Down the rabbit tunnel they jumped, a giant slide! 'WEEEE!' Kanga screamed in the dark. Rhino's tummy rumbled, shaking the tunnel like an earthquake. 'Is the tunnel hungry too?' They slid into Mummy Penguin's secret pantry, where Cheeky stood by a jar of strawberry jam. 'Double sandwich time!' Rhino cheered, grabbing Cheeky and the sandwich.",
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
        text: "Kanga leaped into the giant yarn basket. 'I'll search for clues!' But he got tangled in blue wool! Waddle tried to help and got tangled too. Soon they were one big rolling ball of yarn! 'My knitting is ruined!' sighed Mummy Penguin, snipping them free. No sandwich anywhere, but they found some funny yarn hats!",
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
        text: "The bubbles carried them over the fence and into the Whispering Woods. The trees looked like giant broccoli! 'Broccoli, the sandwich's worst enemy!' gasped Rhino. Then Snow Leopard stepped from the shadows. 'Was that rumble Rhino's tummy, or a wild bear?' 'Just my brain planning a way to fly!' said Kanga. She showed them a secret path of stepping stones.",
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
        text: "A purple marshmallow spaceship landed with a soft 'SQUEAK!' Out popped three fuzzy creatures with orange fur, green boots, and huge feather dusters. 'WE ARE THE TICKLE MONSTERS! PREPARE TO LAUGH!' they squeaked. Penguin the leader stood tall to protect their ticklish ribs, and Kanga grinned, 'My genius plan: paint funny eyes on our tummies so they think we're awake!'",
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
        text: "'GHOST MODE!' Penguin squawked, and ZIP - they turned into glowing blue ghosts and floated past the monsters. But Rhino smelled peanut butter and whispered, 'A sandwich spaceship!' His ghost tummy rumbled, 'WUUUUU!' and the monsters looked around. 'Did a ghost just order a sandwich?'",
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
        text: "'Wrecking ball style!' Waddle cheered, tucking in his flippers. He shot across the grass like a metal bullet, and CRASH - he smashed the lead monster's feather duster into a cloud of pink feathers! 'Oh no! My tickler!' the monster squeaked, falling over laughing. But the other two charged with feather-guns, 'Tickle beam ready!'",
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
        text: "The control room was made of candy, with a lollipop steering wheel and soft marshmallow buttons! Rhino ate the 'Launch' button - 'OM NOM NOM! Strawberry!' Suddenly a siren blared, 'BUTTON IN BELLY!' and the ship bounced like a rubber ball. Kanga grabbed the lollipop wheel, 'Turn left and we'll fly to the moon and eat cheese!'",
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
        text: "Rhino tried a spooky boo but sneezed instead - 'BOO-NOM-ACHOO!' The sneeze blew off Ghost Mode, and the monsters spotted them. 'AHA! INTRUDERS!' they squeaked, tickling Rhino's ribs until he roared, 'HA-HA! STOP! MY SANDWICH IS JIGGLING!' Kanga popped a bucket over his head, 'You can't tickle me, I'm a metal trash can!'",
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
        text: "Snow Leopard leaped from the sky and slammed her paws down, and a giant wall of glittering blue ice rose up! The tickle beams bounced right back onto the monsters, who rolled around giggling. 'We're tickling ourselves! Save us!' they squeaked. Kanga licked the wall, 'Mmm, mint ice cream!'",
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
        text: "Cheeky jumped between Waddle and the monsters and did a hilarious dance, wiggling his tail feathers. 'Look at my cheeky wiggle!' The dance was so funny the monsters forgot tickling and danced too, squeaking, 'Wow, great moves!' Kanga joined with crazy leaps, 'My genius dance of the stars!' - and landed headfirst in a bush.",
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
        text: "Penguin closed his eyes and used his special Penguinpower to fix things! His flippers glowed golden as he touched the chewed panel, and ZIP-ZAP - a brand new marshmallow button grew back! 'You're a magic leader!' Waddle squawked. The screen lit up with a map of the tickle planet, Penguinpower-Two!",
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
        text: "The ship bounced into the sky like a giant bouncy ball - 'WHEEE!' screamed Waddle! It bounced off a cloud, off the chimney, and landed SPLAT in Mummy Penguin's bowl of chocolate cake batter. 'My cake!' she gasped. Rhino licked his arm, 'Best accident ever!' and Kanga wore a cake-batter hat.",
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
        text: "Mummy Penguin marched out with a giant steaming pot of Penguinpower Noodle Soup. 'Nobody tickles my babies!' she yelled, handing bowls to the monsters. They sniffled, sipped, and squeaked, 'Ooooh! This is warmer than tickles - so cozy!' They dropped their feather dusters and sat eating noodles, and Rhino joined right in.",
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
        text: "The bucket on Kanga's head popped open, and out jumped Surprise, who'd been hiding in his pouch the whole time! 'SURPRISE!!!' she screamed, tossing confetti as the monsters leaped ten feet high. 'AAAH! Confetti explosion!' they cried, scrambling into their spaceship and zooming off in purple smoke. Kanga cheered, 'My genius pouch-monster saved the day!'",
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
        text: "They flew to the Tickle Castle, made of pink cotton candy! In the center sat the Giant Tickle King, big as an elephant but fluffy as a cloud. 'Who dares enter without laughing?' he boomed, and Rhino stepped up holding a sandwich, 'I dare - my mouth's too busy chewing!' The King stared, 'What is that magical brown thing? Can I have a bite?'",
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
        text: "The Tickle King loved the sandwich so much he made peace - 'Sandwiches are better than tickling!' Mummy Penguin baked a hundred peanut butter and marshmallow sandwiches, and everyone feasted on fluffy clouds. Penguin got three golden stars, and Kanga got a crown for his jokes. You helped them read and saved the day - amazing work!",
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
        text: "Waddle got too excited - 'WRECKING BALL!' he squawked, rolling into the cotton candy walls and smashing the main pillar! The whole castle collapsed into sticky pink fluff, and the crew got stuck like giant candy balls. Rhino ate his way out, 'Mmm, strawberry castle!' You got stuck, but it was delicious - try again!",
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
        text: "The chocolate cake batter was too thick and sticky, and the crew only got more stuck! 'You're covered in cake - stay in the yard for a hose wash!' said Mummy Penguin, turning on the sprinkler. Rhino fell asleep in a puddle, dreaming of a chocolate rainstorm. You didn't stop the tickles, but you got a funny bath - try again!",
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
        text: "The lead monster wiped a tear. 'We're from Penguinpower-Two, where there are no toys and no sandwiches - only feathers! We just wanted to make friends and hear you laugh.' Penguin smiled, 'You don't need tickles to make us laugh - Kanga can do that!' Then Kanga yelled, 'PICKLE-PANTS!' and everyone burst out laughing.",
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
        text: "The Penguinpower Carnival glowed with neon lights. But something was wrong! The roller coaster tracks glowed green, and the train zoomed backward! 'Spooky!' squawked Penguin. Rhino munched three hot dogs. Then a little green ghost popped out of the ticket booth. 'Ooooo! Leave my carnival!' he wailed. 'Look, his sheet has a pocket!' said Kanga.",
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
        text: "The crew held hands. 'GHOST MODE!' squawked Penguin. A blue light wrapped around them, and they became glowing ghosts! They floated up to the green ghost. 'I am a ghost-kangaroo!' said Kanga. The green ghost smiled. 'I am only sad because nobody will play with me! The coaster always runs away backward!' Rhino asked, 'Do ghosts eat sandwiches?'",
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
        text: "Waddle Wrecking Ball got a wild look. 'SMASH TIME!' he squawked. He rolled into a steel ball and crashed into the coaster controls. CRASH! Sparks flew and the tracks turned purple. The train stopped with a SQUEAK. But now the cotton candy machine spun super fast, shooting giant pink sugar clouds! 'A sugar volcano!' cheered Kanga.",
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
        text: "They climbed into the front car. Still in Ghost Mode, they floated above the seats! The green ghost pulled the lever. WHOOSH! The train shot up, down, and around a giant loop. 'WEEEEE!' roared Rhino. Then they saw a big shadow on the tracks ahead. It was Waddle, stuck on the loop!",
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
        text: "They entered the Mirror Maze of shiny glass. Kanga's reflection had a long neck. 'I am a Kangaraffe!' he laughed. Rhino saw a skinny mirror. 'The mirror stole my sandwiches!' he cried. Then Cheeky jumped out wearing a funny clown nose. 'Cheeky!' squawked Penguin. 'Did you cause this green ghost mess?'",
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
        text: "The pink cotton candy clouds carried them high above the Ferris wheel! Rhino chewed his cloud. 'Mmm, strawberry sky-boats!' he laughed. But the wind blew them toward the giant duck-pond at the park's edge! Kanga flapped his ears. 'If we all sneeze, we can blow back!' Waddle rolled inside the cloud like a pink steel ball.",
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
        text: "Snow Leopard stepped forward, her white fur glowing. She blew a big breath of freezing ice-air over the machine and controls. WHOOSH! Everything froze into a glittering ice castle! The sparks stopped. 'Wow, an ice park! I love ice!' the green ghost clapped. Cheeky slid on his tummy like a bobsled. 'Ice sliding!' cheered Waddle.",
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
        text: "Snow Leopard leaped high into the air and grabbed Waddle with her soft paws, just as the coaster zoomed past! She landed on a giant pile of teddy bears. 'Got him!' she purred. 'Better than a slide!' Waddle giggled. 'We are the kings of the teddy bears!' clapped Kanga. Then Mummy Penguin arrived with hot popcorn.",
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
        text: "'Keep Ghost Mode active!' shouted Penguin. The train shot straight at Waddle. But instead of a crash, it went POOF right through his steel body! 'Ooh-la-la!' Waddle giggled. The train slowed and stopped at the station. 'You did it! The coaster is safe!' cheered the green ghost. Mummy Penguin clapped her flippers.",
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
        text: "They followed the red clown noses to the main stage. There, Cheeky hosted a funny circus for squirrels and rabbits! He juggled sandwiches while riding Waddle like a unicycle. 'Step right up!' he shouted. The green ghost floated up and danced, and the crowd cheered! Rhino caught a sandwich in his mouth. 'NOM! Center stage!'",
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
        text: "Penguin stood tall and sang a loud opera. 'SQUAWK-SQUAWK-YODEL-OM-NOM!' The mirrors shook and slid open, showing a secret door! Behind it was Mummy Penguin, setting up a surprise birthday party for the green ghost. 'You found the party room!' she said. 'A party? For ME?!' gasped the green ghost, dancing with joy.",
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
        text: "They popped their cloud and dropped onto the top of the giant Ferris wheel. Then they slid down the rails like a slide! 'WEEEEE!' cheered Kanga. They landed softly in Mummy Penguin's arms. 'Here is some real food, my brave adventurers!' she laughed, handing them hot cinnamon rolls. Rhino ate three in one bite. 'Mmm, saved my life!'",
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
        text: "The green ghost was so happy to have friends that he turned the tracks back to safe gold! Mummy Penguin fed everyone cinnamon rolls, popcorn, and sandwiches. The ghost gave the crew a lifetime carnival pass! Kanga wore three teddy bears like a suit. 'I am the teddy bear king!' he shouted. Five stars for your reading! The carnival is saved. The End!",
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
        text: "SPLAT! They fell right into the giant yellow duck pond. Water splashed high! Waddle floated on his back like a metal buoy. Rhino sat with a plastic duck on his head. 'I am a duck-rhino! Quack!' he roared. Mummy Penguin ran over with warm towels. 'Oh you silly billies!' she laughed. You had a great splash! Try again to solve the coaster mystery!",
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
        text: "The tall mountain glittered with blue ice and snow. Snow Leopard waved her tail, 'Come on, crew! The peak is just ahead!' Rhino shivered, 'Brrr! I need a peanut butter sandwich!' Then Kanga leaped into a snowbank as the wind howled, and a marshmallow blizzard rolled in!",
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
        text: "They jumped onto the smooth blue glacier. 'WEEEEE!' Penguin squawked, sliding on his round belly like a bobsled! Rhino slid behind him, and Waddle rolled like a clanging steel marble. Ahead, the slide split into two tunnels, one glowing with blue crystals and one smelling like hot chocolate!",
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
        text: "They stepped into the dark, cozy cave. 'Hello!' Penguin shouted, and the walls echoed back, 'HELLO-ELLO-LO!' Rhino yelled, 'I want a sandwich!' and giggled. Then Kanga rubbed icicles for cold-fire, and two glowing yellow eyes blinked in the dark!",
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
        text: "The tunnel opened into a glowing blue room, where a friendly Yeti sat in a tiny red hat. 'Brrr! I lost my warm blanket!' he shivered. Kanga hopped over, 'I'll build you a blanket of kangaroo jokes!' Rhino grinned, 'Or we can share a warm toasted cheese sandwich!'",
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
        text: "The tunnel opened to a secret kitchen inside the mountain. There stood Mummy Penguin beside a bubbling river of hot chocolate! She handed out giant mugs with pillow-sized marshmallows. Rhino jumped right into his cocoa, and Waddle rolled into a chocolate fountain until he was covered in sweet cream!",
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
        text: "The crew turned into glowing ghosts and floated toward the eyes. It was only Cheeky in a spooky mask, holding a flashlight! Rhino floated through his chest, Cheeky giggled, and dropped a secret map to the mountain treasure!",
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
        text: "Waddle rolled back and CRASHED into a glowing boulder! It burst into sparkling diamonds that lit up the cave. The yellow eyes were a baby snow-leopard hugging her giant blue toy box! Snow Leopard purred, and Kanga cheered, 'I'm the diamond king!'",
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
        text: "Rhino handed the Yeti his toaster-sandwich, and the Yeti took a big bite. The hot steel-cheese warmed his tummy, and steam puffed from his ears. 'I am warm!' the Yeti roared, then carried the whole crew up to the summit through the marshmallow blizzard!",
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
        text: "Snow Leopard wrapped her fluffy tail around the Yeti like a warm scarf. 'Cozy leopard hug!' The Yeti smiled and pointed to a secret frozen doorway. 'The treasure is behind that door!' Waddle grinned, 'Let me smash it!'",
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
        text: "Following the map, they reached the top of Mount Penguinpower. On a stone altar sat the treasure: a golden lunchbox! Rhino opened it and found no gold, just a pile of fresh peanut butter and marshmallow sandwiches! 'THE HOLY GRAL OF SANDWICHES!' Rhino cheered.",
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
        text: "Waddle smashed the box open, and magical toys floated out! There were glowing space tops, bubble wands, and a mini-zeppelin that flew itself. Kanga spun a top on his nose, 'My nose will be a helicopter!' Snow Leopard and her baby sister chased the bubbles.",
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
        text: "Kanga and Waddle jumped onto Mummy Penguin's giant hill of cookie dough. But the dough was super sticky! They rolled and rolled, until they were two giant walking cookies covered in sprinkles. Rhino chased them with a fork, 'Mmm, moving cookies!' but they were stuck fast!",
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
        text: "They had the ultimate picnic on the peak of Mount Penguinpower! The Yeti, Snow Leopard's family, and Mummy Penguin shared cocoa in woolly hats. Kanga got a golden medal and Rhino a sandwich trophy! You read so well and earned five stars, fantastic job!",
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
        text: "Mummy Penguin shook her head at her cookie-covered babies. 'Since you're already sweet, have a nap!' She wrapped them in warm towels while Rhino snored by the oven. You got sticky and sweet, so try again to reach the summit of Mount Penguinpower!",
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
        text: "Mummy Penguin stirred cake batter as big as a swimming pool. 'I need the magic steel-sugar from the mines, or my cake will fall flat!' she squawked. 'I will lead the sugar-quest!' said Penguin, while Waddle cheered that his steel belly could dig through any rock. Rhino licked the spoon and Kanga wanted to shrink tiny and ride sugar-bugs -- how should they dig?",
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
        text: "Waddle tucked in his head, turned into a steel ball, and screamed 'DRILL MODE ACTIVATED!' ZZZT-BOOM -- he drilled a tunnel deep into the mountain! Kanga and Penguin slid behind him while Rhino ate sugar-dust, cheering 'Mmm, sweet snow!' They popped out into a glowing purple cave full of sparkling sugar-crystals.",
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
        text: "They jumped onto the super-fast sugar-factory conveyor belt, zooming past marshmallow machines and chocolate fountains. 'Hold on to your hats!' squawked Penguin. Rhino gulped chocolate from a fountain, roaring 'NOM NOM NOM!' while Kanga tried to ride a gingerbread man. Ahead, the belt raced straight toward a giant dough-kneader!",
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
        text: "A tiny green goblin in a sugar-cube crown guarded a giant chest of steel-sugar. 'Nobody takes my sugar unless you answer my riddle!' he squeaked, waving a giant candy cane. 'What is round, made of metal, and loves to smash things?' Kanga tapped his chin and guessed, 'Is it a shiny metal orange?'",
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
        text: "The crew turned on Ghost Mode and floated right through the solid sugar-crystal wall! Inside a secret cavern hung the Legendary Steel-Sugar Star, shining so bright it made their eyes sparkle. But a sleeping sugar-dragon guarded it, snoring out sweet strawberry pink clouds. Rhino floated toward the dragon's nose.",
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
        text: "They leaped off the belt and landed PLOP in a huge pit of soft white mini-marshmallows! Rhino tossed marshmallows into his mouth, cheering 'I am in marshmallow heaven!' Cheeky threw marshmallow snowballs at Waddle. Kanga built a marshmallow kangaroo family, giggling 'They don't jump, but they are very tasty!'",
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
        text: "Waddle slammed into the giant red emergency stop button -- DING! The belt stopped, launching Kanga and Penguin into a giant sack of steel-sugar on a forklift! 'Exactly what we needed!' squawked Penguin, as the forklift rolled down a ramp toward the kitchen. Kanga grabbed the wheel!",
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
        text: "'The answer is Waddle Wrecking Ball!' squawked Penguin. 'CORRECT!' squeaked the goblin, tap-dancing happily on a sugar cube. He unlocked the chest and handed them a giant crystal of steel-sugar. Snow Leopard grabbed it, cheering 'Let us run back to Mummy Penguin!'",
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
        text: "Waddle got too excited and rolled into the goblin's giant candy cane -- CRASH! It broke into sweet peppermint pieces. Instead of getting angry, the goblin licked one and giggled 'Mmm, peppermint!' He handed them the sugar, and Rhino grabbed a piece too, cheering 'Peppermint sandwich!'",
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
        text: "Penguin grabbed the glowing Steel-Sugar Star with his ghostly flippers, light as a feather! They floated back through the crystal wall, past the snoring dragon, then turned off Ghost Mode. The star sparkled solid in Penguin's hands. 'Let's bake!' squawked Waddle.",
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
        text: "Kanga tickled the sleeping dragon's nose, and -- 'ACHOO!!!' -- it blasted out pink strawberry smoke! The smoke blew the crew down the mountain and onto Mummy Penguin's kitchen patio. The sugar-star flew from Kanga's hand right into her mixing bowl. Mummy Penguin laughed, 'What a fast delivery!'",
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
        text: "Rhino searched the marshmallow pit and found a glowing chocolate key! It opened a secret cupboard holding a sack of Mummy Penguin's steel-sugar. Waddle lifted the sack onto his round metal back, and Cheeky hopped on top waving a flag. 'To the kitchen!' they cheered.",
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
        text: "They rushed into the kitchen, and Mummy Penguin stirred the steel-sugar into her giant bowl. Instantly the batter rose into a magnificent 100-foot-tall cake, with layers of chocolate, peanut butter, and marshmallow! Waddle rolled around the base adding frosting. Kanga wore a giant strawberry, laughing 'I am the strawberry king of the festival!'",
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
        text: "The Penguinpower Festival was a massive success, and the whole town ate Mummy Penguin's giant cake! Waddle got a chocolate crown, Kanga won a medal for his strawberry hat, and Rhino ate forty pieces! Penguin squawked, 'We are the best readers and cake-bakers in the world!' You got five stars and won -- The End!",
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
        text: "Rhino and Waddle ate so many marshmallows that their tummies were completely round -- they couldn't even wiggle! They snored in the pit while Rhino mumbled, 'Cozy... sugar... nap...' Mummy Penguin tucked them in with marshmallow blankets. You got too full to finish the cake -- try again to bake the 100-foot cake!",
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
        text: "Kanga had built something amazing! In the living room stood a huge wobbly machine made of cardboard, foil, string, a bicycle bell, and a banana. A sign said: DO NOT KICK - DO NOT LICK. 'Can it send us where snacks are free?' asked Rhino. Then Waddle licked it! A crack appeared, and DING-DING-DING, the banana began spinning! 'Oh. That's not ideal,' gulped Kanga. What should they do?",
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
        text: "Kanga wrapped sticky tape around the crack until the machine looked like a shiny silver potato. 'Fixed,' said Kanga. The lights flashed and the banana spun faster. 'Why is the banana doing that?' asked Mummy Penguin. Suddenly three glowing doors appeared: one red, one green, and one blue! Which door should they open?",
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
        text: "Kanga pressed the big red button. The machine roared like a washing machine full of spoons! The sofa bent and Mummy Penguin's fish tank floated upside down. CRRRRRACK! The emulator imploded and sucked everyone into a swirling tunnel. Ahead spun three tunnels: one smelled like syrup, one like smoke and goblins, and one like wet socks and marshmallows. Which tunnel do they choose?",
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
        text: "'Stand back, I know how to improve this,' said Rhino. He kicked the machine! It gave a polite cough and swallowed everyone. They landed in Mummy Penguin's kitchen beside a huge pile of dirty dishes. A message glowed: DO THE DISHES TO CONTINUE. Waddle ate the sponge! When every plate was washed, the cracked emulator reappeared. 'We're back where we started,' smiled Kanga. What now?",
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
        text: "They opened the red door and landed in Mummy Penguin's messy bedroom. A message glowed: CLEAN THE BED TO CONTINUE. They folded blankets and fluffed pillows while Waddle lay down and refused to move for seven minutes! When the bed was perfect, a portal opened under the pillow, making slurping noises. What should they do?",
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
        text: "They opened the green door into a long bendy tunnel full of floating question marks. 'This looks suspicious,' said Penguin. 'This looks educational,' said Kanga. 'This needs snacks,' said Rhino. The tunnel twisted every way, and then everything wobbled! Kanga's tail looked like a trumpet and Rhino's horn turned into a spoon. 'Oh no. We're entering a distortion field!' gasped Kanga.",
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
        text: "They opened the blue door into Mummy Penguin's garden. It looked too normal! Then the wheelie bin popped open and a message said: TAKE OUT THE TRASH TO CONTINUE. 'Why does space-time care about chores?' groaned Rhino. Kanga rescued four cardboard boxes. Then the recycling bin glowed, opened a portal, and Waddle jumped in!",
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
        text: "They landed in a golden land where the sky was butter and the ground was one giant pancake! 'I have found my people,' said Rhino. Then a huge PANCAKE STANDARDISER rolled over the hill and flattened Kanga. FLUMP! 'Frisbee!' laughed Rhino, throwing flat Pancake Kanga across the syrup river. The machine rolled at Waddle, but CLANG, it broke on his steel body! The whole land began to crack, and they saw three escape routes.",
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
        text: "They landed on a green planet with a castle shaped like an angry face. 'Not the snack dimension,' gulped Penguin. Goblin minions marched up with minion guns as a voice boomed: 'I AM THE GREEN GOBLIN! ALL VISITORS BECOME MY MINIONS!' But one minion whispered, 'We don't like him. He makes us polish his throne and sing his theme tune!' Rhino looked for biscuits. What should they do?",
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
        text: "They landed in a marshmallow wonderland! The mountains, trees, and road were all soft marshmallow, so walking was very bouncy. 'This is lovely,' said Penguin. Suddenly tiny marshmallow people popped out in helmets with tiny spears. 'INTRUDERS! GET THEM!' squeaked the marshmallow chief. 'They're adorable,' blinked Rhino. The marshmallow army charged! What should they do?",
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
        text: "They landed in a silver corridor that stretched forever. Two big signs waited at the end: one said SAFE WAY HOME, the other said DEFINITELY NOT A DISTORTION FIELD. 'That second sign is lying,' said Penguin. 'Definitely!' agreed Kanga. 'But it says definitely not,' said Rhino. Mummy Penguin covered his eyes. Which way should they go?",
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
        text: "The distortion field swallowed them and everything stretched like melted cheese! Penguin tried to talk but said, 'Kanga, you have a foot where your nose should be!' 'Why are you in a doggo costume?' answered Kanga. Kanga's toes grew tiny faces, and one named Trevor waved. Rhino wore a polka-dot bikini, Mummy Penguin proposed to a cheese wardrobe, and Waddle sparkled like a disco ball! Four exits appeared!",
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
        text: "They slid down a giant syrup slide, fast and super sticky! Halfway down, Pancake Kanga stuck onto Rhino's face like a mask. 'I can't see!' yelled Rhino. They flew off the end and splatted into a glowing portal. A sign flashed past: NEXT STOP: GOBLIN PLANET!",
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
        text: "They crawled through a pancake tunnel. Rhino took a giant bite of the wall! 'Don't eat the emergency exit!' screamed Penguin. Too late! It collapsed and flung them into Mummy Penguin's sock-filled bathroom. A message glowed: SORT THE SOCKS TO CONTINUE. When they finished, a sock became a portal and Waddle jumped in!",
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
        text: "They climbed into a floating butter balloon and drifted up the yellow sky. 'So peaceful,' sighed Mummy Penguin. Suddenly, POP! They fell back into Mummy Penguin's kitchen, where the dirty dishes were back! A message read: DO THE DISHES AGAIN. 'Nooooooo!' cried Rhino. When they finished, the sink portal reopened, smelling of goblin smoke.",
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
        text: "The crew marched to the Green Goblin's castle. He appeared on his balcony in a giant cape. 'You dare challenge me?' he roared. 'Yes, and your minions don't like you!' shouted Kanga. The Goblin fired his minion gun at Rhino, but the smoke cleared to show Rhino in a tiny goblin hat. It didn't work on him! Rhino charged, and the Goblin tripped into a laundry basket. The minions cheered!",
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
        text: "'What if you stopped obeying him?' Kanga whispered to the minions. 'We can do that?' they gasped. 'You are your own minions!' nodded Penguin. 'NO MORE THRONE POLISHING! NO MORE THEME SONG!' they roared, storming the castle. The Goblin ran out in his slippers. 'You're fired!' squeaked the chief. Waddle dropped the Green Goblin into a bin marked OLD VILLAINS! The minions cheered!",
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
        text: "They sneaked into the castle kitchen and found pots of smelly green soup. 'The Goblin makes us eat this every day,' whispered a chef goblin. Penguin tasted a drop and his face turned inside out! In seconds, Kanga built a soup catapult from cardboard. 'FIRE!' Green soup splashed all over the throne room. The Green Goblin slipped into his gun machine, which exploded into harmless bubbles. The minions cheered!",
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
        text: "'We come in peace!' said Penguin. 'Do you come with hot chocolate?' asked the marshmallow chief. 'No,' said Penguin. 'Then you are useless!' gasped the marshmallow people, and the army charged again! 'I still think they're cute,' whispered Rhino. Kanga spotted a glowing marshmallow archway. 'Run!'",
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
        text: "They bounced down the marshmallow road. Boing! Boing! The marshmallow army bounced after them. 'This is the least scary chase ever!' laughed Rhino. At the road's end waited two glowing portals: one smelled like syrup, one like goblin smoke. Which one do they jump into?",
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
        text: "Rhino stepped in front of the marshmallow army, opened his mouth, and roared: 'BOO!' The whole army fainted! Two tiny marshmallow people looked impressed, and Rhino secretly tucked them into his backpack. 'Did you smuggle marshmallow people?' asked Penguin. 'No,' said Rhino. His backpack squeaked: 'Yes he did.' 'That's a problem for another story,' sighed Penguin. A portal opened!",
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
        text: "They stepped through Mummy Penguin's front door and flopped onto the sofa. Kanga's emulator stood in the room, smoking gently. 'A successful test!' said Kanga. 'Successful? Rhino has syrup on his ear, Mummy Penguin has marshmallow fluff in his feathers, and Waddle is sparkling!' said Penguin. Then the machine coughed out a goblin helmet, a pancake, and a tiny spear. A button flashed: COMPLETE ADVENTURE PROPERLY. Press it?",
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
        text: "The minions threw a huge party with music, dancing, and victory biscuits! 'The greatest planet,' said Rhino. Kanga studied the broken minion guns. 'I can fix the emulator with these!' 'No!' yelled Penguin and Mummy Penguin. Too late! Using a goblin battery, a pancake spring, marshmallow string, and Waddle's disco sparkle, Kanga rebuilt it. It looked worse but worked, and a portal opened to the living room!",
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
        text: "Mummy Penguin unplugged the emulator. The lights went out and the banana stopped spinning. Then a message glowed: ADVENTURE ENDED EARLY. EVERYONE MUST TIDY THE LIVING ROOM. 'Not another chore dimension!' groaned Rhino. They scraped syrup off the ceiling and pulled a goblin helmet off the lamp. Then Rhino's backpack wriggled... You ended early and got stuck with chores! Try again to get the real ending!",
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
        text: "They landed in Mummy Penguin's living room, all back to normal! 'We learned something today,' said Mummy Penguin. 'Yes, Kanga shouldn't build machines out of cardboard,' said Penguin. Then Rhino's backpack wriggled and two tiny marshmallow people popped out! One threw a spear at a grape while the other built a fort under the sofa. Kanga grabbed his notebook and wrote: THE RISE OF THE MARSHMALLOW PEOPLE! You read the whole story perfectly! You got 5 stars! You won!",
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
      node_29: {
        id: "node_29",
        title: "Lost in the Distortion Field!",
        text: "The distortion field grew stronger! Penguin tried to speak but said, 'I am a sandwich with opinions!' 'My elbow wrote a novel about soup!' said Kanga. Rhino shouted, 'I challenge the moon to a dance battle!' The moon danced, and Rhino lost! Then Waddle sparkled so brightly the field got embarrassed and spat them out!",
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
        text: "'We offer victory biscuits, but only after victory,' said the minion chief. 'I want pre-victory biscuits,' said Rhino, folding his arms. 'Unusual. Bold. Possibly wise,' whispered the minions. Then the Green Goblin yelled: 'Nobody gets biscuits until I say so!' Every minion gasped. The rebellion began at once, because biscuits were the final straw!",
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
