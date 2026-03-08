# Rock Paper Scissor

A simple browser-based Rock Paper Scissor game built with HTML, CSS, and JavaScript. The player chooses Rock, Paper, or Scissors, the computer picks a random move, and the score updates instantly after each round.

## Project Overview

This project is a lightweight front-end game that runs entirely in the browser. It uses:

- `index.html` for the page structure and GitHub Pages entry point
- `styles.css` for styling, layout, and responsive behavior
- `script.js` for the game logic, score updates, keyboard shortcuts, and sound effects
- `image/` for move icons
- `sounds/` for click and move audio

## Features

- Click-based gameplay with Rock, Paper, and Scissors options
- Keyboard shortcuts:
  - `R` for Rock
  - `P` for Paper
  - `S` for Scissors
- Random computer move generation
- Live score tracking for the player and the computer
- Animated move previews
- Sound effects for interactions
- Responsive layout for desktop, tablet, and mobile screens

## Project Structure

```text
Rock_Paper_Scissor/
|-- index.html
|-- styles.css
|-- script.js
|-- image/
|   |-- rock.png
|   |-- paper.png
|   `-- scissors.png
`-- sounds/
    |-- rock.mp3
    |-- paper.mp3
    |-- scissors.mp3
    |-- error.mp3
    `-- ...
```

## How To Download

### Option 1: Download ZIP from GitHub

1. Open the repository in your browser:
   `https://github.com/Abid-Al-Hossain/Rock_Paper_Scissor`
2. Click `Code`.
3. Click `Download ZIP`.
4. Extract the ZIP file to any folder on your computer.

### Option 2: Clone with Git

Run this command in your terminal:

```bash
git clone https://github.com/Abid-Al-Hossain/Rock_Paper_Scissor.git
```

Then move into the project folder:

```bash
cd Rock_Paper_Scissor
```

## How To Run The Project

This is a static front-end project, so it does not need `npm install` or a backend server.

### Recommended: Run with Live Server

1. Open the project folder in Visual Studio Code.
2. Install the `Live Server` extension if needed.
3. Right-click `index.html`.
4. Select `Open with Live Server`.

### Alternative: Open the HTML file directly

1. Open the project folder.
2. Double-click `index.html`.
3. The game will start in your default browser.

Note: Running through Live Server is usually better for local development because browser asset loading is more predictable.

## How To Play

1. Open the game in your browser.
2. Select a move by clicking one of the three buttons.
3. Or press `R`, `P`, or `S` on your keyboard.
4. The computer will choose a random move.
5. The result message and scores will update automatically.

## Rules

- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock
- If both choices are the same, the round is a draw

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript

## GitHub Pages Deployment

This project is now structured for GitHub Pages deployment.

### Required files

- `index.html` at the repository root
- Relative asset paths such as `./styles.css`, `./script.js`, `./image/...`, and `./sounds/...`

### How to publish on GitHub Pages

1. Open the repository on GitHub.
2. Go to `Settings`.
3. Open `Pages`.
4. Under `Build and deployment`, choose:
   - `Source`: `Deploy from a branch`
   - `Branch`: `master`
   - `Folder`: `/ (root)`
5. Save the settings.
6. Wait for GitHub Pages to publish the site.

After publishing, the game will be available from the repository's GitHub Pages URL.

## Recent Improvements

- Improved spacing and layout consistency across screen sizes
- Reduced layout shifts caused by viewport-based sizing
- Refined the scoreboard and message areas for smaller devices
- Added a detailed README with setup and usage instructions
- Renamed the main files for direct GitHub Pages deployment
