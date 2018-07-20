# myAlert
myAlert.js is a Javascript and CSS library for creating custom notifications alerts.

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

import jQuery and the js files

```
<body>
	...
	<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
	<script type="text/javascript" src="js/myalert.min.js"></script>
</body>
```

## __Usage__

* __[myAlert](#myalert)__
	* __[Default style](#default-style)__
	* __[Info style](#info-style)__
 	* __[Success style](#success-style)__
	* __[Warning style](#warning-style)__
	* __[Danger style](#danger-style)__
 	* __[Custom style](#custom-style)__
* __[Saving](#saving)__
	* __[Show](#show)__
	* __[Hide](#hide)__
	

#### myAlert

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
myAlert("This is an <i>danger</i> alert", "myalert-danger");
```

#### Custom style

![Custom style](/images/custom.png)

```
// js file

myAlert("This is an <i>danger</i> alert", "myalert-custom");
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

#### Saving

```
myAlertSaving(saving, message, classes);
```

`saving`: The saving status, it can be `true` as default or `false`.
`message`: The message it is going to show, you can pass an string with html inside.
`classes`: The class for styling the alert, you can pass multiples classes, even a custom class.

#### __Show__

```
myAlertSaving(true, "Wait, saving...", "myalert-info");
```

![Saving](/images/saving.gif)