import { PATHS } from './PATHS'

import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { LogIn } from '../pages/LogIn'

class Page {
	constructor(component, path, exact=true) {
		this.component = component
		this.path = path
		this.key = path
		this.exact = exact
	}
}

export const pages = [
  new Page(Home, PATHS.HOME),
  new Page(LogIn, PATHS.LOGIN),
  new Page(Profile, PATHS.PROFILE),
]
