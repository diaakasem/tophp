Description
=======

This is a small utility that converts CSV data in a file into a Php Associative Array.

Installation
============

`npm i -g tophp`

Usage
=====

`tophp [-c <csv-file> | --csv=<csv-file>] [-j <json-file> | --json=<json-file>]`

Example
=======

#### CSV conversion to PHP Array
`node tophp.js --csv data.csv`

#### JSON conversion to PHP Array
`node tophp.js --json data.json`

Input: (data.csv file content)
-------------------------------
```CSV
"LatD", "LatM", "LatS", "NS", "LonD", "LonM", "LonS", "EW", "City", "State"
   41,    5,   59, "N",     80,   39,    0, "W", "Youngstown", OH
   42,   52,   48, "N",     97,   23,   23, "W", "Yankton", SD
   46,   35,   59, "N",    120,   30,   36, "W", "Yakima", WA
   42,   16,   12, "N",     71,   48,    0, "W", "Worcester", MA
   43,   37,   48, "N",     89,   46,   11, "W", "Wisconsin Dells", WI
   36,    5,   59, "N",     80,   15,    0, "W", "Winston-Salem", NC
   49,   52,   48, "N",     97,    9,    0, "W", "Winnipeg", MB
   39,   11,   23, "N",     78,    9,   36, "W", "Winchester", VA
   34,   14,   24, "N",     77,   55,   11, "W", "Wilmington", NC
```

Output: ( In stdout/console )
-----------------------------
```PHP
<?php $data = [
	[
		"LatD" => 41,
		"LatM" => 5,
		"LatS" => 59,
		"NS" => "N",
		"LonD" => 80,
		"LonM" => 39,
		"LonS" => 0,
		"EW" => "W",
		"City" => "Youngstown",
		"State" => "OH",
	],
	[
		"LatD" => 42,
		"LatM" => 52,
		"LatS" => 48,
		"NS" => "N",
		"LonD" => 97,
		"LonM" => 23,
		"LonS" => 23,
		"EW" => "W",
		"City" => "Yankton",
		"State" => "SD",
	],
	[
		"LatD" => 46,
		"LatM" => 35,
		"LatS" => 59,
		"NS" => "N",
		"LonD" => 120,
		"LonM" => 30,
		"LonS" => 36,
		"EW" => "W",
		"City" => "Yakima",
		"State" => "WA",
	],
	[
		"LatD" => 42,
		"LatM" => 16,
		"LatS" => 12,
		"NS" => "N",
		"LonD" => 71,
		"LonM" => 48,
		"LonS" => 0,
		"EW" => "W",
		"City" => "Worcester",
		"State" => "MA",
	],
	[
		"LatD" => 43,
		"LatM" => 37,
		"LatS" => 48,
		"NS" => "N",
		"LonD" => 89,
		"LonM" => 46,
		"LonS" => 11,
		"EW" => "W",
		"City" => "Wisconsin Dells",
		"State" => "WI",
	],
	[
		"LatD" => 36,
		"LatM" => 5,
		"LatS" => 59,
		"NS" => "N",
		"LonD" => 80,
		"LonM" => 15,
		"LonS" => 0,
		"EW" => "W",
		"City" => "Winston-Salem",
		"State" => "NC",
	],
	[
		"LatD" => 49,
		"LatM" => 52,
		"LatS" => 48,
		"NS" => "N",
		"LonD" => 97,
		"LonM" => 9,
		"LonS" => 0,
		"EW" => "W",
		"City" => "Winnipeg",
		"State" => "MB",
	],
	[
		"LatD" => 39,
		"LatM" => 11,
		"LatS" => 23,
		"NS" => "N",
		"LonD" => 78,
		"LonM" => 9,
		"LonS" => 36,
		"EW" => "W",
		"City" => "Winchester",
		"State" => "VA",
	],
	[
		"LatD" => 34,
		"LatM" => 14,
		"LatS" => 24,
		"NS" => "N",
		"LonD" => 77,
		"LonM" => 55,
		"LonS" => 11,
		"EW" => "W",
		"City" => "Wilmington",
		"State" => "NC",
	],
];
```
TODO
==========
- [ ] Add support for JSON
- [ ] Add support for XML
- [x] Add support for CSV
- [ ] Add support for config files to modify the app behavior
- [ ] Enable key deletion
- [ ] Enable value replacement for certain keys
- [ ] Enable key text replacement for certain keys
- [ ] Enable object dropping based on a filter
- [ ] Create man pages
- [ ] Create unit tests
- [ ] Create Github actions to build the project
- [ ] Add contribution section

Maintainer
==========
Diaa Kasem
