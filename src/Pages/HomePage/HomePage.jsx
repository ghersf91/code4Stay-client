import { Carousel, ThemeProvider } from 'react-bootstrap'
import './HomePage.css'

const HomePage = () => {
    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >
            <Carousel className='carousel'>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://images.unsplash.com/photo-1590856029620-9b5a4825d3be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className='mb-5 carousel-text'>code4stay slide 1</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className='mb-5 carousel-text'>code4stay slide 2</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className='mb-5 carousel-text'>code4stay slide 3</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </ThemeProvider>
    )
}

export default HomePage