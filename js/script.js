// Copyright (c) 2025 Lucas Nguyen All rights reserved
//
// Created by: Lucas Nguyen
// Created on: Apr 2025
// This file contains the JS functions for index.html

'use strict'

const clickArea = document.getElementById('click-area')
const displayText = document.getElementById('display-text')
const scores = document.getElementById('score')

const scoreHistory = []

const MIN_MS_UNTIL_CHANGE = 3000
const MAX_MS_UNTIL_CHANGE = 7000

let msSinceColorSwitch = 0
let waitingForClick = false

function play() {
  // Time until color switch
  const msUntilChange = Math.floor(Math.random() * (MAX_MS_UNTIL_CHANGE - MIN_MS_UNTIL_CHANGE)) + MIN_MS_UNTIL_CHANGE

  // Revert color back to red
  clickArea.style.backgroundColor = null;

  // Clear screen
  document.getElementById("display-text").innerHTML = ""

  // When the color switches
  setTimeout(() => {
    msSinceColorSwitch = Date.now()

    clickArea.style.backgroundColor = "#009578"
    waitingForClick = true
  }, msUntilChange);
}

// On Click
clickArea.addEventListener("click", function () {
  if (waitingForClick === true) {
    // Find time
    const score = Date.now() - msSinceColorSwitch

    waitingForClick = false
    document.getElementById("display-text").innerHTML = "Your time was " + score + "ms. Click again!"

    addScore()
  } else {
    play()
  }
})

function addScore(score) {
  // Add scoe to beginning of array
  scoreHistory.unshift(score)

}