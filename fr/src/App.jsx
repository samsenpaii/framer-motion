import Splash from './components/Splash'
import Logo from './components/Logo'
import Hero from './components/Hero'
import Body from './components/Body'

export default function App() {
  return (
    <>
      <Splash duration={1000}>
        <div className="fixed inset-0 flex items-center justify-center bg-[#2D2D30] z-50">
          <Logo isSmall={true}/>
        </div>
      </Splash>

      <Hero/>
      <Body/>
    </>
  )
}
