// Copyright (c) 2025 Lucas Nguyen All rights reserved
//
// Created by: Lucas Nguyen
// Created on: Apr 2025
// This file contains the JS functions for index.html

'use strict'

const clickArea = document.getElementById('click-area')
const displayText = document.getElementById('display-text')
let starImage = ''

const MIN_MS_UNTIL_CHANGE = 3000
const MAX_MS_UNTIL_CHANGE = 7000

let msSinceColorSwitch = 0
let waitingForClick = false
let waitingForPlay = true
let colorSwitchTimeout = null


// on click to start
function play() {
  // Time until color switch
  const msUntilChange = Math.floor(Math.random() * (MAX_MS_UNTIL_CHANGE - MIN_MS_UNTIL_CHANGE)) + MIN_MS_UNTIL_CHANGE
  waitingForPlay = false

  // Revert color back to red
  clickArea.style.backgroundColor = null;

  // Clear screen
  document.getElementById("display-text").innerHTML = "Wait for green..."

  // When the color switches
  colorSwitchTimeout = setTimeout(() => {
    msSinceColorSwitch = Date.now()

    clickArea.style.backgroundColor = "#009578"
    document.getElementById("display-text").innerHTML = ""
    waitingForClick = true
  }, msUntilChange);
}

// On click
clickArea.addEventListener("click", function () {
  if (!waitingForPlay && !waitingForClick) {
    clearTimeout(colorSwitchTimeout)
    waitingForPlay = true
    document.getElementById("display-text").innerHTML = "You clicked too early! Click to try again."
  } else if (waitingForClick === true) {
    // Find time
    const score = Date.now() - msSinceColorSwitch
    waitingForClick = false
    waitingForPlay = true
    if (score >= 450) {
      document.getElementById("display-text").innerHTML =
        "Your time was " + score + "ms. Click again! <br/><img src='./images/1-star.png'>"
    } else if (score > 400) {
      document.getElementById("display-text").innerHTML =
        "Your time was " + score + "ms. Click again! <br/><img src='./images/2-star.png'>"
    } else if (score > 325) {
      document.getElementById("display-text").innerHTML =
        "Your time was " + score + "ms. Click again! <br/><img src='./images/3-star.png'>"
    } else if (score > 275) {
      document.getElementById("display-text").innerHTML =
        "Your time was " + score + "ms. Click again! <br/><img src='./images/4-star.png'>"
    } else {
      document.getElementById("display-text").innerHTML =
        "Your time was " + score + "ms. Click again! <br/><img src='./images/5-star.png'>"
    }
  } else {
    play()
  }
})
