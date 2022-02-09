# Canvas Application ReadMe :rocket:

Welcome to the ReadMe of our Canvas Application. This ReadMe contains two sections: the User Guide section and Developer section. In the User Guide section you will find instructions for the proper use of the Canvas application. In the Developer Section you will find more information on the code and features that remain to be implemented.

### User Guide

This is the guide for proper use of our Canvas application. We are happy you chose to make use of our web-based drawing application. It is easy to use, all you need is a mouse! You can use the interface on the left side of the screen to switch between the different features. Bellow you will find a brief instruction for each seperate feature.

===========Interface layout===========

The interface layout is made out of 4 subsections. The first subsection contains non-drawing features such as undo, redo, saveImage, clear canvas and load image. The second subsection contains all the different ways to draw on the canvas. The third subsection allows you to change the line thickness and the size of the letters. The fourth and final section contains color selection tools so you can pick your favorite color to draw with.

===========Interface top section===========

**Undo & Redo:**
With these buttons you can correct any drawing mistake you make. Every line you draw or shape you make we keep track of. This means you can take it step by step and simply click the undo button to go back. The undo button is the button on the left side of the first interface subsection marked by a curly arrow.
The redo button is marked by the same arrow and is next to the undo button. This button allows you to redraw any step that you removed by clicking undo before. This will come in handy when you accidentally click undo to often!

**SaveImage:**
Click the button with the floppy disc icon in order to download your canvas as an image onto your computer. You will be asked to type in the file name that you want. The image will be saved as a .png file.

**Clear canvas:**
The button with the X icon will clear the entire canvas and allow you to start over. Don't worry, we will ask you whether you are sure first before we erase your drawing.

Load Image:

===========Interface drawing section===========

**Drawing Rectangle:**
Click and drag to draw a rectangle onto the canvas. Your get a preview to see if you like what you are drawing. Release the mouse to make the final draw of the rectangle. Button is on the top left.

**Drawing Straight Line:**
We will help you to draw perfectly straight lines from a to b. Simply click to start and then drag to where you want to draw the straight line. It will be drawn as soon as you release the mouse. Button is on the top right.

**Drawing brush:**
Use the brush function marked by the brush icon will allow you to directly paint with any chosen color. Click and drag to start drawing.

**Fillbucket:**
With simply one click of your mouse you will fill a part of your canvas with your chosen color. Our fillbucket feature will look for all pixels that are the same color as your starting point. This feature will be handy if you want to bring colors into your shapes. Select the right color by changing the fillcolor in the selection section of the interface at the very bottom.

**Drawing Circle:**
Draw a perfect circle by drag and drop. Using maths, we allow you do make a perfect circle that detects the radius once you drag your mouse.

**Drawing Triangle:**
Similar to our circle feature. You can use the drag and drop technique to draw a perfect triangle onto the canvas.

**Bezier Curve:**
For those more adventurous among our users, we build a bezier-curve feature. On the first drag you will start. After releasing your mouse you will see a straight line. On the second drag you will control the first controlpoint of the bezier-curve. Once you will release your mouse again you can see the curve starting to take shape. On the third drag you will set the second controlpoint and on release your bezier-curve will be drawn onto the canvas. The button is right underneath the circle button.

**Text:**
The A icon marks the text feature. You will see an input box at the place you will click. In this you can write your text and once you either press enter, or click somewhere else, you will draw the text onto the canvas. The size of the letters can be adjusted in the subsection bellow by adjusting the text size. You can also choose a different font in the bottom subsection of the interface.

**Quadratic Curve:**
On the bottom left you will find our quardratic-curve feature. On the first drag you will draw a straight line. On the second drag you are able to drag the controlpoint of the quadratic-curve to make a perfect curved line in just the way you need.

**Eraser:**
Any artist sometimes needs to carefully use an eraser in order to make a perfect drawing. Use the eraser to carefully erase what you have drawn. Click and drag to start erasing. You can adjust the size of the eraser by adjusting the line width slider in the subsection bellow.

===========Interface slider section===========

In the third subsection of the interface you will find two sliders. The first slider adjusts the line width. This will affect the thickness of the lines you will draw with. This will mean that your rectangle, circle and other shapes will have thicker (or thinner) lines. You can also use it to increase the size of your eraser.

The second slider is used to adjust the size of the letters you can draw by using the text feature.

===========Interface selection section===========

In the bottom subsection of the interface you will be able to pick the colors for your drawing. These colors will apply to any of the drawing features. Use stroke color to select what color will be used for any of the shapes, lines, curves or text. The fillcolor is used for the fillbucket.
There is a dropdown menu for fonts that will allow you to select a font for the text feature.

### Developer Section

In this section of the ReadMe we have gathered a list of features that remain to be implemented. Developers are advised to create a new JS file in order to add these new functionalities. This is to keep the patterns as clean as possible.

_Features to be implemented:_

- [ ] Load image feature that allows the user to load an existing image onto the canvas
- [ ] Zoom in and zoom out functionality
- [ ] select tool that allows you to drag and drop pieces on the canvas. Allow users to rearranged drawn parts
- [ ] load image feature js file need to be added
- [ ] add tooltips from bootstrap to the buttons to create hoover effect with user friendly names of features

_Bugs to fix:_

- [ ] improve usability by adding mouseleave and mouseenter events to all features that allow a smoother transition if the user accidentally moves the mouse out of the canvas
- [ ] fillbucket crashes on transparant pixels
