import { PATHS } from './PATHS'

import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { LogIn } from '../pages/LogIn'

class Page {
	constructor(component, path, exact=true, needLogged=true) {
		this.component = component
		this.path = path
		this.key = path
		this.exact = exact
    this.needLogged = needLogged
	}
}

export const pages = [
  new Page(Home, PATHS.HOME),
  new Page(LogIn, PATHS.LOGIN, true, false),
  new Page(Profile, PATHS.PROFILE),
]
