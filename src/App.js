// App.js
import React, {  } from 'react';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import { MyContext, MyProvider } from './store/Store';
import GlobalStyle from './globalStyles';
import HomePage from '../src/pages/HomePage/HomePage';
import language from './helper/i18n';
import { I18nextProvider } from 'react-i18next';
import Test from "./helper/test";
import Login from "./pages/Login/Login";
const App = () => {
    return (
        <>
            <MyProvider>
                <MyContext.Consumer>
                    {({ state }) => (
                        <div className="App">
                            <GlobalStyle />
                            <I18nextProvider i18n={language}>
                                <Router>
                                    <Routes>
                                        <Route path="/:lang" element={<HomePage/> }/>
                                        <Route path="/" element={<Test />} />
                                        <Route exact path="/:lang/login" element={<Login/>} />
                                    </Routes>
                                </Router>
                            </I18nextProvider>
                        </div>
                    )}
                </MyContext.Consumer>
            </MyProvider>
        </>
    );
};

export default App;
