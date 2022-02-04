import React from 'react';
import "./App.css"
import Homepage from './components/Homepage/Homepage';
import AboutPage from './components/AboutPage';
import JourneyPage from './components/JourneyPage';
import ActivitiesPage from './components/ActivitiesPage';
import NewsPage from './components/NewsPage';
import GalleryPage from './components/GalleryPage';
import CommitteePage from './components/CommitteePage';
import FinancePage from './components/FinancePage';
import Header from './components/Common/Header';
import { Route } from 'react-router';


function App (){
    return(
        <div className="Main">
            <Header/>
            <Route path = '/' exact component={Homepage}/>
            <Route path = '/about' component={AboutPage}/>
            <Route path = '/journey' component={JourneyPage}/>
            <Route path = '/activities' component={ActivitiesPage}/>
            <Route path = '/news' component={NewsPage}/>
            <Route path = '/gallery' component={GalleryPage}/>
            <Route path = '/committee' component={CommitteePage}/>
            <Route path = '/finance' component={FinancePage}/>
        </div>
    )
}

export default App;