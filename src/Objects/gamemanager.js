class GameManager {
  constructor(javelinType) {
    this.resetPlayer(javelinType)
    this.setPreFight()
    this.player = null
    this.enemy = null
  }

  resetPlayer(javelinType) {
    switch (javelinType) {
      case "Ranger":
        this.player = new Javelin('Freelancer', JavelinType, 50, 150, 100, 75, 125)
        break
      case "Storm":
        this.player = new Javelin('Freelancer', JavelinType, 75, 75, 200, 50, 75)
        break
      case "Interceptor":
        this.player = new Javelin('Freelancer', JavelinType, 50, 100, 200, 100, 200)
        break
      case "Colossus":
        this.player = new Javelin('Freelancer', JavelinType, 0, 200, 50, 100, 50)
        break
    }
    console.log(this.player)

  }

  setEnemy() {
    let enemy00 = new Javelin('Dominion', 'Valkyrie', 50, 50, 175, 25, 50)
    let enemy01 = new Javelin('Outlaw', 'Lancer', 25, 125, 75, 50, 100)
    let enemy02 = new Javelin('Scar', 'Enforcer', 0, 175, 25, 75, 25)
    let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(3))
    switch (chooseRandomEnemy) {
      case 0:
        this.enemy = enemy00
        break
      case 1:
        this.enemy = enemy01
        break
      case 2:
        this.enemy = enemy02
    }
    console.log(this.enemy)
  }
}

//see how setPlayer and setEnemy are working
//connect these to the UI
module.exports = GameManager