// Copyright (c) 2025 Lucas Nguyen All rights reserved
//
// Created by: Lucas Nguyen
// Created on: Apr 2025
// This file contains the JS functions for index.html

'use strict'

const clickArea = document.getElementById('#click-area')
const displayText = document.getElementById('#display-text')
const scores = document.getElementById('#score')

const scoreHistory = []

const MIN_MS_UNTIL_CHANGE = 3000
const MAX_MS_UNTIL_CHANGE = 7000

let msSinceColorSwitch = 0
let waitingForClick = false

function play() {
  const msUntilChange = Math.floor(Math.random() * (MAX_MS_UNTIL_CHANGE - MIN_MS_UNTIL_CHANGE)) + MIN_MS_UNTIL_CHANGE
}