import { Route as ReactRoute, Switch, Redirect } from 'react-router-dom'
import { pages } from './pages'
import { PATHS } from './PATHS'
import { useSelector } from 'react-redux';

export const Route = route => {

  const { user } = useSelector(state => state)

  if(route.needLogged && !user.name){
    return <Redirect to={PATHS.LOGIN} />
  }

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
