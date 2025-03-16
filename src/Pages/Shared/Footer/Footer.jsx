import React from 'react';

const Footer = () => {
  return (
    <footer className="footer w-full bg-gradient-to-b from-gray-300 via-gray-200 to-white bg-opacity-20 backdrop-blur-lg shadow-lg text-base-content p-10">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a href='/find-tutors' className="link link-hover">Find Tutors</a>
        <a href='/addTutorials' className="link link-hover">Add Tutorials</a>
        <a href='/MyTutorials' className="link link-hover">My Tutorials</a>
        <a href='MyBookedTutors' className="link link-hover">My Booked Tutors</a>



      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a href='https://md-sakib-hossain-rifat.web.app/' className="link link-hover">About us</a>

      </nav>

      <form>
        <h6 className="footer-title">Contact</h6>
        <fieldset className="form-control w-80" >
          <label className="label flex-col justify-start items-start p-0 m-0">
            <div className='my-1'>

            <span className=" text-xl font-bold ">Email:</span>
            </div>
           
           <div>


              <a href="mailto:sakibrifat353@gmail.com" className="btn bg-gradient-to-b from-gray-300 via-gray-200 to-white bg-opacity-20 backdrop-blur-lg shadow-lg  w-full">sakibrifat353@gmail.com</a>
           </div>
          </label>

        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;