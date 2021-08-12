import {
  Home,
  Profile
} from '../pages'


export const PATHS = {
  HOME: '/',
  PROFILE: '/User/:name',
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
  new Page(Profile, PATHS.PROFILE),
]
