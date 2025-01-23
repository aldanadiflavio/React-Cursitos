export const Layout = (props) => {
  return (
    <section className="container min-h-screen bg-indigo-100 w-5/6 mx-auto px-8 pt-10">
        {props.children}
    </section>
  )
}
