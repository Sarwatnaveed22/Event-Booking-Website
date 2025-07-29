const events = [
  {
    id: 1,
    title: "Webinar: Future of AI",
    description: "An introductory webinar on new technologies and the impact of Artificial Intelligence on society.",
    date: "July 25, 2025",
    time: "10:00 AM PST",
    location: "Online",
    category: "Tech", // Changed from Webinar to Tech
    imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Placeholder image
  },
  {
    id: 2,
    title: "Creative Thinking Workshop",
    description: "A hands-on workshop designed to unlock your creative potential and problem-solving skills.",
    date: "July 5, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Library, GIFT University",
    category: "Art", // Changed from Workshop to Art
    imageUrl: "https://plus.unsplash.com/premium_photo-1661326274569-dd8337c5e6cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D", // Placeholder image
  },
  {
    id: 3,
    title: "Orientation Week 2025",
    description: "Welcome week for new students, featuring campus tours, introductory sessions, and social events.",
    date: "July 10, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Seminar Hall, GIFT University",
    category: "Orientation",
    imageUrl: "https://images.unsplash.com/photo-1563477709790-27c59ddaa002?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVhdHVyaW5nJTIwY2FtcHVzJTIwdG91cnMlMkMlMjBpbnRyb2R1Y3RvcnklMjBzZXNzaW9ucyUyQ3xlbnwwfHwwfHx8MA%3D%3D", // Placeholder image
  },
  {
    id: 4,
    title: "Tech Networking Mixer",
    description: "Connect with professionals and industry leaders in the technology sector. Expand your network!",
    date: "August 20, 2025",
    time: "3:30 PM - 6:00 PM",
    location: "FYP Lab, GIFT University",
    category: "Tech", // Changed from Networking to Tech
    imageUrl: "https://plus.unsplash.com/premium_photo-1661277712617-1e46eac647e8?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder image
  },
  {
    id: 5,
    title: "Annual Science Fair",
    description: "Showcasing innovative projects and scientific discoveries by students and researchers.",
    date: "September 15, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "University Auditorium",
    category: "Exhibition",
    imageUrl: "https://plus.unsplash.com/premium_photo-1663091766514-728823a86591?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U2hvd2Nhc2luZyUyMGlubm92YXRpdmUlMjBwcm9qZWN0cyUyMGFuZCUyMHNjaWVudGlmaWMlMjBkaXNjb3ZlcmllcyUyMGJ5JTIwc3R1ZGVudHMlMjBhbmQlMjByZXNlYXJjaGVycy58ZW58MHx8MHx8fDA%3D", // Placeholder image
  },
  {
    id: 6,
    title: "Startup Pitch Competition",
    description: "Witness aspiring entrepreneurs present their groundbreaking ideas to a panel of investors.",
    date: "October 5, 2025",
    time: "1:00 PM - 5:00 PM",
    location: "Innovation Hub",
    category: "Entrepreneurship", // Changed from Competition to Entrepreneurship
    imageUrl: "https://media.istockphoto.com/id/1654535352/photo/asian-entrepreneur-explaining-demonstrate-to-business-conference-participants-on-vr-google.jpg?s=612x612&w=0&k=20&c=B30YA67u2RLVlj1RwD-PHtYFe0SAOriVYf0UbIBAYvg=", // Placeholder image
  },
  {
    id: 7,
    title: "Digital Marketing Summit",
    description: "A two-day conference on the latest trends and strategies in digital marketing.",
    date: "November 10-11, 2025",
    time: "9:00 AM - 5:00 PM Daily",
    location: "Grand Convention Center",
    category: "Business", // Changed from Conference to Business
    imageUrl: "https://plus.unsplash.com/premium_photo-1661425715124-310ec1b49b8a?q=80&w=1582&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Placeholder image
  },



  {
    id: 11,
    title: "Web Development Bootcamp",
    description: "An intensive bootcamp covering modern web development technologies from front-end to back-end.",
    date: "August 1-5, 2025",
    time: "9:00 AM - 5:00 PM Daily",
    location: "Online",
    category: "Tech",
    imageUrl: "https://plus.unsplash.com/premium_photo-1663040543387-cb7c78c4f012?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V2ViJTIwRGV2ZWxvcG1lbnQlMjBCb290Y2FtcHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 12,
    title: "Modern Art Symposium",
    description: "A discussion on contemporary art movements and their influence on global culture.",
    date: "September 10, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "City Art Museum",
    category: "Art",
    imageUrl: "https://media.istockphoto.com/id/524904212/photo/concept-of-communication.webp?a=1&b=1&s=612x612&w=0&k=20&c=8Nv3f6QBVYtZL3azI_GSwsIJ6P--B-MvJBN0gFQcxYE=",
  },
  {
    id: 13,
    title: "Small Business Growth Strategies",
    description: "Workshop focused on effective strategies for scaling small businesses in a competitive market.",
    date: "October 12, 2025",
    time: "9:00 AM - 1:00 PM",
    location: "Chamber of Commerce",
    category: "Business",
    imageUrl: "https://media.istockphoto.com/id/518595670/photo/working-group-analyzing-reports.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZIeXEKbUhEwyUcwE-Gejz-1FI_FSgS0pyuo042SkxtQ=",
  },
 
 
  {
    id: 16,
    title: "AI in Healthcare Conference",
    description: "Exploring the latest advancements and applications of Artificial Intelligence in the healthcare industry.",
    date: "January 15-16, 2026",
    time: "9:00 AM - 5:00 PM Daily",
    location: "Medical Research Institute",
    category: "Tech",
    imageUrl: "https://media.istockphoto.com/id/1770654774/photo/lecture-global-business.webp?a=1&b=1&s=612x612&w=0&k=20&c=sDb5gYvPLuv7BRAdrjUljHtQ3jRjU6ZIlw2jvloKH7U=",
  },
 

 
  {
    id: 20,
    title: "Innovation Challenge 2026",
    description: "A hackathon-style event challenging participants to develop innovative solutions to real-world problems.",
    date: "May 5-7, 2026",
    time: "All Day",
    location: "Tech Incubator Space",
    category: "Entrepreneurship",
    imageUrl: "https://media.istockphoto.com/id/2205319979/photo/business-growth-and-success-strategy-with-a-businessman-using-a-digital-analytics-interface.webp?a=1&b=1&s=612x612&w=0&k=20&c=34x_xrG6uWZP15ItefF7gbkvOL1EFuuq4kh2tdPHCUo=",
  },
];

export default events;
