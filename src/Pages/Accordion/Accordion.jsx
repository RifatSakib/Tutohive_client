import React from 'react';

const Accordion = () => {
  return (
    <div className='w-11/12 py-14 flex flex-col gap-4 mx-auto'>

    <h1 className='text-3xl font-bold text-red-500 text-center'>Frequently asked questions</h1>


      <div className="collapse bg-gradient-to-b from-gray-300 via-gray-200 to-white bg-opacity-20 backdrop-blur-lg shadow-lg ">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-xl font-medium text-center">How does the tutor booking system work in Tutorhive?</div>
        <div className="collapse-content">
          <p className='px-10 text-justify'>The tutor booking system allows users to browse available tutors based on categories such as language and subject. Users can view tutor profiles, including their name, image, language, price, and reviews. When a user clicks the "Book" button on a tutor's profile, the tutor's details are stored in the database, linking them to the logged-in user. This ensures that the user can access their booked tutors from the "My Booked Tutors" page.</p>
        </div>
      </div>




      <div className="collapse bg-gradient-to-b from-gray-300 via-gray-200 to-white bg-opacity-20 backdrop-blur-lg shadow-lg ">
        <input type="radio" name="my-accordion-1" />
        <div className="collapse-title text-xl font-medium text-center">What are the key features of the Tutorhive?</div>
        <div className="collapse-content">
          <p className='px-10 text-justify'> Tutorhive provides the following key features:
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
        <div className="collapse-title text-xl font-medium text-center">What functionalities are available on the "My Tutorials" page?</div>
        <div className="collapse-content">
          <p className='px-10 text-justify'>The My Tutorials page allows users to manage the tutorials they have added. It includes:
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