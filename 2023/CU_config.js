var config_data = `
{
  "title": "Scouting PASS 2023",
  "page_title": "Charged Up",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2023necmp2",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "de": "Double Elimination<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 100,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "code": "as",
      "type": "clickable_image",
      "filename": "2023/field_image.png",
      "clickRestriction": "one",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
	{ "name": "Cubes Scored High",
      "code": "auh",
      "type": "counter"
    },
	{ "name": "Cubes Scored Mid",
      "code": "aum",
      "type": "counter"
    },
	{ "name": "Cubes Scored Low",
      "code": "aul",
      "type": "counter"
    },
	{ "name": "Cones Scored High",
      "code": "ach",
      "type": "counter"
    },
	{ "name": "Cones Scored Mid",
      "code": "acm",
      "type": "counter"
    },
	{ "name": "Cones Scored Low",
      "code": "acl",
      "type": "counter"
    },
    { "name": "Mobility<br>(Moved out of community)",
      "code": "am",
      "type": "bool"
    },
    { "name": "On Charge Station (Not Balanced)",
      "code": "ad",
      "type": "bool"
    },
    { "name": "On Charge Station, Balanced",
      "code": "ae",
      "type": "bool"
    },
    { "name": "Attempted Charge Station, Failed",
      "code": "acsf",
      "type": "bool"
    }
  ],
  "teleop": [
    { "name": "Cubes Scored High",
      "code": "tuh",
      "type": "counter"
    },
	{ "name": "Cubes Scored Mid",
      "code": "tum",
      "type": "counter"
    },
	{ "name": "Cubes Scored Low",
      "code": "tul",
      "type": "counter"
    },
	{ "name": "Cones Scored High",
      "code": "tch",
      "type": "counter"
    },
	{ "name": "Cones Scored Mid",
      "code": "tcm",
      "type": "counter"
    },
	{ "name": "Cones Scored Low",
      "code": "tcl",
      "type": "counter"
    },
    { "name": "Feeder Count<br>(Fed another bot)",
      "code": "tfc",
      "type": "counter"
    },
    { "name": "Was Fed<br>Game Pieces",
      "code": "wf",
      "type": "bool"
    },
    { "name": "Was Defended",
      "code": "wd",
      "type": "bool"
    },
    { "name": "Floor Pickup",
      "code": "fpu",
      "type": "radio",
      "choices": {
        "o": "Cones<br>",
        "u": "Cubes<br>",
        "b": "Both<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    }
  ],
  "endgame": [
    { "name": "Final Status",
      "code": "fs",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "d": "On Charge Station, not Balanced<br>",
        "e": "On Charge Station, Balance<br>",
	"b": "On Charge Station, Broke Balance<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Total # of alliance<br>robots on charge station",
      "code": "dn",
      "type": "counter",
      "max": 3
    }
  ],
  "postmatch": [
	{ "name": "Defense Score",
	  "code": "ds",
	  "type": "radio",
	  "choices": {
		  "ne": "Not Effective<br>",
		  "e": "Effective<br>",
		  "ve": "Very Effective<br>",
		  "no": "Not Observed"
	  },
	  "defaultValue": "no"
	},
    { "name": "Died/Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "type": "text",
      "size": 15,
      "maxSize": 50
    }
  ]
}`;
