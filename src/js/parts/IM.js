import * as React from "react";
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './IM/_common.scss'
import Home from './IM/Home'
import GoodsList from './IM/GoodsList'
import Cart from './IM/Cart'
import CatalogItem from './IM/CatalogItem'

export default class IM extends React.Component
{
    getGoods(){
        let result = [];
        for (let i = 9; i--;){
            result.push({id: i, name: `Product Name ${i}`})
        }

        return result;
    }
    buy() {

    }
    render() {
        return (
            <Router>
                <header className="header">
                    <Link to='/' className={'header__link header__to_home'}>Main</Link>
                    <Link to='/goods' className={'header__link header__to_catalog'}>Catalog</Link>
                    <Link to='/cart' className={'header__link header__to_cart'}>Cart</Link>
                </header>
                <div className='container'>
                    <Switch>
                        <Route path='/goods'>
                            <h1 className="page_title">Catalog</h1>
                            <Switch>
                                <Route path='/goods/:id'>
                                    <CatalogItem/>
                                </Route>
                                <Route path='/goods'>
                                    <GoodsList buy={(v)=>this.buy(v)} getGoods={this.getGoods()}/>
                                </Route>
                            </Switch>
                        </Route>
                        <Route path='/cart'>
                            <h1 className="page_title">Cart</h1>
                            <Cart/>
                        </Route>
                        <Route path='/'>
                            <h1 className="page_title">About</h1>
                            <Home/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}
