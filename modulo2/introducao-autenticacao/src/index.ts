import app from "./app"

import {IdGenerator} from './services/idGenerator'

const generator = new IdGenerator().generatorId()
console.log(generator)


