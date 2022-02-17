class Terrain {
  constructor(difficulty, texture) {
    this.difficulty_ = difficulty
    this.texture_ = texture
  }
}

class World {
  tiles_

  constructor() {
    this.grassTerrain = {
      value: new Terrain(1, 'grass')
    }
    this.hillTerrain = {
      value: new Terrain(2, 'hill')
    }
    this.riverTerrain = {
      value: new Terrain(3, 'river')
    }
  }

  createTerrain(width) {
    this.tiles_ = new Array(width).fill(new Array(width))
    for (let x = 0; x < width; x++) {
      for (let y = 0; y < width; y++) {
        this.tiles_[x][y] = this.grassTerrain // pointer
      }
    }
  }
}


const myWorld = new World()
myWorld.createTerrain(2)
console.log(myWorld.tiles_.map(t => t.map(tt => tt.value)))
myWorld.grassTerrain.value = new Terrain(4, 'space')
console.log(myWorld.tiles_.map(t => t.map(tt => tt.value)))