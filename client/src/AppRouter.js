import React, { Suspense } from 'react';
import { Switch, HashRouter as Router, Route, Redirect } from 'react-router-dom';
import ActivityIndicator from './components/Activity-Indactor/ActivityIndicator';
import ErrorBoundary from './components/Error-Boundary/ErrorBoundary';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


/* Lazy load View Component here */
const HomePage = React.lazy(() =>import('./views/home-page/HomePage') )
const ScorePage = React.lazy(() =>import('./views/score-page/ScorePage') )
const NotFoundPage = React.lazy(() =>import('./views/not-found-page/NotFoundPage'))


/* Simple router */
export default function AppRouter() {
    return (
        <ErrorBoundary>
            <Header/>
            <br/>
            <Suspense maxDuration={300} fallback={<ActivityIndicator />}>

            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/score" component={ScorePage}/>
                    <Route path="/not-found" component={NotFoundPage}/>
                    <Redirect to="/not-found" />
                </Switch>
            </Router>

            </Suspense>
            <br/><br/><br/>
            <Footer/>
        </ErrorBoundary>
        
    )
}


