import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition ()
const EXPANSTION_RATE = 1

export function update () {
    if (onSnake(food)) {
        expandSnake(EXPANSTION_RATE)
        food = getRandomFoodPosition ()
    }
}

export function draw (gameScreen) {
        const foodElement = document.createElement ('div')
        foodElement.style.gridRowStart = food.y
        foodElement.style.gridColumnStart = food.x
        foodElement.classList.add('food')
        gameScreen.appendChild(foodElement)
    } 

    function getRandomFoodPosition() {
        let newFoodPosition
        while (newFoodPosition == null || onSnake(newFoodPosition)) {
            newFoodPosition = randomGridPosition()
        }
        return newFoodPosition
    }