import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, TildCards } from './components';

export const App = () => {
    return (
        <BrowserRouter>
            <div className="ralative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <Hero />
                </div>
                <About />
                <TildCards />
                <Experience />
                <Tech />
                <Works />
                <Feedbacks />
                <div className='relative z-0'>
                    <Contact />
                    {/* <StarsCanvas />  //wyrzuca błąd, ale się uruchamia */}
                </div>
            </div>
        </BrowserRouter>
    ) 
}

