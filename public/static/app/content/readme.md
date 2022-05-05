# Documentation for building TMH application screens

## Featured Screen - featured.json

Add `link-item` in featured.json `content: []` field to add more screens to show to users.

`"navigateTo`" field should match json file name of the screen to point the link to, or optionally an external URL.

Include an optional `"groups"` field matching Cognito groups that will be allowed to see links.

i.e.
`"groups": ["Elder"]` will show link only to users who belong to `Elder` Cognito group.
`"groups": []`, or not including a `"groups"` field will show the link to all users
`"groups": ["Elder", "Admin"]` will show links to users in groups `Elder` and `Admin`

Refer to `"link-item"` content component for instructions

    {
    	"screen": {
    		"title": "Starred",
    		"config": {
    			"hideBottomNav": false,
    			"hideHeader": false,
    			"backgroundColor": "black",
    			"fontColor": "white",
    			"hideBackButton": true
    		},
    		"content": [
    			{
    				"type": "link-item",
    				"navigateTo": "textdemo1",
    				"text": "Test Group",
    				"subtext": "Test Group",
    				"icon": "https://www.themeetinghouse.com/static/icons/Frame.png"
    			},
    			{
    				"type": "link-item",
    				"navigateTo": "textdemo2",
    				"groups": [],
    				"text": "White Text Demo",
    				"subtext": "Navigate to text demo",
    				"icon": "https://www.themeetinghouse.com/static/icons/Frame.png"
    			},
    			{
    				"type": "link-item",
    				"navigateTo": "elder",
    				"groups": ["Elder"],
    				"text": "Elder",
    				"subtext": "Navigate to elder",
    				"icon": "https://www.themeetinghouse.com/static/icons/Frame.png"
    			},
    			{
    				"type": "link-item",
    				"navigateTo": "button",
    				"groups": [],
    				"text": "Button Demo",
    				"subtext": "Navigate to button demo",
    				"hideBorder": true,
    				"icon": "https://www.themeetinghouse.com/static/icons/Frame.png"
    			},
    			{ "type": "divider" },
    			{
    				"type": "link-item",
    				"navigateTo": "peacemakers",
    				"text": "Peacemakers",
    				"subtext": "Is peace impossible?",
    				"icon": "https://www.themeetinghouse.com/static/icons/Frame.png"
    			},
    			{
    				"type": "link-item",
    				"navigateTo": "peacemakers2",
    				"text": "Error Demo",
    				"subtext": "404",
    				"icon": "https://www.themeetinghouse.com/static/icons/Frame.png"
    			},
    			{
    				"type": "link-item",
    				"navigateTo": "random",
    				"groups": [],
    				"text": "Random Screen",
    				"subtext": "Navigate to random screen",
    				"icon": "https://www.themeetinghouse.com/static/icons/Frame.png"
    			}
    		]
    	}
    }

## Screen Configuration Options

Configure screen options - background color, hide bottom nav, hide header etc..

    "config": {
    	"hideBottomNav": false,
    	"hideHeader" false,
    	"backgroundColor": "black",
    	"hideBackButton": "false"
    	"fontColor": "white"
    }

| field               | allowed values       | purpose                                      |
| ------------------- | -------------------- | -------------------------------------------- |
| `"hideBottomNav"`   | `true`, `false`      | hides bottom navigation menu                 |
| `"hideHeader"`      | `true`, `false`      | hides top header                             |
| `"backgroundColor"` | `"black"`, `"white"` | defaults to black, set page background color |
| `"hideBackButton"`  | `true`, `false`      | hides back navigation on header              |
| `"fontColor"`       | `"white"`, `"black"` | defaults to white, set page font color       |

# Content Components

These components go inside `"content": []`

All content items always require a type.

## Text

##### type: "header" - a text header

    { "type": "header", "style": "header1", "text": "Title" }

    { "type": "header", "style": "header2", "text": "Title" }

    { "type": "header", "style": "header3", "text": "Title" }

    { "type": "header", "style": "header4", "text": "Title" }

    { "type": "header", "style": "header5", "text": "Title" }

| field     | allowed values                                        | purpose              |
| --------- | ----------------------------------------------------- | -------------------- |
| `"style"` | `header1`, `header2`, `header3`, `header4`, `header5` | different font sizes |
| `"text"`  | `"A section title"`, any text                         | header text          |

##### type: "body" - a paragraph description

    { "type": "body", "style": "small", "text": "This is a small font sized paragraph", "bold": true }

    { "type": "body", "style": "medium", "text": "This is a medium font sized paragraph", "bold": false }

    { "type": "body", "style": "large", "text": "This is a large font sized paragraph" }

| field     | allowed values                  | purpose                     |
| --------- | ------------------------------- | --------------------------- |
| `"style"` | `small`, `medium`, `large`      | different font sizes        |
| `"text"`  | `"This is some text"`, any text | text description            |
| `"bold"`  | `true`, `false`                 | optional field to bold text |

## YouTube Video

##### type: "video" - a youtube video

    {
    	"type": "video",
    	"style": "default",
    	"youtubeID": "50Whz4AQfBc"
    }

| field         | allowed values       | purpose                        |
| ------------- | -------------------- | ------------------------------ |
| `"youtubeID"` | i.e. `"joarYfcRHEg"` | any youtube id                 |
| `"style"`     | `"full"`             | optional, added for future use |

## Custom Playlist Carousel

##### { "type": "custom-playlist" } - add a custom playlist carousel

| field         | allowed values              | purpose                       |
| ------------- | --------------------------- | ----------------------------- |
| `"subclass"`  | `"compassion"`              | or any custom playlist        |
| `"header"`    | `"Peacemaker Stories"`      | optional carousel header      |
| `"subheader"` | `"Description of playlist"` | optional carousel description |
| `"sortOrder"` | `"ASC"`, `"DESC"`           | optional sort order           |

## Image

##### type: "image" - an image with the ability to link externally, and to other screens

    {
    	"type": "image",
    	"imageUrl":"https://www.themeetinghouse.com/static/images/homepage-1-1.jpg",
    	"imageAlt": "Man sitting outside on a backyard patio talking and laughing...",
    	"navigateTo": "https://www.themeetinghouse.com"
    }

| field          | allowed values                                                    | purpose                           |
| -------------- | ----------------------------------------------------------------- | --------------------------------- |
| `"imageUrl"`   | `"https://www.themeetinghouse.com/static/images/homepage-1-1.jpg` | image url                         |
| `"imageAlt"`   | `"Man sitting outside on a backyard patio talking and laughing."` | text to display inside button     |
| `"navigateTo"` | i.e. `"home"`, `"https://themeetinghouse.com`                     | URL or screen name to navigate to |

## Button

##### { "type": "button" } - button to navigate to url

    { "type": "button", "style": "white", "label": "White Button" }

| field          | allowed values                                            | purpose                                                 |
| -------------- | --------------------------------------------------------- | ------------------------------------------------------- |
| `"style"`      | `"white"`, `"black"`, `"white-link-with-icon"`            | select styling for button                               |
| `"label"`      | `"Give Now"`, any text                                    | button label                                            |
| `"navigateTo"` | `"peacemakers"`, `"https://themeetinghouse.com"`          | optional, leave empty for navigating to previous screen |
| `"icon"`       | `https://www.themeetinghouse.com/static/icons/Frame.png`, | optional url to icon, may not work for all styles       |

## List

## Link Item

##### { "type": "link-item" } - button to link to other screens or external resources

    {
    	"type": "link-item",
    	"screen": "home",
    	"text": "Demo Screen",
    	"subtext": "Navigate to demo screen",
    	"groups": ["Elder"],
    	"hideBorder": true,
    	"icon": "https://www.themeetinghouse.com/static/icons/Frame.png"
    }

| field          | allowed values                                             | purpose                                                                                                                               |
| -------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `"navigateTo"` | `"home"`, `"https://themeetinghouse.com"`                  | optional, name of json file or URL. empty navigates to previous screen                                                                |
| `"hideBorder"` | `true, false`                                              | optional, hide bottom border                                                                                                          |
| `"text"`       | `"Home"`                                                   | link text description                                                                                                                 |
| `"subtext"`    | `"Navigate to home screen"`                                | optional sub text                                                                                                                     |
| `"groups"`     | `["Elder", "Admin"]`, `[]`                                 | cognito groups to show item to. If a user belongs to any of these groups he will see the list item, leave empty to show to all users. |
| `"icon"`       | `"https://www.themeetinghouse.com/static/icons/Frame.png"` | a link to the icon image                                                                                                              |

$~$

##### { "type": "divider"} - divider can be used as a separator for styling purposes, primarily in screens with links such as More Screen.

    { "type": "divider" }

## Other

##### { "type" : "spacing" } - add extra spacing in-between components

    { "type": "spacing", "size": 16 }

recommend using multiples of 8

##### { "type": "logo" } - the meeting house logo

    { "type": "logo", "style": "black", "centered": false }

| field        | allowed values       | purpose                             |
| ------------ | -------------------- | ----------------------------------- |
| `"style"`    | `"black"`, `"white"` | logo color                          |
| `"centered"` | `true`, `false`      | optionally center logo horizontally |

#### Example of a simple page with some content items

    {
    	"screen": {
    		"title": "Home Title",
    		"config" : {
    			"hideBottomNav": false,
    			"hideHeader": false,
    			"backgroundColor": "black"
    		},
    		"content": [
    			{
    				"type": "header1",
    				"text": "Welcome to the Home Screen"
    			},
    			{
    				"type": "image",
    				"imageUrl": "https://www.themeetinghouse.com/static/images/homepage-1-1.jpg",
    				"imageAlt": "Man sitting outside on a backyard...",
    				"navigateTo": "https://www.themeetinghouse.com"
    			}
    		]

    	}
    }
