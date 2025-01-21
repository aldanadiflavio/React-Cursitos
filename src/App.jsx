import Button from "./components/button"
import { Layout } from "./components/layout"
import { Navbar } from "./components/navbar"

function App() {
  
  return (
    <>
      <div className="min-h-screen bg-slate-100">
        {/* <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1> */}
        <br />
        <Navbar></Navbar>
        <Layout>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus reprehenderit iure necessitatibus laudantium hic, inventore magnam tempora consectetur odit saepe quo officiis a perspiciatis sequi illum. Vel enim numquam facere!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laborum quis quam aliquid ab pariatur ullam molestiae eveniet molestias dicta, perferendis vel ipsum eos quia nobis unde culpa doloremque sint!</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis pariatur commodi dolorem, iusto vero, voluptatibus esse facilis voluptatum veniam ad non temporibus impedit deleniti voluptate illum, cumque eveniet placeat ipsa.</p>
        </Layout>
      </div>
    </>
  )
}

export default App