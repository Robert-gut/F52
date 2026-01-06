import { useState, useEffect, createContext, useContext } from "react";
import { Link } from "react-router-dom";

export default function NotFound(){

  //! 1 useState() - Зберігання стану
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)

  //! 2 useEffect() - побічні ефекти

  //! a
  // useEffect(()=>{
  //   console.log('ok');
  // })
  //! b - при народженні компонента
  // useEffect(()=>{
  //   console.log('ok')
  // },[])
  
  //! c - залежності
  // useEffect(()=>{
  //   console.log('ok');
  // },[count])
  
  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //       .then(response => response.json())
  //       .then(json => console.log(json))
  // },[])

  // const [seconds, setSeconds] = useState(0)

  
  useEffect(()=>{
    const interval = setInterval(()=>{
      setSeconds(prevSeconds => prevSeconds + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
      console.log('clear interval');
    }
  },[])
  console.log(seconds);
  //! 3 useContext - отримання значення із контекста
  
  // const ThemeContext = createContext(null)

  // function ThemeProvider({ children }) {
  //   const [theme, setTheme] = useState('light')

  //   const toggleTheme = () => {
  //     setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  //   }

  //   const contextValue = {theme, toggleTheme}

  //   return(
  //     <ThemeContext.Provider value={contextValue}>
  //       {children}
  //     </ThemeContext.Provider>
  //   )

  // }

  // function ThemedButton (){
  //   const {theme, toggleTheme} = useContext(ThemeContext)

  //   return(
  //     <button
  //     onClick={toggleTheme}
  //     style={{
  //       backgroundColor: theme === 'dark'? '#333' : '#eee',
  //       color: theme === 'dark'? '#eee' : '#333',
  //     }}
  //     >Поточна тема: {theme}</button>
  //   )
  // }

  // function AppWithContext(){
  //   return(
  //     <ThemeContext>
  //       <div>
  //         <h1>context api</h1>
  //         <ThemedButton/>
  //         <AnotherCopmponentDeeplyNested/>

  //       </div>
  //     </ThemeContext>
  //   )
  // }

  // function AnotherCopmponentDeeplyNested(){
  //    const {theme} = useContext(ThemeContext)
  //    return <p>Бачимо тему {theme}</p>
  // }

  //! 4  5 хук опитимізації  useMemo() useCallback() 

  //! 4 useMome sidebar
 
  
  return(
    <div className="shadow bg-white container rounded mt-4">
      <h1>NotFound 404</h1>
      <Link to='/'><button>Go home</button></Link>

      <p>You clicked {count} times</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <p>You clicked1 {count1} times</p>
      <button onClick={() => setCount1(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setCount1(prevCount => prevCount - 1)}>-</button>

      {/* <p>к-ть сек {seconds}</p> */}
    </div>
  )
}