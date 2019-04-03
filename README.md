**** REACT NATIVE CUSTOM 2-COLUMN GRID ****

Instructions:
1. Install the plugin from npm
   npm install react-native-simplified-grid

2. import the class to your component
   import Grid from 'react-native-simplified-grid'

**** How to Use *****
It's pretty much straight forward to use the library.

<Grid/>

**** Key things to remember *****
In order to generate grid items, you need to pass a JSON array having objects with title and image keys.
e.g 

const jsonArray = [
    {
        id: 1,
        title: "Item one",
        image: "https://picsum.photos/200/300",
        .
        .
        .
    },
    {
        id: 2,
        title: "Item two",
        image: "https://picsum.photos/200/300",
        .
        .
        .
    },
]

<Grid data={jsonArray}/>

**** Component Parameters ******

<Grid 
   data={jsonArray} 
   containerPadding={0} 
   contentHeight={180} 
   borderRadius={0} 
   textColor={"white"}
   overlayBackground={"#00000070"}
   textWeight={"900"}
   alignItems={"center"}
   justifyContent={"center"}
   backgroundColor={"red"}  
   callback={this.doSomething} 
/>
    

1. data: This provides and array of objects that generate the grid items
2. containerPadding: controls grid container padding. The default value is 0
3. contentHeight: sets the height of the grid item. The default value is 100
4. borderRadius: sets the borderRadius of the grid item. The default value is 0
5. textColor: sets the color of the text. the default value is 'white'
6. overlayBackground: sets the value of the background color of the grid item overlay. The default value is '#00000070'
7. textWeight: Sets the fontWeight. The default value is 'normal'
8. alignItems: Sets the horizontal position of the text. The default value is 'center'
9. justifyContent: Sets the vertical position of the text. The default value is 'center'
10. backgroundColor: Sets the background color of the grid item. The default value is 'gray'

Note:
If the JSON object has no image, then by default the background color will visible.

Happy Coding
 
