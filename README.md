# Rock Paper Scissor

A simple browser game built with HTML, CSS, and JavaScript. You choose Rock, Paper, or Scissors, the computer picks a random move, and the score updates after every round.

## Project Overview

This is a static front-end project. It does not require any package installation, build step, or backend server.

Current project files:

- `index.html` as the main page and GitHub Pages entry point
- `styles.css` for the visual design and layout
- `script.js` for game logic, score updates, keyboard controls, and sound playback
- `image/` for the move images
- `sounds/` for the game audio files

## Features

- Click Rock, Paper, or Scissors to play
- Keyboard controls:
  - `R` for Rock
  - `P` for Paper
  - `S` for Scissors
- Random computer choice each round
- Live score tracking
- Result message after each move
- Sound effects for user input
- Classic single-page layout

## Project Structure

```text
Rock_Paper_Scissor/
|-- index.html
|-- styles.css
|-- script.js
|-- README.md
|-- .nojekyll
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

1. Open the repository:
   `https://github.com/Abid-Al-Hossain/Rock_Paper_Scissor`
2. Click `Code`.
3. Click `Download ZIP`.
4. Extract the ZIP file.

### Option 2: Clone with Git

```bash
git clone https://github.com/Abid-Al-Hossain/Rock_Paper_Scissor.git
cd Rock_Paper_Scissor
```

## How To Run The Project

This project can run directly in the browser.

### Option 1: Open the file directly

1. Open the project folder.
2. Double-click `index.html`.
3. The game will open in your browser.

### Option 2: Use Live Server in VS Code

1. Open the folder in Visual Studio Code.
2. Install the `Live Server` extension if needed.
3. Right-click `index.html`.
4. Choose `Open with Live Server`.

## How To Play

1. Open the game in your browser.
2. Click one of the three choices:
   - Rock
   - Paper
   - Scissors
3. Or press `R`, `P`, or `S` on your keyboard.
4. The computer picks its move automatically.
5. The message area shows the result and the score updates.

## Game Rules

- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock
- Matching choices result in a draw

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript

## GitHub Pages Deployment

This repository is ready for GitHub Pages deployment.

### Publish Steps

1. Open the repository on GitHub.
2. Go to `Settings`.
3. Open `Pages`.
4. Under `Build and deployment`, choose:
   - `Source`: `Deploy from a branch`
   - `Branch`: `master`
   - `Folder`: `/ (root)`
5. Save the settings.

GitHub Pages will then publish the site from `index.html` in the repository root.
