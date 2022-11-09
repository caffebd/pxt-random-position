
namespace sprites {
    /**
     * Sets a number in the data of a sprite
     */
    //% blockId=random-pos block="$sprite=variables_get go to random position"
    //% group="Position"
    //% weight=10
    //% blockGap=8
    export function goToRandomPos(sprite: Sprite) {
        let screenWidth = scene.screenWidth()
        let screenHeight = scene.screenHeight()
        let randX = randint(0, screenWidth)
        let randY = randint(0, screenHeight)

        sprite.x = randX
        sprite.y = randY
    }

}