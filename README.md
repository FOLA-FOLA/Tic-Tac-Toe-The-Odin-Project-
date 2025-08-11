# Tic-Tac-Toe Game

A browser-based Tic-Tac-Toe game built with HTML, CSS, and vanilla JavaScript using factory functions and the module pattern.

## Project Overview

This project focuses on creating a clean, modular Tic-Tac-Toe game while practicing object-oriented programming concepts, factory functions, and the module pattern. The emphasis is on organizing code logically and minimizing global scope pollution.

## Features

- Interactive 3x3 game board
- Two-player gameplay with customizable names
- Win detection for all possible combinations
- Tie game detection
- Game restart functionality
- Clean, responsive user interface

## Development Approach

### Phase 1: Project Setup
- Initialize HTML, CSS, and JavaScript files
- Set up Git repository for version control
- Create basic project structure

## Architecture 

### Factory Functions & Module Pattern
- Use factory functions for objects that might need multiple instances (players)
- Use IIFE (module pattern) for singleton objects (gameboard, game controller)
- Keep global scope minimal and organized

### Separation of Concerns
- **Gameboard**: Manages board state and basic operations
- **Players**: Handle player-specific data and actions
- **Game Controller**: Manages game flow, rules, and win conditions
- **Display Controller**: Handles all DOM manipulation and user interface

### Code Organization
Each piece of functionality should have a logical home:
- Game rules and flow control → Game Controller
- Board state management → Gameboard Object  
- Player data and actions → Player Objects
- UI updates and interactions → Display Controller

## Getting Started

1. Clone this repository
2. Open `index.html` in your browser
3. Enter player names and start playing!

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- Git for version control

## Learning Goals

- Practice factory functions and closures
- Implement the module pattern with IIFE
- Organize code with separation of concerns
- Build interactive DOM applications
- Manage application state effectively

## Future Enhancements

- Add AI opponent option
- Implement score tracking across multiple games
- Add animations and sound effects
- Create different difficulty levels
- Add local storage for persistent scores