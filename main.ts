function Nivel (num: number) {
    basic.showNumber(num)
    for (let index = 0; index < num; index++) {
        if (lista[Indice - 1] == 0) {
            lista.push(0)
            basic.showLeds(`
                . # # . .
                # . . # .
                # # # # .
                # . . # .
                # . . # .
                `)
        } else {
            lista.push(1)
            basic.showLeds(`
                # # # . .
                # . . # .
                # # # # .
                # . . # .
                # # # . .
                `)
        }
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        Indice += 1
    }
    Indice = 1
    basic.showLeds(`
        . # # # .
        # . . . #
        . . # # .
        . . . . .
        . . # . .
        `)
    return 0
}
input.onButtonPressed(Button.A, function () {
    if (lista[Indice - 1] == 0) {
        basic.showIcon(IconNames.Yes)
        if (Indice == IndiceNivel) {
            Indice = 1
            IndiceNivel += 1
            Nivel(IndiceNivel)
        } else {
            Indice += 1
        }
    } else {
        basic.showIcon(IconNames.Sad)
        basic.pause(2000)
        Recomeca(true)
    }
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (IndiceNivel >= 11) {
        basic.showIcon(IconNames.Happy)
    }
})
function Recomeca (booleano: boolean) {
    Indice = 1
    lista = []
    IndiceNivel = 1
    Matriz(true)
    Nivel(IndiceNivel)
    return 0
}
input.onButtonPressed(Button.B, function () {
    if (lista[Indice - 1] == 1) {
        basic.showIcon(IconNames.Yes)
        if (Indice == IndiceNivel) {
            Indice = 1
            IndiceNivel += 1
            Nivel(IndiceNivel)
        } else {
            Indice += 1
        }
    } else {
        basic.showIcon(IconNames.Sad)
        basic.pause(2000)
        Recomeca(true)
    }
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (IndiceNivel >= 11) {
        basic.showIcon(IconNames.Happy)
    }
})
function Matriz (booleano: boolean) {
    basic.pause(2000)
    for (let index = 0; index < 11; index++) {
        lista.push(randint(0, 1))
    }
    return 0
}
let lista: number[] = []
let IndiceNivel = 0
let Indice = 0
Indice = 1
IndiceNivel = 1
lista = []
Matriz(true)
Nivel(IndiceNivel)
