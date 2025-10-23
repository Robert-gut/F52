class Armor{
  constructor(level){
    this.level = level
    this.protection = [0, 0.2, 0.4, 0.6][level]
  }
}

class Player {
  constructor(helmentLevel, vestLevel){
    this.health = 100
    this.helment = new Armor(helmentLevel)
    this.vest = new Armor(vestLevel)
  }

  takeDamage(damage, bodyPart){
    let protection = 0
    if(bodyPart === 'head') protection = this.helment.protection
    if(bodyPart === 'body') protection = this.vest.protection

    const finalDamage = damage * (1 - protection)
    this.health -= finalDamage
    if(this.health < 0) this.health = 0
    document.getElementById('health').innerText = `Health: ${this.health}`
    document.getElementById('damage-info').innerText = `Hit: ${bodyPart} | Damage: ${finalDamage}`

    if(this.health === 0) {
      document.getElementById('damage-info').innerText = `Player Knocked!`
       document.getElementById('target-img').style.opacity = '0.3'
    }
  }
}

class Game {
  constructor(){
    const helmentLevel = +document.getElementById('helmet-level').value
    const vestLevel = +document.getElementById('vest-level').value
    this.player = new Player(helmentLevel, vestLevel)

    document.getElementById('health').innerText = `Health: 100`
    document.getElementById('damage-info').innerText = `Click on the target to shoot!`
    document.getElementById('target-img').style.opacity = '1'
  }

  shoot(e) {
    let x = e.offsetX
    let y = e.offsetY
    let bodyPart = this.getBodyPart(x, y)

    let damageMap = {
      head: 50,
      body: 30,
      legs: 20,
      arms: 15
    }

    if(bodyPart) this.player.takeDamage(damageMap[bodyPart], bodyPart)
  }

  getBodyPart(x, y){
    console.log(x, y);
    if(y > 30 && y < 115) return 'head'
    if(y > 116 && y < 315) return 'body'
    if(y > 315 && y < 640) return 'legs'
  }
}

document.getElementById('start-game').addEventListener('click', () => {
  window.game = new Game()
})
document.getElementById('target-img').addEventListener('click', (e) => {
    if(window.game) window.game.shoot(e)
})