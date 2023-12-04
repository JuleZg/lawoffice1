Primary Color: Charcoal Gray

Hex: #333333
This deep gray provides a professional and sophisticated base.
Secondary Color: Cool Ivory

Hex: #F8F8F8
Use this as a light background color to create a clean and minimalist feel.
Accent Color: Teal Blue

Hex: #007B7D
This teal blue adds a refreshing touch without being overly vibrant. It can be used for call-to-action buttons or other highlights.
Text Color: Dark Slate Gray

Hex: #2C3E50
A dark slate gray is a good choice for text, providing readability against lighter backgrounds.
Link Color: Royal Blue

Hex: #3498DB
Use this color for links to make them stand out and provide a sense of professionalism.

Background Color: #ADB1B4 (Grayish Blue)
Text Color: #595242 (Dark Brown)
Accent Color: #6F614B (Taupe)
Interactive Elements (Buttons, Links): #425366 (Slate Blue)
Additional Background Elements: #A49E99 (Light Gray)

- {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  }

html {
/_ font-size: 10px; _/

/_ 10px / 16px = 0.625 = 62.5% _/
/_ Percentage of user's browser font-size setting _/
font-size: 62.5%;

/_ Does NOT work on Safari _/
/_ scroll-behavior: smooth; _/
}
body {
font-family: "Rubik", sans-serif;
line-height: 1;
font-weight: 400;
color: #555;

/_ Only works if there is nothing absolutely positioned in relation to body _/
overflow-x: hidden;
}

/************\*\*************/
/_ HEADER _/
/************\*\*************/
.header {
display: flex;
justify-content: space-between;
height: 4.6rem;
padding: 0 4.8rem;
position: relative;
align-items: center;
background: #333333;
}
.main-nav-list {
list-style: none;
display: flex;
align-items: center;
justify-content: space-between;
gap: 6rem;
}

.main-nav-link:link,
.main-nav-link:visited,
.logo:link,
.logo:visited {
text-decoration: none;
color: aliceblue;
transition: all 0.3s;
}

.main-nav-link:hover,
.main-nav-link:active,
.logo:hover,
.logo:active {
color: #007b7d;
}

.hero-img {
max-width: 100%;
height: auto;
}
