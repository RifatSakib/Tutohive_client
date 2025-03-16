import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

const Accordion = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="3000" className='w-11/12 py-14 flex flex-col gap-4 mx-auto'>

    <h1 className='text-3xl font-bold text-red-500 text-center'>Frequently asked questions</h1>


      <div className="collapse bg-gradient-to-b from-gray-300 via-gray-200 to-white bg-opacity-20 backdrop-blur-lg shadow-lg ">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-xl font-medium text-center text-black">How does the tutor booking system work in Tutorhive?</div>
        <div className="collapse-content">
          <p className='px-10 text-justify text-black'>The tutor booking system allows users to browse available tutors based on categories such as language and subject. Users can view tutor profiles, including their name, image, language, price, and reviews. When a user clicks the "Book" button on a tutor's profile, the tutor's details are stored in the database, linking them to the logged-in user. This ensures that the user can access their booked tutors from the "My Booked Tutors" page.</p>
        </div>
      </div>




      <div className="collapse bg-gradient-to-b from-gray-300 via-gray-200 to-white bg-opacity-20 backdrop-blur-lg shadow-lg ">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium text-center text-black">What are the key features of the Tutorhive?</div>
        <div className="collapse-content">
          <p className='px-10 text-justify text-black'> Tutorhive provides the following key features:
            ✅ Find Tutors: Users can browse available tutors by category, view their details, and book sessions.
            ✅ Add Tutorials: Tutors can add tutorials, including their name, image, language, price, and description.
            ✅ My Tutorials: Users can view, update, or delete their added tutorials.
            ✅ My Booked Tutors: Displays all tutors booked by a user, including their details and a review button.
            ✅ Authentication System: Secure login and registration using Firebase (Email/Password & Google Sign-in).
            ✅ JWT Authentication: Ensures protected routes are accessible only to authenticated users.
            ✅ Dark/Light Mode: Users can toggle between dark and light themes for a better user experience.</p>
        </div>
      </div>




      <div className="collapse bg-gradient-to-b from-gray-300 via-gray-200 to-white bg-opacity-20 backdrop-blur-lg shadow-lg ">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium text-center text-black">What functionalities are available on the "My Tutorials" page?</div>
        <div className="collapse-content">
          <p className='px-10 text-justify text-black'>The My Tutorials page allows users to manage the tutorials they have added. It includes:
            ✏️ Update Button: Users can edit tutorial details, such as language, price, and description.
            🗑️ Delete Button: Users can remove their tutorial from the database.
            📋 Table Format: Tutorials are displayed in an organized table with key details like name, image, language, price, and review count.
            🔄 Real-time Updates: Changes are reflected instantly after updating or deleting a tutorial.</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;