export const sampleRooms=[
    {id:'room-1',title:"The Clockmaket's Room",difficulty:'Easy',puzzleCount:7,timeLimit:25,
        puzzles:[
            { id:'p1',
              question:"I have hands but no arms,a face but no eyes. What am I?",
              answer:"Clock",
              hint:"You're standing in a room full of them."
            },
            { id:'p2',
              question:"The clock on the wall is stuck.Its hands point to 3 and 9.  If both numbers together,what do you get?",
              answer:"12",
              hint:"Simple addition - don't overthink it. "
            },
            { id:'p3',
              question:"A grandfather clock strikes once at 1:00,twice at 2:00, and so on. How many times does it strike between 1:00 and 3:00(inclusive)?",
              answer:"6",
              hint:"Add up the strikes at each hour:1 o'clock,2 o'clock, and 3 o' clock."
            }
        ]
    },
     {id:'room-2',title:'The Haunted Study',difficulty:'Medium',puzzleCount:5,timeLimit:30},
      {id:'room-3',title:'Cyber Heist',difficulty:'Hard',puzzleCount:6,timeLimit:20},
]