This is just a friendly reminder that this project ONLY works on iOS devices. This is because there is no support for ARkit on android at this time.
I could not eject the project because I am working on a windows computer and don't have access to a Mac. (You had mentioned that you would waive that 
requirement). I attempted to add icons from react-native and understand how it works, but because the source code for three.js and googlepoly was an older 
version, the project would only work with an older version of expo. This older version is incompatible with react-native's vector icons. I could not get the icons
to work without breaking the app. I also attempted to add in a custom "pixel" font, however this would not work with the older version either. (the font files and 
code are there to show that I know how to do it, but its commented out to prevent the app from producing an error upon launch.)

HOW TO USE:

After downloading project files, run "npm install" for node_modules, than run "expo start". 

Homescreen has four options on it (Search, Add, Remove, Settings)
	Tap "Search" to bring on the search page. Not all models appear so if your inital choice doesn't show, try something else.
	(Here are a few assets that are proven to always work: "Badtz-maru" by Pie Leung, "Link" by Alberto Calvo, "GameBoy" by Jason Toff. )

	After tapping on the asset you like, you will be brought back to the homescreen. Tap "Add" to see the model appear.
	(Make sure you are facing the same direction as you were when you loaded the app.)

	Click "Remove" to remove the current object. 

	Click "Settings" to see the settings page (no routes on settings page except to go back to homescreen).


What I have added/changed since ms1: 

-3d objects only rotate on y-axis instead of both x and y
-3d objects appear larger in scale
-Styled settings page with custom icons for buttons (buttons do not work or route to any path)
-Custom search page for assets
-Added splash screen with my startup logo
-Added fonts.js
-Added bubblepixel.tff and pixel.tff
-Started foundation code for adding in physics, placing water under the object and adding in collision with cannon.js (This is unfinished and commented out)