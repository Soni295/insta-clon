import {
  Home
} from '../pages'

class Page {
	constructor(component, path, exact = true) {
		this.component = component
		this.path = path
		this.key = path
		this.exact = exact
	}
}

export const pages = [
  new Page(Home, '/'),
]
