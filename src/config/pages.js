import {
  Home,
  Profile,
  LogIn,
} from '../pages'

export const PATHS = {
  HOME: '/',
  PROFILE: '/User/:name',
  LOGIN: '/LogIn',
}

class Page {
	constructor(component, path, exact = true) {
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
