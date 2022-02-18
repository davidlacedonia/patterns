class Observer {
  onNotify() {
    throw new Error('Should implement Observer#onNotify')
  }
}

class Achievements extends Observer {
  onNotify(event) {
    switch (event) {
      default:
        console.log('Achievement unlocked: ' + event)
        break;
    }
  }
}

class Audio extends Observer {
  onNotify(event) {
    console.log('Audio: ' + event)
  }
}

class Subject {
  observers_ = []
  
  addObserver(observer) {
    this.observers_.push(observer)
  }

  removeObserver(observer) {
    this.observers_ = this.observers_.filter(o => o !== observer)
  }

  notify(event) {
    for (let observer of this.observers_) {
      observer.onNotify(event)
    }
  }
}

class Physics extends Subject {
  // do something
}

const achievements = new Achievements()
const audio = new Audio() 
const physics = new Physics()

physics.addObserver(achievements)
physics.addObserver(audio)

physics.notify('100 hits!')
