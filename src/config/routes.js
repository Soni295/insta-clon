import { Route as ReactRoute, Switch } from 'react-router-dom'
import { pages } from './pages'

export const Route = route => {
  return(
    <ReactRoute
      path={route.path}
      exact={route.exact}
      render={ props =>
        <route.component {...props} />
      }
    />
  )
}

export const Routes = () => (
  <Switch>
    {pages.map( page =>
      <Route {...page}/>
    )}
 </Switch>
)
