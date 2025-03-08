import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import backgroundImage from '../../../assets/gridImg.png';
import profile from '../../../assets/profile.svg'; 
import mariya from '../../../assets/mariya.svg';
import star from '../../../assets/star.svg';
import dullstar from '../../../assets/dullstar.svg'; 
import flag from '../../../assets/flag.svg';
import active from '../../../assets/active.svg'; 
import complete from '../../../assets/complete.svg'; 
import cancled from '../../../assets/cancled.svg';
import phone from '../../../assets/phone.svg';
import email from '../../../assets/email.svg';
import identity from '../../../assets/identity.svg'; 
import identitybody from '../../../assets/identitybody.svg'; 











function Postedjob ({ onSignOut }) {

  const navigate = useNavigate();

  const backtologin = () => {
    onSignOut();
    navigate("/Signin");

  }

  const createjob = () => {
    navigate("/Createjob")
  }


  const talentData = [
    {
      id: 1,
      name: "Bhuvesh Singh",
      description: "UX designer, Gharphic designer",
      image: profile,
      package: "$60.00/hr",
      total: "Total earnings $76k on web and mobile design",
      skills: ["UI/UX", "Web Design", "Mobile Design"],
      rating: "Top rated",
      stars: star,
      dullstar: dullstar,
      reviews: "12 Reviews",
      location: "Manhattan, USA",
      locationFlag: flag,
      invite: "Invite",
    },

    {
      id: 2,
      name: "Mariya sarapova",
      description: "UX designer, Gharphic designer",
      image: mariya,
      package: "$60.00/hr",
      total: "Total earnings $76k on web and mobile design",
      skills: ["UI/UX", "Web Design", "Mobile Design"],
      stars: star,
      dullstar: dullstar,
      reviews: "12 Reviews",
      location: "Manhattan, USA",
      locationFlag: flag,
      invite: "Invite",
    },

    {
      id: 3,
      name: "Bhuvesh Singh",
      description: "UX designer, Gharphic designer",
      image: profile,
      package: "$60.00/hr",
      total: "Total earnings $76k on web and mobile design",
      skills: ["UI/UX", "Web Design", "Mobile Design"],
      rating: "Best match",
      stars: star,
      dullstar: dullstar,
      reviews: "12 Reviews",
      location: "Manhattan, USA",
      locationFlag: flag,
      invite: "Invite",
    },

    {
      id: 4,
      name: "Bhuvesh Singh",
      description: "UX designer, Gharphic designer",
      image: profile,
      package: "$60.00/hr",
      total: "Total earnings $76k on web and mobile design",
      skills: ["UI/UX", "Web Design", "Mobile Design"],
      rating: "Best match",
      stars: star,
      dullstar: dullstar,
      reviews: "12 Reviews",
      location: "Manhattan, USA",
      locationFlag: flag,
      invite: "Invite",
    },
 
  ];


return ( 
    <div className=" postedjob min-h-screen w-full flex flex-col   gap-4 items-center justify-center px-2 lg:justify-around bg-gray-100 lg:px-4 lg:flex-row lg:items-start   ">

      {/*Left wing*/}
       <div className=" flex flex-col items-center justify-center w-full gap-6 mt-[7em] lg:w-[60vw]  lg:ml-[2vw] lg:mt-0 ">
       <div className="welcome text-center  lg:absolute
        lg:top-[125px] lg:left-[3vw] text-[#2A1E17] text-xl font-normal">Welcome back, <span className="font-bold">Adam Smith</span></div> {/* Name of the user */}
 {/* Job posting */}
       <div className=" items-start gap-4  bg-white p-4  rounded-lg shadow-lg relative w-full lg:flex-row lg:mt-[178px] lg:w-[60vw]">
        {/* Job posting text */}
       <div className=" flex items-center  justify-between">
        <h2 className="text-lg font-semibold">Your posting</h2>
        <button className="px-4 py-1 w-[147px] h-[39px] text-red-500 border  border-red-500 rounded-full "><Link to={'/client/viewproposal'}>
          View all jobs </Link>
        </button>
        </div>
        <div className="border border-black opacity-10  w-full   mt-4 "  ></div>

           
            {/* Job Posting Details */}

            <div className="details flex justify-between items-start py-4">
            <div className="flex flex-col gap-2">
        {/* Job Title */}
        <h3 className="font-semibold text-base">Russian Preschool Content - Categorisation</h3>
        
        {/* Sub-details */}
        <div className="text-sm text-gray-500">
          Fixed-price - Intermediate - 
          <span className="block">Est. Budget: $2,000 - Posted 8 hours ago</span>
        </div>
      </div>
      
      {/* Proposals and Hired */}
      <div className="flex justify-between gap-4">
        <div className="text-sm flex flex-col gap-2 text-gray-500">
          <span className="font-semibold text-black">Proposals</span> 24
        </div>
        <div className="text-sm flex flex-col gap-2 text-gray-500">
          <span className="font-semibold text-black">Hired</span> 01
        </div>
      </div>

      </div>
       </div>

       


{/* Best Matches */}
      <div className="matches relative w-full  mt-[32px]  flex flex-col justify-center items-center lg:w-[60vw] ">
   <div className="text absolute top-0 left-4 py-1 border- border-b-2 border-red-500 px-4  ">Discover talent</div>
   <div className="border border-black opacity-10  w-full   mt-8 "  ></div>
   <div className="text-start w-full m-0 pt-2  ">Best matches for you (200)</div>

     
      {/* Talent card */}
      <div className="talents mb-[5em] mt-[3em] flex flex-col gap-[20px] w-full relative ">
     {/* Job post */}
    {talentData.map((talent) => {
          const ratingStyles = {
            "Top rated": {  ratingBgColor: "bg-[#4260DA]" },
            "Best match": {  ratingBgColor: "bg-[#C12D71]" },
            "":{ ratingBgColor: "transparent" },
          };

          const defaultStyles = { ratingBgColor: "transparent" };

          const {ratingBgColor } =
          ratingStyles[talent.rating] || defaultStyles;


return (
      <div  key={talent.id} className="Jobs flex flex-col justify-center items-center gap-4  bg-white p-4 rounded-lg shadow-lg relative w-full lg:flex-row lg:justify-between lg:w-[60vw] ">
       <div className={` rating rounded-full ${ratingBgColor} w-[104px] h-[25px] flex justify-center items-center text-white font-bold absolute -top-[5px] left-[29px] text-base`}>{talent.rating}</div>
        <div className="invite rounded-full w-[147px] h-[39px] flex justify-center items-center text-[#FF4C4A] border border-[#FF4C4A] font-bold absolute top-[39px] right-[17px]  text-base ">{talent.invite}</div>
 

       <div className="discription flex flex-col  gap-4 justify-between  mt-[38px]  items-start w-full    xl:flex-row  xl:w-[40vw] ">
         {/* Image */}
         <div className="image relative ">
         <img
              src={talent.image}
              alt="Profile"
              className="w-10 h-10  rounded-full"
            />
          <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
         </div>
         
          {/* Text */}
          <div className="text flex flex-col gap-3">
            {/* Name */}
            <div className="name text-[#2A1E17] font-semibold text-xl">{talent.name}</div>
            {/* Description */}
            <div className="description font-semibold text-sm opacity-60 ">{talent.description}</div>
            {/* Package */} 
            <div className="package font-semibold text-sm">{talent.package}</div>
            {/* Total */}
            <div className="total font-semibold text-sm">{talent.total}</div>
            {/* Skills */}
           <div className="skills flex flex-wrap gap-3 justify-start items-center ">
            {talent.skills.map((skill) => (
              <div key={skill} className="rounded-full flex justify-center items-center bg-[#F0F0F0] text-
              [#0000] h-[28px] w-[131px] px-4 py-2 text-sm">{skill}</div>
            ))}
            <div className="more text-[#FF4C4A]">more</div>
           </div>

           <div className="performance flex gap-4 items-center">
        
            {/* Stars */}
            <div className="flex gap-2 items-center">
              <img src={talent.stars} alt="" />
              <img src={talent.stars} alt="" />
              <img src={talent.stars} alt="" />
              <img src={talent.stars} alt="" />
              <img src={talent.dullstar} alt="" />
            </div>
            
            {/* Reviews */}
            <div className="reviews opacity-60">{talent.reviews}</div>
             {/* Location Flag */}
             <img src={talent.locationFlag} alt="" />
            {/* Location */}
            <div className="location opacity-60">{talent.location}</div>
           
           </div>
         
            
            
            
          </div>

       </div>

      </div>
);
})
}
       </div>



       <div className="invite rounded-full w-[147px] h-[39px]  flex justify-center items-center text-[#FF4C4A] border border-[#FF4C4A] font-bold  text-base lg:mb-[5em] ">Learn more</div>
      </div>


       </div>

       {/*Right wing*/}
      <div className=" flex flex-col items-start justify-start my-[5em]  gap-6 shadow-lg rounded-lg lg:mb-0 lg:w-[30vw] lg:mt-[178px]"> 
       <Link to={'/client/createjob'} className="rounded-full flex justify-center items-center lg:absolute lg:top-[125px] lg:right-[2vw] bg-[#FF4C4A] w-[190px] h-[39px] text-white font-bold text-base">
        Post a new job </Link>
        
        {/* Profile completion */}
        <div className="completeprofile flex flex-col items-center justify-center gap-4 w-full h-[266px]   bg-white p-4 rounded-lg shadow-lg">

<div className="Name text-center">
  {/* Name of the user */}
<div className="text text-[#2A1E17]  text-xl font-bold">Adam smith</div> 
<div className="text text-[#2A1E17] text-sm font-normal opacity-90 ">TrustLinklab</div>

</div>
    
<div className="flex justify-between w-[80%] m-0 ">

    <span className="text-sm font-semibold text-gray-700">Set up your account</span>
    <span className="text-sm font-semibold text-gray-700">82%</span>

  </div>
         {/* Loader Container */}
  <div className="relative w-[80%] h-[6px] bg-gray-200 rounded-full overflow-hidden shadow-inner">
    {/* Progress */}
    <div
      className="absolute h-[6px] bg-[#2942A5] transition-all ease-in-out duration-500"
      style={{ width: "82%" }}
    ></div>
  </div>
 

  

         
                  <button onClick={backtologin} className="mt-4 px-10 py-2 rounded-full border border-[#FF4C4A] text-[#FF4C4A]">Complete your profile</button>
                


        <div className="p w-[80%] text-center text-xs">100% completion of  you profile will help 
        your get more reach.</div>
        </div>

      {/* Verication */}
      <div className="verification flex flex-col items-start justify-start gap-4 w-full h-[266px]   bg-white p-4 rounded-lg shadow-lg">

<div className=" text w-full  flex flex-col relative items-start justify-center gap-4  py-6 ">
<div className="text text-[#2A1E17]  text-xl font-bold">Verification</div> 


<div className="line border border-solid border-black opacity-10  w-full absolute top-[68px] left-0
 "></div> </div>
    
<div className="flex justify-between w-full">
  <div className="flex flex-row items-center justify-center gap-4">
     <div className="identity flex flex-col items-center justify-center">
   <img src={identity} alt="" />
   <img src={identitybody} alt="" />
    </div>
    <div className="text">Identity verified </div>
    </div>
    
    <div className="verifybtn text-[#4285F4]">Verify</div>
  </div>


  <div className="flex justify-between w-full">
  <div className="flex flex-row items-center justify-center gap-4">
     
   <img src={phone} alt="" />
  <div className="text">Phone verified </div></div>
    
    <div className="verifybtn text-[#4285F4]">Verify</div>
  </div>
 
 <div className="flex justify-between w-full">
  <div className="flex flex-row items-center justify-center gap-4">
     
   <img src={email} alt="" />
  <div className="text">Email verified </div></div>
    
    <div className="verifybtn text-[#4285F4]">Verify</div>
  </div>
 
        </div>


    <div
      className="bg-gradient-to-r from-[#031661] to-[#FF4C4A] px-5 py-3 rounded-2xl shadow-md text-white flex items-center gap-3 justify-center"
      style={{
        backgroundImage: `url(${backgroundImage}), linear-gradient(to right, #011359, #FF4C4A)`,
        backgroundBlendMode: 'overlay',
        backgroundSize: '100%', // Increase the size of the background image
        backgroundPosition: 'center'
      }}
    >
      <h3 className="text-md  text-gray-200 p-0"><span className='font-bold text-white'>Get membership</span> for getting more bids in a month </h3>
      <button className="mt-4 px-4 py-2 bg-white rounded-full text-purple-800 grid text-xs">
        <span className='font-bold'>UP</span>
        <span>TECH</span>
        <span>HUNT</span>
      </button>
    </div>


      {/* All jobs */}
      <div className="verification flex flex-col items-start justify-start gap-4 w-full h-[287px] bg-white p-4 rounded-lg shadow-lg">
  <div className="text w-full flex flex-col relative items-start justify-center gap-4 py-4">
    <div className="flex flex-row items-center justify-between w-full">
      <div className="text text-[#2A1E17] text-xl font-bold">All Jobs</div>
      <div className="text-[#2A1E17] text-xl font-bold">Total 10</div>
    </div>
    <div className="line border border-solid border-black opacity-10 w-full absolute top-[60px] left-0"></div>
  </div>

  <div className="flex justify-between w-full">
    <div className="flex flex-row items-center justify-center gap-4">
      <img src={active} alt="" />
      <div className="text">
        <span className="font-bold">Active Projects </span>:07
      </div>
    </div>
  </div>

  <div className="flex justify-between w-full">
    <div className="flex flex-row items-center justify-center gap-3">
      <img src={complete} alt="" />
      <div className="text">
        <span className="font-bold">Completed Projects </span>:07
      </div>
    </div>
  </div>

  <div className="flex justify-between w-full">
    <div className="flex flex-row items-center justify-center gap-3">
      <img src={cancled} alt="" />
      <div className="text">
        <span className="font-bold">Canceled Projects </span>:07
      </div>
    </div>
  </div>

  <div className="flex justify-center items-center w-full mt-4">
    <div className="invite rounded-full text-center w-[147px] h-[39px] flex justify-center items-center text-[#FF4C4A] border border-[#FF4C4A] font-bold text-base">
      View all
    </div>
  </div>
</div>


        
        
        </div> 


    </div> )
}

export default Postedjob;







