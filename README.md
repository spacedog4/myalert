# myAlert.js
myAlert.js is a Javascript and CSS library for creating custom notifications alerts.

__[Demo](https://spacedog4.github.io/myalert/)__

## __Install__

__Dependencies__
* __[jQuery](https://jquery.com/)__

import the css files, if you prefer you can import just the `myalert.min.css` and create your own theme

```
<head>
	...
	<link rel="stylesheet" type="text/css" href="css/myalert.min.css" />
	<link rel="stylesheet" type="text/css" href="css/myalert-theme.min.css" />
</head>
```

import jQuery and the js file

```
<body>
	...
	<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
	<script type="text/javascript" src="js/myalert.min.js"></script>
</body>
```

## __Usage__

* __[Getting Started](#getting-started)__
* __[myAlert](#myalert-usage)__
	* __[Default style](#default-style)__
	* __[Info style](#info-style)__
 	* __[Success style](#success-style)__
	* __[Warning style](#warning-style)__
	* __[Danger style](#danger-style)__
 	* __[Custom style](#custom-style)__
* __[Saving](#saving-usage)__
	* __[Show](#show)__
	* __[Hide](#hide)__
	
#### Getting Started

First of all you need to set where the myAlert element will appear, you can do this just adding an `data-myalert` attribute to an element, like this:

```
<body>
    ...
    <div id="#content" data-myalert>
    	...
    </div>
    ...
</body>
```

At the beginning the alert will stack without a limit, so if you want just to show three or four alerts at the most you can set an `data-myalert-max` attribute to the element, like this:

```
<body>
    ...
    <div id="#content" data-myalert data-myalert-max="3">
    	...
    </div>
    ...
</body>
```

#### myAlert usage

```
myAlert(message, classes);
```

`message`: The message it is going to show, you can pass an string with html inside.

`classes`: The class for styling the alert, you can pass multiples classes, even a custom class.

#### Default style

![Default style](/images/default.png)

```
myAlert("This is a <i>default</i> alert");
```

#### Info style

![Info style](/images/info.png)

```
myAlert("This is an <i>info</i> alert", "myalert-info");
```

#### Success style

![Success style](/images/success.png)

```
myAlert("This is an <i>success</i> alert", "myalert-success");
```

#### Warning style

![Warning style](/images/warning.png)

```
myAlert("This is an <i>warning</i> alert", "myalert-warning");
```

#### Danger style

![Danger style](/images/danger.png)

```
myAlert("This is a <i>danger</i> alert", "myalert-danger");
```

#### Custom style

![Custom style](/images/custom.png)

```
// js file

myAlert("You're at the <b>forest</b>", "myalert-custom");
```

```
/* css file */

.myalert-custom {
  background-image: url("../img/alert-custom.jpg");
  background-position: center;
  background-size: cover;
  border-left: 0;
  position: relative;
  z-index: 1;
}
.myalert-custom:before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(34, 34, 34, 0.4);
  z-index: -1;
}
```

#### Saving usage

```
myAlertSaving(saving, message, classes);
```

`saving`: The saving status, it can be `true` as default or `false`.

`message`: The message it is going to show, you can pass an string with html inside.

`classes`: The class for styling the alert, you can pass multiples classes, even a custom class.

#### __Show__

![Saving](/images/saving.gif)

```
myAlertSaving(true, "Wait, saving...", "myalert-info");
```

#### __Hide__

```
myAlertSaving(false);
```
