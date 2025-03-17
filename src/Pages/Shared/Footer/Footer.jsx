import React from 'react';

const Footer = () => {
  return (
    <div className='pt-14 pb-0'>

    <footer className="footer w-full bg-gradient-to-b from-gray-300 via-gray-200 to-white bg-opacity-20 backdrop-blur-lg shadow-lg text-base-content p-10 ">
      <nav>
        <h6 className="footer-title text-gray-700">Options</h6>
        <a href='/find-tutors' className="link link-hover text-gray-700">Find Tutors</a>
        <a href='/addTutorials' className="link link-hover text-gray-700">Add Tutorials</a>
        <a href='/MyTutorials' className="link link-hover text-gray-700">My Tutorials</a>
        <a href='MyBookedTutors' className="link link-hover text-gray-700">My Booked Tutors</a>



      </nav>
      <nav>
        <h6 className="footer-title text-gray-700">About</h6>
        <a href='https://md-sakib-hossain-rifat.web.app/' className="link link-hover text-gray-700">CEO</a>

      </nav>

      <form>
        <h6 className="footer-title text-gray-700">Contact</h6>
        <fieldset className="form-control w-80" >
          <label className="label flex-col justify-start items-start p-0 m-0">
            <div className='my-1'>

            <span className=" text-xl font-bold text-black">Email:</span>
            </div>
           
           <div>


              <a href="mailto:sakibrifat353@gmail.com" className="btn bg-gradient-to-b from-gray-300 via-gray-200 to-white bg-opacity-20 backdrop-blur-lg shadow-lg  w-full text-black">sakibrifat353@gmail.com</a>
           </div>
          </label>

        </fieldset>
      </form>
    </footer>
    </div>
  );
};

export default Footer;