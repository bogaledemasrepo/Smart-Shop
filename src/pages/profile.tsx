import Footer from "../components/footer"
import Header from "../components/header"

function ProfilePage() {
  return (
        <div className="w-full max-w-[820px] h-full mx-auto">
      <Header />
      <div className="flex gap-4 flex-wrap my-4 min-h-[84vh]">
        {/* {[].map(Item=>{
          return <Card key={Item} data={[]}/>
        })} */}
      </div>
      <Footer />
    </div>
  )
}

export default ProfilePage