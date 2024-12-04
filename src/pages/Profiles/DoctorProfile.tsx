import React from 'react';

const DoctorProfile: React.FC = () => {
  const doctorDetails = {
    name: 'Dr. John Smith',
    specialization: 'Cardiology',
    experience: '15 years',
    email: 'dr.johnsmith@example.com',
    phone: '+1 123-456-7890',
    clinicAddress: '123 Medical Lane, Health City, USA',
    profileImage:
      'https://via.placeholder.com/150', // Replace with actual profile image URL
    bio: 'Dedicated cardiologist with over 15 years of experience. Passionate about providing personalized care and improving heart health for patients.',
  };

  return (
    <div className="p-6 w-full min-h-screen flex justify-center">
      <div className="bg-white  rounded-lg w-full max-w-4xl">
        <div className="flex flex-col md:flex-row items-center p-6">
          {/* Profile Image */}
          <div className="md:w-1/3 w-full flex justify-center mb-6 md:mb-0">
            <img
              src={doctorDetails.profileImage}
              alt="Doctor Profile"
              className="rounded-full w-40 h-40 object-cover shadow-md"
            />
          </div>

          {/* Doctor Info */}
          <div className="md:w-2/3 w-full px-6">
            <h1 className="text-2xl font-bold text-gray-800">{doctorDetails.name}</h1>
            <p className="text-gray-600 text-sm">{doctorDetails.specialization}</p>
            <p className="text-gray-600 text-sm mt-2">
              <span className="font-medium">Experience:</span> {doctorDetails.experience}
            </p>
            <p className="text-gray-600 text-sm mt-1">
              <span className="font-medium">Email:</span> {doctorDetails.email}
            </p>
            <p className="text-gray-600 text-sm mt-1">
              <span className="font-medium">Phone:</span> {doctorDetails.phone}
            </p>
            <p className="text-gray-600 text-sm mt-1">
              <span className="font-medium">Clinic Address:</span> {doctorDetails.clinicAddress}
            </p>
          </div>
        </div>

        {/* Bio Section */}
        <div className="px-6 py-4 border-t">
          <h2 className="text-xl font-bold text-gray-800">Biography</h2>
          <p className="text-gray-600 mt-2">{doctorDetails.bio}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 py-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-lg">
            Edit Profile
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2 rounded-lg">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
