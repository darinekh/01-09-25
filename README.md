
# FIFA Player Cards – React Checkpoint

## Description

This project is a React application that displays FIFA player cards. Each card shows information about a player including name, team, nationality, jersey number, age, and a picture. The application uses **React**, **react-Tailwind**, and component-based architecture.

## Features

* Display multiple FIFA player cards.
* Each player card includes:

  * **Name**
  * **Team**
  * **Nationality**
  * **Jersey Number**
  * **Age**
  * **Player Image**
* Responsive layout using React-Tailwind Cards.
* Default props for each attribute to handle missing data.
* Inline styling for the Player component.
* Modular structure with separate components and data file.


## Technologies Used

* React
* React-Tailwind
* JavaScript 
* CSS

## Instructions Followed

* Created `players.js` containing an array of player objects.
* Created `Player.js` with a React component that uses a Bootstrap card to display player info.
* De-structured props in `Player.js` and provided default props.
* Created `PlayersList.js` to map through all players and render `Player` components.
* Imported `PlayersList` in `App.js` and rendered it.

