
class Unit {
  x = 0;
  y = 0;

  moveTo(x, y) {
    this.x = x;
    this.y = y;
    console.log(this.x, this.y)
  }
}

class Command {
  execute() {
    throw new Error('Command.execute() must be implemented'); 
  }

  undo() {
    throw new Error('Command.undo() must be implemented');
  }
}

class JumpCommand extends Command {
  xBefore
  yBefore

  execute(unit, x, y) {
    this.xBefore = unit.x
    this.yBefore = unit.y
    unit.moveTo(x, y);
  }

  undo(unit) {
    unit.moveTo(this.xBefore, this.yBefore);
  }
}

class InputHandler {
  commands = []

  buttonX(unit, x, y) {
    const command = new JumpCommand();
    command.execute(unit, x, y)
    this.commands.push(command)
  }

  undo(unit) {
    const lastCommand = this.commands.pop()
    if (lastCommand) {
      lastCommand.undo(unit)
    }
  }
}

const unit = new Unit()
const inputHandler = new InputHandler();

inputHandler.buttonX(unit, 10, 10);
inputHandler.buttonX(unit, 20, 20);
inputHandler.undo(unit)
inputHandler.undo(unit)