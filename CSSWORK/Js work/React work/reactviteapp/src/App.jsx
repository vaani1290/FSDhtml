import React from 'react'
import Student from './Student'
import StateHandling from './StateHandling'
function App(){
//   const studentdata=[{
//     image:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png" ,
//     name:"Vaani",
//     roll:"185",
//     college:"ABESEC"
//   },
//   {
//     image:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png",
//     name:"Vaani",
//     roll:"185",
//     college:"ABESIT"
//   },
//   {
//     image:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png",
//     name:"Vaani",
//     roll:"185",
//     college:"ABESEC"
//   }
// ]

 return (
    <div>
      <div>
        <h2 style={{color:'blue'}}>Hello React JS</h2>
        <div>
          <StateHandling />
          {/* <Student data={studentdata}/> */}
          {/* {
            studentdata.map((ele)=>{
              return(
                <Student data={ele}/>
              )
            })
          } */}
            <div>
            </div>
           {/* <Student image ={<img src="https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png" height={100}/>} name="Vaani"  roll="185"  college="ABESEC"/>    */}
           {/* way to use component */}
           </div>
      </div>
    </div>
  )
}

export default App